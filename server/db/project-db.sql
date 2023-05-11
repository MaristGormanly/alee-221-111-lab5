create database socialMedia character set utf8;
use socialMedia;

create user 'adminUser'@'localhost' identified by 'letmein';
grant all privileges on socialMedia.* to 'adminUser'@'localhost';
flush privileges;

create table users(id int primary key auto_increment, firstName varchar(20), lastName varchar(20), email varchar(40), username varchar(20), password varchar(20));
insert into users (firstName, lastName, email, username, password) values ("Annie", "Lee", "annielee@gmail.com", "alee", "annielee!"), ("George", "Washington", "georgewashington@gmail.com", "gwashington", "georgewashington!"), ("Abraham", "Lincoln", "abrahamlincoln@gmail.com", "alincoln", "abrahamlincoln!"), ("Benjamin", "Franklin", "benjaminfranklin@gmail.com", "bfranklin", "benjaminfranklin!");
select * from users;

create table posts(id int primary key auto_increment, title varchar(30), content varchar(300));
insert into posts (title, content) values ("Name #1", "What a nice day!"), ("Name #2", "It is better to offer no excuse than a bad one."), ("Name #3", "I am not bound to win, but I am bound to be true."), ("Name #4", "There never was a good war or a bad peace.");
select * from posts;
describe users;