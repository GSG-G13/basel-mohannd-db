BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE,
    img_url TEXT NOT NULL,
    bio_content TEXT,
    skills TEXT,
    bg_img_url TEXT NOT NULL

);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    content TEXT NOT NULL,
    img_url TEXT,
    user_id INT REFERENCES users(id) NOT NULL
);


INSERT INTO users (name, img_url, bio_content, skills, bg_img_url) VALUES 
    ('ahmed-mo', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/3342739/pexels-photo-3342739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Hello Iam ahmed! A front end developer', 'html,css,js,react'),
    ('mona-ar', 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Hello Iam mona! A back end developer', 'nodejs,sql,github'),
    ('khaled-sr', 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/887353/pexels-photo-887353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Hello Iam kaheld! I know a lot of github!', 'github'),
    ('leen-je', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'https://images.pexels.com/photos/1037999/pexels-photo-1037999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Hello Iam leen! Welcome to my page', 'html,css,js,react,github,sql,php,nodejs');

COMMIT;

