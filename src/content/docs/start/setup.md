---
title: Cadence Software Setup
description: The first steps to accessing Cadence EDA tools
---

This page will walk you through all the steps necessary to access Cadence's software in whichever way works best for you. It'll guide you step-by-step through creating the necessary accounts, downloading the right software, accessing software remotely, and getting access to training courses on Cadence's Academic Network.

## Cadence Academic Network

### Creating an Account

To start, you'll want to go to the [CCIT page for Cadence](https://ccit.clemson.edu/services/software-hardware/software/cadence/). Here, complete the form linked under "Request a Cadence License". This will begin the process for CCIT to work with Cadence in creating you an account with access to the software downloads and training courses that's needed to work with the Cadence software.

Since the Cadence University Program partnership was rolled out to Clemson at the beginning of the Spring 2023 semester, it's possible that an account has already been created for your username, or that you created one yourself when emails were initially sent out regarding the partnership in January of 2023. It may be beneficial to attempt to login to the Cadence Support site or create an account there using your Clemson email address before requesting access on the CCIT page.

<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/reqform.png" alt="CCIT Request Form">
</div>

On the request form, put Dr. Tao Wei's name and contact in as the information for faculty advisior. Additionally, make sure to specify the OrCAD and Allegro software, and to check the box to request access to the online education and training resources.

It may take up to two weeks for the request to be processed, but we'll try to make sure that you get a response within a day or two.

