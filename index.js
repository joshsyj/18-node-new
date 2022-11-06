const token = '62_MlT7jFCEs4ujGPEumDph2hlt9izdu8kQrAq8x4nEci2dA3vCJiBWRE6piL5_NoF1ZoA-e-GG8e8UMC6pVc0KL2fzk2YCi3uRCC-5Vw'
const key = 'iamsEcNsDez9eniXkQHlAw=='
var c = {
    "path": "/nft-web/v1.2/nft/album/info?albumId=100514774",
    "method": "GET",
    "header": {
        "X-WX-EXCLUDE-CREDENTIALS": "unionid, cloudbase-access-token, openid",
        "X-WX-REGION": "ap-shanghai",
        "X-WX-GATEWAY-ID": "unhand-pro-h5-4g1rzz5af5f29905",
        "HOST": "api-mgw.18art.art",
        "Accept-Language": "zh-CN",
        "USER-TOKEN": "vla41UfTImtocFIAGTNR/VwZhTKGGxYqP+wfDTvTZVs=",
        "DEVICE-ID": "cdde6b894a4146558df2babb3960f3ff",
        "TRANS-ID": "7eb0548955234740ab37163348ee60d6",
        "x-cloudbase-phone": "13641836690",
        "PLATFORM-TYPE": "h5_browser",
        "content-type": "application/json",
        "User-Agent": ""
    },
    "timeout": 30000,
    "dataType": "json",
    "context": {
        "tunnelTimeNoCSNetCost": 0,
        "apiStartTime": new Date().getTime(),
        "warmStartTime": new Date().getTime()
    },
    "stats": {
        "apiStartTime": new Date().getTime(),
        "tsBeforeCallContainerImpl": new Date().getTime(),
        "getServiceEndpoint": 0
    },
    "responseType": "text"
}

var i = {
    "url": `https://web-001.cloud.servicewechat.com/wxa-qbase/container_service?token=${token}`,
    "domain": "web-001.cloud.servicewechat.com",
    "token": token,
    "http": true,
    "key": key,
    "timestamp": new Date().getTime(),
    "expiresTs": 1667633941609
}



var E = {
    "X-WX-ENCRYPTION-VERSION": 2,
    "X-WX-ENCRYPTION-TIMESTAMP": i.timestamp + "",
    "X-WX-COMPRESSION": "snappy",
    "X-WX-USER-TIMEOUT": c.timeout || "",
    "X-WX-LIB-BUILD-TS": 1655460325335,
    "X-WX-RESPONSE-CONTENT-ACCEPT-ENCODING": "PB, JSON",
    "Content-Type": "application/octet-stream"
}

let getList = ()=>{
    o = r(4)
    var p = o.getSDK(e.identifiers)
}

t.request = function(e) {
    var t = e.url
      , r = e.data
      , n = e.dataType
      , o = e.header
      , s = e.responseType
      , u = e.method || "POST"
      , f = new (a.getAdapter("reqClass"));
    f.withCredentials = !0,
    f.responseType = s || "text",
    f.timeout = 6e4,
    f.open(u, t, !0),
    f.onreadystatechange = function() {
        if (4 === f.readyState) {
            f.onreadystatechange = null;
            var t = f.status;
            if (0 === t)
                ;
            else {
                var r = {
                    errMsg: "request:ok",
                    header: i.formatHeader(f),
                    statusCode: t
                };
                if (r.data = "arraybuffer" === s ? f.response : f.responseText,
                "json" === n)
                    try {
                        r.data = JSON.parse(r.data)
                    } catch (t) {
                        return r.errMsg = "request:fail JSON parse response body error: " + t,
                        void i.callbackFailComplete(e, r)
                    }
                i.callbackSuccessComplete(e, r)
            }
        }
    }
    ,
    f.onerror = function(t) {
        i.callbackFailComplete(e, {
            errMsg: "request:fail " + f.status + " " + f.statusText + " " + t
        })
    }
    ,
    f.ontimeout = function() {
        i.callbackFailComplete(e, {
            errMsg: "request:fail timeout"
        })
    }
    ,
    f.onabort = function() {
        i.callbackFailComplete(e, {
            errMsg: "request:fail abort"
        })
    }
    ;
    var c = o || {};
    for (var l in c["Content-Type"] || "json" !== n || (c["Content-Type"] = "application/json"),
    c)
        if (c.hasOwnProperty(l))
            try {
                f.setRequestHeader(l, c[l])
            } catch (t) {
                return void i.callbackFailComplete(e, {
                    errMsg: "request:fail Failed to execute 'setRequestHeader' …XMLHttpRequest': Value is not a valid ByteString."
                })
            }
    try {
        f.send(r)
    } catch (t) {
        i.callbackFailComplete(e, {
            errMsg: "request:fail " + t
        })
    }
    return {
        abort: function() {
            try {
                f.abort(),
                i.callbackSuccessComplete(e, {
                    errMsg: "request:ok"
                })
            } catch (t) {
                i.callbackFailComplete(e, {
                    errMsg: "request:fail abort"
                })
            }
        }
    }
}

