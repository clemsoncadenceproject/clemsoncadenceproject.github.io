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

#### SimVision
1. To start the application, enter these options behind your files: -access +rwc -gui -64bit. -access +rwc is crucial because it will allow the simulation file to be read.

![SimVisionCommandline](/home/adayrit/ccpw/clemsoncadenceproject.github.io/src/assets/guide_assets/sv_guide_assets/SimVision1.png)

2. When you enter SimVision click on testflop to reveal the data options. Right click the block you want to view and select Send to Waveform Window.

![SimVisionWDesignBrowser](/home/adayrit/ccpw/clemsoncadenceproject.github.io/src/assets/guide_assets/sv_guide_assets/SimVision2.png)


