## signin/signup
 * POST /signin: 
  * params:username;password
  * return:0/1/2
 * POST /signup:
  * params:useraccount;password;
  * return:0/1/2

## fixedLooking
 * GET /getLocation
  * gps 
 * GET /listFoodCommentByLocalAndCondition
  * params:local;
  * return:FoodCommentList
 * GET /listUserCollectionAndCondition
  * params:useraccount
  * return:userCollection
 * GET /viewFoodCommentImg/#foodCommentId/#imgID
  * params:foodCommentID;imgID
  * return:img
 * GET /listFCComment/#foodComentID
  * params:foodCommentID
  * return:thisFCcommentList
  * direct to 「食评详情」页,显示comments和评论输入框 
 * POST /postComment/
  * params:COMMENT
  * return:0/1/2
 * GET /like/#socialID
  * params:socialID;user
  * return:0/1/2
 * GET /collect/#socialID
  * params:socialID;user
  * return:0/1/2
 * GET /selectLocation
  * direct to 「地点切换」
 * GET /foodCirtic/#useraccount
  * params:useraccount
  * direct to 「美食家详情」页
 * GET /shop/#shopID
  * params:shopId
  * direct to 「店铺详情」页
 * GET /foodComment/#commentID
  * params:commentId
  * direct to 「食评详情」页

## Looking
 * GET /list

## post


## track

## personal