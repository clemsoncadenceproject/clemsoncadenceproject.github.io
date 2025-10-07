---
title: SystemVerilog For Design and Verification
description: Guide on Cadence SystemVerilog Badge Lab Modules
---

Walkthrough for the labs of Cadence's SystemVerilog For Design and Verification. Intended for Clemson University students in the Palmetto 2 Environment

By Alan Dayrit

## Modules 1,2,3: Introduction

Modules 1,2,3: These modules give an overview on SystemVerilog and mainly its differences from Verilog. It is highly recommended to take the Verilog badge first to familiarize yourself with HDL’s and coding at the RTL level.

## Module 4: Procedural Statements and Procedural Blocks

This module introduces some newly improved procedural statements and blocks that help with timing errors. The lab is fairly straightforward and has a reference in the sv_src file if you need any help.

## Module 5: Operators

This module informs you on the SystemVerilog operators that are for controlling procedural statements and blocks. The lab is easy to follow and remember the reference is in sv_src.

## Module 6: User-Defined Data Types and Structures

The module introduces some high level programming constructs such as enumerations and structures that makes code easier to create and read. This lab is a big step up from the previous two. Here are some tips: compile the package file first and separate your combinational and FSM functions.

## Module 7: Hierarchy and Connectivity

The module explains the different ways to name port connections and how to properly do it to avoid confusion. Following the table in the lab manual is the key to successfully implementing the ALU.

## Module 8: Static Arrays

The module is a short summary on the types of arrays and it’s system functions

## Module 9: Tasks and Functions

The module covers how to use tasks and functions to implement routines more efficiently and cleanly. The lab requires you to make a task and function. Make sure to use the port naming in Module 7 to ensure that the correct inputs and outputs are connected to the task.

## Module 10: Interfaces

This module explains interfaces which are helpful in connecting ports in a less verbose way and is reusable. During the modport section of the lab, make sure to add .modportname to your interface module for the mem and mem_test files to declare your modports.

## Module 11: Simple Verification Features

The module gives you some extra tools to assist in testbench writing such as forks, assertions, and string methods. The following modules will be more focused on verification and testbenches from here on out.

## Module 12: Clocking Blocks

This module gives insight on how to create more precise timing for your stimulus signal for your test bench. The lab is straightforward just make sure to use the constructs given to you in the videos. In addition, the lab requires the use of SimVision which is the GUI for viewing signals in which I will give a quick tutorial on how to use it for this lab.

### SimVision

1. To start the application, enter these options behind your files: **-access +rwc -gui -64bit. -access +rwc** is crucial because it will allow the simulation file to be read.

<!-- markdownlint-disable MD033 -->
<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/SimVision1.png" alt="SimVisionCommandline">
</p>

2. When you enter SimVision click on testflop to reveal the data options. Right click the block you want to view and select Send to Waveform Window.

<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/SimVision2.png" alt="SimVisionWDesignBrowser">
</p>

3. In the Waveform window, select the down arrow on the right of the play button and input how long you want the simulation to run for. After running the simulation, you can adjust the viewing by enlarging or constraining the timescale using the plus and minus symbols in the top right

<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/SimVision3.png" alt="SimVisionWaveForm">
</p>

## Module 13: Random Stimulus

This module gives you the rundown on the uses of random data in verification. Make sure to use randomize and randcase to properly randomize values. When using Xcelium, make sure to add -64bit after the modules because for some reason Xcelium will attempt to use the incorrect 32-bit library making the simulation not work.

## Module 14: Basic Classes

This section is an introduction to object oriented programming with classes. Make sure to pay very close attention to all the concepts in this module as they will all be used in this lengthy lab. In the lab, I found it most helpful to define the classes in a separate file and import them as a package (Refer to Module 10) in the test bench. This allows you to practice modularizing your code to be able to apply it to various testbenches and makes your code much less bloated with multiple modules.

## Module 15: Polymorphism and Virtuality

This module delves deeper into classes with polymorphism and virtual classes. This lab is fairly straightforward as long as your counterclass file from Module 14 is functioning. 

## Module 16: Class-Based Random Stimulus

This part is combining the random stimulus for the earlier module with class properties. This lab requires you to use your memory file from the previous labs, so make sure that those files work. I highly recommend using the package method for your classes like in Module 14 to declutter the amount of text on the testbench file.

## Module 17: Interfaces in Verification

This module covers virtual interfaces and how they enhance your testbenches. The lab is fairly challenging and makes sure to review the clocking block (Module 12) module. The downside of Virtual interfaces is that they can’t write to nets therefore can’t add stimuli. I used solution two from the module to fix this problem.

## Module 18: Covergroup Coverage

The module provides an explanation on covergroups and coverpoints to make sure that you verify all the different states or cases of your circuit. This module contains two labs and uses the IMC (Incisive Metrics Center) to view the circuit coverage. Both labs are similar and make sure to use the methods given to you in the module.

<p style="color: red;"><strong>Quick Note:</strong> Make sure that your Palmetto Desktop node has at least 4 GB of memory because IMC uses a lot of it.</p>

**How to start and use Cadence IMC (Incisive Metrics Center) for Lab 18:**

To use IMC, use the command **module load cadence/VMANAGER/2209** in the terminal

<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/IMC1.png" alt="IMC1">
</p>

<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/IM2.png" alt="IMC2">
</p>

<p align="center">
  <img src="/src/assets/guide_assets/sv_guide_assets/IM3.png" alt="IMC3">
</p>

<!-- markdownlint-enable MD033 -->

## Module 19: Queues and Dynamic and Associative Arrays (QDA)

The module covers the basics on three new array types that are helpful for modeling different data structures. The lab is straightforward as long as you follow the definitions for each array type. I recommend doing the queue array as a structure to practice using them more.

## Module 20: Introduction to Assertion-Based Verification (ABV)

This module provides an overview of verifying design behavior with assertions as opposed to HDL-based assertions. No lab in this module.

## Module 21: Introduction to SystemVerilog Assertions (SVA)

Taking assertions further, this module explains how to use assertions in SystemVerilog. This module has two labs which are straightforward. I recommend using method two for asserting properties (1.6). In addition, the labs require you to view the waveform, so I also recommend that you only send the assertion to the waveform window to minimize clutter.

## Module 22: Direct Programming Interface (DPI)

The module covers the interface between SystemVerilog and a foreign language such as C. Doing this allows engineers to reuse C code and algorithms, and to interface with environmental hardware/software. The lab is short but make sure to do some research on how the C functions work. Also, a const char* data type is equivalent to a string in SystemVerilog.

## Module 23: Interprocess Synchronization

This last module introduces you to some event synchronization methods such as the non-blocking event trigger, event sequences, mailboxes, and semaphores. This module has three short labs. Be sure to use the methods provided in the module to complete the labs.