Once your account has been set up, you'll receive an email from someone at Cadence informing you that the signup process has been started and informing you of your login email address (which will be your Clemson email address). Additionally, you'll get an automated email from Cadence letting you know that your account has been registered. This email will provide you with a temporary password for your account. Please login with your Clemson email and this password immediately and change your password to something new. Should you not receive the expected response within one week of submitting the form, please feel free to contact [CCIT](https://ccit.clemson.edu/services/software-hardware/software/cadence/) for assistance. 

Now, you should be able to login and access the Cadence Support home page. This is the site that we'll be using to access the software downloads and the training courses.

<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/academicnetwork.png" alt="Cadence Homepage">
</div>

### Training Courses

The first step towards gaining training experience with Cadence's tools is figuring out what your goals are and what kind of tools you'd actually like to work with. Take a look at Cadence's [Learning Maps](https://www.cadence.com/content/dam/cadence-www/global/en_US/documents/training/learning-maps.pdf) to get an idea of what paths are available for you to explore.

For circuit and PCB design, the best place to start is on the PCB Design and Analysis page. The Logic Design and the PCB Design paths are both great for getting experience with general circuit and PCB design skills and techniques, often with the Allegro Design Entry Using OrCAD Capture and the Allegro PCB Editor Basic Techniques courses as a starting point.

The next step is to add training courses to your training dashboard so that you can begin working through them. The easiest way to do this is from the Learning Map document itself. Each course should be hyperlinked so that if you click on its name, it'll redirect you to the Cadence page for that course. From here, you can log in to your Cadence account and add the course. Choose "Online Course", and then select "Enroll" next to the number of the software release which you are using (22.1 for OrCAD and Allegro).

To access your training dashboard, go back to the Cadence Support home page, then select Learning > Training Dashboard from the top banner menu. Your training dashboard will show you all of the courses you are currently enrolled in, and will allow you to select a course to go to its page and resume your training.

From the Learning tab on the Cadence Support page, you can also select Online Courses or Training Catalog to go to a page where you can more easily search for and enroll into courses.

Once you have some courses added to your training dashboard, you're ready to get started with your training! Also, feel free to explore this Learning section of the Cadence Support site more, as you can find different tools that will help you track your progress in your courses, view any badges you've received, and look at your training stats for different courses.

Once you've found a training course that you'd like to start, just click on the course's icon on your training dashboard. This should open up the course's page, where you can view your progress in completing the different course materials, and it should also open up a pop-up window for the course's training modules. If this is the first time you're beginning a Cadence training course, you will have to complete a license agreement. Additionally, if it's your first time starting a specific course, it may take you to a page containing information about the course, where you can select "Start Course" to begin working on the training modules.

All of the course's content is in the learning modules. Here's where you'll have your lesson videos, demos, and lab assignments for learning and practicing with the different Cadence tools. One thing that is very important is to scroll down to the bottom of the first module, usually titled Module 01: About this Course, and click on the "Database Download" button. This will scroll down to another page with different download buttons. Find and click the "Lab Database" button to download all of the lab materials that you'll need for the course. This will download a .zip file containing the demo files and directories you'll be using to create designs for the course. Open up File Explorer on your computer and go to Downloads. Right click on the .zip folder which you just downloaded and click "Extract All...", and then choose a directory to extract the files to. I recommend saving them into the Cadence directory that holds your Cadence software downloads, and then in a new folder in there titled with the name of the course. Hit "Extract" and then wait for your files to extract, which may take a minute. 



## Software Access

### Cisco AnyConnect

The first software you'll want to install is the Cisco AnyConnect VPN. This will allow you to remotely log on to the Clemson network, which is necessary to access the license server for Cadence software when you're not physically on campus. The installation for this software is located on the [CCIT page](https://ccit.clemson.edu/services/network-phones-cable/network/vpn/). The link provided on the CCIT page will redirect you to the Clemson CUVPN site. You'll need to log in with your Clemson credentials and complete a two-factor authentication. Upon login, you should see the following page.

Expand the "Instructions" section to view all the steps for installing the VPN, then hit "Download for Windows" and begin the installation process. Once the software is done installing, launch the Cisco AnyConnect app. You'll want to connect to "cuvpn.clemson.edu". You'll be prompted to log in - use your Clemson username, password, and then type "push" in the third field in order to get the two-factor authentication sent to your Duo app.


<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/citrix.jpg" alt="Cisco VPN">
</div>

### OrCAD and Allegro

### Remote Access using CUApps

If you're not sure that your computer meets the specifications for Cadence's software or if you don't want to have to install the apps onto your harddrive, you can also access Cadence's OrCAD/Allegro Capture and PCB Editor softwares remotely using CUapps. CUapps gives you a virtual connection to the software running off of one of Clemson's computers, making it so that your own computer doesn't have to have the software installed or running. Be aware, however, that using the software may be a bit slower while using CUapps due to latency in the connection between your machine and Clemson's machine.

To use CUapps, you can either download the Citrix Workspace desktop application by following the linked CCIT instructions, or you can access CUapps online in your web browser. While in CUapps, click the "Apps" icon at the top of the window and then scroll down to find the app you wish to use. From the Cadence suite, you'll have access to Capture CIS 2022, which is used primarily for schematic and circuit design, Allegro PCB Editor, which is used for printed circuit board design, as well as the Cadence Help 2022 and the Cadence OrCAD and Allegro Tutorials 2022 which can be used for troubleshooting and basic help using the apps.

<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/CapCUAPP.jpg" alt="Capture in CUApps">
</div>
<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/APEAPP.jpg" alt="Allegro in CUApps">
</div>

### Using the Palmetto Cluster
Some Cadence software, such as Virtuoso and Innovus, are Linux-based applications. Clemson has installed these softwares onto the Palmetto Cluster high-powered computing machine so that they can be accessed remotely and can utilize the full power of this HPC machine. To use these applications, you'll have to setup an account for the Palmetto Cluster.

#### Account Setup
As of Fall 2024, the procedure for gaining access to the Palmetto Cluster has been revised. Individual students are no longer able to request access to cluster allocations, and must be added by a faculty sponsor. For the time being, if you wish to access the Palmetto Cluster then please contact your faculty advisor or Dr. Tao Wei (twei2@clemson.edu) with regards to sponsorship. If you are accessing Linux-based tools for a course, check with your teacher to see if you are given access for the course. For more information, see [this website](https://docs.rcd.clemson.edu/palmetto/accounts/setup/).

<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/PCSetup.jpg" alt="Palmetto Cluster Homepage">
</div>

It typically takes some time processed, so you won't have access to Palmetto right away after submitting the form. Continue to check your email frequently for confirmation and updates, and I recommend attempting to access the Palmetto OnDemand site to see if your account has been set up, as sometimes your account might be given access before you get a confirmation email. Note that since the Palmetto Cluster machine isn't set up on Clemson's campus network, you'll have to complete a Duo authentication whenever you want to access it - even if you're on the CUVPN or Clemson campus network. More comprehensive information on getting started with the Palmetto Cluster is located on their documentation site. 

I highly suggest completing an onboarding training session to get comfortable with using Palmetto before moving forward, and it's a great idea to read through the documentation site to better understand what Palmetto is, how it works, and how to use it properly.

<div style="display: flex; justify-content: center;">
  <img src="/src/assets/getstarted/PCMOTD.jpg" alt="MOTD">
</div>

#### Using Palmetto

For most uses, the Palmetto cluster is accessed with a command line interface or different programming IDEs, but we need a graphical interface so that we can run our specific Cadence applications. There are a couple ways to do this, but we're going to focus on the method using the Palmetto Desktop, since it's the most accessible and easiest to use and configure. To get some more in-depth information about the different ways to access graphical software on Palmetto, you can read the documentation here.

To use the Palmetto Desktop, all you have to do is go to the Palmetto OnDemand site, click "Interactive Apps", and select the "Palmetto Desktop" option. For more information on Palmetto OnDemand, you can read the documentation here. More in-depth information on the Palmetto Desktop is also located on the Palmetto Documentation site here.

Configure the Palmetto Desktop using all the defaults, but make sure to change "Number of Hours" to the amount of time that you anticipate to be using the application for during this particular session.

#### Accessing Cadence Applications
Once you're in the Palmetto Desktop, open up a terminal. From here, you can type "module load cadence/[software name]" to load in the required software. To view the available modules, enter "module av" into the command prompt. Once loaded, the software can be launched by entering the appropriate software command into the terminal (be that "stratus", "virtuoso", etc...). Additional commands can be viewed with "module".

To give a specific example, the Virtuoso software (a popular option) is loaded using "module load cadence/IC/618", and then launched with "virtuoso &".

Many of the training modules for the Linux-based software contain default definitions to library paths which do not exist. This is due to the setup of the Palmetto Cluster, and can be fixed by redefining your library paths on a local level to the location of the Cadence folder: "/software/commercial/cadence/".



For more information, check out Cadence's training courses on the Virtuoso, Genus, Innovus, Xcelium, Sigrity, and Stratus software for the Linux operating system.