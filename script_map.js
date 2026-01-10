
function initMap() {
    // 1. 定义香港中环的坐标（可替换为任意区域的经纬度）
    const hongKongCentral = { lat: 22.281805, lng: 114.158457 };

    // 2. 创建地图实例，绑定到容器并设置中心/缩放级别
    const map = new google.maps.Map(document.getElementById("map_mos"), {
        zoom: 15, // 缩放级别（1-20，数字越大越精细）
        center: hongKongCentral, // 地图中心定位到香港中环
        mapTypeId: google.maps.MapTypeId.ROADMAP // 地图类型（普通道路图）
    });

    // 3. 添加标记点（可选，标注具体位置）
    new google.maps.Marker({
        position: hongKongCentral,
        map: map,
        title: "香港中环" // 鼠标悬停显示的标题
    });
}

