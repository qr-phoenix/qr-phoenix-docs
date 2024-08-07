---
id: format
title: Format
sidebar_label: Format
sidebar_position: 2
---

**Parameter:** `format`

**Default:** `png`

The `format` parameter specifies the image format of the generated QR code. Possible values are:
- `png`
- `svg`
- `eps`

### Example

GET
```http
/api/qr?data=sample-data&format=png
```

### Response(s)

<img class="example-qr" src="/qr-phoenix-docs/img/examples/format.png" alt="Format Example" />

<hr />

