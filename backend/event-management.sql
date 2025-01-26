--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Categories" (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Categories" OWNER TO postgres;

--
-- Name: EventCategory; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."EventCategory" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "EventId" uuid NOT NULL,
    "CategoryId" uuid NOT NULL
);


ALTER TABLE public."EventCategory" OWNER TO postgres;

--
-- Name: Events; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Events" (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    start_date_time timestamp with time zone NOT NULL,
    end_date_time timestamp with time zone NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Events" OWNER TO postgres;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: test_table; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.test_table (
    id uuid NOT NULL,
    name character varying(255)
);


ALTER TABLE public.test_table OWNER TO postgres;

--
-- Data for Name: Categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Categories" (id, name, "createdAt", "updatedAt") FROM stdin;
d236e479-4114-43da-9299-cfdde243c01a	Test category 44	2025-01-24 22:59:20.956+05:30	2025-01-24 22:59:20.956+05:30
b1bda28f-5857-44b2-baca-9ace7d4dcd57	Business	2025-01-25 23:56:02.858+05:30	2025-01-25 23:56:02.858+05:30
2b7c3c29-8729-49aa-92a7-3b46c8d17e74	Conference	2025-01-25 23:56:12.755+05:30	2025-01-25 23:56:12.755+05:30
2d6b3a65-9197-40a6-b051-0548cb8919e7	Tech	2025-01-25 23:56:22.239+05:30	2025-01-25 23:56:22.239+05:30
e43d86f3-9d92-4381-8bf6-5137f3926a06	Workshop	2025-01-25 23:56:30.977+05:30	2025-01-25 23:56:30.977+05:30
31b37461-8cd6-44b9-a107-db0eddcb097c	Charity	2025-01-25 23:56:40.272+05:30	2025-01-25 23:56:40.272+05:30
2db5ad1e-b22b-425c-a02e-dea6559cb395	Social	2025-01-25 23:56:47.415+05:30	2025-01-25 23:56:47.415+05:30
05ad8de0-5262-4e9e-9db5-35d9466dc045	Fundraising	2025-01-25 23:56:56.426+05:30	2025-01-25 23:56:56.426+05:30
99722f5d-c451-47e1-8b77-b546be89374d	Marketing	2025-01-25 23:57:12.393+05:30	2025-01-25 23:57:12.393+05:30
2bf68d87-4142-4739-b785-1cc9be9ac49c	Launch	2025-01-25 23:57:19.902+05:30	2025-01-25 23:57:19.902+05:30
ecb71e6c-8dca-447b-b807-d86860f073da	Health & Wellness	2025-01-25 23:57:29.248+05:30	2025-01-25 23:57:29.248+05:30
f59d16f6-ef58-4848-a7ff-1275915c97d6	Music	2025-01-25 23:57:36.8+05:30	2025-01-25 23:57:36.8+05:30
49306a64-d216-452e-923d-0adcec83e63e	Festival	2025-01-25 23:57:43.992+05:30	2025-01-25 23:57:43.992+05:30
ef47d43f-e6ad-47d2-a6b0-7fdcb01db351	Food & Drink	2025-01-25 23:58:03.764+05:30	2025-01-25 23:58:03.764+05:30
f2840891-d13e-4aaf-8fd1-59f0bc82f480	Cultural	2025-01-25 23:58:14.304+05:30	2025-01-25 23:58:14.304+05:30
\.


