#
# Quantumult X - Configuration - 2025
# Quantumult X 配置文件 2025
#
# Line started with ";" or "#" or "//" shall be comments.
# 以 ";" 或 "#" 或 "//" 开头的行为注释行
# 
# SS-URI scheme can be found at https://shadowsocks.org/doc/sip002.html
# SS-URI scheme 请参考 https://shadowsocks.org/doc/sip002.html
#

#
# Quantumult uses HEAD method send HTTP request to the server_check_url to test the proxy's status, the results should be two latencies, the first one is TCP handshake to the proxy server, the second one is the total time that Quantumult successfully received the HTTP response from the server_check_url. The lightning icon means that the TCP fast open is successful. If the server in section [server_local] or section [server_remote] has its own server_check_url, its own server_check_url will be used instead of the server_check_url in section [general].
#
# Quantumult 使用 HTTP HEAD 方法对测试网址 server_check_url 进行网页响应性测试(测试结果为通过该节点访问此网页获得 HTTP 响应所需要的时间)，来确认节点的可用性
# Quantumult 界面中的延迟测试方式均为网页响应性测试，显示的最终延迟均为通过对应节点访问测试网页获得 HTTP 响应所需要时间
# 由于 Trojan 协议为无响应校验协议，使得 HTTP 检测方式即使获得了 HTTP 响应，也不代表节点一定可用
#

#
# The dns_exclusion_list contains the domains that disabled the placeholder IP(240.*), domains that are not in the dns_exclusion_list all have placeholder IP enabled and have turned on the resolve-on-remote setting.
# DNS 排除列表 (dns_exclusion_list) 包含禁用了占位符 IP (240.*) 的域名。所有未包含在 dns_exclusion_list 中的域名均启用了占位符 IP，并已开启远程解析设置 (resolve-on-remote)
#
# udp_whitelist 包含目的地的 UDP 端口, 如果留空则默认表示所有的端口都在 udp_whitelist 中。如果带有目的地端口 UDP 包 (通过 Quantumult tunnel interface) 不在 udp_whitelist 中，该 UDP 包将会被丢弃. 此项设置不会影响策略或代理服务器
#
# Quantumult X 将不会处理向 excluded_routes 列表中请求的流量，当你每次修改这个配置时，最好重新启动你的设备
#
# resource_parser_url 的配置文件示例可以参考 https://raw.githubusercontent.com/crossutility/Quantumult-X/master/resource-parser.js
#
# 图标库 → Qure：https://github.com/Koolson/Qure/tree/master/IconSet 或 OrzMini：https://github.com/Orz-3/mini
#
# 最后更新时间[2024-12-28]
#
# Telegram: https://t.me/vexcso
#

[general]
# 设置用户头像的 URL，若不需要可禁用
profile_img_url = https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/GitHub.png
# 设置外部资源解析脚本的 URL，通常只有在特定需要时才使用
resource_parser_url = https://testingcf.jsdelivr.net/gh/KOP-XIAO/QuantumultX//Scripts/resource-parser.js
# 用于检测网络连通性的 URL，QX 启动时会检查该 URL
network_check_url = http://cp.cloudflare.com/generate_204
# 用于检测代理服务器是否正常的 URL，生成 204 状态的请求
server_check_url = http://cp.cloudflare.com/generate_204
# 设置检测代理服务器时使用的 User-Agent，通常只有在需要特定代理设置时才修改
;server_check_user_agent = Agent/1.0
# 设置代理检测的超时阈值，单位毫秒，这里是 5 秒
server_check_timeout = 5000
# 设置用于 DNS over HTTPS 请求的 User-Agent，例如模拟特定浏览器特征，若不使用 DoH 可禁用
;doh_user_agent = Mozilla/5.0
# 用于地理位置检查的 URL，检测地区访问规则时使用
geo_location_checker = http://ip-api.com/json/?lang=en-US, https://testingcf.jsdelivr.net/gh/KOP-XIAO/QuantumultX/Scripts/IP_API.js
# 基于特定条件切换 QX 的工作模式，通常用于 SSID 切换时触发代理模式
#running_mode_trigger = filter, filter, LINK_22E171:all_proxy, LINK_22E172:all_direct
# 设置 DNS 查询被排除域名时的响应行为
dns_exclusion_list = *.cmpassport.com, *.jegotrip.com.cn, *.icitymobile.mobi, id6.me, *.pingan.com.cn, *.cmbchina.com, *.localnetwork.uop, mfs.ykimg.com*.ttf, *.icbc.com.cn
# 设置 DNS 查询被排除域名时的响应行为，loopback 表示返回回环地址 127.0.0.1
;dns_reject_domain_behavior = loopback
# 设置不启用代理的 Wi-Fi SSID，当连接到这些 SSID 时，QX 会停止代理功能
;ssid_suspended_list = LINK_22E174, LINK_22E175
# 设置需要增强兼容性的 Wi-Fi SSID，用于解决某些 Wi-Fi 网络的兼容性问题
;enhanced_compatibility_ssid_list = LINK_22E174, LINK_22E175
# 设置需要增强兼容性的 Wi-Fi SSID，用于解决某些 Wi-Fi 网络的兼容性问题
# 设置允许通过代理的 UDP 端口，常见的如 DNS(53)、NTP(123)等
udp_whitelist = 53, 123, 1900, 80-443
# 设置丢弃的 UDP 端口，通常是用于某些广播或不必要的流量 如 SSDP 和 HTTP
;udp_drop_list = 1900, 80
# 排除的 IP 路由范围，通常是私有地址段或本地网络
excluded_routes = 192.168.0.0/16, 172.16.0.0/12, 100.64.0.0/10, 10.0.0.0/8
# 启用 ICMP 自动回复功能，当收到 ping 请求时，设备会自动回复
;icmp_auto_reply = true

