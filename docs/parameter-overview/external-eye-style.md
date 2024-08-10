---
id: external-eye-style
title: External Eye Style
sidebar_label: External Eye Style
sidebar_position: 11
---

**Parameter:** `external-eye-style`

**Default:** `square`

The `external-eye-style` parameter determines the shape of the QR code's external/outer eyes. Possible values are:

- `square`
- `circle`
- `rounded`
- `pointy`

### Example

GET
```http
/api/qr?data=sample-data&external-eye-style=pointy
```


### Response(s)
<img class="example-qr" src="/qr-phoenix-docs/img/examples/external-eye-style.png" alt="External Eye Style Example" />
<hr />

