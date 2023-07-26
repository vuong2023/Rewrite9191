<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>脚本示例</title>
    <style>
        body {
            background-color: pink; /* 设置背景颜色为粉色 */
        }
        .main-content {
            text-align: center;
            margin-top: 50px;
        }
        .button {
            background-color: red; /* 设置按钮颜色为红色 */
            color: white; /* 设置按钮文字颜色为白色 */
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        .info {
            color: blue; /* 设置文本颜色为蓝色 */
            margin-top: 20px;
        }
        .footer {
            color: red; /* 设置文本颜色为红色 */
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="main-content">
        <button class="button" onclick="loadExternalPage()">脚本仅供学习</button>
        <div class="info">脚本作者@ios151</div>
    </div>
    <div class="footer">脚本仅供学习，禁止用于非法用途。</div>

    <script>
        function loadExternalPage() {
            // 使用JavaScript在新窗口中打开指定链接
            window.open("http://124.220.36.211/xyiosQQ.html");
        }
    </script>
</body>
</html>
