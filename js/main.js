// Lấy ra các phần tử cần thiết
const showSearchHistoryBtn = document.getElementById("showSearchHistoryBtn");
const searchHistory = document.getElementById("searchHistory");

// Thêm sự kiện click vào class btn
showSearchHistoryBtn.addEventListener("click", function () {
    // Kiểm tra trạng thái hiển thị của class header__search-history
    if (searchHistory.style.display === "block" || searchHistory.style.display === "") {
        searchHistory.style.display = "none"; // Ẩn class header__search-history
    } else {
        searchHistory.style.display = "block"; // Hiển thị class header__search-history
    }
});


// js detail
function changeMainImage(clickedImage) {
    var mainImage = document.querySelector('.detail__img--main img');
    var newImageUrl = clickedImage.src;

    mainImage.src = newImageUrl;
    mainImage.style.transform = 'scale(1)'; // Reset the scale to 1 when changing the main image

    mainImage.addEventListener('mouseenter', function () {
        mainImage.style.transform = 'scale(1.2)';
    });

    mainImage.addEventListener('mouseleave', function () {
        mainImage.style.transform = 'scale(1)';
    });
}

// document.addEventListener('DOMContentLoaded', function () {
document.addEventListener('DOMContentLoaded', function () {
    var descriptionItems = document.querySelectorAll('.detail__intro--extra__item');

    descriptionItems.forEach(function (descriptionItem) {
        var descriptionIcon = descriptionItem.querySelector('.fa-plus');
        var descriptionContent = descriptionItem.querySelector('.more__description');
        var additionalInformation = descriptionItem.querySelector('.more__additional--information')
        var reviewContent = descriptionItem.querySelector('.more__review');

        // Add click event listener to each description item
        descriptionItem.addEventListener('click', function () {
            // Toggle the visibility of the description content
            if (descriptionContent) {
                descriptionContent.style.display = (descriptionContent.style.display === 'none') ? 'block' : 'none';
            }

            // Toggle the visibility of additional information
            if (additionalInformation) {
                additionalInformation.style.display = (additionalInformation.style.display === 'none') ? 'block' : 'none';
            }
            if (reviewContent) {
                reviewContent.style.display = (reviewContent.style.display === 'none') ? 'block' : 'none';
            }

            // Toggle the plus and minus icons
            if (descriptionIcon) {
                if (descriptionIcon.classList.contains('fa-plus')) {
                    descriptionIcon.classList.remove('fa-plus');
                    descriptionIcon.classList.add('fa-minus');
                } else {
                    descriptionIcon.classList.remove('fa-minus');
                    descriptionIcon.classList.add('fa-plus');
                }
            }
        });
    });
});
// 
var currentImageIndex = 1;
var imageChangeInterval;

function handleContent(clickedNumber, contentType) {
    // Ẩn tất cả các div có class "nb-fourth__instruction-item__tool"
    var toolDivs = document.querySelectorAll('.nb-fourth__instruction-item__tool');
    toolDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    // Hiển thị div tương ứng với số đã được click
    var clickedToolDiv = document.querySelector('.nb-fourth__instruction-item:nth-child(' + clickedNumber + ') .nb-fourth__instruction-item__tool');
    if (clickedToolDiv) {
        clickedToolDiv.style.display = 'block';
    }

    if (contentType === 'image') {
        handleImages(clickedNumber);
        resetImageChangeInterval();
    } else if (contentType === 'tool') {
        // Nếu người dùng kích vào 2 hoặc 3, hiển thị công cụ tương ứng
        var toolNumber = parseInt(clickedNumber);
        handleTools(toolNumber);
        resetImageChangeInterval();
    }
}

function handleImages(index) {
    var images = document.querySelectorAll('.nb-fourth-img img');
    images.forEach(img => img.classList.remove('active'));

    var selectedImage = document.querySelector('.nb-fourth-img__' + index);
    selectedImage.classList.add('active');
}

function handleTools(toolNumber) {
    var tools = document.querySelectorAll('.nb-fourth__instruction-item__tool');
    tools.forEach(tool => tool.parentElement.classList.remove('tool-visible'));

    var clickedTool = document.querySelector('.nb-fourth__instruction-item:nth-child(' + toolNumber + ') .nb-fourth__instruction-item__tool');
    clickedTool.parentElement.classList.add('tool-visible');
}

function resetImageChangeInterval() {
    clearInterval(imageChangeInterval);
    imageChangeInterval = setInterval(changeImageAutomatically, 3000); // Change image every 3 seconds
}

function changeImageAutomatically() {
    currentImageIndex = (currentImageIndex % 3) + 1; // Cycle through 1, 2, 3
    handleImages(currentImageIndex);
}

// Set the initial image change interval
resetImageChangeInterval();
function showTool(number) {
    // Ẩn tất cả các div trước khi hiển thị div mong muốn
    hideAllTools();

    // Hiển thị div tương ứng với số được chọn
    const toolDiv = document.querySelector(`.nb-fourth__instruction-item__tool${number}`);
    if (toolDiv) {
        toolDiv.style.display = 'block';
    }
}

function hideAllTools() {
    // Ẩn tất cả các div
    const allTools = document.querySelectorAll('.nb-fourth__instruction-item__tool1, .nb-fourth__instruction-item__tool2, .nb-fourth__instruction-item__tool3');
    allTools.forEach(tool => {
        tool.style.display = 'none';
    });
}
