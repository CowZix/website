+++
title = "Capstone"
+++

# ECE 4440 Embedded System Design

## Overview

For my UVA Computer Engineering Capstone, me and my group created a gesture controlled robotic vehicle. This takes the classic remote control toy car and elevates the user’s experience by making the controls more intuitive and adding video and haptic feedback from the car. My role within the group was to write code to interface between two RPi Pico W microcontrollers as well as CAD design for enclosing the electronics.

## Car Design

The car has four 12V DC brushed motors along with four mecanum wheels, and each of the motor controllers is driving two of the mecanum wheels through Pico's commands. The car also has an analog camera on it so that the user can drive the car through a monitor with HDMI display. The car is  powered by a 9V battery that powers the control components and a 12V battery that powers the more power hungry motors.

## Glove Design

The glove takes in gyroscope data from an MPU6050 sensor placed on the glove on the back of the palm. A Raspberry Pi Pico W on the glove transmits the sensor information wirelessly using the Pico’s built in Bluetooth capabilities to the other Raspberry Pi Pico W on the car. The glove has a small vibration motor that vibrates with different frequencies based on the ultrasonic sensor’s object detection capabilities that is attached to the back of the car. This acts like a haptic feedback system for the user to get an idea regarding the car’s surroundings. The glove also has a hall effect sensor to it and users can use their fingers to trigger the hall effect to go into a different modes: orientation lock and unlock modes. In orientation lock mode, the car will spin turn and in orientation unlock mode, the car will strafe sideways. The glove is powered by a single 9V battery.

[Video](https://youtu.be/93CKXeN9mIw)
