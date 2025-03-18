# ResetID Extension for Cursor

Extension này cho phép bạn reset Cursor Machine ID thông qua Command Palette.

## Tính năng

- Reset Cursor Machine ID với một lệnh đơn giản
- Tích hợp với Command Palette

## Cách sử dụng

1. Nhấn `Ctrl+Shift+P` để mở Command Palette
2. Gõ "ResetID" 
3. Chọn "ResetID: Reset Machine ID" từ danh sách
4. Extension sẽ thực thi script reset và hiển thị thông báo khi hoàn thành

## Cài đặt

1. Copy tất cả files vào thư mục extensions của Cursor:
   - Windows: `%USERPROFILE%\.cursor\extensions\cursor-reset-id`
   - macOS: `~/.cursor/extensions/cursor-reset-id`
   - Linux: `~/.cursor/extensions/cursor-reset-id`

2. Khởi động lại Cursor

## Yêu cầu

- Cursor phiên bản 1.80.0 trở lên
- Hệ điều hành Windows 

npm install -g @vscode/vsce

vsce package

drap drop new file.vsix to extenrion