--
-- Data for Name: EventCategory; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."EventCategory" ("createdAt", "updatedAt", "EventId", "CategoryId") FROM stdin;
2025-01-26 00:00:34.487+05:30	2025-01-26 00:00:34.487+05:30	5f650590-3ed6-462b-81bd-d473e9dd5629	b1bda28f-5857-44b2-baca-9ace7d4dcd57
2025-01-26 00:00:34.487+05:30	2025-01-26 00:00:34.487+05:30	5f650590-3ed6-462b-81bd-d473e9dd5629	2b7c3c29-8729-49aa-92a7-3b46c8d17e74
2025-01-26 00:11:23.252+05:30	2025-01-26 00:11:23.252+05:30	f77e22ac-eeb1-4fdd-9302-8c0d4f80b3d3	e43d86f3-9d92-4381-8bf6-5137f3926a06
2025-01-26 00:16:21.429+05:30	2025-01-26 00:16:21.429+05:30	f77e22ac-eeb1-4fdd-9302-8c0d4f80b3d3	2d6b3a65-9197-40a6-b051-0548cb8919e7
2025-01-26 00:19:48.382+05:30	2025-01-26 00:19:48.382+05:30	04e5b2da-7a59-47f1-9553-20eef3f68984	31b37461-8cd6-44b9-a107-db0eddcb097c
2025-01-26 00:19:48.382+05:30	2025-01-26 00:19:48.382+05:30	04e5b2da-7a59-47f1-9553-20eef3f68984	05ad8de0-5262-4e9e-9db5-35d9466dc045
2025-01-26 00:37:26.38+05:30	2025-01-26 00:37:26.38+05:30	1fc5adbb-d78d-444b-95af-aa5397732687	49306a64-d216-452e-923d-0adcec83e63e
2025-01-26 00:37:26.38+05:30	2025-01-26 00:37:26.38+05:30	1fc5adbb-d78d-444b-95af-aa5397732687	ef47d43f-e6ad-47d2-a6b0-7fdcb01db351
2025-01-26 15:14:42.941+05:30	2025-01-26 15:14:42.941+05:30	d2762ba2-e35a-49e3-b30e-222f62eef44b	b1bda28f-5857-44b2-baca-9ace7d4dcd57
2025-01-26 15:14:42.941+05:30	2025-01-26 15:14:42.941+05:30	d2762ba2-e35a-49e3-b30e-222f62eef44b	99722f5d-c451-47e1-8b77-b546be89374d
\.


--
-- Data for Name: Events; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Events" (id, name, description, start_date_time, end_date_time, "createdAt", "updatedAt") FROM stdin;
f77e22ac-eeb1-4fdd-9302-8c0d4f80b3d3	Coding Bootcamp	 A weekend bootcamp for developers to learn full-stack web development.	2025-02-15 08:30:00+05:30	2025-02-15 13:30:00+05:30	2025-01-26 00:11:23.244+05:30	2025-01-26 00:11:23.244+05:30
04e5b2da-7a59-47f1-9553-20eef3f68984	Charity Gala Night	 A night to raise funds for local charities, featuring entertainment and dinner.	2025-02-20 20:30:00+05:30	2025-02-20 00:30:00+05:30	2025-01-26 00:19:48.375+05:30	2025-01-26 00:19:48.375+05:30
1fc5adbb-d78d-444b-95af-aa5397732687	International Food Festival	A food festival featuring dishes from around the world.	2025-01-29 18:00:00+05:30	2025-02-04 09:36:00+05:30	2025-01-26 00:37:26.358+05:30	2025-01-26 00:37:26.358+05:30
d2762ba2-e35a-49e3-b30e-222f62eef44b	Product Launch	A special event to introduce our new product to the market.	2025-03-01 10:00:00+05:30	2025-02-01 14:00:00+05:30	2025-01-26 15:14:42.904+05:30	2025-01-26 15:14:42.904+05:30
5f650590-3ed6-462b-81bd-d473e9dd5629	Annual Company Meeting	 A meeting to discuss yearly performance and future goals.	2025-07-24 16:00:00+05:30	2025-07-24 18:00:00+05:30	2025-01-26 00:00:34.476+05:30	2025-01-26 16:05:57.942+05:30
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
\.


--
-- Data for Name: test_table; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.test_table (id, name) FROM stdin;
\.


--
-- Name: Categories Categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Categories"
    ADD CONSTRAINT "Categories_pkey" PRIMARY KEY (id);


--
-- Name: EventCategory EventCategory_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventCategory"
    ADD CONSTRAINT "EventCategory_pkey" PRIMARY KEY ("EventId", "CategoryId");


--
-- Name: Events Events_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Events"
    ADD CONSTRAINT "Events_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: test_table test_table_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.test_table
    ADD CONSTRAINT test_table_pkey PRIMARY KEY (id);


--
-- Name: EventCategory EventCategory_CategoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventCategory"
    ADD CONSTRAINT "EventCategory_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES public."Categories"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: EventCategory EventCategory_EventId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."EventCategory"
    ADD CONSTRAINT "EventCategory_EventId_fkey" FOREIGN KEY ("EventId") REFERENCES public."Events"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

