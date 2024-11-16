# **Lookify - Fashion Reimagined with AR/VR Integration**

Lookify is an innovative platform designed to revolutionize online fashion shopping by leveraging AR/VR technologies. With Lookify, users can explore, virtually try on, and purchase fashion items such as clothing, shoes, and accessories, creating an immersive and engaging shopping experience. The platform ensures convenience, interactivity, and informed decision-making, bringing the benefits of in-store shopping to the comfort of home.

### **Objective**

The Lookify project aims to redefine how users shop for fashion online by integrating AR/VR capabilities. Its key objectives include:

• Enhanced User Engagement: Provide an interactive AR/VR try-on feature to keep users engaged and mimic the in-store shopping experience.

• Virtual Try-On: Allow users to visualize and personalize their chosen items in real-time.

• Seamless Shopping Experience: Enable users to browse, check availability, and purchase products effortlessly.

### **Features**

**Frontend Features**

• User Information Management: User registration, login, and profile management.

• Shopping Cart:Real-time price updates and cross-device synchronization for logged-in users.

• Wishlist:Save items for future purchases and move directly to the cart.

• Virtual Try-On with AR/VR:Real-time adjustments and visualizations using augmented reality.

• Product Catalog:Browse products by categories, with advanced filters and search functionality.

• Purchase System:Secure and simple checkout process with multiple payment options.

**Backend Features**

• Secure Authentication: User login and session management with JWT for data privacy.

• Order & Inventory Management: Real-time updates to inventory levels during purchases.

• Database Management: MongoDB stores user data, product details, wishlist items, and order history.

• Payment Gateway Integration: Multiple secure payment options, including credit cards and digital wallets.

### **Tech Stack**

**Frontend**

• Languages & Frameworks: React.js, HTML, CSS, JavaScript

• Libraries: AR.js, Three.js for AR integration

**Backend**

• Frameworks: Node.js, Express.js

• Authentication: JSON Web Tokens (JWT) for secure user sessions

**Database**

• MongoDB: NoSQL database for scalable and flexible data storage

### **System Design**

Frontend: Built using React.js with structured components to manage routes like Home, Product Catalog, Profile, and Checkout.

Backend: API development with Express.js to handle user authentication, product management, and order processing.

Database: MongoDB for storing user profiles, products, orders, and wishlist items.

### **Installation and Setup**

**Prerequisites**

• Node.js and npm installed.

• MongoDB installed and running.

**Steps to Run the Project**

• Clone the Repository

git clone https://github.com/yourusername/lookify.git  

cd lookify 

• Install Dependencies

For the backend:

cd lookify-backend  

npm install  

For the frontend:

cd lookify-frontend  

npm install  

• Setup Environment Variables

In the lookify-backend folder, create a .env file and add the following:

MONGO_URI=mongodb://localhost:27017/Lookify

JWT_SECRET=your_jwt_secret  

• Run the Application

Start the backend:

cd lookify-backend  

npm start  

Start the frontend:

cd lookify-frontend  

npm start  

• Access the Application

Open your browser and navigate to http://localhost:3000.

### **Technical Challenges Encountered and Solutions**

•	AR Rendering Across Devices: Managed challenges in AR rendering by optimizing model formats and using responsive design to ensure compatibility across devices.

•	Data Latency: Resolved slow data retrieval by implementing caching techniques and optimizing MongoDB queries to improve response times.

•	Cross-Browser Compatibility: Addressed issues with AR not rendering consistently on all browsers by testing across browsers and implementing polyfills as needed.

•	Enhanced Error Handling: Improved error handling on both the frontend and backend, especially for booking processes, ensuring complete and accurate data submission.

### **Future Enhancements**

• 360-Degree Virtual Fitting Room - Allow users to view outfits from all angles for a comprehensive fitting experience.

•	Machine Learning-Based Recommendations - Personalize product suggestions based on user preferences and browsing history.

• AI-Powered Style Suggestions - Recommend complementary outfits and accessories for a curated shopping experience.

•	Loyalty Program and Rewards - Introduce a loyalty program where users can earn points with each purchase, redeemable for discounts, free items, or exclusive offers. This can help increase customer retention and brand loyalty.

•	Multilingual and Currency Support - Expand to a global audience by adding multilingual capabilities, local currency display, and international shipping options, making the website more accessible for non-English-speaking users and those shopping internationally.

### **Images**

**Home Page**

![image](https://github.com/user-attachments/assets/dc38d7b7-8fc9-47c8-9d9a-13788a7d0422)

![image](https://github.com/user-attachments/assets/41b550f1-8e82-4b98-a3b9-e9562b52446e)

![image](https://github.com/user-attachments/assets/eb5d804c-c9cd-47ce-9de9-55cae30de656)

**Register Page**

![image](https://github.com/user-attachments/assets/eb0309e4-7a21-46ac-b420-2f491725beb5)

**Login Page**

![image](https://github.com/user-attachments/assets/9838d059-64f9-4ae5-ab05-cb0d69dc75f9)

**Profile Page**

![image](https://github.com/user-attachments/assets/0315ade0-8404-43e1-a114-439073de738c)

**Shoes Page**

![image](https://github.com/user-attachments/assets/7daffe73-1379-433f-855e-a58778b9705f)

**Slings Page**

![image](https://github.com/user-attachments/assets/98fa7683-071c-4419-b884-ec28d83a59d8)

**Earrings Page**

![image](https://github.com/user-attachments/assets/ada058ca-061d-4e07-80b3-90211d76bfb3)

**Sunglasses Page**

![image](https://github.com/user-attachments/assets/b275e523-dfc7-42ad-b5eb-a2928f60c3da)

**Hats Page**

![image](https://github.com/user-attachments/assets/31b48e1f-a564-4562-8ba5-f858b8d000ca)

**AR View**

![image](https://github.com/user-attachments/assets/ec3442ab-2aa8-49ac-b275-87b0150a8aef)

### **Author**
This project was developed by:

Sanika Pendurkar

Role: Full Stack Developer

Responsibilities: Designed and implemented the entire project, including frontend development, backend logic, database management, and AR integration.

### **Contact**
If you have any questions or suggestions, feel free to reach out at sanika.pendurkar@somaiya.edu
