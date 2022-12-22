--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
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
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password text NOT NULL,
    "confirmPassword" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL,
    CONSTRAINT users_check CHECK ((password = "confirmPassword"))
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (8, 4, 'sz4NKWXr', 'http://google.com', 0, '2022-12-21 03:56:43.217834');
INSERT INTO public.urls VALUES (9, 4, 'QCpXq6XV', 'http://google.com', 0, '2022-12-21 03:58:18.494088');
INSERT INTO public.urls VALUES (10, 4, 'PAFf6Ebl', 'http://google.com', 0, '2022-12-21 03:58:21.114392');
INSERT INTO public.urls VALUES (11, 4, 'tsA3kPhf', 'http://google.com', 0, '2022-12-21 04:10:42.148175');
INSERT INTO public.urls VALUES (12, 4, '93G9KWF5', 'http://google.com', 0, '2022-12-21 04:10:47.502363');
INSERT INTO public.urls VALUES (13, 4, 'gGXYDuL2', 'http://google.com', 0, '2022-12-21 04:11:26.031167');
INSERT INTO public.urls VALUES (7, 4, 'NOuNAGij', 'http://google.com', 1, '2022-12-21 03:38:40.983504');
INSERT INTO public.urls VALUES (6, 4, 'BY7QnHIo', 'http://google.com', 1, '2022-12-21 03:38:39.896392');
INSERT INTO public.urls VALUES (5, 4, 'CFIuFEuc', 'http://google.com', 2, '2022-12-21 03:38:34.086322');
INSERT INTO public.urls VALUES (14, 4, 'L2pzx3HR', 'http://google.com', 5, '2022-12-21 04:11:28.187361');
INSERT INTO public.urls VALUES (15, 5, '-C5sl-oG', 'https://github.com/', 0, '2022-12-21 17:29:55.21236');
INSERT INTO public.urls VALUES (16, 5, 'pGoNC4ij', 'https://github.com/', 0, '2022-12-21 17:29:57.816975');
INSERT INTO public.urls VALUES (17, 5, 'xIM3mwbR', 'https://github.com/', 0, '2022-12-21 17:29:58.334492');
INSERT INTO public.urls VALUES (18, 5, 'DZFq_xcw', 'https://github.com/', 0, '2022-12-21 17:29:58.779395');
INSERT INTO public.urls VALUES (19, 5, '42GX-rGn', 'https://github.com/', 0, '2022-12-21 17:29:59.24188');
INSERT INTO public.urls VALUES (20, 5, '8uExpS0E', 'https://github.com/', 0, '2022-12-21 17:30:00.094025');
INSERT INTO public.urls VALUES (22, 6, 'mOSL8Lir', 'https://hub.driven.com.br/', 0, '2022-12-21 17:30:34.017117');
INSERT INTO public.urls VALUES (24, 6, 'anSui77D', 'https://hub.driven.com.br/', 0, '2022-12-21 17:30:34.938337');
INSERT INTO public.urls VALUES (27, 7, 'cDCxXPTe', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:31.123676');
INSERT INTO public.urls VALUES (28, 7, 'jJAD8u2r', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:31.442768');
INSERT INTO public.urls VALUES (31, 7, 'DMo8EAz4', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:32.465617');
INSERT INTO public.urls VALUES (32, 7, 'mli9MHZP', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:32.791412');
INSERT INTO public.urls VALUES (33, 7, 'yyHG4P0W', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:33.110045');
INSERT INTO public.urls VALUES (34, 7, '6zy9Au9L', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:33.426067');
INSERT INTO public.urls VALUES (35, 7, 'jPbxitXd', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:34.249648');
INSERT INTO public.urls VALUES (36, 7, 'tH39NXdw', 'https://www.driven.com.br/', 0, '2022-12-21 17:31:34.50604');
INSERT INTO public.urls VALUES (25, 7, 'I5g6-CBr', 'https://www.driven.com.br/', 1, '2022-12-21 17:31:30.471798');
INSERT INTO public.urls VALUES (26, 7, 'i_AQ_Kxj', 'https://www.driven.com.br/', 1, '2022-12-21 17:31:30.77785');
INSERT INTO public.urls VALUES (29, 7, 'KXE8Ogoz', 'https://www.driven.com.br/', 1, '2022-12-21 17:31:31.804387');
INSERT INTO public.urls VALUES (30, 7, 'IMEQ6nD3', 'https://www.driven.com.br/', 1, '2022-12-21 17:31:32.096153');
INSERT INTO public.urls VALUES (21, 6, '74rX74Zx', 'https://hub.driven.com.br/', 1, '2022-12-21 17:30:33.123399');
INSERT INTO public.urls VALUES (23, 6, 'BAUhi4VH', 'https://hub.driven.com.br/', 1, '2022-12-21 17:30:34.644214');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Teste', 'teste@teste.com', '$2b$10$5jXBiTf4N5QnEUjJGk1p3Odl./IAWYukxnzyW6DIgpoE27qn.mzmK', '$2b$10$5jXBiTf4N5QnEUjJGk1p3Odl./IAWYukxnzyW6DIgpoE27qn.mzmK', '2022-12-21 01:12:25.997075');
INSERT INTO public.users VALUES (4, 'Teste', 'test2e@teste.com', '$2b$10$dt1u8ccWMbCDobUC55W6i.Or5cKvFN2/N3JgelipS2yrKHZXWjQG6', '$2b$10$dt1u8ccWMbCDobUC55W6i.Or5cKvFN2/N3JgelipS2yrKHZXWjQG6', '2022-12-21 01:33:49.37073');
INSERT INTO public.users VALUES (5, 'Testudo2', 'testudo2@teste.com', '$2b$10$1lOuCDHLM4JUi9YmEePB0OXzBK4Zo1qDWAuBy4qIamDSFBVhyqDs2', '$2b$10$1lOuCDHLM4JUi9YmEePB0OXzBK4Zo1qDWAuBy4qIamDSFBVhyqDs2', '2022-12-21 17:25:09.92166');
INSERT INTO public.users VALUES (6, 'Testudo3', 'testudo3@teste.com', '$2b$10$EiepWPmhziAKsviOKjaKRut7KvfyQsuoXiYtLRAd5Cc6CSZwaOtTu', '$2b$10$EiepWPmhziAKsviOKjaKRut7KvfyQsuoXiYtLRAd5Cc6CSZwaOtTu', '2022-12-21 17:26:35.939924');
INSERT INTO public.users VALUES (7, 'Testudo4', 'testudo4@teste.com', '$2b$10$QywDiksjBPXO/rQCYehJou9r8dU//W39.HYYIeulxZCyTSzUpkm3q', '$2b$10$QywDiksjBPXO/rQCYehJou9r8dU//W39.HYYIeulxZCyTSzUpkm3q', '2022-12-21 17:27:35.714325');
INSERT INTO public.users VALUES (8, 'repo test', 'repo@test.com', '$2b$10$x3IMlrgHogpD2/a5meD2NOWpyp.ups6fWg3zVMy9OdYOIqUYKltg6', '$2b$10$x3IMlrgHogpD2/a5meD2NOWpyp.ups6fWg3zVMy9OdYOIqUYKltg6', '2022-12-22 03:07:16.431516');


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 36, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 26, true);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

