/*
 Navicat Premium Data Transfer

 Source Server         : 127.0.0.1
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : yoho

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 12/07/2019 09:15:27
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for yohoyi
-- ----------------------------
DROP TABLE IF EXISTS `yohoyi`;
CREATE TABLE `yohoyi`  (
  `id` int(8) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `pictrue` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Oprice` decimal(10, 2) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `image` varchar(400) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `style` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yohoyi
-- ----------------------------
INSERT INTO `yohoyi` VALUES (00000001, 'https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/01e0a4695c2b84ff0f8ea2ab23e8dcdf60.jpg', 769.00, 'gxg.jeans 口袋拼接休闲裤', 319.00, 'https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/01e0a4695c2b84ff0f8ea2ab23e8dcdf60.jpg,https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/01e0a4695c2b84ff0f8ea2ab23e8dcdf60.jpg,https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/018645ac4a9052addcaab35dbf8870fcd3.jpg', '花灰');
INSERT INTO `yohoyi` VALUES (00000002, 'https://img13.static.yhbimg.com/goodsimg/2019/07/05/15/020f8d5f7bc5c934fa757a85bd1464d2df.jpg', 269.00, 'TRENDIANO 印花短袖T恤', 200.00, 'https://img13.static.yhbimg.com/goodsimg/2019/07/05/15/020f8d5f7bc5c934fa757a85bd1464d2df.jpg,https://img13.static.yhbimg.com/goodsimg/2019/07/03/14/02d8698340a3b3eb635864e9f0d768d4fe.jpg,https://img12.static.yhbimg.com/goodsimg/2019/07/03/14/02065a293687cc0a0f078c7a784edf928e.jpg', '漂白');
INSERT INTO `yohoyi` VALUES (00000003, 'https://img10.static.yhbimg.com/goodsimg/2019/07/04/11/01b406955931bdc732f457cde45b1b7b2b.jpg', 138.00, '黑鲸 简约拼接休闲短裤', 99.00, 'https://img10.static.yhbimg.com/goodsimg/2019/07/04/11/01b406955931bdc732f457cde45b1b7b2b.jpg', '浅蓝');
INSERT INTO `yohoyi` VALUES (00000004, 'https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/01f56ce361f764d9ab2b7410ee2d360ad0.jpg', 599.00, ' gxg.jeans 拼接印花圆领卫衣', 249.00, 'https://img11.static.yhbimg.com/goodsimg/2019/07/04/15/01f56ce361f764d9ab2b7410ee2d360ad0.jpg', '黑色');
INSERT INTO `yohoyi` VALUES (00000005, 'https://img12.static.yhbimg.com/goodsimg/2019/07/05/17/02e64ca541d4fa6f24e060691d2a3eefd7.jpg', 249.00, 'Levi\'s 女士白色圆领纯棉LOGO刺绣短袖T恤', 99.00, 'https://img12.static.yhbimg.com/goodsimg/2019/07/05/17/02e64ca541d4fa6f24e060691d2a3eefd7.jpg', '白色');
INSERT INTO `yohoyi` VALUES (00000006, 'https://img10.static.yhbimg.com/goodsimg/2019/07/04/11/01586646d6da311f25df7699ea4796fa3b.jpg', 78.00, '黑鲸 字母印花短袖T恤', 56.00, 'https://img10.static.yhbimg.com/goodsimg/2019/07/04/11/01586646d6da311f25df7699ea4796fa3b.jpg', '粉红');
INSERT INTO `yohoyi` VALUES (00000007, 'https://img13.static.yhbimg.com/goodsimg/2019/07/04/13/02ad05fb1feff748bc08adfe5f47bc41cd.jpg', 78.00, '黑鲸 图案印花短袖T恤', 56.00, 'https://img13.static.yhbimg.com/goodsimg/2019/07/04/13/02ad05fb1feff748bc08adfe5f47bc41cd.jpg', '黑色');
INSERT INTO `yohoyi` VALUES (00000008, 'https://img10.static.yhbimg.com/goodsimg/2019/05/14/17/01247ca295f996d06f0a95d33e34b7baff.jpg', 139.00, 'TEEBACCO 字母印花短袖T恤', 99.00, 'https://img10.static.yhbimg.com/goodsimg/2019/05/14/17/01247ca295f996d06f0a95d33e34b7baff.jpg', '黄色,白色,蓝色');
INSERT INTO `yohoyi` VALUES (00000009, 'https://img11.static.yhbimg.com/goodsimg/2019/05/24/16/017432a56aa88b8a2b22f40453ef383435.jpg', 259.00, 'Flavours Don’t Lie 圆领短袖T恤“we live we die”', 199.00, 'https://img11.static.yhbimg.com/goodsimg/2019/05/24/16/017432a56aa88b8a2b22f40453ef383435.jpg', '花色');
INSERT INTO `yohoyi` VALUES (00000010, 'https://img12.static.yhbimg.com/goodsimg/2019/05/21/17/022dc93dfb7d0441045b168db83b97ecb7.jpg', 259.00, ' Flavours Don’t Lie 圆领短袖T恤“危险人物”', 199.00, 'https://img12.static.yhbimg.com/goodsimg/2019/05/21/17/022dc93dfb7d0441045b168db83b97ecb7.jpg', '白色,黑色');
INSERT INTO `yohoyi` VALUES (00000011, 'https://img12.static.yhbimg.com/goodsimg/2019/05/23/15/02618cd577738309af12e014bbc243b268.jpg', 299.00, '试验品 中国风文字印花短袖T恤', 199.00, 'https://img12.static.yhbimg.com/goodsimg/2019/05/23/15/02618cd577738309af12e014bbc243b268.jpg', '白色,黑色');
INSERT INTO `yohoyi` VALUES (00000012, 'https://img13.static.yhbimg.com/goodsimg/2019/04/15/15/027dcc580cd1ced8ead0a7fb6a91f2c771.jpg', 199.00, 'Improper 校园LOGO印花短袖T恤', 79.00, 'https://img13.static.yhbimg.com/goodsimg/2019/04/15/15/027dcc580cd1ced8ead0a7fb6a91f2c771.jpg', '粉色');
INSERT INTO `yohoyi` VALUES (00000013, 'https://img13.static.yhbimg.com/goodsimg/2019/06/11/10/025a7ae7f23b2da8f1a5e356adc05594d8.jpg', 599.00, 'MADNESS LAYERED PRINT TEE', 399.00, 'https://img13.static.yhbimg.com/goodsimg/2019/06/11/10/025a7ae7f23b2da8f1a5e356adc05594d8.jpg', '橄榄绿');
INSERT INTO `yohoyi` VALUES (00000014, 'https://img12.static.yhbimg.com/goodsimg/2019/06/28/14/02b244716c65d0fbba5d2b5ac275024513.jpg', 149.00, ' 曼城城民 x YOHO! 曼城亚洲行2019城民特别款纪念T恤', 99.00, 'https://img12.static.yhbimg.com/goodsimg/2019/06/28/14/02b244716c65d0fbba5d2b5ac275024513.jpg', '白色');
INSERT INTO `yohoyi` VALUES (00000015, 'https://img13.static.yhbimg.com/goodsimg/2019/06/13/18/02288d31e43da193f7a6523de5c4ebf580.jpg', 228.00, 'TYAKASHA塔卡沙 X POPEYE 大力水手联名系列 男女款灰白色插画短袖T恤', 189.00, 'https://img13.static.yhbimg.com/goodsimg/2019/06/13/18/02288d31e43da193f7a6523de5c4ebf580.jpg', '灰白色');
INSERT INTO `yohoyi` VALUES (00000016, 'https://img12.static.yhbimg.com/goodsimg/2019/06/26/15/029bfcd4ea1cb6daa70c0d09902b3f55db.jpg', 959.00, 'MADNESS COMBAT JOGGER PANTS', 499.00, 'https://img12.static.yhbimg.com/goodsimg/2019/06/26/15/029bfcd4ea1cb6daa70c0d09902b3f55db.jpg', '灰褐色');
INSERT INTO `yohoyi` VALUES (00000017, 'https://img10.static.yhbimg.com/goodsimg/2019/05/15/14/010d0ac2572075be2350465f44fc1daac5.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', 159.00, '『 有货独家 』FYP X 假笑男孩联名头像印花短袖T恤', 129.00, 'https://img10.static.yhbimg.com/goodsimg/2019/05/15/14/010d0ac2572075be2350465f44fc1daac5.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', '白色,黑色');
INSERT INTO `yohoyi` VALUES (00000018, 'https://img10.static.yhbimg.com/goodsimg/2019/06/18/01/01212d5b81725e8a1462fef6d1deb1b652.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', 539.00, 'HUMAN MADE 圆领印花T恤 3件装', 399.00, 'https://img10.static.yhbimg.com/goodsimg/2019/06/18/01/01212d5b81725e8a1462fef6d1deb1b652.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', '白色');
INSERT INTO `yohoyi` VALUES (00000019, 'https://img11.static.yhbimg.com/goodsimg/2019/06/24/16/01f88d2b56b752eaadd89eb29bf0e13c82.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', 399.00, 'Dickies 左袖印花撞色拼接短袖Polo衫', 299.00, 'https://img11.static.yhbimg.com/goodsimg/2019/06/24/16/01f88d2b56b752eaadd89eb29bf0e13c82.jpg?imageMogr2/thumbnail/280x382/background/d2hpdGU=/position/center/quality/80', '红色,白色');
INSERT INTO `yohoyi` VALUES (00000020, 'https://img13.static.yhbimg.com/goodsimg/2018/01/08/13/021680b5099176a1354774b256d58057f3.jpg', 478.00, 'Genanx 英文贴布绣章飘带五分袖T恤', 238.00, 'https://img13.static.yhbimg.com/goodsimg/2018/01/08/13/021680b5099176a1354774b256d58057f3.jpg', '白色');

SET FOREIGN_KEY_CHECKS = 1;
