/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : usrname

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 12/07/2019 09:15:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for uname
-- ----------------------------
DROP TABLE IF EXISTS `uname`;
CREATE TABLE `uname`  (
  `id` int(4) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `name` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 54 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of uname
-- ----------------------------
INSERT INTO `uname` VALUES (0050, 'tianqi', '359b487c37aa238869ee9cb76388a5298a9174e2', 't@t.com');
INSERT INTO `uname` VALUES (0053, 'SHIKIO', '0f013ba0419a83e5f0a63a51dd046393aed86070', 'shi@shi.com');
INSERT INTO `uname` VALUES (0052, 'SHIKIO', '0f013ba0419a83e5f0a63a51dd046393aed86070', 'shi@shi.com');
INSERT INTO `uname` VALUES (0051, 'hahaha', '36ec04b51e6369f98b7558fa127a7426bff6c385', 'ha@ha.com');
INSERT INTO `uname` VALUES (0045, 'zhaoliu', '024029ee3c32189b10e21597213ed2c58ef4de8e', 'zhaoliu@zhaoliu.com');
INSERT INTO `uname` VALUES (0044, 'wangwu', '1ebda951b2048b40f68dec3d8c16abff28755ab9', 'wangwu@wangwu.com');
INSERT INTO `uname` VALUES (0043, 'lisi', '825256d5a3b28f88e18d2fc2f6c93d07ecd4fdd5', 'lisi@lisi.com');

SET FOREIGN_KEY_CHECKS = 1;
