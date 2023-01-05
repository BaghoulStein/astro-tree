---
title: Commands
description: Commands and their formatting in WPILib
layout: ../../../layouts/MainLayout.astro
---

**Commands** represent actions the robot can take. Commands run when scheduled, until they are interrupted or their end condition is met. Commands are represented in the command-based library by the Command interface

## The structure of a command.

Commands specify what the command will do in each of its possible states. This is done by overriding the ```initialize()```, ```execute()```, and ```end()``` methods. Additionally, a command must be able to tell the scheduler when (if ever) it has finished execution - this is done by overriding the ```isFinished()``` method. All of these methods are defaulted to reduce clutter in user code: ```initialize()```, ```execute()```, and ```end()``` are defaulted to simply do nothing, while ```isFinished()``` is defaulted to return false (resulting in a command that never finishes naturally, and will run until interrupted).

### Initialization

The ```initialize()``` method marks the command start, and is called exactly once per time a command is scheduled. The ```initialize()``` method should be used to place the command in a known starting state for execution. Command objects may be reused and scheduled multiple times, so any state or resources needed for the command’s functionality should be initialized or opened in ```initialize``` (which will be called at the start of each use) rather than the constructor (which is invoked only once on object allocation). It is also useful for performing tasks that only need to be performed once per time scheduled, such as setting motors to run at a constant speed or setting the state of a solenoid actuator.

### Execution

The ```execute()``` method is called repeatedly while the command is scheduled; this is when the scheduler’s ```run()``` method is called (this is generally done in the main robot periodic method, which runs every 20ms by default). The execute block should be used for any task that needs to be done continually while the command is scheduled, such as updating motor outputs to match joystick inputs, or using the output of a control loop.

### Ending

The ```end(bool interrupted)``` method is called once when the command ends, whether it finishes normally (i.e. ```isFinished()``` returned true) or it was interrupted (either by another command or by being explicitly canceled). The method argument specifies the manner in which the command ended; users can use this to differentiate the behavior of their command end accordingly. The end block should be used to “wrap up” command state in a neat way, such as setting motors back to zero or reverting a solenoid actuator to a “default” state. Any state or resources initialized in ```initialize()``` should be closed in ```end()```.

### Specifying end conditions

The ```isFinished()``` method is called repeatedly while the command is scheduled, whenever the scheduler’s ```run()``` method is called. As soon as it returns true, the command’s ```end()``` method is called and it ends. The ```isFinished()``` method is called after the ```execute()``` method, so the command will execute once on the same iteration that it ends.

## Command Properties

In addition to the four lifecycle methods described above, each ```Command``` also has three properties, defined by getter methods that should always return the same value with no side affects.

### getRequirements

Each command should declare any subsystems it controls as requirements. This backs the scheduler’s resource management mechanism, ensuring that no more than one command requires a given subsystem at the same time. This prevents situations such as two different pieces of code attempting to set the same motor controller to different output values.

Declaring requirements is done by overriding the getRequirements() method in the relevant command class, by calling addRequirements(), or by using the requirements vararg (Java) / initializer list (C++) parameter at the end of the parameter list of most command constructors and factories in the library:

```java
Commands.run(intake::activate, intake);
```
As a rule, command compositions require all subsystems their components require.

### runsWhenDisabled

The ```runsWhenDisabled()``` method returns a ```boolean```/```bool``` specifying whether the command may run when the robot is disabled. With the default of returning ```false```, the command will be canceled when the robot is disabled and attempts to schedule it will do nothing. Returning ```true``` will allow the command to run and be scheduled when the robot is disabled.

However! When the robot is disabled, PWM outputs are disabled and CAN motor controllers may not apply voltage, regardless of runsWhenDisabled!

his property can be set either by overriding the ```runsWhenDisabled()``` method in the relevant command class, or by using the ```ignoringDisable``` decorator:

```java
CommandBase mayRunDuringDisabled = Commands.run(() -> updateTelemetry()).ignoringDisable(true);
```

As a rule, command compositions may run when disabled if all their component commands set runsWhenDisabled as true.

### getInterruptionBehavior

The ```getInterruptionBehavior()``` method defines what happens if another command sharing a requirement is scheduled while this one is running. In the default behavior, ```kCancelSelf```, the current command will be canceled and the incoming command will be scheduled successfully. If ```kCancelIncoming``` is returned, the incoming command’s scheduling will be aborted and this command will continue running. Note that ```getInterruptionBehavior``` only affects resolution of requirement conflicts: all commands can be canceled, regardless of ```getInterruptionBehavior```.

Note! This was previously controlled by the ```interruptible``` parameter passed when scheduling a command, and is now a property of the command object.

This property can be set either by overriding the ```getInterruptionBehavior``` method in the relevant command class, or by using the *withInterruptBehavior()* decorator:

