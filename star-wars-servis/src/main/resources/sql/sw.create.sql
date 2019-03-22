DROP SCHEMA IF EXISTS star_wars CASCADE;
CREATE SCHEMA IF NOT EXISTS star_wars;

CREATE TABLE star_wars.people
(
  id bigserial NOT NULL,
  name character varying(80) NOT NULL,
  haircolor character varying(30),
  eyecolor character varying(15),
  gender character varying(1),
  CONSTRAINT people_pkey PRIMARY KEY (id)
);
