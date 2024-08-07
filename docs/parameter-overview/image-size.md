---
id: image-size
title: Image Size
sidebar_label: Image Size
sidebar_position: 13
---

**Parameter:** `image-size`

**Default:** `0.3`

The `image-size` parameter controls the size of the embedded image as a percentage of the QR code size (between 0 and 1).

### Example

GET
```http
/api/qr?data=sample-data&image-url=https://picsum.photos/20&image-size=0.2
```

### Response(s)
<img class="example-qr" src="/qr-phoenix-docs/img/examples/image-size.png" alt="Image Size Example" />
<hr />