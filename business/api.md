## 0 signin/signup

 * 0.1 POST /signin: 
   * params:username;password
   * return:0/1/2

 * 0.2 POST /signup:
   * params:useraccount;password;
   * return:0/1/2

## 1 fixedLooking

 * 1.1 GET /getLocation
   * gps 

 * 1.2 GET /listFoodCommentByLocalAndCondition
   * params:local;
   * return:FoodCommentList

 * 1.3 GET /listUserCollectionAndCondition
   * params:useraccount
   * return:userCollection

 * 1.4 GET /viewFoodCommentImg/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img

 * 1.5 GET /listFCComment/#foodComentID
   * params:foodCommentID
   * return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 

 * 1.6 POST /postComment/#socialID
   * params:COMMENT
   * return:0/1/2

 * 1.7 GET /like/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.8 GET /collect/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.9 GET /selectLocation
   * direct to 「地点切换」

 * 1.10 GET /foodCirtic/#useraccount
   * params:useraccount
   * direct to 「美食家详情」页

 * 1.11 GET /shop/#shopID
   * params:shopId
   * direct to 「店铺详情」页

 * 1.12 GET /foodComment/#socialID
   * params:socialID
   * direct to「食评详情」页

## 2 Looking
 
 * 2.1 GET /listLookingByLocalAndCondition
   * params:local
   * return:Looking

 * 2.2 GET /Looking/#socialID
   * params:socialId
   * direct to「寻食详情」页

 * 2.3

 * 1.6;1.7;1.8

 * 

## post


## track

## personal