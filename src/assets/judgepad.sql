CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
PRIMARY KEY (`id`));

CREATE TABLE `judge` (
  `id` int(2) NOT NULL AUTO_INCREMENT,
  `judgeNumber` varchar(50) NOT NULL,
  `userId` int(11) NULL,
  `score` double NULL,
  `msgFromRecorder` varchar(50) NULL,
  `msgToRecorder` varchar(50) NULL,
  `backend` boolean NULL,
PRIMARY KEY (`id`));

CREATE TABLE `admin` (
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `diveCode` varchar(50) NULL
);

INSERT INTO admin(name, username, email, password, diveCode) VALUES('Christian', 'Christian', 'christian@brooker.com', 'judgepad', '');

INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 1', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 2', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 3', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 4', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 5', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 6', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Judge 7', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Synchro 1', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Synchro 2', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Synchro 3', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Synchro 4', 0, 0, '', '', false);
INSERT INTO judge(judgeNumber, userId, score, msgFromRecorder, msgToRecorder, backend) VALUES('Synchro 5', 0, 0, '', '', false);
