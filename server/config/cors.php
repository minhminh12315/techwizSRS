<?php 
return [
  
    'paths' => ['api/*'],   // Đường dẫn API mà CORS sẽ áp dụng, ở đây là tất cả các đường dẫn bắt đầu bằng 'api/'
    
   
    'allowed_methods' => ['*'],  // Cho phép tất cả các phương thức HTTP (GET, POST, PUT, DELETE, v.v.)
    
  
    'allowed_origins' => ['*'],   // Cho phép tất cả các nguồn (origin) gửi yêu cầu (chấp nhận yêu cầu từ bất kỳ domain nào)
    
   
    'allowed_origins_patterns' => [],  // Không có mẫu nguồn (origin pattern) cụ thể nào được định nghĩa
    
    
    'allowed_headers' => ['*'], // Cho phép tất cả các header được gửi cùng yêu cầu
    
   
    'exposed_headers' => [],  // Không có header nào được công khai (exposed) trong phản hồi
    
    
    'max_age' => 0, // Không giới hạn thời gian cho các yêu cầu CORS (caching của phản hồi)
    
   
    'supports_credentials' => true,  // hỗ trợ credentials (cookie, xác thực, v.v.)
];