t.base64ToArrayBuffer = function(e) {
    for (var t = function(e) {
        var t = String(e).replace(/=+$/, "")
          , r = "";
        if (t.length % 4 == 1)
            throw new Error('"atob" failed');
        for (var n = 0, i = void 0, o = void 0, a = 0; o = t.charAt(a++); ~o && (i = n % 4 ? 64 * i + o : o,
        n++ % 4) ? r += String.fromCharCode(255 & i >> (-2 * n & 6)) : 0)
            o = y.indexOf(o);
        return r
    }(e), r = t.length, n = new Uint8Array(r), i = 0; i < r; i++)
        n[i] = t.charCodeAt(i);
    return n.buffer
}

p.request({
    url: M,
    method: "POST",
    header: E,
    data: L.buffer,
    dataType: "arraybuffer",
    responseType: "arraybuffer",
    timeout: c.timeout,
    enableHttp2: !0,
    success: function(e) {
        try {
            for (var r in e.header)
                if ("x-nws-log-uuid" === r.toLowerCase() && (c.verbose && console.log("[cloud.callContainer] x-nws-log-uuid " + e.header[r]),
                c.stats.ecdnId = e.header[r]),
                "x-edge-timing" === r.toLowerCase() && (c.stats.ecdnEdgeTiming = e.header[r]),
                "x-wx-system-error" === r.toLowerCase()) {
                    var n = Number(e.header[r]);
                    return 85104 === n && f.ServiceEndpoint.invalidateService("container"),
                    void d({
                        errCode: n,
                        errMsg: t.API_NAME + ":fail system error. code: " + n
                    })
                }
            if (c.verbose && console.warn("res", e),
            m.profile = e.profile,
            m.httpRequest = Date.now() - S,
            200 === e.statusCode) {
                var i = e.data;
                m.responseBodyBytes = i.byteLength,
                S = Date.now();
                var o = D.AES_CBC.decrypt(new Uint8Array(i), x, void 0, x);
                m.decrypt = Date.now() - S,
                c.verbose && console.warn("decrypt done");
                var u = "pb";
                for (var h in e.header)
                    if ("x-wx-compression" === h.toLowerCase() && "snappy" === e.header[h] && (S = Date.now(),
                    o = R.uncompress(o),
                    m.uncompress = Date.now() - S),
                    "x-wx-response-content-encoding" === h.toLowerCase() && "json" === e.header[h].toLowerCase() && (u = "json"),
                    "x-wx-server-timing" === h.toLowerCase()) {
                        var _ = e.header[h] || ""
                          , p = _.split(",");
                        p.length >= 2 && (m.serverStartTs = Number(p[0]),
                        m.serverEndTs = Number(p[1]))
                    }
                S = Date.now();
                var E = void 0;
                if ("json" === u) {
                    var y = JSON.parse(s.arrayBufferToString(o));
                    E = {
                        statusCode: y.status_code,
                        header: y.header,
                        bodyBuffer: y.body_buffer,
                        bodyString: y.body_string
                    },
                    m.decodeJson = Date.now() - S
                } else
                    E = a.HTTPResponse.decode(o),
                    m.decodePb = Date.now() - S;
                S = Date.now();
                var v = void 0;
                if ("json" === c.dataType) {
                    var A = E.bodyString || (E.bodyBuffer ? s.arrayBufferToString(E.bodyBuffer) : "{}");
                    try {
                        v = JSON.parse(A)
                    } catch (e) {
                        return void d({
                            errCode: -1,
                            errMsg: t.API_NAME + ":fail [call_id " + g + "] parse response body as JSON failed: " + e + ". input: " + A
                        })
                    }
                } else
                    v = "text" === c.responseType ? E.bodyString || (E.bodyBuffer ? s.arrayBufferToString(E.bodyBuffer) : "") : "arraybuffer" === c.responseType && E.bodyString ? s.stringToArrayBuffer(E.bodyString) : E.bodyString || E.bodyBuffer;
                m.decodeBody = Date.now() - S,
                l({
                    statusCode: E.statusCode,
                    header: E.header.reduce(function(e, t) {
                        return e[t.key + ""] = t.value + "",
                        e
                    }, {}),
                    data: v,
                    stats: m,
                    callID: g,
                    errMsg: t.API_NAME + ":ok"
                })
            } else
                d({
                    errCode: -9999,
                    errMsg: t.API_NAME + ":fail [call_id " + g + "] system conn status not 200"
                })
        } catch (e) {
            d({
                errCode: -1,
                errMsg: t.API_NAME + ":fail [call_id " + g + "] error while processing internal response " + e
            })
        }
    },
    fail: function(e) {
        d(n.__assign(n.__assign({}, e), {
            errCode: -9999,
            errMsg: e.errMsg.replace(/^request/, t.API_NAME)
        }))
    }
})