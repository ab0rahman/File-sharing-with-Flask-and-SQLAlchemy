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

<img src="https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy/blob/main/files/Screenshot%202024-07-10%20192850.png?raw=true" width="500" />

#### 2. User Login
Allows existing users to log in using their email and password. Passwords are verified against the hashed password stored in the database.

<img src="https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy/blob/main/files/Screenshot%202024-07-10%20192737.png?raw=true" width="500" />

#### 3. File Upload and Download
Authenticated users can upload files, which are stored in the uploads directory and logged in the database with the user's ID and users can download files they have uploaded by clicking on the file name in the upload list.

<img src="https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy/blob/main/files/Screenshot%202024-07-10%20192719.png?raw=true" width="500" />

#### 4. User Logout
Users can log out from the application, which redirects them to the login page.

#### 5. Index Page
A simple index page that acts as the landing page of the application.

<img src="https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy/blob/main/files/Screenshot%202024-07-10%20192940.png?raw=true" width="500" />

#### 6. Flask Shell Access
Allows users to access the database of users and files through Flask shell commands. This can be useful for administrative tasks and data inspection.

To access the Flask shell, run

```bash
flask shell
```
In the shell, you can interact with the User and File db

```bash
# For user database
from app import db, User, File
users = User.query.all()
  for user in users:
    print(user.username, user.email)
```
```bash
# For files database
from app import db, User, File
files = File.query.all()
  for file in files:
    print(file.filename, file.user.username)
```
<img src="https://github.com/ab0rahman/File-sharing-with-Flask-and-SQLAlchemy/blob/main/files/Screenshot%202024-07-10%20193708.png?raw=true" width="500" />


Route Endpoints

`/:` Index page

`/register` User registration page

`/login` User login page

`/logout` User logout

`/upload` File upload page (requires login)

`/download/<filename>` File download endpoint (requires login)
