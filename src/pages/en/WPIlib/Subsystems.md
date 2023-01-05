---
title: Subsystems
description: Subsystems and their formatting in WPILib
layout: ../../../layouts/MainLayout.astro
---
Subsystems are the basic unit of robot organization in the command-based paradigm. A subsystem is an abstraction for a collection of robot hardware that operates together as a unit. Subsystems form an encapsulation for this hardware, “hiding” it from the rest of the robot code and restricting access to it except through the subsystem’s public methods. Restricting the access in this way provides a single convenient place for code that might otherwise be duplicated in multiple places (such as scaling motor outputs or checking limit switches) if the subsystem internals were exposed. It also allows changes to the specific details of how the subsystem works (the “implementation”) to be isolated from the rest of robot code, making it far easier to make substantial changes if/when the design constraints change.

Subsystems also serve as the backbone of the ```CommandScheduler```’s resource management system. Commands may declare resource requirements by specifying which subsystems they interact with; the scheduler will never concurrently schedule more than one command that requires a given subsystem. An attempt to schedule a command that requires a subsystem that is already-in-use will either interrupt the currently-running command or be ignored, based on the running command’s Interruption Behavior.

Subsystems can be associated with “default commands” that will be automatically scheduled when no other command is currently using the subsystem. This is useful for “background” actions such as controlling the robot drive, keeping an arm held at a setpoint, or stopping motors when the subsystem isn’t used. Similar functionality can be achieved in the subsystem’s ```periodic()``` method, which is run once per run of the scheduler; teams should try to be consistent within their codebase about which functionality is achieved through either of these methods. Subsystems are represented in the command-based library by the ```Subsystem``` interface.

## Creating a Subsystem

The recommended method to create a subsystem for most users is to subclass the abstract SubsystemBase class, as seen in the command-based template:

```java
package edu.wpi.first.wpilibj.examples.hatchbottraditional.subsystems;


import static edu.wpi.first.wpilibj.DoubleSolenoid.Value.kForward;

import static edu.wpi.first.wpilibj.DoubleSolenoid.Value.kReverse;


import edu.wpi.first.wpilibj.DoubleSolenoid;

import edu.wpi.first.wpilibj.PneumaticsModuleType;

import edu.wpi.first.wpilibj.examples.hatchbottraditional.Constants.HatchConstants;

import edu.wpi.first.wpilibj2.command.SubsystemBase;


/** A hatch mechanism actuated by a single {@link DoubleSolenoid}. */

public class HatchSubsystem extends SubsystemBase {

  private final DoubleSolenoid m_hatchSolenoid =

      new DoubleSolenoid(

          PneumaticsModuleType.CTREPCM,

          HatchConstants.kHatchSolenoidPorts[0],

          HatchConstants.kHatchSolenoidPorts[1]);


  /** Grabs the hatch. */

  public void grabHatch() {

    m_hatchSolenoid.set(kForward);

  }


  /** Releases the hatch. */

  public void releaseHatch() {

    m_hatchSolenoid.set(kReverse);

  }

}
```

This class contains a few convenience features on top of the basic ```Subsystem``` interface: it automatically calls the ```register()``` method in its constructor to register the subsystem with the scheduler (this is necessary for the ```periodic()``` method to be called when the scheduler runs), and also implements the ```Sendable``` interface so that it can be sent to the dashboard to display/log relevant status information.

Advanced users seeking more flexibility may simply create a class that implements the ```Subsystem``` interface.

Notice that the subsystem hides the presence of the DoubleSolenoid from outside code (it is declared ```private```), and instead publicly exposes two higher-level, descriptive robot actions: ```grabHatch()``` and ```releaseHatch()```. It is extremely important that “implementation details” such as the double solenoid be “hidden” in this manner; this ensures that code outside the subsystem will never cause the solenoid to be in an unexpected state. It also allows the user to change the implementation (for instance, a motor could be used instead of a pneumatic) without any of the code outside of the subsystem having to change with it.

## Periodic

Subsystems have a ```periodic``` method that is called once every scheduler iteration (usually, once every 20 ms). This method is typically used for telemetry and other periodic actions that do not interfere with whatever command is requiring the subsystem.

```java
  @Override

  public void periodic() {

    // Update the odometry in the periodic block

    m_odometry.update(

        Rotation2d.fromDegrees(getHeading()),

        m_leftEncoder.getDistance(),

        m_rightEncoder.getDistance());

    m_fieldSim.setRobotPose(getPose());

  }
```
There is also a ```simulationPeriodic()``` method that is similar to ```periodic()``` except that it is only run during Simulation and can be used to update the state of the robot.

## Default Command

“Default commands” are commands that run automatically whenever a subsystem is not being used by another command. This can be useful for “background” actions such as controlling the robot drive, or keeping an arm held at a setpoint.

Setting a default command for a subsystem is very easy; one simply calls ```CommandScheduler.getInstance().setDefaultCommand()```, or, more simply, the ```setDefaultCommand()``` method of the ```Subsystem``` interface:

```java
CommandScheduler.getInstance().setDefaultCommand(exampleSubsystem, exampleCommand);
```
```java
exampleSubsystem.setDefaultCommand(exampleCommand);
```