```java
CommandBase noninteruptible = Commands.run(intake::activate, intake).withInterruptBehavior(Command.InterruptBehavior.kCancelIncoming);
```

As a rule, command compositions are ```kCancelIncoming``` if all their components are ```kCancelIncoming``` as well.

## Example Commands

```java
import edu.wpi.first.wpilibj.templates.commandbased.subsystems.ExampleSubsystem;

import edu.wpi.first.wpilibj2.command.CommandBase;


/** An example command that uses an example subsystem. */

public class ExampleCommand extends CommandBase {

  @SuppressWarnings({"PMD.UnusedPrivateField", "PMD.SingularField"})

  private final ExampleSubsystem m_subsystem;


  /**

   * Creates a new ExampleCommand.

   *

   * @param subsystem The subsystem used by this command.

   */

  public ExampleCommand(ExampleSubsystem subsystem) {

    m_subsystem = subsystem;

    // Use addRequirements() here to declare subsystem dependencies.

    addRequirements(subsystem);

  }
```

```java
package edu.wpi.first.wpilibj.examples.hatchbottraditional.commands;


import edu.wpi.first.wpilibj.examples.hatchbottraditional.subsystems.HatchSubsystem;

import edu.wpi.first.wpilibj2.command.CommandBase;


/**

 * A simple command that grabs a hatch with the {@link HatchSubsystem}. Written explicitly for

 * pedagogical purposes. Actual code should inline a command this simple with {@link

 * edu.wpi.first.wpilibj2.command.InstantCommand}.

 */

public class GrabHatch extends CommandBase {

  // The subsystem the command runs on

  private final HatchSubsystem m_hatchSubsystem;


  public GrabHatch(HatchSubsystem subsystem) {

    m_hatchSubsystem = subsystem;

    addRequirements(m_hatchSubsystem);

  }


  @Override

  public void initialize() {

    m_hatchSubsystem.grabHatch();

  }


  @Override

  public boolean isFinished() {

    return true;

  }

}
```
Notice that the hatch subsystem used by the command is passed into the command through the command’s constructor. This is a pattern called dependency injection, and allows users to avoid declaring their subsystems as global variables. This is widely accepted as a best-practice - the reasoning behind this is discussed in a later section.

Notice also that the above command calls the subsystem method once from initialize, and then immediately ends (as ```isFinished()``` simply returns true). This is typical for commands that toggle the states of subsystems, and as such it would be more succinct to write this command using the factories described above.

What about a more complicated case? Below is a drive command, from the same example project:

```java
package edu.wpi.first.wpilibj.examples.hatchbottraditional.commands;


import edu.wpi.first.wpilibj.examples.hatchbottraditional.subsystems.DriveSubsystem;

import edu.wpi.first.wpilibj2.command.CommandBase;

import java.util.function.DoubleSupplier;


/**

 * A command to drive the robot with joystick input (passed in as {@link DoubleSupplier}s). Written

 * explicitly for pedagogical purposes - actual code should inline a command this simple with {@link

 * edu.wpi.first.wpilibj2.command.RunCommand}.

 */

public class DefaultDrive extends CommandBase {

  private final DriveSubsystem m_drive;

  private final DoubleSupplier m_forward;

  private final DoubleSupplier m_rotation;


  /**

   * Creates a new DefaultDrive.

   *

   * @param subsystem The drive subsystem this command wil run on.

   * @param forward The control input for driving forwards/backwards

   * @param rotation The control input for turning

   */

  public DefaultDrive(DriveSubsystem subsystem, DoubleSupplier forward, DoubleSupplier rotation) {

    m_drive = subsystem;

    m_forward = forward;

    m_rotation = rotation;

    addRequirements(m_drive);

  }


  @Override

  public void execute() {

    m_drive.arcadeDrive(m_forward.getAsDouble(), m_rotation.getAsDouble());

  }

}
```

and then usage:

```java
   // Configure default commands

    // Set the default drive command to split-stick arcade drive

    m_robotDrive.setDefaultCommand(

        // A split-stick arcade command, with forward/backward controlled by the left

        // hand, and turning controlled by the right.

        new DefaultDrive(

            m_robotDrive,

            () -> -m_driverController.getLeftY(),

            () -> -m_driverController.getRightX()));
```

Notice that this command does not override ```isFinished()```, and thus will never end; this is the norm for commands that are intended to be used as default commands. Once more, this command is rather simple and calls the subsystem method only from one place, and as such, could be more concisely written using factories:

```java
    // Configure default commands

    // Set the default drive command to split-stick arcade drive

    m_robotDrive.setDefaultCommand(

        // A split-stick arcade command, with forward/backward controlled by the left

        // hand, and turning controlled by the right.

        Commands.run(

            () ->

                m_robotDrive.arcadeDrive(

                    -m_driverController.getLeftY(), -m_driverController.getRightX()),

            m_robotDrive));
```