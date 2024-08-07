---
id: style
title: Style
sidebar_label: Style
sidebar_position: 4
---

**Parameter:** `style`

**Default:** `square`


The `style` parameter the style of the QR code modules. Possible values:

- `square`
- `dot`
- `round`

### Example

GET
```http
/api/qr?data=sample-data&style=dot
```
GET
```http
/api/qr?data=sample-data&style=square
```



### Response(s)
<img class="example-qr" src="/qr-phoenix-docs/img/examples/style-dot.png" alt="Style Example" />
<img class="example-qr" src="/qr-phoenix-docs/img/examples/style-square.png" alt="Style Example" />

<hr />
