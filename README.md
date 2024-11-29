
<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a Fullstack React-Django Application that enables users to manage and interact with data seamlessly via a RESTful API. The frontend is built with React and communicates with the backend Django API. Deployed on a Hetzner server, the application uses NGINX and Gunicorn for serving static files and handling requests.
<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Django]]
* [![NGINX]]
* [![Ansible]]
* [![Gunicorn]]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- **User Authentication**: Register, login, and manage tokens with JWT authentication.
- **CRUD Operations**: Perform create, read, update, and delete operations on notes.
- **Modern Frontend**: Built with React and styled for a responsive user experience.
- **Scalable Backend**: Django REST Framework provides secure and robust API services. Communicates with Frontend through Axios.
- **Production Ready**: Deployed with NGINX and Gunicorn on Hetzner.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To run the projects locally or make updates:
1. Install Python 3.9 or above
2. Install Node.js and npm Version 16 or above
3. Database SQLite (default database for Django)
4. Virtual environment `venv` or `virtualenv`

### Clone the Repository
```bash
git clone https://github.com/jjgitit/react-django-app.git
cd react-django-app
```

### Backend Setup
Navigate to the backend directory:
```bash
cd backend
```
Create and activate a virtual environment so installing required packages doesn't cause conflict with your existing versions of libaries.
```bash
python3 -m venv env
source env/bin/activate #For Linux/Mac
env\Scripts\activate # For Windows
```
After activating virtual environment, install dependencies,
```bash
pip install -r requirements.txt
```
When you first start your Django project we need to run migration. After migrating let's run the server. On your terminal run
```bash
python manage.py migrate
python manage.py runserver
```
### Frontend Setup
Navigate to the frontend directory:
```bash
cd ../frontend
```
Install Node.js dependencies:
```bash
npm install
```
Now start the frontend development server:
```bash
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Deployment
This project is deployed on a Hetzner server with Ansible. Below is an overview of the deployment steps:
### 1. Ansible Deployment Script
Ansible is used to automate the following:
- Install necessary packages(e.g. Python, pip, Gunicorn, NGINX)
- Set up Gunicornas the WSGI server
- Configure NGINX as a reverse proxy
- Obtain and configure SSL using Let's Encrypt
### 2. NGINX Configuration
- Act as a reverse proxy for the React app and Django API.
- Configuration includes SSL certificates for secure HTTPS access.
### 3. Gunicorn
- Handles WSGI request for the Django backend.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/jjgitit/react-django-app/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

JaeYeon Lee - jaeyeonee0320@gmail.com

Project Link: [https://github.com/jjgitit/react-django-app](https://github.com/jjgitit/react-django-app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jjgitit/react-django-app.svg?style=for-the-badge
[contributors-url]: https://github.com/jjgitit/react-django-app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jjgitit/react-django-app.svg?style=for-the-badge
[forks-url]: https://github.com/jjgitit/react-django-app/network/members
[stars-shield]: https://img.shields.io/github/stars/jjgitit/react-django-app.svg?style=for-the-badge
[stars-url]: https://github.com/jjgitit/react-django-app/stargazers
[issues-shield]: https://img.shields.io/github/issues/jjgitit/react-django-app.svg?style=for-the-badge
[issues-url]: https://github.com/jjgitit/react-django-app/issues
[license-shield]: https://img.shields.io/github/license/jjgitit/react-django-app.svg?style=for-the-badge
[license-url]: https://github.com/jjgitit/react-django-app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[Django]: https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white
[Ansible]: https://img.shields.io/badge/Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white
[NGINX]: https://img.shields.io/badge/NGINX-009639?style=for-the-badge&logo=nginx&logoColor=white
[Gunicorn]: https://img.shields.io/badge/Gunicorn-499848?style=for-the-badge&logo=gunicorn&logoColor=white

