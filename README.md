# Light-it challenge

This document explains how to run the project step by step

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) - version 16 or higher
- [npm](https://www.npmjs.com/) - usually comes with Node.js
- [Expo CLI](https://docs.expo.dev/get-started/installation/) - installed globally (`npm install -g expo-cli`)
- [Git](https://git-scm.com/) - for cloning this repository

## Steps to Run the Application

### Step 1: Clone the Repository

```bash
git clone https://github.com/EstebanGueicha/lightit-challenge-patient.git
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create and Configure .env File

Create a new file named .env in the root of your project and add the following content:

```bash
EXPO_PUBLIC_API_URL=mockapi.io
EXPO_PUBLIC_TOKEN=63bedcf7f5cfc0949b634fc8
EXPO_PUBLIC_CLOUD_NAME=duaace1ft
EXPO_PUBLIC_UPLOAD_PRESET=el6co0y7
```

### Step 4: Start the Application

```bash
npx expo start
```

This will open the Expo console in your browser. You can scan the QR code with the Expo Go app on your device or use an emulator.

### Step 5: Run on iOS/Android Emulator (Optional)

If you want to run the application on an emulator, make sure you have it installed and set up on your machine. Then, select the corresponding option from the Expo console.

## Design and Tools Documentation

### Design:

**Color Choice:**
For the interface, I chose a color palette based on blue and white tones. These colors are commonly associated with health and trust, which is relevant since the company I'm applying to focuses on the healthcare sector.

**Patient List Structure:**
The main requirement was to display a list of patients, so I decided to present it in a card format. Each card displays key information such as the avatar, name, and website. The website link is highlighted in a different color to indicate that it is clickable and redirects to the browser.

**Description Management:**
Since descriptions can vary in length, I limited the preview to two lines of text to maintain visual consistency in the cards. If the full description is desired, a "View More" button is included to expand the card and display all the content.

**Additional Features:**
I added a search bar and a filter to sort the list by creation date, as these are common and useful features in any app of this type. I also included a button to add new patients.

**Card and Modal Interaction:**
The modal can be opened by clicking anywhere on the card or by clicking the button to add a patient. It is a swipe-up modal that appears from the bottom of the screen, showing a form where fields can be edited or added, as well as changing the avatar. The save button is located at the bottom of the modal for user convenience. Additionally, a delete button was included as an extra feature.

**Notifications:**
Notifications are displayed at the top of the screen to be less intrusive and not disrupt the user experience.

### Technologies and Libraries:

- **@cloudinary/url-gen and cloudinary-react-native:** For uploading files to the cloud without the need for a backend.
- **@expo/vector-icons:** For using icons in the application.
- **@expo-google-fonts/manrope:** To use a font that aligns better with the health theme.
- **axios:** To handle HTTP requests to the API.
- **expo-blur:** To apply blur effects in modals, enhancing aesthetics and usability.
- **expo-font:** To load and use the selected font.
- **expo-image:** For better image handling, including error management.
- **expo-image-picker:** To allow image selection from the device gallery and use it as an avatar.
- **expo-linking:** To open external links in the device's browser.
- **expo-splash-screen:** To control the initial state of the application and improve the loading experience.
- **expo-status-bar:** To manage the system status bar, aligning the design with the user interface.
- **formik:** To efficiently manage form states.
- **react-native-safe-area-context:** To ensure content does not overlap with non-visible areas of the screen.
- **react-native-toast-message:** For advanced toast management, providing clear and non-intrusive visual notifications.
- **yup:** To validate form inputs in combination with Formik, ensuring that the data entered is correct and complete.


## Contact Information

For any inquiries or assistance, please contact to esteban.gueicha@gmail.com.





