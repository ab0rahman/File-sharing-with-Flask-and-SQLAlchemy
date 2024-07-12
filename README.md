# Flask File Sharing Platform

## Project Overview

This project is a file-sharing platform built using the Flask microframework. It provides secure user authentication and password hashing, allowing users to upload and download files within an organization. The platform ensures secure collaboration on project-related files, running on localhost.

## Features

- User Registration and Login
- Secure Password Hashing
- File Upload and Download
- Flask-based Web Interface

## Setup Instructions

### Prerequisites

I have used [Anaconda](https://www.anaconda.com/products/distribution) for Virtual Environment.

### Step 1: Create a Virtual Environment

Open Anaconda Prompt and run the following commands:

```bash
# Create a virtual environment named 'flask_env'
conda create --name flask_env 

# Activate the virtual environment
conda activate flask_env
```
### Step 2: Install Necessary Packages

Run the following command to install the required packages:

```bash
pip install flask flask_sqlalchemy flask_bcrypt flask_login
```
### Step 3: Clone the Repository

Clone the GitHub repository to your local machine:
```bash
git clone https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy
cd File-sharing-with-Flask-and-SQLAlchemy
```
### Step 4: Run the Application

Start the Flask development server:

```bash
python app.py
```
Navigate to http://127.0.0.1:5000 in your web browser to access the application.
Flask by default listens on `http://127.0.0.1:5000`
Localhost `127.0.0.1` is the loopback address the application is hosted on the user's own computer.
Default Port `5000` is the default port that Flask uses when you run the development server.


## Application Features
#### 1. User Registration
Allows new users to register by providing a username, email, and password. The password is hashed for security.

#### 2. User Login
Allows existing users to log in using their email and password. Passwords are verified against the hashed password stored in the database.

3. File Upload
Authenticated users can upload files, which are stored in the uploads directory and logged in the database with the user's ID.

4. File Download
Authenticated users can download files they have uploaded by clicking on the file name in the upload list.

5. User Logout
Users can log out from the application, which redirects them to the login page.

6. Index Page
A simple index page that acts as the landing page of the application.

Route Endpoints
/: Index page
/register: User registration page
/login: User login page
/logout: User logout
/upload: File upload page (requires login)
/download/<filename>: File download endpoint (requires login)