#
# 为保证获得最佳的 DNS 解析性能体验，Quantumult X 默认总是从当前网络(系统配置)的 DNS 服务器获取解析结果，但你可以使用 no-system 参数来关闭此操作，但是必须至少定义一个 DNS 服务器，如  "server=223.5.5.5"
# DNS 解析结果仅用于 直连(direct)规则和判定 IP 分流条件，而不会用于 代理 的规则策略(而是会在远端解析)，Quantumult 不会获得目的 IP 和相关的域名
# 此处不允许将特定的域名指向 127.0.0.1. 如果你想将某个域名指向 127.0.0.1 如 example.com，你可以直接在 "filter_local" 中添加 "host, example.com, reject" 来实现。这一操作将会让域名的 DNS 结果返回 127.0.0.1
#

[dns]
circumvent-ipv4-answer = 127.0.0.1, 0.0.0.0
circumvent-ipv6-answer = ::
prefer-doh3
no-system
;no-ipv6
server = 223.5.5.5
server = 114.114.114.114
server = 119.29.29.29
server = 1.1.1.1
server = 8.8.8.8
# 如有需要，自行开启DoQ、DoH
doh-server = https://doh.pub/dns-query, https://9.9.9.9/dns-query, https://1.1.1.1/dns-query, https://dns.google/dns-query
doq-server = quic://dns.adguard.com, quic://dns.nextdns.io, quic://1.1.1.1, quic://dns.google
# 为特定域名设置解析服务器
;server = /*.taobao.com/223.5.5.5
;server = /*.tmall.com/223.5.5.5
;server = /*.alipay.com/223.5.5.5
;server = /*.alicdn.com/223.5.5.5
;server = /*.aliyun.com/223.5.5.5
;server = /*.jd.com/119.28.28.28
;server = /*.qq.com/119.28.28.28
;server = /*.tencent.com/119.28.28.28
;server = /*.weixin.com/119.28.28.28
;server = /*.bilibili.com/119.29.29.29
;server = /hdslb.com/119.29.29.29
;server = /*.meituan.com/114.114.114.114
;server = /*.dianping.com/114.114.114.114
;server = /*.douyin.com/119.29.29.29
;server = /*.163.com/119.29.29.29
;server = /*.126.com/119.29.29.29
;server = /*.126.net/119.29.29.29
;server = /*.127.net/119.29.29.29
;server = /*.netease.com/119.29.29.29
;server = /*.mi.com/119.29.29.29
;server = /*.xiaomi.com/119.29.29.29
# 特定域名的解析服务器 Google
;server = /*.google.com/8.8.8.8
;server = /*.google.com/8.8.4.4
;server = /*.google.com/223.5.5.5
;server = /*.google.com/114.114.114.114
# 特定域名的解析服务器 Microsoft
;server = /*.microsoft.com/8.8.8.8
;server = /*.microsoft.com/8.8.4.4
;server = /*.microsoft.com/223.5.5.5
;server = /*.microsoft.com/114.114.114.114
# 特定域名的IP地址映射
;address = /www.google.com/172.217.163.110
;address = /www.youtube.com/142.250.72.206
;address = /x.com/104.244.42.129
;address = /www.twitter.com/104.244.42.65
;address = /www.facebook.com/31.13.71.36
;address = /instagram.com/157.240.229.174
;address = /github.com/140.82.114.4
;address = /mtalk.google.com/108.177.125.188
# 特定域名的IP地址映射 Microsoft
;address = /login.microsoftonline.com/40.90.189.182
;address = /outlook.office365.com/52.96.34.98
;address = /graph.microsoft.com/20.190.130.1
;address = /onedrive.live.com/13.107.42.11
;address = /office.com/52.96.55.234
;address = /azure.microsoft.com/20.189.173.0
;address = /msedge.api.cdp.microsoft.com/13.107.246.13
;address = /storeedgefd.dsx.mp.microsoft.com/13.107.5.88

[policy]
# Uncaptured 未捕获的规则，若前边的规则都没有被匹配到，则听从此策略组的规定
# 策略想走特定节点或套娃，请长按分流策略组自行添加节点/策略组

static=Uncaptured, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Final.png
static=OpenAI, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/ChatGPT.png
static=Google, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Google_Search.png
static=Apple, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Apple.png
static=Microsoft, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Microsoft.png
static=PayPal, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/PayPal.png
static=YouTube, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/YouTube.png
static=Spotify, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Spotify.png
static=X, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/X.png
static=Instagram, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Instagram.png
static=TikTok, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/TikTok.png
;static=Netflix, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Netflix.png
static=Telegram, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Telegram.png
static=Steam, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Steam.png
;static=Mainland, proxy, direct, img-url=https://testingcf.jsdelivr.net/gh/Koolson/Qure/IconSet/Color/Domestic.png

# 本地服务器部分, 自行添加即可
[server_local]

# 节点远程订阅
[server_remote]

# 远程分流规则策略组
[filter_remote]

# Server
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/OpenAI/OpenAI.list, tag=OpenAI, force-policy=OpenAI, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Google/Google.list, tag=Google, force-policy=Google, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Apple/Apple.list, tag=Apple, force-policy=Apple, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Microsoft/Microsoft.list, tag=Microsoft, force-policy=Microsoft, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Steam/Steam.list, tag=Steam, force-policy=Steam, update-interval=2592000, enabled=true
;https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/ChinaMax/ChinaMax.list, tag=Mainland, force-policy=Mainland, update-interval=2592000, enabled=true
# Social Media
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Telegram/Telegram.list, tag=Telegram, force-policy=Telegram, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Twitter/Twitter.list, tag=X, force-policy=X, update-interval=2592000, nabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Instagram/Instagram.list, tag=Instagram, force-policy=Instagram, update-interval=2592000, enabled=true
# Payment
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/PayPal/PayPal.list, tag=PayPal, force-policy=PayPal, update-interval=2592000, enabled=true
# Streaming Media
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/YouTube/YouTube.list, tag=YouTube, force-policy=YouTube, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Spotify/Spotify.list, tag=Spotify, force-policy=Spotify, update-interval=2592000, enabled=true
https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/TikTok/TikTok.list, force-policy=TikTok, update-interval=2592000, enabled=true
;https://testingcf.jsdelivr.net/gh/blackmatrix7/ios_rule_script/rule/QuantumultX/Netflix/Netflix.list, tag=Netflix, force-policy=Netflix, update-interval=2592000, enabled=true

# 本地分流规则(相同规则下，本地规则将覆盖远程规则，优先生效)
[filter_local]
host-keyword, serv00, direct
host-keyword, czzy, direct
host-keyword, czys, direct

# 绕过Apple企业证书过期
host, ocsp.apple.com, reject

# Bank
host-suffix, boc.cn, direct
host-suffix, 95599.cn, direct
host-suffix, abchina.com, direct
host-suffix, ccb.cn, direct
host-suffix, ccb.com, direct

# Google
;host, www.google.com, proxy
;host-keyword, adsite, reject
;host-wildcard, *.goo?le.com, proxy
;host-suffix, googleapis.com, proxy
;ip6-cidr, 2001:4860:4860::8888/32, direct

# Other
# 匹配以 "local" 结尾的域名(通常是局域网设备)
host-suffix,local,direct
# 本地回环地址(Loopback)，通常用于本机与自身通信
ip-cidr,127.0.0.0/8,direct
# 私有地址范围，属于第2类私有IP地址，通常用于局域网(LAN)内部
ip-cidr,172.16.0.0/12,direct
# 私有地址范围，属于第3类私有IP地址，常用于家庭和小型公司局域网(LAN)
ip-cidr,192.168.0.0/16,direct
# 私有地址范围，属于第1类私有IP地址，用于较大的企业局域网
ip-cidr,10.0.0.0/8,direct
# apple公司保留的ip地址段，通常用于苹果公司内部或与苹果相关的服务
ip-cidr,17.0.0.0/8,direct
# 共享地址空间，用于运营商级nat(网络地址转换)或与isp提供的私有ip地址池相关的流量
ip-cidr,100.64.0.0/10,direct
# 多播地址范围，用于组播传输，这些地址不用于单播(普通互联网流量)
ip-cidr,224.0.0.0/4,direct
# 用于文档和测试的地址段(RFC 5737)，这些地址段通常用于网络文档中的示例，不用于实际通信
ip-cidr,203.0.113.0/24,direct
# 同样用于文档和测试的地址段(RFC 5737)，用作互联网文档中的示例
ip-cidr,192.0.2.0/24,direct
# 来自 Apple Inc. (ASN 6185)
;ip-asn, 6185, proxy
# Geolite2 非CN IP
;geoip, !cn, proxy
# Geolite2 CN IP
geoip, cn, direct
# Geolite2 局域网
geoip, lan, direct
# 未捕获
final, Uncaptured

# 远程重写规则
[rewrite_remote]

# 本地复写规则
[rewrite_local]

# 构造请求，脚本区，自行找库添加，仅保留流媒体解锁查询
[task_local]
event-interaction https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/Scripts/streaming-ui-check.js, tag=流媒体解锁查询, img-url=arrowtriangle.right.square.system, enabled=true

# 后端服务器
[http_backend]

# 中间人攻击 (Man-in-the-Middle Attack) 流量拦截 辅助构造重写
[mitm]
