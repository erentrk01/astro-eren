---
title: FloraVision
publishDate: 2019-10-02 00:00:00
img: /assets/floravis.png
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
description: |
  Introducing our Smart Web AR indoor gardening system, underway since September 2023 and set to conclude in May 2024. 🌱
tags:
  - AWS CDK
  - Serverless Node.js TypeScript
  - Cognito
  - Websocket Api
  - Rest Api
 
---


Web-AR Smart Indoor Gardening System provides a seamless urban gardening experience through an easy-to-set-up, low-cost hardware kit. Featuring an IOT device with battery and sensors, this kit enables the device camera to become a portal to comprehensive statistics and visually engaging representations during plant scanning, thanks to Augmented Reality. The system adeptly monitors and predicts anomalies and schedules tasks based on environmental variables, such as soil moisture, light density, and air quality. Also, users can remotely receive updates on anomalies and the health status of their plants, ensuring informed and proactive care.


> Explore our repos and collaborations on GitHub:
[FloraVision](https://github.com/Smart-Indoor-Gardening-System)

### Senior Project Team

Meet our exceptional team members:
- **Me, Eren Tarak**
  - *Role:* Full Stack Developer
- **[Mert Köroğlu](https://www.linkedin.com/in/mertkoroglu1)**
  - *Role:* Embedded Developer, Scrum Master

- **[Talha Rehman Abid](https://www.linkedin.com/in/talha-rehman-abid-b46900214)**
  - *Role:* Data Scientist

- **[Eray Altay](https://www.linkedin.com/in/eray-altay)**
  - *Role:* Data Analyst & UI/UX Designer

- **[Dr. Duygu Albayrak](https://www.ctis.bilkent.edu.tr/ctis_singleStaff.php?ID=5)**
  - *Role:* Supervisor


#### Abbreviations

- **AR**: Augmented Reality
- **AWS**: Amazon Web Services
- **EER**: Enhanced Entity-Relationship
- **FVF**: FloraVision Functional Requirement
- **FVN**: FloraVision Non-Functional Requirement
- **HTTP**: Hypertext Transfer Protocol
- **IOT**: Internet of Things
- **JSON**: JavaScript Object Notation
- **MQTT**: Message Queuing Telemetry Transport
- **SDK**: Software Development Kit
- **SNS**: Simple Notification Service
- **SRS**: Software Requirements Specification
- **TLS**: Transport Layer Security


> 🚀 Dive into the Full Documents!

Hey there, curious minds! Take a peek behind the scenes! We dedicated a whopping 4 months to the epic adventure known as the project planning phase. Ready to embark on this journey? Check out the links below for the full scoop!


[Link to the Initial Plan](https://docs.google.com/document/d/1jrv-yUL7sOOCul-YSKyENGfGUROOrncH/edit?usp=sharing&ouid=114574734954182250027&rtpof=true&sd=true)

[Link to the SRS](https://docs.google.com/document/d/1Z9Z15FCERAaoUXQ_tigFh14Z0Gng5NOn/edit?usp=sharing)

[Link to the SPMP](https://docs.google.com/document/d/1NGmEOjiEiBVbnBcnRWDbcoINQJsbj-15/edit?usp=sharing&ouid=114574734954182250027&rtpof=true&sd=true)

[Link to the SDD](https://docs.google.com/document/d/1FmKYtvQozZVFSSWiiCcwEQfP2XTA_nQ9/edit?usp=sharing&ouid=114574734954182250027&rtpof=true&sd=true)



### Scope

In defining the scope, we outline the products of our system, their functionalities, and benefits.

#### Products of FloraVision

- Hardware Product
- External Dynamic Wi-Fi Configuration Tool
- AWS Lambda
- Data Storage System
- Cloud Notification System
- Authentication Product
- Web Application
- AR Product

#### Functionality Breakdown

##### Hardware Product:
- Reads light, soil moisture, temperature, and air quality sensor data every 5 seconds.
- Sends data in JSON format to AWS IoT Core.
- Connects to Wi-Fi using ESP8266 Wi-Fi module.

##### External Dynamic Wi-Fi Configuration Tool:
- Connects hardware device to Wi-Fi via WifiManager web application.

##### AWS Lambda:
- Processes incoming sensor data.

##### Data Storage System:
- Saves data into DynamoDB for real-time visualization.

##### Cloud Notification System:
- Utilizes AWS SNS for cloud-based notifications.
- Lambda functions configured for publishing relevant notification messages.

##### Authentication Product:
- Utilizes AWS Cognito for web authentication.
- Supports authentication via Google, Facebook, or email/password.
- Implements two-step verification for enhanced device user identity security.

##### Web Application:
- Provides real-time environmental metrics from hardware sensors.
- Displays detailed health and growth analysis charts.
- Primary user engagement platform.

##### AR Product:
- Scans hardware device QR codes to display plant metrics via device camera.
- Accessible through the Web Application.

#### Major Requirements

Our major requirements include:
- Reading data from sensors using hardware kit (FVF-3-2).
- Sending data to AWS for health and growth analysis (FVF-3-3).
- Displaying data in the web application dashboard (FVF-7-8).
- Visualizing data using AR charts on camera (FVF-9-4).




####  Functional requirements
In this section, we listed the requirements that need to be satisfied in our system. These requirements include parts from our hardware, web application, AR, and data analysis sections of our product. In the first part, we displayed the requirements as test format and in the second part we displayed them using Use-Case diagrams and descriptions to exemplify in a pictural format. From Figure 1 to Figure 6 we provided our use case diagrams. From Table 1 to Table 22 we provided the use case descriptions for the given diagrams.

##### Hardware
1. **(FVF-1-1)** The hardware kit shall use Arduino Nano as a microcontroller.
2. **(FVF-1-2)** The hardware kit shall use ESP8266 Wi-Fi module to connect to Wi-Fi.
3. **(FVF-1-3)** The hardware kit shall use MQ-2 Gas/Smoke sensor to detect CO, CO2 to detect anomalies in the air quality.
4. **(FVF-1-4)** The hardware kit shall be connected to power using batteries.
5. **(FVF-1-5)** The hardware kit shall use the DHT11 Temperature/Humidity sensor.
6. **(FVF-1-6)** The hardware kit shall use a light-sensitive resistor to detect the presence of light and its intensity.
7. **(FVF-1-7)** The hardware uses a soil moisture sensor to detect the plant’s soil moisture.
8. **(FVF-1-8)** The system shall let users power off the device.
9. **(FVF-1-9)** The system shall let users power on the device.

##### Sensor Data Reading
10. **(FVF-2-1)** The hardware part of the system shall read light sensor data through the A1 port on Arduino Nano.
11. **(FVF-2-2)** The hardware part of the system shall read humidity/temperature sensor data through the digital 9 port on Arduino Nano.
12. **(FVF-2-3)** The hardware part of the system shall read soil moisture sensor data through the A3 port on Arduino Nano.
13. **(FVF-2-3)** The hardware part of the system shall read air quality sensor data through the A2 port on Arduino Nano.

##### Data Transmission
14. **(FVF-3-1)** The hardware part of the system shall connect to Wi-Fi through digital ports on Arduino Nano. (ref. (FVF-1-6) [1])
15. **(FVF-3-2)** The hardware part of the system shall create a JSON format sensor data every 5 seconds.
16. **(FVF-3-3)** The hardware part of the system shall send sensor data to AWS IoT core managed message broker service via MQTT. (ref. (FVF-1-5) [1])
17. **(FVF-3-4)** The hardware part of the system shall turn on/off if the button is pressed for 3 seconds.
18. **(FVF-3-5)** The hardware part of the system shall detect Wi-Fi if a button is pressed and released.
19. **(FVF-3-6)** The system shall let users connect to Wi-Fi through their phone dynamically using the WiFiManager library.

##### Hardware-web Integration
20. **(FVF-4-1)** The web application shall connect to hardware kits through the devices tab.
21. **(FVF-4-2)** The web application shall send the user to their plant’s insights if the hardware kit is pressed in the devices tab.
22. **(FVF-4-3)** The web application shall send a GET request to AWS every 5 seconds to refresh plant data.

##### Hardware Kit Authentication
23. **(FVF-5-1)** The user shall connect to hardware using the password and ID provided with the device.
24. **(FVF-5-2)** The system shall make the first connected user Root user.
25. **(FVF-5-3)** The system shall make every other user Normal user.

##### Web Authentication
26. **(FVF-6-1)** For the web application, the system shall implement user registration and login using AWS Cognito including Google, Facebook providers and email password authentication options.

##### Registration Page
27. **(FVF-6-2)** On the registration page, the system shall ask inputs regarding email, username, and password.
28. **(FVF-6-3)** On the registration page, the system shall give an error if the given email already exists in the AWS Cognito user pool.
29. **(FVF-6-4)** On the registration page if the user selected the email/password authentication, the system shall register the user if all the fields are entered regarding the rules of the registration.
30. **(FVF-6-5)** On the registration page if the user selected the email/password authentication, the system shall only accept passwords which contain at least one number, one symbol, one capital character and at least six characters.
31. **(FVF-6-6)** On the registration page if the user selected the email/password authentication, the system shall give an error if the password rules are not met after pressing the register button.

##### Login Page
32. **(FVF-6-6)** On the login page, if the user clicks on the login button, the system shall check the given email and password. (ref. (FVF-1-8) [1])
33. **(FVF-6-6)** On the login page, the system shall display a button called “sign up” at the bottom of the login page to navigate user to the registration page.
34. **(FVF-6-7)** In the login page the system shall give an option to recover existing user password if it's forgotten via a button called “forgot password”.
35. **(FVF-6-8)** In the login page the system shall send a confirmation code email to the user if the user clicked on the “forgot password” button. (ref. FVF-6-7).
36. **(FVF-6-9)** In the login page the system shall provide an input field asking for confirmation code when an email is sent to the user after they clicked on the “forgot password” button. (ref. FVF-6-7).
37. **(FVF-6-10)** In the login page the system shall navigate the user to a new password page if their code matches with the confirmation code in the email. (ref. FVF-6-7).
38. **(FVF-6-11)** In the login page the system shall navigate the user to the login page if their code does not match with the confirmation code in the email. (ref. FVF-6-7).
39. **(FVF-6-12)** In the login page the system shall check the new password in the new password page (ref. FVF-6-7).
40. **(FVF-6-13)** Web application shall keep the session of users to remember user credentials.

##### Failure Scenarios
41. **(FVF-6-14)** The system shall redirect the user to the login page if the user token expires.
42. **(FVF-6-15)** The system shall log out the user if the user clicks the log out button on the top navigation bar on the web application interface.
43. **(FVF-6-16)** If the login credentials do not match, the system will provide an error notification in the form of a text, indicating that either the password or email is incorrect.

##### Success Scenario
44. **(FVF-6-17)** Once the user is authenticated, the system shall enable the user to gain access to the system's other functionalities.

##### Hardware Setup on Web
45. **(FVF-7-1)** The system shall display the connected hardware devices on the devices page in the web application.
46. **(FVF-7-2)** The system shall display general statistics such as temperature, soil moisture, light density and CO2 density of the plant on the devices tab for each device.
47. **(FVF-7-3)** The system shall display a button to add new hardware devices to the application.
48. **(FVF-7-4)** The system shall enable the users to navigate to the selected device’s dashboard if they click on the device.
49. **(FVF-7-5)** The system shall enable the user to remove the selected device if they press on the “-” button.
50. **(FVF-7-6)** The system shall provide battery status of each connected device on the devices page on the web.

##### Dashboard
51. **(FVF-7-8)** The system shall display the selected device’s real-time sensor metrics including temperature, light density, soil moisture, humidity, and air quality on the “today” tab on the dashboard page. (ref. (FVF-1-7), (FVF-1-13) [1])
52. **(FVF-7-9)** The system shall display tabs at the top of the dashboard including daily, weekly, monthly, and yearly displaying options. (ref. (FVF-1-11) [1])
53. **(FVF-7-10)** The system shall display today’s charts about the sensor data from 00.00 to 23.59 right below the real-time data.
54. **(FVF-7-11)** The system shall display the plant species name as a link at the top of the dashboard to navigate the user to relevant plant species description and characteristics.
55. **(FVF-7-12)** The system shall enable users to customize their dashboard via an option menu consisting of checkboxes to select the charts out of weekly, monthly, and yearly options for displaying.
56. **(FVF-7-13)** The system shall navigate the user to a more detailed chart about the selected metric when the user clicks the chart.

##### On the detailed page of the selected metric
57. **(FVF-7-14)** The system shall display a mixed chart combining a line chart and bar plot.
58. **(FVF-7-15)** The system shall display the deviations from the plant's corresponding optimum environmental value tagged with labels such as high, moderate, low gaps from the optimum value.
59. **(FVF-7-16)** The system shall present the average value of the relevant metric on a daily, monthly, and yearly basis, offering users comprehensive insights into the overall trends and patterns.

##### Notifications
60. **(FVF-8-1)** The system shall have a notification user interface modal to enable the user to track notifications.
61. **(FVF-8-2)** If the user clicks on the notification bell icon at the right of the dashboard navigation at the top of the page, The system shall open a notification modal including only several latest notifications with their time such as 2 minutes ago.
62. **(FVF-8-3)** If the user clicks on the “see more” link at the bottom of the notification modal, The system shall navigate the user notifications page where all notifications are listed.
63. **(FVF-8-4)** The system shall enable the user to mark all notifications as read when the user clicks on a button called “mark all as read”.
64. **(FVF-8-5)** The system shall ensure that notifications are informative, concise, and relevant, providing users with a clear understanding of the event or update. (ref. (FVF-1-12), (FVF-1-16) [1])
65. **(FVF-8-6)** The system shall have real-time web push notifications enabled as the default communication method for notifying users. Additionally, users shall have the option to customize their notification preferences by adding email or SMS forms according to their choice.
66. **(FVF-8-7)** The system shall utilize AWS SNS (Simple Notification Service) to manage and deliver notifications efficiently. This service will be responsible for handling real-time web push notifications, emails, and SMS messages.

##### Augmented Reality
67. **(FVF-9-1)** The system shall utilize a marker-based augmented reality for real-time data visualization for the Chrome users.
68. **(FVF-9-2)** The system shall display a fixed positioned button on the dashboard page to enable the user to start the AR visualization.
69. **(FVF-9-3)** The System shall recognize predefined markers associated with environmental data points.
70. **(FVF-9-4)** Upon detecting these markers through the device's camera, the system shall overlay real-time environmental metrics, including light intensity, soil moisture, and temperature, onto the markers in the AR visualization.
71. **(FVF-9-5)** The system shall display AR visualization content as 2d charts and metrics along with related icons.
72. **(FVF-9-6)** The system shall support the visualization of historical environmental data in AR, allowing users to toggle between real-time and historical views.
73. **(FVF-9-7)** If the user device or browser does not support AR, the system shall display an alert dialog indicating that the user device does not support AR and inform the user regarding supported browsers along with their versions and supported devices when the user clicks on the augmented reality button.
74. **(FVF-9-8)** If the user scans another marker, the system shall discard the previous 2d charts.

##### Predictions Data Science and Analysis
75. **(FVF-10-1)** The system shall integrate a health prediction model, leveraging scientific threshold values of relevant species and machine learning algorithms. This model should generate short-term and medium-term predictions, forecasting potential health issues based on environmental conditions before they impact the plants. (ref. (FVF-1-1), (FVF-1-3) [1])

##### Root User Managing Devices
76. **(FVF-11-1)** The system shall enable root users to change device’s name.
77. **(FVF-11-2)** The system shall enable root users to change device’s password.

##### Root User Managing Users
78. **(FVF-11-3)** The system shall enable root users to remove other users.
79. **(FVF-11-4)** The system shall enable root users to make another one root user.




#### Non-functional Requirements

In this section, we provided non-functional requirements that the system will rely on. These non-functional requirements are divided into 7 groups: Usability, Performance, Software System Attributes, Constraints, Error Handling, and Other Requirements.

##### Usability requirements
- **(FVN-1-1)** The web application shall be compatible with major browsers (Chrome, Firefox, Safari) to provide a consistent experience across different platforms except the AR features.

##### Performance requirements
- **(FVN-2-1)** The system should handle a minimum of 10 simultaneous users. AWS Lambda, DynamoDB, and SNS are designed to scale horizontally to accommodate varying workloads.
- **(FVN-2-2)** The system shall hold the device's data history for at least 1 month.

##### Software System Attributes
a) **Reliability**
- **(FVN-3-1)** The system shall be reliable by providing health and growth insights about the plant using reliable academic sources for creating reliable algorithms.
- **(FVN-3-2)** The system shall not include mid and high priority level failures/defects at launch.
b) **Availability**
- **(FVN-4-1)** The system shall have real-time administration by sending notifications to system administrators when in the event of a system failure.
c) **Security**
- **(FVN-5-1)** The system shall log every system failure.
d) **Maintainability**
- We did not identify any maintainability-related non-functional requirements.
e) **Portability**
- **(FVN-6-1)** The web application shall enable users to log in from other devices that are compatible to use the web product.
- **(FVN-6-2)** The code for each hardware device shall be only for that device only. This is because every hardware device will have its own id for data.

##### Constraints
- **(FVN-7-1)** The product shall adhere to privacy laws and rules about data sharing, keeping, and handling.
- **(FVN-7-2)** The system shall only provide English as a language for all products.

##### Error Handling Requirements
- **(FVN-8-1)** If a user provides the wrong email or password while logging in, the system shall want the user.
- **(FVN-8-2)** If a user provides a non-existing or already in use email while registering, the system warns the user.
- **(FVN-8-3)** If a user provides a password with a non-required type, the system shall warn the user.
- **(FVN-8-4)** If the AWS Core receives an incorrectly formatted message from the hardware product, the AWS Core shall ignore the message and provide a log about the ignored message.
- **(FVN-8-5)** If a user tries to access unauthorized locations in the web application, the system shall warn and redirect the user to the login page.
- **(FVN-8-6)** If a user enters and provides two different passwords while registering, the system shall warn the user.

##### Other Non-Functional Requirements
There are no other non-functional requirements.
