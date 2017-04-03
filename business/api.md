## 0 signin/signup

 * 0.1 POST /signin: 
   * params:username;password
   * return:0/1/2

 * 0.2 POST /signup:
   * params:useraccount;password;
   * return:0/1/2

## 1 fixedLooking

 * 1.1 GET /foodComment/listByLocalAndCondition
   * params:local;
   * return:FoodCommentList

 * 1.2 GET /foodComment/listByUserCollectionAndCondition
   * params:useraccount
   * return:userCollection

 * 1.3 GET /foodComment/img/#foodCommentId/#imgID
   * params:foodCommentID;imgID
   * return:img

 * 1.4 GET /foodComment/comment/#foodComentID
   * params:foodCommentID
   * return:thisFCcommentList
   * direct to 「食评详情」页,显示comments和评论输入框 

 * 1.5 GET /foodComment/#socialID
   * params:socialID
   * return:0/1/2
   * direct to「食评详情」页

## 2 Looking
 
 * 2.1 GET /looking/listByLocalAndCondition
   * params:local
   * return:Looking

 * 2.2 GET /looking/#socialID
   * params:socialId
   * direct to「寻食详情」页

 * 2.3 POST /looking/beAVendor/#socialID/USER(temporary)
   * params:socialId;USER
   * return:0/1/2

 * 1.10; 1.11; 1.12; 1.13; 1.14

## 3 Post
 
 * 3.1 POST /post/LOOKING
   * params:LOOKING
   * return:0/1/2

 * 3.2 POST /post/FOODCOMMENT
   * params:FOODCOMMENT
   * return:0/1/2

 * 3.3 POST /post/INVITING
   * params:INVITING
   * return:0/1/2

 * 1.10 POST /post/Comment/
   * params:COMMENT
   * return:0/1/2

 * 1.11 GET /post/like/#socialID
   * params:socialID;user
   * return:0/1/2

 * 1.12 GET /post/collect/#socialID
   * params:socialID;user
   * return:0/1/2

## 4 Track
  
 * 4.1 GET /track/foodcomment/#userid
   * params:userid
   * return:myFCList

 * 4.2 GET /track/looking/#userid
   * params:userid
   * return:myLookingList

 * 4.3 GET /track/postcomment/#userid
   * params:userid
   * return:myPCList
  
 * 4.4 GET /track/like/#userid
   * params:userid
   * return:myLikeList

 * 1.14

## 5 Personal

 * 1.8 GET /user/#socialID
   * params:useraccount
   * return:0/1/2
   * direct to 「美食家详情」页

 * 5.2 GET /user/collection/#userid
   * params:userid
   * return:myCollectionList

 * 5.3 PUT /user/update
   * params:USER
   * return:0/1/2

## 6 Base

 * 1.13 GET /base/like/#socialID
   * params:socialID
   * return:likeList

 * 1.14 GET /base/comment/#socialID
   * params:socialID
   * return:commentList

## 7 Others

* 1.6 GET /getLocation
   * gps 

 * 1.7 GET /selectLocation
   * return:0/1/2
   * direct to 「地点切换」

 * 1.9 GET /shop/#socialID
   * params:shopId
   * return:0/1/2   
   * direct to 「店铺详情」页

