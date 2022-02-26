var Images = {
    imgsDB: // nhập ảnh từ file img
        [
            ["Cat 1.jpg", "Cat 2.jpg", "Cat 3.jpg", "Cat 4.jpg", "Cat 5.jpg"],
            ["Gau 1.jpg", "Gau 2.jpg", "Gau 3.jpg", "Gau 4.jpg", "Gau 5.jpg"],
            ["Khi 1.jpg", "Khi 2.jpg", "Khi 3.jpg", "Khi 4.jpg", "Khi 5.jpg"]
        ],
    imgpos: [0, 0, 0, 0, 0]
}
function setImagesRandom() {
    for (var i=1; i <= 5; i++) // Bộ đếm vòng lặp cho 5 ảnh trong 1 Topic của 3 Topic
    {
        let topicImg = Math.floor ((Math.random() * 3)); //biến topicImg chạy từ 0 đến 2 (giả thuyết là không bao giờ đạt được 1)
        replaceImage(i, topicImg); // Hàm này được kích hoạt ở dưới thông qua Math.random sẽ đánh dấu được mảng của i
        //Hoàn thành hết hàm này nó sẽ in ra các bộ số ngẫu nhiên (1,2); (2,0); ...;(5,1) chẳng hạn rồi thế vào hàm
        //replaceImage
    }
}
function replaceImage(index, topicImg) { // Hàm chuyển ảnh nhận giá trị từ topicImg mà chạy
    Images.imgpos[index - 1] = topicImg; // Với topic chạy ra bao nhiêu thì [index - 1] sẽ ra giá trị tương ứng  và ngược lại
    // Ví dụ vào bộ số (1/2) ta có  Images.imgpos[index - 1] nhận giá trị 0, ảnh C1, topicImg cũng nhận 0
    //Truy xuất mảng, phải để là index - 1, vì ảnh thứ nhất luôn nằm ở vị trí số 0, i chạy từ 1, nên imgpos mới bắt đầu chạy tù 1-1=0
    var imageName = "img" + index.toString();  // Ép chuỗi img1, img2, img3...v...v trong HTML, ví dụ index nhận 1
    document.getElementById(imageName).setAttribute("src", "./img/" + Images.imgsDB[topicImg][index - 1]);
    //  Images.imgsDB[topicImg][index - 1] nghĩa là truy xuất 2 phần tử trong mảng có vị trí [topicImg][index - 1] từ folder trên
    // Đầu tiên nó truy cập vào file /img/ rồi tiếp theo là lấy tên trùng chuỗi đã liệt kê ở mảng
    // lấy vị trí của mảng gán vào 1 cái id đã lấy lúc nãy xong ghép với folder img trong này
    // TopicImg lấy vị trí từ 0 - 2 tức ảnh 1 đến ảnh 3, còn index truy xuất từ 0-4 tức ảnh 1 đến 5
}
function imageClick(index) {  // Gọi hàm click và đâu thì nhảy số thứ tự của mảng đến đó
    var topicImg = Images.imgpos[index - 1];
    if (topicImg === 0) {
        replaceImage(index, 1); // chuyển ảnh lần 2
    }
    else if (topicImg === 1) {
        replaceImage(index, 2); //chuyển ảnh lần 3
    }
    else {
        replaceImage(index, 0);// chuyển ảnh lần 1
    }
    checkDone();
}
function checkDone() {  // Kiếm tra đúng sai
    var check = true;    // Đây được mặc định là luôn đúng
    for ( var i = 1; i < 5; i++) {
        if (Images.imgpos[i] !== Images.imgpos[i -1]) { // Ở đây nói đến thứ tự 5 tấm ảnh trong cùng 1 TopicImage
            check = false; // Đây là khi lấy số thứ tự trong mảng imgpos[i] có bất kỳ 1 kết quả nào
            // chỉ đúng khi mà cả 5 tấm ảnh ở vị trí từ 0 -> 4 có cùng 1 TopicImage như cùng Topic 0, 1, hoặc 2
        }
    }
    if (check == false) {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "black 2px 3px 3px";
        } // Khi chưa kết thúc thì chưa in kết quả ra bài thì tất cả các shadow đều để là màu đen
        document.getElementById("result").innerHTML = "";
    } else {
        for (var i = 1; i <= 5; i ++) {
            document.getElementById("img"+i).style.boxShadow = "green 4px 4px 9px";
            //khi mà điều kiện check thỏa mãn thì tất cả shadow của các ảnh đều là green
        }
        document.getElementById("result").innerHTML = "Done!";
    }
}
function main(){
    setImagesRandom();  // quay lên trên đầu xem
}


window.onload = main(); // Cái này là cái chạy đầu tiên, xong ra cái funtion main

