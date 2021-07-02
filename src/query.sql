create table users (
    id varchar(36) primary key ,
    readable_id varchar(16),
    deleted bool default false,
    created_time int,
    created_by varchar(36),
    modified_time int,
    modified_by varchar(36),
    fullname varchar(120),
    date_of_birth date,
    address varchar(120),
    location varchar(40),
    gender smallint,
    email varchar(120),
    username varchar(36),
    password varchar(36),
    exp int default 0,
    vip smallint  default 0
)