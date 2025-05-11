use std::net::UdpSocket;

#[tauri::command]
pub async fn send_udp_broadcast(id: String) {
    if let Ok(socket) = UdpSocket::bind("0.0.0.0:0") {
        let _ = socket.set_broadcast(true);
        let _ = socket.send_to(id.as_bytes(), "255.255.255.255:34254");
    }
}
