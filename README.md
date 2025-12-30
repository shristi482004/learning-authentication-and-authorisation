
# Learning Authentication & Authorization (Node.js + Express)

This repository documents my hands-on learning of **authentication and authorization concepts** using **Node.js, Express, JWT, cookies, and bcrypt**.  
The goal of this project is not to build a full production app, but to deeply understand **how identity, security, and protected routes work in backend systems**.

This project helped me bridge the gap between *theoretical security concepts* and *actual backend implementation*.

---

##  What This Project Covers

This project demonstrates the **core building blocks of modern authentication systems**, including:

- Stateless authentication using **JSON Web Tokens (JWT)**
- Secure password hashing with **bcrypt**
- Storing tokens using **HTTP cookies**
- Protecting routes using **token verification**
- Understanding the **difference between authentication and authorization**

---

## Key Concepts Explained

###  Authentication vs Authorization

####  Authentication — *Who are you?*
Authentication is the process of verifying a user's identity.

In this project:
- Authentication is done using **JWT**
- A token is generated after identity verification
- The token contains user information (payload) and is cryptographically signed

Example:
```js
jwt.sign({ email }, secretKey)
````

---

####  Authorization — *What are you allowed to do?*

Authorization checks whether an authenticated user can access a specific resource.

In this project:

* Protected routes verify the JWT
* If the token is valid → access is allowed
* If invalid or missing → access is denied

Example:

```js
jwt.verify(token, secretKey)
```

---

##  Tech Stack Used

| Technology         | Purpose                       |
| ------------------ | ----------------------------- |
| Node.js            | JavaScript runtime            |
| Express.js         | Backend framework             |
| JWT (jsonwebtoken) | Stateless authentication      |
| bcrypt             | Password hashing              |
| cookie-parser      | Reading cookies from requests |

---

## 📂 Project Structure

```
learning-authentication-and-authorisation/
│
├── app.js
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

---

##  Application Flow

### Step 1: User Authentication

* Server generates a JWT using `jwt.sign()`
* Token payload contains user identity (email)
* Token is signed using a secret key
* Token is sent to the client as a **cookie**

### Step 2: Client Stores Token

* Browser automatically stores the token in cookies
* Token is sent with every subsequent request

### Step 3: Protected Route Access

* Server reads token from cookies
* Token is verified using `jwt.verify()`
* If verification succeeds → request is authorized
* If verification fails → access is denied

---

##  JWT (JSON Web Token)

JWT is used here for **stateless authentication**, meaning:

* No session data is stored on the server
* Server only verifies token signature
* Scalability is improved

### JWT Structure

A JWT consists of:

1. Header
2. Payload (user data)
3. Signature

Only the server with the secret key can verify the token.

---

##  Cookies for Token Storage

Tokens are stored in **HTTP cookies** so that:

* Browser automatically sends token with requests
* Server can read token using `cookie-parser`

Example:

```js
res.cookie("token", token);
```

---

##  Password Hashing with bcrypt

This project also explores **secure password storage** using bcrypt.

### Why hashing is important:

* Plain-text passwords are insecure
* Hashing prevents password leakage
* Even database breaches won’t reveal passwords

### bcrypt workflow:

1. Generate salt
2. Hash password using salt
3. Store hash in database
4. Compare hash during login

Example:

```js
bcrypt.hash(password, saltRounds)
bcrypt.compare(enteredPassword, storedHash)
```

---

##  Routes Implemented

### `/` — Authentication Route

* Generates a JWT
* Stores token in cookies
* Represents login-like behavior

### `/read` — Authorized Route

* Reads token from cookies
* Verifies token
* Allows access only if token is valid

---

##  Limitations (Intentional for Learning)

This project intentionally avoids:

* Database integration
* Full login/register forms
* Role-based access control

The focus is **understanding the core security mechanisms**, not building a full product.

---

##  Improvements Planned / Possible Extensions

* Add user registration & login system
* Store users in MongoDB
* Create authentication middleware
* Add role-based authorization (admin/user)
* Use environment variables for secrets
* Implement logout functionality
* Add token expiration & refresh tokens

---

##  What I Learned From This Project

* Difference between authentication and authorization
* How JWT enables stateless authentication
* How cookies store and transmit authentication tokens
* Why password hashing is critical
* How protected routes work internally
* How backend security decisions affect scalability

---

##  Why This Project Matters

Understanding authentication and authorization is **fundamental to backend development**.
This project gave me clarity on how real-world applications secure user data and manage access.

It also prepared me to:

* Read and understand production auth code
* Debug authentication issues
* Confidently explain auth concepts in interviews

---

##  How to Run the Project

```bash
npm install
node app.js
```

Server runs on:

```
http://localhost:3000
```

---

##  Personal Note

This is one of my **first backend-focused learning projects**, built to strengthen my understanding of security fundamentals.
Feedback, suggestions, and improvements are always welcome.

---

##  License

This project is for educational purposes and learning.

