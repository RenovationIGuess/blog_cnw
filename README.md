# CNW Blog Web

## Table of Contents

- [System requirements](#system-requirements)
- [Production && Domains](#production-and-domains)
- [Setup and Configuration](#setup-and-configuration)
- [Possible encounter errors](#possible-encounter-errors)
- [License](#license)

## System requirements

- Docker >= 20.10
- Docker compose plugin

## Production && Domains

- Client: `http://localhost:3000`
- Server: `http://localhost:3000/api/`
- Phpmyadmin: `http://phpmyadmin.localhost:3000`
- Traefik: `http://traefik.localhost:3000`

## Setup and Configuration

Sau khi clone project về chạy câu lệnh:

```sh
make devup
```

Câu lệnh sẽ tạo file `.env` ở thư mục root bao gồm các biến môi trường về domain và database có thể custom chúng bằng cách chỉnh sửa file này

Cài đặt các dependencies:

```sh
make devinstall
```

Command to update both client and server-side dependencies:
<br/>
Câu lệnh để update dependencies:

```sh
make devupdate
```

Câu lệnh để migrate database:

```sh
make devmigrate
```

Câu lệnh để seed fake data:

```sh
make devfresh
```

Câu lệnh để vào shell hay command hoặc cj đó k bt gọi sao:

```sh
docker exec -it memoapp-server-1 sh
docker exec -it memoapp-client-1 sh
```

Câu lệnh để cấp quyền chỉnh sửa file nếu bị VS Code hỏi

```sh
sudo chown -R username /path/to/working/directory
```

`server` sẽ được khởi chạy ở chế độ `--detached` có thể truy cập theo đường dẫn `http://localhost:3000/api/`
<br>
<br>

Khởi chạy dự án:

```sh
make devrun
```

Có thể truy cập giao diện người dùng `client` theo đường dẫn `http://localhost:3000`
<br>
<br>
Có thể truy cập `phpmyadmin` để xem dữ liệu trong database theo đường dẫn: `http://phpmyadmin.localhost:3000` với credential mặc định của DB là:

```
DB_USERNAME=root
DB_PASSWORD=admin
```

Tắt ứng dụng:

```sh
make devdown
```

Xóa tất cả docker images, container:

```sh
make devclean
```

## Possible encounter errors

Lỗi: `Docker is not running.` hoặc `Cannot connect to the Docker daemon at unix:///home/<you>/.docker/desktop/docker.sock.` chạy câu lệnh sau đây ở thư mục gốc:

```sh
export DOCKER_HOST=unix:///var/run/docker.sock
```

Lỗi: `The stream or file "/storage/logs/laravel.log" could not be opened` chạy câu lệnh sau đây ở thư mục `server`:

```sh
sudo chmod -R ugo+rw storage
```

## License

This project is licensed under the [MIT License](LICENSE).
