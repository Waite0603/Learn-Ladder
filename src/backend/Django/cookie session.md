---
title: Django 表单组件 
icon: post
order: 4
date: 2024-06-06
---

###Cookie和Session简介

#### 1. Cookie

Cookies用于解决HTTP协议无状态的问题。当用户登录成功后，服务器会返回一些数据（cookie）给浏览器，浏览器将其保存。随后的请求中，浏览器自动携带cookie，服务器通过这些数据识别用户。

- **限制**: Cookie的数据量有限，通常不超过4KB，因此只能存储少量数据。

#### 2. Session

Session用于存储用户信息，与Cookie类似但更安全，因为数据存储在服务器端。不同服务器和框架有不同的实现方式。

#### 3. 使用场景

- **Server Side Session**: 通过cookie存储session ID，数据存储在服务器的session中。
- **Client Side Session**: Session数据加密后存储在cookie中。

### Django中操作Cookie

#### 设置Cookie

使用`response.set_cookie`方法，参数包括：

- `key`: Cookie的键名。
- `value`: Cookie的值。
- `max_age`: 生命周期（秒）。
- `expires`: 过期日期。
- `path`: 有效的路径。
- `domain`: 有效的域名。
- `secure`: 是否仅在HTTPS下有效。
- `httponly`: 是否禁止客户端脚本访问。

#### 删除Cookie

使用`delete_cookie`，将cookie的值设置为空字符串，并设置过期时间为0。

#### 获取Cookie

通过`request.COOKIES`获取，这是一个字典类型对象。

### Django中操作Session

Django的session默认存储在数据库中，通过session ID与cookie交互。操作session使用`request.session`，包括：

- `get`: 获取值。
- `pop`: 删除值。
- `keys`: 获取所有键。
- `items`: 获取所有项。
- `clear`: 清除session数据。
- `flush`: 删除session及cookie中的session ID。
- `set_expiry`: 设置过期时间。
- `clear_expired`: 清理过期session。

示例代码：

```python
# 获取所有cookie
cookies = request.COOKIES
for cookie_key, cookie_value in cookies.items():
    print(cookie_key, cookie_value)

# 使用session
def index(request):
    username = request.session.get('username')
    return HttpResponse('index')
```

### 修改Session的存储机制

Django默认将Session数据存储在数据库中。但您可以通过设置`SESSION_ENGINE`来更改Session的存储位置。以下是几种可选的存储方案：

1. **数据库存储** (`django.contrib.sessions.backends.db`): 默认方案，Session数据存储在数据库中。
2. **文件存储** (`django.contrib.sessions.backends.file`): Session数据存储在服务器的文件系统中。
3. **缓存存储** (`django.contrib.sessions.backends.cache`):
   - 将Session数据存储在缓存中，如Memcached。
   - 需要在`settings.py`中配置`CACHES`。
4. **缓存数据库混合存储** (`django.contrib.sessions.backends.cached_db`):
   - 首先将Session数据存储在缓存中，然后同步到数据库。
   - 即使缓存系统出现问题，Session数据也不会丢失。
5. **加密Cookie存储** (`django.contrib.sessions.backends.signed_cookies`):
   - 将Session信息加密后存储在浏览器的Cookie中。
   - 需要考虑安全性，建议设置`SESSION_COOKIE_HTTPONLY=True`以防止通过JavaScript操作Session数据。
   - 保护`settings.py`中的`SECRET_KEY`，防止解密Session数据。
   - Cookie中存储的数据量不能超过4KB。

请注意，选择存储方案时，需要根据您的应用需求和安全要求来决定最合适的方法。