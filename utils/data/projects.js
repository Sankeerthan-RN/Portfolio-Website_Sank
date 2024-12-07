export const projects = [
    {
      id: 1,
      name: 'Smart Fit',
      summary: "Research project focusing on utilizing  computer vision and machine learning techniques to obtain accurate body measurements for personalized e-commerce sizing, simplifying data requirements and reducing errors and returns.",
      description: `
        <p class="mb-4">Research project focusing on utilizing  computer vision and machine learning techniques to obtain accurate body measurements for personalized e-commerce sizing, simplifying data requirements and reducing errors and returns.</p>
        <p class="font-bold mb-2 text-pink">Key Features:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">Comprehensive Measurement Approach:</span> Combined Keypoints Detection, pixel estimation, and 3D reconstruction to ensure accurate extraction of both linear and circular body measurements.</li>
          <li><span class=" text-green">Machine Learning for Personalized Recommendation:</span> Developed regression and classification models to predict shirt sizes with high accuracy tailored for multiple brands.</li>
          <li><span class=" text-green">Brand-Specific Size Prediction:</span> Unlike previous research that focused on generic size categories, Smart Fit incorporated a machine learning model that mapped body measurements to brand-specific size charts, enabling personalized clothing recommendations.</li>
          <li><span class=" text-green">Mobile Application Development:</span> Designed a user-friendly mobile app using Flutter, enabling real-time measurement and AR-based virtual fitting.</li>
        </ul>
        <p class="mt-4"><strong> Novelty: </strong>Smart Fit bridged the gap left by prior research by utilizing smartphone cameras instead of specialized hardware like Kinect, making it accessible for real-world applications while maintaining high measurement accuracy.</p>
        <p class="mt-4"><strong> Outcome: </strong>Achieved a comprehensive system with 73.4% accuracy in body segmentation and precise shirt size predictions, enhancing customer satisfaction and reducing returns in fashion and e-commerce.</p>
      `,
      tools: "TensorFlow, HMR, OpenCV, Mediapipe, DeeplabV3+, WebARonARKit, Flutter, Flask, Python",
      image: '/image/smartFit.png',
    },
    {
      id: 2,
      name: 'Automated Car Insurance',
      summary: "This project automates car damage detection, classification, and cost estimation, enhancing safety, accelerating claim processing, and improving customer convenience during critical situations.",
      description: `
        <p class="mb-4">This project automates car damage detection, classification, and cost estimation, enhancing safety, accelerating claim processing, and improving customer convenience during critical situations.</p>
        <p class="font-semibold mb-2 text-pink">Features:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">Multi-Stage Classification: : </span>Built a Convolutional Neural Netwotk model Validates the image as a car,Detects if the car has damage,classifies damage location (front, rear, or side),damage severity (minor, moderate,severe) and determines cost.</li>
          <li><span class=" text-green">Deep Learning Models for Enhanced Accuracy: </span> Utilizes advanced architectures like ResNet50, InceptionV3, VGG16, and VGG19 for accurate predictions.</li>
          <li><span class=" text-green">Responsive UI: </span> Enables users to effortlessly upload images and receive instant damage assessment results via a web interface built with Flask, enhancing customer satisfaction.</li>
        </ul>
        <p class="mt-4"><strong>Outcome:</strong> This is particularly impactful during times like the COVID-19 pandemic, ensuring safety and convenience. By reducing the need for in-person inspections, it ensures safety, accelerates claim processing, and enhances customer convenience during critical situations.</p>
      `,
      tools: " Tensor Flow,OpenCV, Firestore, Flask, Python",
      image: '/image/autoInsurance.png',
    },
    {
      id: 3,
      name: 'Socks Card  validation ',
      summary: "A freelance project developed for a sock production company to automate and streamline socks card label validation using deep learning and computer vision techniques",
      description: `
        <p class="mb-4">A freelance project developed for a sock production company to automate and streamline socks card label validation using deep learning and computer vision techniques.</p>
        <p class="font-semibold mb-2 text-pink">Achievements:</p>
        <ul class="list-disc list-inside space-y-4 text-gray-300">
          <li><span class=" text-green">High-Accuracy Object Detection:</span>  Designed an algorithm using YOLOv3 and the custom dataset to detect and isolate the socks card from the background..</li>
          <li><span class=" text-green">Template Matching :</span>  Identifies the position of features (text, images) in the test socks card by matching coordinates stored in the master socks card database.</li>
          <li><span class=" text-green">Feature Comparison:</span> Compares the images of corresponding features between the test and master socks cards using Mean Squared Error (MSE) to detect any discrepancies.</li>
           <li><span class=" text-green">Text Recognition :</span> Leverages Optical Character Recognition (OCR) to validate the text information on the test socks card against the master socks card.</li>
        </ul>
        <p class="mt-4"><strong>Outcome:</strong> The system significantly reduces damage and elimination errors by ensuring accurate validation of socks cards, decreasing the need for manual checking by 80%. It enhances overall efficiency and reliability, resulting in a 95% increase in validation accuracy. This method can also be extended to validate other product labels, streamlining the quality control process across various industries.</p>
        <p class="mt-4"><strong> Achivement:</strong> Advanced to the top 5 teams in HACKJNU's Machine Learning theme, focusing on streamlining industry processes. </p>
      `,
      tools: "OpenCV, Keras, TensorFlow, YOLOv3, PyQt5 , Python, Sql",
      image: '/image/sockscardValidation.png',
    },
  ];
  
