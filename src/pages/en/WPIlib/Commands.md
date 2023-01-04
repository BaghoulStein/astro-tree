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