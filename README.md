# Home Energy Optimizer

Welcome to the **Home Energy Optimizer**, a personal project I created to explore the world of **IoT-based energy management systems**. The goal of this project is to help homeowners monitor and optimize their energy consumption in real-time, providing actionable insights to reduce energy usage. I used this project to improve my full-stack development skills, along with gaining experience working with IoT, cloud services, and scalable system design.

## Table of Contents
- [Technologies Used](#technologies-used)
- [What I Learned](#what-i-learned)
- [How I Built the Project](#how-i-built-the-project)
- [Setup and Running Instructions](#setup-and-running-instructions)
- [Project Structure](#project-structure)

---

## Technologies Used
I utilized a variety of tools and technologies to build this project:

- **Frontend**: React.js for the user interface and Axios for API calls.
- **Backend**: Node.js with Express to create the API, and MongoDB for data storage.
- **IoT Integration**: AWS IoT Core for secure communication between IoT devices (e.g., thermostats, lights) and the cloud.
- **Containerization**: Docker to ensure consistent development and production environments.
- **Data Visualization**: The frontend dashboard provides real-time data visualization of energy usage trends.

---

## What I Learned
This project gave me the opportunity to explore multiple areas of full-stack development:
- **IoT & Cloud Integration**: I learned how to integrate AWS IoT Core to communicate securely with smart devices.
- **Full-Stack Development**: I honed my skills in building both the frontend and backend, working with React, Node.js, and MongoDB.
- **Real-Time Systems**: The importance of optimizing for real-time data flows, where users need to monitor and control their energy usage instantly.
- **Scalability**: Using Docker helped me better understand how to scale applications and manage different environments (dev vs. production).
- **Security**: Implemented JWT-based authentication for secure access and protection of user data.

---

## How I Built the Project

I started by designing the system architecture with an emphasis on real-time communication and scalability. Here’s a breakdown of how the project was built:

1. **Backend**: 
   - I built the backend API using Node.js and Express to handle data from smart devices and provide endpoints for the frontend to fetch data.
   - MongoDB was used to store energy consumption data, device information, and user settings.

2. **Frontend**:
   - The user interface was developed in React.js, focusing on creating a clean and responsive dashboard that allows users to visualize energy consumption and control their devices.
   - Axios was used to make HTTP requests to the backend API.

3. **IoT Integration**:
   - I used AWS IoT Core to manage communication between smart devices and the cloud. This allowed real-time monitoring and control of devices like thermostats and lights.

4. **Deployment**:
   - Docker containers were set up for both the backend and frontend to ensure consistent environments across different stages of the project.
   - I used Docker Compose to manage the application stack and set up the required MongoDB database.

---

## Setup and Running Instructions

To run this project locally, you'll need **Docker** and **Docker Compose** installed. If you don’t have them installed, follow the official Docker [installation guide](https://docs.docker.com/get-docker/).

### Steps to Run Locally:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/home-energy-optimizer.git
   cd home-energy-optimizer
   ```

2. **Create a `.env` file** in the `backend/` directory:
   ```
   MONGO_URI=mongodb://mongo:27017/energydb
   JWT_SECRET=yourSecretKey
   AWS_IOT_ENDPOINT=yourAWSIoTEndpoint
   ```

3. **Build and start the application** using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. **Access the frontend**: The React app will be running at `http://localhost:3000`.
5. **API server**: The backend API will be running at `http://localhost:5000`.

### Optional: Stopping the containers
When you're done, you can stop the containers by running:
```bash
docker-compose down
```

---

## Project Structure

Here’s an overview of the project’s directory structure:

```
home-energy-optimizer/
│
├── backend/
│   ├── config/         # MongoDB connection setup
│   ├── controllers/    # Backend logic for handling API requests
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API routes
│   ├── server.js       # Main backend server setup
│   └── Dockerfile      # Backend Dockerfile
│
├── frontend/
│   ├── public/         # Static files
│   ├── src/            # React components and services
│   └── Dockerfile      # Frontend Dockerfile
│
├── docker-compose.yml  # Docker Compose configuration
├── README.md           # Project documentation
└── .env.example        # Example environment variables
```

---

## Conclusion

Building the **Home Energy Optimizer** was a rewarding experience that allowed me to deepen my knowledge in full-stack development, IoT integration, and scalable systems. I'm proud of how the project turned out, and it has given me valuable insights into optimizing home energy usage through technology.

If you have any questions or would like to learn more about how I built specific components of the project, feel free to reach out!
