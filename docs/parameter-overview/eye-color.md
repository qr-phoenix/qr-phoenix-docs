---
id: eye-color
title: Eye Color
sidebar_label: Eye Color
sidebar_position: 9
---

**Parameter:** `eye-color[]`

**Default:** `NULL`

The `eye-color[]` parameter sets the colors for the QR code's eyes.

The value takes the format of an array of the colors of the individual eyes in the QR code.

Each array item represents an eye in the generated QR Code and must follow the structure: eyeNumber, innerRed, innerGreen, innerBlue, outterRed=0, outterGreen=0, outterBlue=0


### Example

GET
```http
/api/qr?data=sample-data&eye-color[]=0,100,205,5,0,255,10&eye-color[]=1,200,25,55,85,0,10&eye-color[]=2,200,185,25,30,80,91
```



### Response(s)
<img class="example-qr" src="/img/examples/eye-color.png" alt="Eye Color Example" />
<hr />

