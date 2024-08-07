---
id: gradient
title: Gradient
sidebar_label: Gradient
sidebar_position: 7
---

**Parameter:** `gradient`

**Default:** `NULL`

The `gradient` parameter allows you to apply a gradient effect to the QR code.

The gradient value should be specified in r,g,b,a,r,g,b,a format. Example: "0,0,0,100,255,0,0,100"

### Example

GET
```http
/api/qr?data=sample-data&gradient=20,100,80,250,180,10
```

### Response(s)
<img class="example-qr" src="/qr-phoenix-docs/img/examples/gradient.png" alt="Gradient Example" />
<hr />


