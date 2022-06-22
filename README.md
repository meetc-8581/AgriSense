# AgriSense

Agriculture automation and monitoring system.

## Introduction

Technology is revolutionary. Agriculture is facing new major challenges today. This project with the
help of automated sensors and back-end Node.js server will provide a hard working farmer with a tool
to automate many aspects of farming. This is will ease the burden and help assure lesser losses and
greater overall production in a certain farm. Agricultural technology and exactness farming, currently
additionally termed digital agriculture, have arisen as new scientific fields that use information intense
approaches to drive agricultural productivity whereas minimizing its environmental impact. It’s time to
bring technologies like computer science, Machine Learning and Internet Of Things(IOT) to
agriculture additionally. Consider a scenario where a farmer is struggling to keep the profits up
because the production is suffering from lack of knowledge about weather and its unpredictability. The
project will help the farmer to bring the probability of failure to the minimum by optimizing every
aspect of agricultural environment.

## Functions of System.

### Use – Case:

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Use-case%20Diagram.png" width="600" ></img>

In software and systems engineering, a use case is a list of steps, typically defining interactions between actor and a system, to achieve a goal.
The actor can be a human, an external system, or time.
In systems engineering, use cases are used at a higher level than within software

### Sequence Diagram.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Sequence.png" width="600"></img>

The well-known Message Sequence Chart technique has been incorporated into the Unified Modelling Language (UML) diagram under the name of Sequence Diagram.
A sequence diagram shows, as parallel vertical lines, different processes or objects that live simultaneously, and, as horizontal arrows, the messages exchanged between them, in the order in which they occur.

### E-R diagram

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/E-R%20Diagram.png" width="600"></img>

### System Activity Diagram

#### Probe Activity Diagram

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Probe%20Activity%20Diagram.png" width="600"></img>

#### Server Activity Diagram

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Server%20Activity%20Diagram.png" width="600"></img>

### Data Flow Diagram

#### DFD Level-0

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/DFD%20Level-0%20Diagram.png" width="400"></img>

#### DFD Level-1

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/DFD%20Level-1%20Diagram.png" width="500"></img>

#### DFD Level-2

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/DFD%20Level-2%20Diagram.png" width="600"></img>

## Selection of Hardware and Justification

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Arduino%20Nano.jpg" width="300"></img>

Arduino Nano is a small, compatible, flexible Microcontroller board. It is based on
ATmega328p. Arduino Nano is simply a smaller version of Arduino UNO, thus both has
almost same functionalities. It has an operating voltage of 5V, however, the input voltage can
vary from 7 to 12V.Arduino Nano Pin-out contains 14 digital pins, 8 Analogue Pins, 2 Reset
Pins & 6 Power Pins. Each of these Digital & Analogue Pins are assigned with multiple
functions but their main function is to be configured as input or output.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Node%20MCU.jpg" width="300"></img>

Node MCU is a low cost open source development platform with built in Wi-Fi compatibility. It is capable of several digital and analogue input operations. It has also the capability of
working as a Wi-Fi hotspot as well as client. It can also be used to connect to a server.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/LoRa%20Module.jpg" width="300"></img>

LoRa Modules (short for long range) is a spread spectrum modulation technique derived from chirp spread spectrum (CSS) technology. LoRa devices and wireless radio frequency
technology is a long range, low power wireless platform that has become the de facto
technology for Internet of Things (IOT) networks worldwide. LoRa devices and the open LoRa WAN® protocol enable smart IOT applications that solve some of the biggest challenges facing our planet: energy management, natural resource reduction, pollution control, infrastructure
efficiency, disaster prevention, and more.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/DHT11%20Sensor.jpg" width="300"></img>

DHT11 Sensor

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/DS18B20%20Probe%20Sensor.jpg" width="300"></img>

DS18B20 Sensor

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Capacitive%20soil%20moisture%20sensor%20V2..jpg" width="300"></img>

Capacitive soil moisture sensor V2.0

## System Implementation

### Implementation

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/System%20implementation.png" width="900"></img>
The figure above shows the diagram of implementation of the system

### Sensor Implementation

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Probe%20Buried%20Back.png" width="700"></img>
The Figures above illustrates the Housing in which all the sensors will be mounted. This housing is used to protect the sensors form weather and extreme climate.This probe will be buried in to the ground so as to collect moisture and temperature data
from multiple levels in the soil.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Probe%20Full%20Front.png" width="700"></img>
The figure above shows the probe body with the LoRa antenna nd the capacitive pads on the cylindrical wall of the probe.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Probe%20Neck.png" width="700"></img>
The figure above shows the probe’s open able neck which can be used to troubleshoot problems, change faulty sensors, change faulty components, and change battery if needed.

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Probe%20Front%20Close-up.png" width="700"></img>
The above figure illustrates the solar panel and rain sensor fitted on the surface of the probe to sense rain and recharge lithium-ion battery inside the probe which is used to power the probe.

## Screen shots and User manual

### Home Page

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Home%20Page.png" width="900"></img>

### Register Page

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Register%20Page.png" width="900"></img>

### Login Page

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Login%20Page.png" width="900"></img>

### Add Farm Page

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Add%20Farm%20Page.png" width="900"></img>

### Dashboard

<img src="https://github.com/meetc-8581/AgriSense/blob/master/Images/Dashboard.png" width="900"></img>
