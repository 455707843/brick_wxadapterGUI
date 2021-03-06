var qqPlayCoreBuildInfo = {
	buildPath: '/branches/7.7.0_dev/bricktest',
	version: '4562',
	creator: 'wesleyxiao',
	buildTime: 'Tue Jul 31 2018 14:48:20 GMT+0800 (CST)'
};

function clone_(e) {
	var t, i, r;
	if ("object" != typeof e || null === e) return e;
	if (e instanceof Array)
		for (t = [], i = 0, r = e.length; i < r; i++) "object" == typeof e[i] && null != e[i] ? t[i] = arguments.callee(e[i]) : t[i] = e[i];
	else {
		t = {};
		for (i in e) "object" == typeof e[i] && null != e[i] ? t[i] = arguments.callee(e[i]) : t[i] = e[i]
	}
	return t
}

function Canvas() {
	var e = arguments.length;
	this._shadowColor = {
		r: 0,
		g: 0,
		b: 0,
		a: 0
	}, this._shadowOffset = {
		x: 0,
		y: 0
	}, this._shadowRadius = 0, this._textBaseLine = 0, this._textAlign = 0, this._useH5Mode = 0, this._a = 1, this._b = 0, this._c = 0, this._d = 1, this._tx = 0, this._ty = 0, 2 == e && (this.__nativeObj = new BK.CanvasNode(arguments[0], arguments[1]), this.setFlipXY(0, 1), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
		var t = e;
		"scale" != t && "transform" != t && "contentSize" != t && "size" != t && "fontPath" != t && Object.defineProperty(this, t, {
			get: function() {
				return this.__nativeObj[t]
			},
			set: function(e) {
				this.__nativeObj[t] = e
			}
		})
	}, this), Object.defineProperty(Canvas.prototype, "fontPath", {
		get: function() {
			return this.__nativeObj.fontPath
		},
		set: function(e) {
			BK.FileUtil.isFileExist(e) && (this.__nativeObj.fontPath = e)
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "contentSize", {
		get: function() {
			return this.__nativeObj.contentSize
		},
		set: function(e) {
			this.__nativeObj.contentSize = e, this.__nativeObj.resetCanvas()
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "size", {
		get: function() {
			return this.__nativeObj.size
		},
		set: function(e) {
			this.__nativeObj.size = e, this.__nativeObj.resetCanvas()
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "textBaseline", {
		get: function() {
			return this._textBaseLine
		},
		set: function(e) {
			switch (e) {
				case 0:
				case 1:
				case 2:
					this._textBaseLine = e;
					break;
				case "bottom":
				case "Bottom":
					this._textBaseLine = 0;
					break;
				case "Middle":
				case "middle":
					this._textBaseLine = 1;
					break;
				case "Top":
				case "top":
					this._textBaseLine = 2
			}
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "textAlign", {
		get: function() {
			return this._textAlign
		},
		set: function(e) {
			switch (e) {
				case 0:
				case 1:
				case 2:
					this._textAlign = e;
					break;
				case "left":
					this._textAlign = 0;
					break;
				case "center":
					this._textAlign = 1;
					break;
				case "right":
					this._textAlign = 2
			}
			this.__nativeObj.setTextAlign(this._textAlign)
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "lineWidth", {
		get: function() {
			return this.__nativeObj.lineWidth
		},
		set: function(e) {
			this.__nativeObj.lineWidth = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "globalAlpha", {
		get: function() {
			return this.__nativeObj.globalAlpha
		},
		set: function(e) {
			e = Math.min(1, e), e = Math.max(0, e), this.__nativeObj.globalAlpha = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "fillColor", {
		get: function() {
			return this.__nativeObj.fillColor
		},
		set: function(e) {
			this.__nativeObj.fillColor = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "strokeColor", {
		get: function() {
			return this.__nativeObj.strokeColor
		},
		set: function(e) {
			this.__nativeObj.strokeColor = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "lineCap", {
		get: function() {
			return this.__nativeObj.lineCap
		},
		set: function(e) {
			this.__nativeObj.lineCap = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "lineJoin", {
		get: function() {
			return this.__nativeObj.lineJoin
		},
		set: function(e) {
			this.__nativeObj.lineJoin = e
		},
		enumerable: !0,
		configurable: !0
	}), Object.defineProperty(Canvas.prototype, "miterLimit", {
		get: function() {
			return this.__nativeObj.miterLimit
		},
		set: function(e) {
			this.__nativeObj.miterLimit = e
		},
		enumerable: !0,
		configurable: !0
	}))
}

function bkWebGLGetInstance() {
	return gl || (gl = new BK.WebGL, attatchConst(), attachMethod(), gl.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height)), Object.prototype.hasOwnProperty.call(this, "renderTicker") && renderTicker.setTickerCallBack(function(e, t) {}), gl
}

function __bkIsSupportTypedArray() {
	if (void 0 == isSupportTA) {
		"android" == GameStatusInfo.platform && (isSupportTA = !0);
		var e = BK.Director.queryDeviceInfo(),
			t = e.version.split(".");
		"ios" == e.platform && Number(t[0]) >= 10 || "android" == e.platform ? isSupportTA = !0 : (BK.Script.log(1, 0, "Current Device dont supoort TypedArray.[info = " + JSON.stringify(e) + "]"), isSupportTA = !1)
	}
	return isSupportTA
}

function __TypedArrayGetData(e) {
	if (Object.prototype.hasOwnProperty.call(e, "__rawBKData")) return e.__rawBKData;
	if (Object.prototype.hasOwnProperty.call(e, "__nativeObj")) return e.__nativeObj;
	if (0 == __bkIsSupportTypedArray()) {
		var t = e instanceof ArrayBuffer;
		return BK.Misc.arrayBufferToBKBuffer(t ? e : e.buffer, t ? 0 : e.byteOffset, e.byteLength)
	}
	return e
}

function checkFirstFrames() {
	0 == firstFrameUpload && (BK.MQQ.SsoRequest.send({}, "cs.first_frame_drawn.local"), firstFrameUpload = !0)
}

function activeTexture(e) {
	glpause || gl.glActiveTexture(e)
}

function attachShader(e, t) {
	glpause || gl.glAttachShader(e, t)
}

function bindAttribLocation(e, t, i) {
	glpause || gl.glBindAttribLocation(e, t, i)
}

function bindBuffer(e, t) {
	glpause || gl.glBindBuffer(e, t)
}

function bindFramebuffer(e, t) {
	glpause || gl.glBindFramebuffer(e, t)
}

function bindRenderbuffer(e, t) {
	glpause || gl.glBindRenderbuffer(e, t)
}

function bindTexture(e, t) {
	glpause || gl.glBindTexture(e, t)
}

function blendColor(e, t, i, r) {
	glpause || gl.glBlendColor(e, t, i, r)
}

function blendEquation(e) {
	glpause || gl.glBlendEquation(e)
}

function blendEquationSeparate(e, t) {
	glpause || gl.glBlendEquationSeparate(e, t)
}

function blendFunc(e, t) {
	glpause || gl.glBlendFunc(e, t)
}

function blendFuncSeparate(e, t, i, r) {
	glpause || gl.glBlendFuncSeparate(e, t, i, r)
}

function bufferData(e, t, i) {
	glpause || ("number" != typeof t ? gl.glBufferData(e, __TypedArrayGetData(t), i) : gl.glBufferData(e, t, i))
}

function bufferSubData(e, t, i) {
	glpause || gl.glBufferSubData(e, t, __TypedArrayGetData(i))
}

function checkFramebufferStatus(e) {
	if (!glpause) return gl.glCheckFramebufferStatus(e)
}

function clear(e) {
	glpause || gl.glClear(e)
}

function clearColor(e, t, i, r) {
	glpause || gl.glClearColor(e, t, i, r)
}

function clearDepth(e) {
	glpause || gl.glClearDepth(e)
}

function clearStencil(e) {
	glpause || gl.glClearStencil(e)
}

function colorMask(e, t, i, r) {
	glpause || gl.glColorMask(e, t, i, r)
}

function compileShader(e) {
	glpause || gl.glCompileShader(e)
}

function compressedTexImage2D(e, t, i, r, n, o, a) {
	glpause || gl.glCompressedTexImage2D(e, t, i, r, n, o, a)
}

function compressedTexSubImage2D(e, t, i, r, n, o, a, s) {
	glpause || gl.glCompressedTexSubImage2D(e, t, i, r, n, o, a, s)
}

function copyTexImage2D(e, t, i, r, n, o, a, s) {
	glpause || gl.glCopyTexImage2D(e, t, i, r, n, o, a, s)
}

function copyTexSubImage2D(e, t, i, r, n, o, a, s) {
	glpause || gl.glCopyTexSubImage2D(e, t, i, r, n, o, a, s)
}

function createBuffer() {
	return glpause ? -1 : gl.glCreateBuffer()
}

function createFramebuffer() {
	return glpause ? -1 : gl.glCreateFramebuffer()
}

function createProgram() {
	return glpause ? -1 : gl.glCreateProgram()
}

function createRenderbuffer() {
	return glpause ? -1 : gl.glCreateRenderbuffer()
}

function createShader(e) {
	return glpause ? -1 : gl.glCreateShader(e)
}

function createTexture() {
	return glpause ? -1 : gl.glCreateTexture()
}

function cullFace(e) {
	glpause || gl.glCullFace(e)
}

function deleteBuffer(e) {
	glpause || gl.glDeleteBuffer(e)
}

function deleteFramebuffer(e) {
	glpause || gl.glDeleteFramebuffer(e)
}

function deleteProgram(e) {
	glpause || gl.glDeleteProgram(e)
}

function deleteRenderbuffer(e) {
	glpause || gl.glDeleteRenderbuffer(e)
}

function deleteShader(e) {
	glpause || gl.glDeleteShader(e)
}

function deleteTexture(e) {
	glpause || gl.glDeleteTexture(e)
}

function depthFunc(e) {
	glpause || gl.glDepthFunc(e)
}

function depthMask(e) {
	glpause || gl.glDepthMask(e)
}

function depthRange(e, t) {
	glpause || gl.glDepthRange(e, t)
}

function detachShader(e, t) {
	glpause || gl.glDetachShader(e, t)
}

function disable(e) {
	glpause || gl.glDisable(e)
}

function disableVertexAttribArray(e) {
	glpause || gl.glDisableVertexAttribArray(e)
}

function drawArrays(e, t, i) {
	glpause || (gl.glDrawArrays(e, t, i), i > 0 && checkFirstFrames())
}

function drawElements(e, t, i, r) {
	glpause || (gl.glDrawElements(e, t, i, r), t > 0 && checkFirstFrames())
}

function enable(e) {
	glpause || gl.glEnable(e)
}

function enableVertexAttribArray(e) {
	glpause || gl.glEnableVertexAttribArray(e)
}

function finish() {
	glpause || gl.glFinish()
}

function flush() {
	glpause || gl.glFlush()
}

function framebufferRenderbuffer(e, t, i, r) {
	glpause || gl.glFramebufferRenderbuffer(e, t, i, r)
}

function framebufferTexture2D(e, t, i, r, n) {
	glpause || gl.glFramebufferTexture2D(e, t, i, r, n)
}

function frontFace(e) {
	glpause || gl.glFrontFace(e)
}

function generateMipmap(e) {
	glpause || gl.glGenerateMipmap(e)
}

function getAttribLocation(e, t) {
	return glpause ? -1 : gl.glGetAttribLocation(e, t)
}

function getError() {
	return glpause ? null : gl.glGetError()
}

function getShaderPrecisionFormat(e, t) {
	return glpause ? -1 : gl.glGetShaderPrecisionFormat(e, t)
}

function getProgramInfoLog(e) {
	return glpause ? null : gl.glGetProgramInfoLog(e)
}

function getShaderInfoLog(e) {
	return glpause ? null : gl.glGetShaderInfoLog(e)
}

function getShaderSource(e) {
	return glpause ? null : gl.glGetShaderSource(e)
}

function getUniformLocation(e, t) {
	return glpause ? -1 : gl.glGetUniformLocation(e, t)
}

function getVertexAttribOffset(e, t) {
	return glpause ? -1 : gl.glGetVertexAttribOffset(e, t)
}

function hint(e, t) {
	glpause || gl.glHint(e, t)
}

function isBuffer(e) {
	return !glpause && gl.glIsBuffer(e)
}

function isEnabled(e) {
	return !glpause && gl.glIsEnabled(e)
}

function isFramebuffer(e) {
	return !glpause && gl.glIsFramebuffer(e)
}

function isProgram(e) {
	return !glpause && gl.glIsProgram(e)
}

function isRenderbuffer(e) {
	return !glpause && gl.glIsRenderbuffer(e)
}

function isShader(e) {
	return !glpause && gl.glIsShader(e)
}

function isTexture(e) {
	return !glpause && gl.glIsTexture(e)
}

function lineWidth(e) {
	glpause || gl.glLineWidth(e)
}

function linkProgram(e) {
	glpause || gl.glLinkProgram(e)
}

function pixelStorei(e, t) {
	glpause || gl.glPixelStorei(e, t)
}

function polygonOffset(e, t) {
	glpause || gl.glPolygonOffset(e, t)
}

function readPixels(e, t, i, r, n, o, a) {
	glpause || gl.glReadPixels(e, t, i, r, n, o, a)
}

function renderbufferStorage(e, t, i, r) {
	glpause || gl.glRenderbufferStorage(e, t, i, r)
}

function sampleCoverage(e, t) {
	glpause || gl.glSampleCoverage(e, t)
}

function scissor(e, t, i, r) {
	glpause || gl.glScissor(e, t, i, r)
}

function shaderSource(e, t) {
	glpause || gl.glShaderSource(e, t)
}

function stencilFunc(e, t, i) {
	glpause || gl.glStencilFunc(e, t, i)
}

function stencilFuncSeparate(e, t, i, r) {
	glpause || gl.glStencilFuncSeparate(e, t, i, r)
}

function stencilMask(e) {
	glpause || gl.glStencilMask(e)
}

function stencilMaskSeparate(e, t) {
	glpause || gl.glStencilMaskSeparate(e, t)
}

function stencilOp(e, t, i) {
	glpause || gl.glStencilOp(e, t, i)
}

function stencilOpSeparate(e, t, i, r) {
	glpause || gl.glStencilOpSeparate(e, t, i, r)
}

function texImage2D(e, t, i) {
	if (!glpause) switch (arguments.length) {
		case 6:
			var r = arguments[3],
				n = arguments[4],
				o = arguments[5];
			Object.prototype.hasOwnProperty.call(o, "__nativeObj") ? gl.glTexImage2D(e, t, i, r, n, o.__nativeObj) : Object.prototype.hasOwnProperty.call(o, "buffer") && Object.prototype.hasOwnProperty.call(o.buffer, "eof") && Object.prototype.hasOwnProperty.call(o.buffer, "pointer") && Object.prototype.hasOwnProperty.call(o.buffer, "netOrder") && o.width > 0 && o.height > 0 ? gl.glTexImage2D(e, t, i, r, n, o) : Object.prototype.hasOwnProperty.call(o, "buffer") && o.buffer.__proto__.hasOwnProperty("eof") && o.buffer.__proto__.hasOwnProperty("pointer") && o.buffer.__proto__.hasOwnProperty("netOrder") && o.width > 0 && o.height > 0 && gl.glTexImage2D(e, t, i, r, n, o);
			break;
		case 9:
			var a = arguments[3],
				s = arguments[4],
				h = arguments[5],
				r = arguments[6],
				n = arguments[7],
				l = arguments[8];
			gl.glTexImage2D(e, t, i, a, s, h, r, n, l)
	}
}

function texParameterf(e, t, i) {
	glpause || gl.glTexParameterf(e, t, i)
}

function texParameteri(e, t, i) {
	glpause || gl.glTexParameteri(e, t, i)
}

function texSubImage2D(e, t, i, r) {
	if (!glpause) switch (arguments.length) {
		case 7:
			var n = arguments[4],
				o = arguments[5],
				a = arguments[6];
			Object.prototype.hasOwnProperty.call(a, "__nativeObj") ? gl.glTexSubImage2D(e, t, i, r, n, o, a.__nativeObj) : gl.glTexSubImage2D(e, t, i, r, n, o, a);
			break;
		case 9:
			var s = arguments[4],
				h = arguments[5],
				n = arguments[6],
				o = arguments[7],
				l = arguments[8];
			gl.glTexSubImage2D(e, t, i, r, s, h, n, o, l)
	}
}

function uniform1f(e, t) {
	glpause || gl.glUniform1f(e, t)
}

function uniform2f(e, t, i) {
	glpause || gl.glUniform2f(e, t, i)
}

function uniform3f(e, t, i, r) {
	glpause || gl.glUniform3f(e, t, i, r)
}

function uniform4f(e, t, i, r, n) {
	glpause || gl.glUniform4f(e, t, i, r, n)
}

function uniform1i(e, t) {
	glpause || gl.glUniform1i(e, t)
}

function uniform2i(e, t, i) {
	glpause || gl.glUniform2i(e, t, i)
}

function uniform3i(e, t, i, r) {
	glpause || gl.glUniform3i(e, t, i, r)
}

function uniform4i(e, t, i, r, n) {
	glpause || gl.glUniform4i(e, t, i, r, n)
}

function uniform1fv(e, t) {
	glpause || gl.glUniform1fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform2fv(e, t) {
	glpause || gl.glUniform2fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform3fv(e, t) {
	glpause || gl.glUniform3fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform4fv(e, t) {
	glpause || gl.glUniform4fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform1iv(e, t) {
	glpause || gl.glUniform1iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform2iv(e, t) {
	glpause || gl.glUniform2iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform3iv(e, t) {
	glpause || gl.glUniform3iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform4iv(e, t) {
	glpause || gl.glUniform4iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniformMatrix2fv(e, t, i) {
	glpause || gl.glUniformMatrix2fv(e, t, __TypedArrayGetData(i instanceof Array == 1 ? new Float32Array(i) : i))
}

function uniformMatrix3fv(e, t, i) {
	glpause || gl.glUniformMatrix3fv(e, t, __TypedArrayGetData(i instanceof Array == 1 ? new Float32Array(i) : i))
}

function uniformMatrix4fv(e, t, i) {
	glpause || gl.glUniformMatrix4fv(e, t, __TypedArrayGetData(i instanceof Array == 1 ? new Float32Array(i) : i))
}

function useProgram(e) {
	glpause || gl.glUseProgram(e)
}

function validateProgram(e) {
	glpause || gl.glValidateProgram(e)
}

function vertexAttrib1f(e, t) {
	glpause || gl.glVertexAttrib1f(e, t)
}

function vertexAttrib2f(e, t, i) {
	glpause || gl.glVertexAttrib2f(e, t, i)
}

function vertexAttrib3f(e, t, i, r) {
	glpause || gl.glVertexAttrib3f(e, t, i, r)
}

function vertexAttrib4f(e, t, i, r, n) {
	glpause || gl.glVertexAttrib4f(e, t, i, r, n)
}

function vertexAttrib1fv(e, t) {
	glpause || gl.glVertexAttrib1fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib2fv(e, t) {
	glpause || gl.glVertexAttrib2fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib3fv(e, t) {
	glpause || gl.glVertexAttrib3fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib4fv(e, t) {
	glpause || gl.glVertexAttrib4fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttribPointer(e, t, i, r, n, o, a) {
	if (!glpause) {
		if (void 0 === a) {
			var s = {
				index: e,
				size: t,
				type: i,
				normalized: r,
				stride: n,
				offset: o
			};
			void 0 === gl.recordVertexAttribPointer && (gl.recordVertexAttribPointer = []);
			for (var h = !1, l = 0; l < gl.recordVertexAttribPointer.length; l++)
				if (gl.recordVertexAttribPointer[l].index == s.index) {
					h = !0, gl.recordVertexAttribPointer[l] = s;
					break
				}
			0 == h && gl.recordVertexAttribPointer.push(s)
		}
		gl.glVertexAttribPointer(e, t, i, r, n, o)
	}
}

function viewport(e, t, i, r) {
	glpause || gl.glViewport(e, t, i, r)
}

function getActiveAttrib(e, t) {
	if (!glpause) return gl.glGetActiveAttrib(e, t)
}

function getActiveUniform(e, t) {
	if (!glpause) return gl.glGetActiveUniform(e, t)
}

function getAttachedShaders(e) {
	if (!glpause) return gl.glGetAttachedShaders(e)
}

function getBufferParameter(e, t) {
	if (!glpause) return gl.glGetBufferParameter(e, t)
}

function getFramebufferAttachmentParameter(e, t, i) {
	if (!glpause) return gl.glGetFramebufferAttachmentParameter(e, t, i)
}

function getProgramParameter(e, t) {
	if (!glpause) return gl.glGetProgramParameter(e, t)
}

function getRenderbufferParameter(e, t) {
	if (!glpause) return gl.glGetRenderbufferParameter(e, t)
}

function getShaderParameter(e, t) {
	if (!glpause) return gl.glGetShaderParameter(e, t)
}

function getTexParameter(e, t) {
	if (!glpause) return gl.glGetTexParameter(e, t)
}

function getVertexAttrib(e, t) {
	if (!glpause) return gl.glGetVertexAttrib(e, t)
}

function getUniform(e, t) {
	if (!glpause) return gl.glGetUniform(e, t)
}

function getParameter(e) {
	if (!glpause) switch (e) {
		case gl.ACTIVE_TEXTURE:
		case gl.ALPHA_BITS:
		case gl.ARRAY_BUFFER_BINDING:
		case gl.BLUE_BITS:
		case gl.CULL_FACE_MODE:
		case gl.CURRENT_PROGRAM:
		case gl.DEPTH_BITS:
		case gl.DEPTH_FUNC:
		case gl.ELEMENT_ARRAY_BUFFER_BINDING:
		case gl.FRAMEBUFFER_BINDING:
		case gl.FRONT_FACE:
		case gl.GENERATE_MIPMAP_HINT:
		case gl.GREEN_BITS:
		case gl.IMPLEMENTATION_COLOR_READ_FORMAT:
		case gl.IMPLEMENTATION_COLOR_READ_TYPE:
		case gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS:
		case gl.MAX_CUBE_MAP_TEXTURE_SIZE:
		case gl.MAX_FRAGMENT_UNIFORM_VECTORS:
		case gl.MAX_RENDERBUFFER_SIZE:
		case gl.MAX_TEXTURE_IMAGE_UNITS:
		case gl.MAX_TEXTURE_SIZE:
		case gl.MAX_VARYING_VECTORS:
		case gl.MAX_VERTEX_ATTRIBS:
		case gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS:
		case gl.MAX_VERTEX_UNIFORM_VECTORS:
		case gl.MAX_VIEWPORT_DIMS:
		case gl.NUM_COMPRESSED_TEXTURE_FORMATS:
		case gl.NUM_SHADER_BINARY_FORMATS:
		case gl.PACK_ALIGNMENT:
		case gl.RED_BITS:
		case gl.RENDERBUFFER_BINDING:
		case gl.SAMPLE_BUFFERS:
		case gl.SAMPLES:
		case gl.STENCIL_BACK_FAIL:
		case gl.STENCIL_BACK_FUNC:
		case gl.STENCIL_BACK_PASS_DEPTH_FAIL:
		case gl.STENCIL_BACK_PASS_DEPTH_PASS:
		case gl.STENCIL_BACK_REF:
		case gl.STENCIL_BACK_VALUE_MASK:
		case gl.STENCIL_BACK_WRITEMASK:
		case gl.STENCIL_BITS:
		case gl.STENCIL_CLEAR_VALUE:
		case gl.STENCIL_FAIL:
		case gl.STENCIL_FUNC:
		case gl.STENCIL_PASS_DEPTH_FAIL:
		case gl.STENCIL_PASS_DEPTH_PASS:
		case gl.STENCIL_REF:
		case gl.STENCIL_VALUE_MASK:
		case gl.STENCIL_WRITEMASK:
		case gl.SUBPIXEL_BITS:
		case gl.TEXTURE_BINDING_2D:
		case gl.TEXTURE_BINDING_CUBE_MAP:
		case gl.UNPACK_ALIGNMENT:
		case gl.BLEND_DST_ALPHA:
		case gl.BLEND_DST_RGB:
		case gl.BLEND_EQUATION_ALPHA:
		case gl.BLEND_EQUATION_RGB:
		case gl.BLEND_SRC_ALPHA:
		case gl.BLEND_SRC_RGB:
			return gl.glGetParameterInt(e, 1);
		case gl.ALIASED_LINE_WIDTH_RANGE:
		case gl.ALIASED_POINT_SIZE_RANGE:
		case gl.DEPTH_RANGE:
		case gl.MAX_VIEWPORT_DIMS:
			return gl.glGetParameterFloat(e, 2);
		case gl.BLEND:
		case gl.CULL_FACE:
		case gl.DEPTH_TEST:
		case gl.DEPTH_WRITEMASK:
		case gl.DITHER:
		case gl.POLYGON_OFFSET_FILL:
		case gl.SAMPLE_ALPHA_TO_COVERAGE:
		case gl.SAMPLE_COVERAGE:
		case gl.SAMPLE_COVERAGE_INVERT:
		case gl.SCISSOR_TEST:
		case gl.SHADER_COMPILER:
		case gl.STENCIL_TEST:
			return gl.glGetParameterBool(e, 1);
		case gl.BLEND_COLOR:
		case gl.COLOR_CLEAR_VALUE:
			return gl.glGetParameterFloat(e, 4);
		case gl.SCISSOR_BOX:
		case gl.VIEWPORT:
			return gl.glGetParameterInt(e, 4);
		case gl.COLOR_WRITEMASK:
			return gl.glGetParameterBool(e, 4);
		case gl.POLYGON_OFFSET_FACTOR:
		case gl.POLYGON_OFFSET_UNITS:
		case gl.SAMPLE_COVERAGE_VALUE:
			return gl.glGetParameterFloat(e, 1);
		case gl.SHADER_BINARY_FORMATS:
			t = gl.glGetParameterInt(gl.NUM_SHADER_BINARY_FORMATS, 1);
			return gl.glGetParameterInt(e, t);
		case gl.COMPRESSED_TEXTURE_FORMATS:
			var t = gl.glGetParameterInt(gl.NUM_COMPRESSED_TEXTURE_FORMATS, 1);
			return gl.glGetParameterInt(e, t)
	}
}

function voidFunc(e, t, i, r, n, o, a, s, h, l) {}

function attchVoidMethod() {
	gl.methodWorking = !1, gl.activeTexture = voidFunc, gl.attachShader = voidFunc, gl.bindAttribLocation = voidFunc, gl.bindBuffer = voidFunc, gl.bindFramebuffer = voidFunc, gl.bindRenderbuffer = voidFunc, gl.bindTexture = voidFunc, gl.blendColor = voidFunc, gl.blendEquation = voidFunc, gl.blendEquationSeparate = voidFunc, gl.blendFunc = voidFunc, gl.blendFuncSeparate = voidFunc, gl.bufferData = voidFunc, gl.bufferData = voidFunc, gl.bufferSubData = voidFunc, gl.checkFramebufferStatus = voidFunc, gl.clear = voidFunc, gl.clearColor = voidFunc, gl.clearDepth = voidFunc, gl.clearStencil = voidFunc, gl.colorMask = voidFunc, gl.compileShader = voidFunc, gl.compressedTexImage2D = voidFunc, gl.compressedTexSubImage2D = voidFunc, gl.copyTexImage2D = voidFunc, gl.copyTexSubImage2D = voidFunc, gl.createBuffer = voidFunc, gl.createFramebuffer = voidFunc, gl.createProgram = voidFunc, gl.createRenderbuffer = voidFunc, gl.createShader = voidFunc, gl.createTexture = voidFunc, gl.cullFace = voidFunc, gl.deleteBuffer = voidFunc, gl.deleteFramebuffer = voidFunc, gl.deleteProgram = voidFunc, gl.deleteRenderbuffer = voidFunc, gl.deleteShader = voidFunc, gl.deleteTexture = voidFunc, gl.depthFunc = voidFunc, gl.depthMask = voidFunc, gl.depthRange = voidFunc, gl.detachShader = voidFunc, gl.disable = voidFunc, gl.disableVertexAttribArray = voidFunc, gl.drawArrays = voidFunc, gl.drawElements = voidFunc, gl.enable = voidFunc, gl.enableVertexAttribArray = voidFunc, gl.finish = voidFunc, gl.flush = voidFunc, gl.framebufferRenderbuffer = voidFunc, gl.framebufferTexture2D = voidFunc, gl.frontFace = voidFunc, gl.generateMipmap = voidFunc, gl.getAttribLocation = voidFunc, gl.getError = voidFunc, gl.getProgramInfoLog = voidFunc, gl.getShaderInfoLog = voidFunc, gl.getShaderSource = voidFunc, gl.getUniformLocation = voidFunc, gl.getVertexAttribOffset = voidFunc, gl.hint = voidFunc, gl.isBuffer = voidFunc, gl.isEnabled = voidFunc, gl.isFramebuffer = voidFunc, gl.isProgram = voidFunc, gl.isRenderbuffer = voidFunc, gl.isShader = voidFunc, gl.isTexture = voidFunc, gl.lineWidth = voidFunc, gl.linkProgram = voidFunc, gl.pixelStorei = voidFunc, gl.polygonOffset = voidFunc, gl.readPixels = voidFunc, gl.renderbufferStorage = voidFunc, gl.sampleCoverage = voidFunc, gl.scissor = voidFunc, gl.shaderSource = voidFunc, gl.stencilFunc = voidFunc, gl.stencilFuncSeparate = voidFunc, gl.stencilMask = voidFunc, gl.stencilMaskSeparate = voidFunc, gl.stencilOp = voidFunc, gl.stencilOpSeparate = voidFunc, gl.texImage2D = voidFunc, gl.texSubImage2D = voidFunc, gl.texParameterf = voidFunc, gl.texParameteri = voidFunc, gl.uniform1f = voidFunc, gl.uniform2f = voidFunc, gl.uniform3f = voidFunc, gl.uniform4f = voidFunc, gl.uniform1i = voidFunc, gl.uniform2i = voidFunc, gl.uniform3i = voidFunc, gl.uniform4i = voidFunc, gl.uniform1fv = voidFunc, gl.uniform2fv = voidFunc, gl.uniform3fv = voidFunc, gl.uniform4fv = voidFunc, gl.uniform1iv = voidFunc, gl.uniform2iv = voidFunc, gl.uniform3iv = voidFunc, gl.uniform4iv = voidFunc, gl.uniformMatrix2fv = voidFunc, gl.uniformMatrix3fv = voidFunc, gl.uniformMatrix4fv = voidFunc, gl.useProgram = voidFunc, gl.validateProgram = voidFunc, gl.vertexAttrib1f = voidFunc, gl.vertexAttrib2f = voidFunc, gl.vertexAttrib3f = voidFunc, gl.vertexAttrib4f = voidFunc, gl.vertexAttrib1fv = voidFunc, gl.vertexAttrib2fv = voidFunc, gl.vertexAttrib3fv = voidFunc, gl.vertexAttrib4fv = voidFunc, gl.vertexAttribPointer = voidFunc, gl.viewport = voidFunc, gl.getActiveAttrib = voidFunc, gl.getActiveUniform = voidFunc, gl.getAttachedShaders = voidFunc, gl.getBufferParameter = voidFunc, gl.getFramebufferAttachmentParameter = voidFunc, gl.getProgramParameter = voidFunc, gl.getRenderbufferParameter = voidFunc, gl.getShaderParameter = voidFunc, gl.getTexParameter = voidFunc, gl.getVertexAttrib = voidFunc, gl.getParameter = voidFunc, gl.getUniform = voidFunc, gl.getShaderPrecisionFormat = voidFunc
}

function attachMethod() {
	gl.methodWorking = !0, gl.activeTexture = activeTexture, gl.attachShader = attachShader, gl.bindAttribLocation = bindAttribLocation, gl.bindBuffer = bindBuffer, gl.bindFramebuffer = bindFramebuffer, gl.bindRenderbuffer = bindRenderbuffer, gl.bindTexture = bindTexture, gl.blendColor = blendColor, gl.blendEquation = blendEquation, gl.blendEquationSeparate = blendEquationSeparate, gl.blendFunc = blendFunc, gl.blendFuncSeparate = blendFuncSeparate, gl.bufferData = bufferData, gl.bufferData = bufferData, gl.bufferSubData = bufferSubData, gl.checkFramebufferStatus = checkFramebufferStatus, gl.clear = clear, gl.clearColor = clearColor, gl.clearDepth = clearDepth, gl.clearStencil = clearStencil, gl.colorMask = colorMask, gl.compileShader = compileShader, gl.compressedTexImage2D = compressedTexImage2D, gl.compressedTexSubImage2D = compressedTexSubImage2D, gl.copyTexImage2D = copyTexImage2D, gl.copyTexSubImage2D = copyTexSubImage2D, gl.createBuffer = createBuffer, gl.createFramebuffer = createFramebuffer, gl.createProgram = createProgram, gl.createRenderbuffer = createRenderbuffer, gl.createShader = createShader, gl.createTexture = createTexture, gl.cullFace = cullFace, gl.deleteBuffer = deleteBuffer, gl.deleteFramebuffer = deleteFramebuffer, gl.deleteProgram = deleteProgram, gl.deleteRenderbuffer = deleteRenderbuffer, gl.deleteShader = deleteShader, gl.deleteTexture = deleteTexture, gl.depthFunc = depthFunc, gl.depthMask = depthMask, gl.depthRange = depthRange, gl.detachShader = detachShader, gl.disable = disable, gl.disableVertexAttribArray = disableVertexAttribArray, gl.drawArrays = drawArrays, gl.drawElements = drawElements, gl.enable = enable, gl.enableVertexAttribArray = enableVertexAttribArray, gl.finish = finish, gl.flush = flush, gl.framebufferRenderbuffer = framebufferRenderbuffer, gl.framebufferTexture2D = framebufferTexture2D, gl.frontFace = frontFace, gl.generateMipmap = generateMipmap, gl.getAttribLocation = getAttribLocation, gl.getError = getError, gl.getProgramInfoLog = getProgramInfoLog, gl.getShaderInfoLog = getShaderInfoLog, gl.getShaderSource = getShaderSource, gl.getUniformLocation = getUniformLocation, gl.getVertexAttribOffset = getVertexAttribOffset, gl.hint = hint, gl.isBuffer = isBuffer, gl.isEnabled = isEnabled, gl.isFramebuffer = isFramebuffer, gl.isProgram = isProgram, gl.isRenderbuffer = isRenderbuffer, gl.isShader = isShader, gl.isTexture = isTexture, gl.lineWidth = lineWidth, gl.linkProgram = linkProgram, gl.pixelStorei = pixelStorei, gl.polygonOffset = polygonOffset, gl.readPixels = readPixels, gl.renderbufferStorage = renderbufferStorage, gl.sampleCoverage = sampleCoverage, gl.scissor = scissor, gl.shaderSource = shaderSource, gl.stencilFunc = stencilFunc, gl.stencilFuncSeparate = stencilFuncSeparate, gl.stencilMask = stencilMask, gl.stencilMaskSeparate = stencilMaskSeparate, gl.stencilOp = stencilOp, gl.stencilOpSeparate = stencilOpSeparate, gl.texImage2D = texImage2D, gl.texSubImage2D = texSubImage2D, gl.texParameterf = texParameterf, gl.texParameteri = texParameteri, gl.uniform1f = uniform1f, gl.uniform2f = uniform2f, gl.uniform3f = uniform3f, gl.uniform4f = uniform4f, gl.uniform1i = uniform1i, gl.uniform2i = uniform2i, gl.uniform3i = uniform3i, gl.uniform4i = uniform4i, gl.uniform1fv = uniform1fv, gl.uniform2fv = uniform2fv, gl.uniform3fv = uniform3fv, gl.uniform4fv = uniform4fv, gl.uniform1iv = uniform1iv, gl.uniform2iv = uniform2iv, gl.uniform3iv = uniform3iv, gl.uniform4iv = uniform4iv, gl.uniformMatrix2fv = uniformMatrix2fv, gl.uniformMatrix3fv = uniformMatrix3fv, gl.uniformMatrix4fv = uniformMatrix4fv, gl.useProgram = useProgram, gl.validateProgram = validateProgram, gl.vertexAttrib1f = vertexAttrib1f, gl.vertexAttrib2f = vertexAttrib2f, gl.vertexAttrib3f = vertexAttrib3f, gl.vertexAttrib4f = vertexAttrib4f, gl.vertexAttrib1fv = vertexAttrib1fv, gl.vertexAttrib2fv = vertexAttrib2fv, gl.vertexAttrib3fv = vertexAttrib3fv, gl.vertexAttrib4fv = vertexAttrib4fv, gl.vertexAttribPointer = vertexAttribPointer, gl.viewport = viewport, gl.getActiveAttrib = getActiveAttrib, gl.getActiveUniform = getActiveUniform, gl.getAttachedShaders = getAttachedShaders, gl.getBufferParameter = getBufferParameter, gl.getFramebufferAttachmentParameter = getFramebufferAttachmentParameter, gl.getProgramParameter = getProgramParameter, gl.getRenderbufferParameter = getRenderbufferParameter, gl.getShaderParameter = getShaderParameter, gl.getTexParameter = getTexParameter, gl.getVertexAttrib = getVertexAttrib, gl.getParameter = getParameter, gl.getUniform = getUniform, gl.getShaderPrecisionFormat = getShaderPrecisionFormat
}

function attatchConst() {
	gl.DEPTH_BUFFER_BIT = 256, gl.STENCIL_BUFFER_BIT = 1024, gl.COLOR_BUFFER_BIT = 16384, gl.POINTS = 0, gl.LINES = 1, gl.LINE_LOOP = 2, gl.LINE_STRIP = 3, gl.TRIANGLES = 4, gl.TRIANGLE_STRIP = 5, gl.TRIANGLE_FAN = 6, gl.ZERO = 0, gl.ONE = 1, gl.SRC_COLOR = 768, gl.ONE_MINUS_SRC_COLOR = 769, gl.SRC_ALPHA = 770, gl.ONE_MINUS_SRC_ALPHA = 771, gl.DST_ALPHA = 772, gl.ONE_MINUS_DST_ALPHA = 773, gl.DST_COLOR = 774, gl.ONE_MINUS_DST_COLOR = 775, gl.SRC_ALPHA_SATURATE = 776, gl.FUNC_ADD = 32774, gl.BLEND_EQUATION = 32777, gl.BLEND_EQUATION_RGB = 32777, gl.BLEND_EQUATION_ALPHA = 34877, gl.FUNC_SUBTRACT = 32778, gl.FUNC_REVERSE_SUBTRACT = 32779, gl.BLEND_DST_RGB = 32968, gl.BLEND_SRC_RGB = 32969, gl.BLEND_DST_ALPHA = 32970, gl.BLEND_SRC_ALPHA = 32971, gl.CONSTANT_COLOR = 32769, gl.ONE_MINUS_CONSTANT_COLOR = 32770, gl.CONSTANT_ALPHA = 32771, gl.ONE_MINUS_CONSTANT_ALPHA = 32772, gl.BLEND_COLOR = 32773, gl.ARRAY_BUFFER = 34962, gl.ELEMENT_ARRAY_BUFFER = 34963, gl.ARRAY_BUFFER_BINDING = 34964, gl.ELEMENT_ARRAY_BUFFER_BINDING = 34965, gl.STREAM_DRAW = 35040, gl.STATIC_DRAW = 35044, gl.DYNAMIC_DRAW = 35048, gl.BUFFER_SIZE = 34660, gl.BUFFER_USAGE = 34661, gl.CURRENT_VERTEX_ATTRIB = 34342, gl.FRONT = 1028, gl.BACK = 1029, gl.FRONT_AND_BACK = 1032, gl.CULL_FACE = 2884, gl.BLEND = 3042, gl.DITHER = 3024, gl.STENCIL_TEST = 2960, gl.DEPTH_TEST = 2929, gl.SCISSOR_TEST = 3089, gl.POLYGON_OFFSET_FILL = 32823, gl.SAMPLE_ALPHA_TO_COVERAGE = 32926, gl.SAMPLE_COVERAGE = 32928, gl.NO_ERROR = 0, gl.INVALID_ENUM = 1280, gl.INVALID_VALUE = 1281, gl.INVALID_OPERATION = 1282, gl.OUT_OF_MEMORY = 1285, gl.CW = 2304, gl.CCW = 2305, gl.LINE_WIDTH = 2849, gl.ALIASED_POINT_SIZE_RANGE = 33901, gl.ALIASED_LINE_WIDTH_RANGE = 33902, gl.CULL_FACE_MODE = 2885, gl.FRONT_FACE = 2886, gl.DEPTH_RANGE = 2928, gl.DEPTH_WRITEMASK = 2930, gl.DEPTH_CLEAR_VALUE = 2931, gl.DEPTH_FUNC = 2932, gl.STENCIL_CLEAR_VALUE = 2961, gl.STENCIL_FUNC = 2962, gl.STENCIL_FAIL = 2964, gl.STENCIL_PASS_DEPTH_FAIL = 2965, gl.STENCIL_PASS_DEPTH_PASS = 2966, gl.STENCIL_REF = 2967, gl.STENCIL_VALUE_MASK = 2963, gl.STENCIL_WRITEMASK = 2968, gl.STENCIL_BACK_FUNC = 34816, gl.STENCIL_BACK_FAIL = 34817, gl.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, gl.STENCIL_BACK_PASS_DEPTH_PASS = 34819, gl.STENCIL_BACK_REF = 36003, gl.STENCIL_BACK_VALUE_MASK = 36004, gl.STENCIL_BACK_WRITEMASK = 36005, gl.VIEWPORT = 2978, gl.SCISSOR_BOX = 3088, gl.COLOR_CLEAR_VALUE = 3106, gl.COLOR_WRITEMASK = 3107, gl.UNPACK_ALIGNMENT = 3317, gl.PACK_ALIGNMENT = 3333, gl.MAX_TEXTURE_SIZE = 3379, gl.MAX_VIEWPORT_DIMS = 3386, gl.SUBPIXEL_BITS = 3408, gl.RED_BITS = 3410, gl.GREEN_BITS = 3411, gl.BLUE_BITS = 3412, gl.ALPHA_BITS = 3413, gl.DEPTH_BITS = 3414, gl.STENCIL_BITS = 3415, gl.POLYGON_OFFSET_UNITS = 10752, gl.POLYGON_OFFSET_FACTOR = 32824, gl.TEXTURE_BINDING_2D = 32873, gl.SAMPLE_BUFFERS = 32936, gl.SAMPLES = 32937, gl.SAMPLE_COVERAGE_VALUE = 32938, gl.SAMPLE_COVERAGE_INVERT = 32939, gl.COMPRESSED_TEXTURE_FORMATS = 34467, gl.DONT_CARE = 4352, gl.FASTEST = 4353, gl.NICEST = 4354, gl.GENERATE_MIPMAP_HINT = 33170, gl.BYTE = 5120, gl.UNSIGNED_BYTE = 5121, gl.SHORT = 5122, gl.UNSIGNED_SHORT = 5123, gl.INT = 5124, gl.UNSIGNED_INT = 5125, gl.FLOAT = 5126, gl.DEPTH_COMPONENT = 6402, gl.ALPHA = 6406, gl.RGB = 6407, gl.RGBA = 6408, gl.LUMINANCE = 6409, gl.LUMINANCE_ALPHA = 6410, gl.UNSIGNED_SHORT_4_4_4_4 = 32819, gl.UNSIGNED_SHORT_5_5_5_1 = 32820, gl.UNSIGNED_SHORT_5_6_5 = 33635, gl.FRAGMENT_SHADER = 35632, gl.VERTEX_SHADER = 35633, gl.MAX_VERTEX_ATTRIBS = 34921, gl.MAX_VERTEX_UNIFORM_VECTORS = 36347, gl.MAX_VARYING_VECTORS = 36348, gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, gl.MAX_TEXTURE_IMAGE_UNITS = 34930, gl.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, gl.SHADER_TYPE = 35663, gl.DELETE_STATUS = 35712, gl.LINK_STATUS = 35714, gl.VALIDATE_STATUS = 35715, gl.ATTACHED_SHADERS = 35717, gl.ACTIVE_UNIFORMS = 35718, gl.ACTIVE_ATTRIBUTES = 35721, gl.SHADING_LANGUAGE_VERSION = 35724, gl.CURRENT_PROGRAM = 35725, gl.NEVER = 512, gl.LESS = 513, gl.EQUAL = 514, gl.LEQUAL = 515, gl.GREATER = 516, gl.NOTEQUAL = 517, gl.GEQUAL = 518, gl.ALWAYS = 519, gl.KEEP = 7680, gl.REPLACE = 7681, gl.INCR = 7682, gl.DECR = 7683, gl.INVERT = 5386, gl.INCR_WRAP = 34055, gl.DECR_WRAP = 34056, gl.VENDOR = 7936, gl.RENDERER = 7937, gl.VERSION = 7938, gl.NEAREST = 9728, gl.LINEAR = 9729, gl.NEAREST_MIPMAP_NEAREST = 9984, gl.LINEAR_MIPMAP_NEAREST = 9985, gl.NEAREST_MIPMAP_LINEAR = 9986, gl.LINEAR_MIPMAP_LINEAR = 9987, gl.TEXTURE_MAG_FILTER = 10240, gl.TEXTURE_MIN_FILTER = 10241, gl.TEXTURE_WRAP_S = 10242, gl.TEXTURE_WRAP_T = 10243, gl.TEXTURE_2D = 3553, gl.TEXTURE = 5890, gl.TEXTURE_CUBE_MAP = 34067, gl.TEXTURE_BINDING_CUBE_MAP = 34068, gl.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, gl.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, gl.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, gl.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, gl.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, gl.TEXTURE0 = 33984, gl.TEXTURE1 = 33985, gl.TEXTURE2 = 33986, gl.TEXTURE3 = 33987, gl.TEXTURE4 = 33988, gl.TEXTURE5 = 33989, gl.TEXTURE6 = 33990, gl.TEXTURE7 = 33991, gl.TEXTURE8 = 33992, gl.TEXTURE9 = 33993, gl.TEXTURE10 = 33994, gl.TEXTURE11 = 33995, gl.TEXTURE12 = 33996, gl.TEXTURE13 = 33997, gl.TEXTURE14 = 33998, gl.TEXTURE15 = 33999, gl.TEXTURE16 = 34e3, gl.TEXTURE17 = 34001, gl.TEXTURE18 = 34002, gl.TEXTURE19 = 34003, gl.TEXTURE20 = 34004, gl.TEXTURE21 = 34005, gl.TEXTURE22 = 34006, gl.TEXTURE23 = 34007, gl.TEXTURE24 = 34008, gl.TEXTURE25 = 34009, gl.TEXTURE26 = 34010, gl.TEXTURE27 = 34011, gl.TEXTURE28 = 34012, gl.TEXTURE29 = 34013, gl.TEXTURE30 = 34014, gl.TEXTURE31 = 34015, gl.ACTIVE_TEXTURE = 34016, gl.REPEAT = 10497, gl.CLAMP_TO_EDGE = 33071, gl.MIRRORED_REPEAT = 33648, gl.FLOAT_VEC2 = 35664, gl.FLOAT_VEC3 = 35665, gl.FLOAT_VEC4 = 35666, gl.INT_VEC2 = 35667, gl.INT_VEC3 = 35668, gl.INT_VEC4 = 35669, gl.BOOL = 35670, gl.BOOL_VEC2 = 35671, gl.BOOL_VEC3 = 35672, gl.BOOL_VEC4 = 35673, gl.FLOAT_MAT2 = 35674, gl.FLOAT_MAT3 = 35675, gl.FLOAT_MAT4 = 35676, gl.SAMPLER_2D = 35678, gl.SAMPLER_CUBE = 35680, gl.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, gl.VERTEX_ATTRIB_ARRAY_SIZE = 34339, gl.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, gl.VERTEX_ATTRIB_ARRAY_TYPE = 34341, gl.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, gl.VERTEX_ATTRIB_ARRAY_POINTER = 34373, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, gl.IMPLEMENTATION_COLOR_READ_TYPE = 35738, gl.IMPLEMENTATION_COLOR_READ_FORMAT = 35739, gl.COMPILE_STATUS = 35713, gl.LOW_FLOAT = 36336, gl.MEDIUM_FLOAT = 36337, gl.HIGH_FLOAT = 36338, gl.LOW_INT = 36339, gl.MEDIUM_INT = 36340, gl.HIGH_INT = 36341, gl.FRAMEBUFFER = 36160, gl.RENDERBUFFER = 36161, gl.RGBA4 = 32854, gl.RGB5_A1 = 32855, gl.RGB565 = 36194, gl.DEPTH_COMPONENT16 = 33189, gl.STENCIL_INDEX8 = 36168, gl.DEPTH_STENCIL = 34041, gl.RENDERBUFFER_WIDTH = 36162, gl.RENDERBUFFER_HEIGHT = 36163, gl.RENDERBUFFER_INTERNAL_FORMAT = 36164, gl.RENDERBUFFER_RED_SIZE = 36176, gl.RENDERBUFFER_GREEN_SIZE = 36177, gl.RENDERBUFFER_BLUE_SIZE = 36178, gl.RENDERBUFFER_ALPHA_SIZE = 36179, gl.RENDERBUFFER_DEPTH_SIZE = 36180, gl.RENDERBUFFER_STENCIL_SIZE = 36181, gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, gl.COLOR_ATTACHMENT0 = 36064, gl.DEPTH_ATTACHMENT = 36096, gl.STENCIL_ATTACHMENT = 36128, gl.DEPTH_STENCIL_ATTACHMENT = 33306, gl.NONE = 0, gl.FRAMEBUFFER_COMPLETE = 36053, gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, gl.FRAMEBUFFER_UNSUPPORTED = 36061, gl.FRAMEBUFFER_BINDING = 36006, gl.RENDERBUFFER_BINDING = 36007, gl.MAX_RENDERBUFFER_SIZE = 34024, gl.INVALID_FRAMEBUFFER_OPERATION = 1286, gl.UNPACK_FLIP_Y_WEBGL = 37440, gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, gl.CONTEXT_LOST_WEBGL = 37442, gl.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, gl.BROWSER_DEFAULT_WEBGL = 37444, gl.SHADER_BINARY_FORMATS = 36344, gl.NUM_SHADER_BINARY_FORMATS = 36345, gl.NUM_COMPRESSED_TEXTURE_FORMATS = 34466
}

function OpenOptMode() {
	gl.flushCommand && isSupportTypeArray() && attachMethodOpt(), buffer_data = new Float32Array(total_size)
}

function closeOptMode() {
	attachMethod()
}

function flushCommand() {
	next_index > 0 && (gl.flushCommand(next_index, buffer_data), next_index = 0)
}

function glCommitOpt() {
	flushCommand(), gl.commit()
}

function activeTextureOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_ACTIVE_TEXTURE, buffer_data[next_index + 1] = e, next_index += 2
}

function attachShaderOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_ATTACH_SHADER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function bindAttribLocationOpt(e, t, i) {
	flushCommand(), bindAttribLocation(e, t, i)
}

function bindBufferOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function bindFramebufferOpt(e, t) {
	flushCommand(), bindFramebuffer(e, t)
}

function bindRenderbufferOpt(e, t) {
	flushCommand(), bindRenderbuffer(e, t)
}

function bindTextureOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_TEXTURE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function blendColorOpt(e, t, i, r) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_COLOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function blendEquationOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_EQUATION, buffer_data[next_index + 1] = e, next_index += 2
}

function blendEquationSeparateOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_EQUATION_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function blendFuncOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_FUNC, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function blendFuncSeparateOpt(e, t, i, r) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_FUNC_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function bufferDataOpt(e, t, i) {
	flushCommand(), bufferData(e, t, i)
}

function bufferSubDataOpt(e, t, i) {
	flushCommand(), bufferSubData(e, t, i)
}

function checkFramebufferStatusOpt(e) {
	flushCommand(), checkFramebufferStatus(e)
}

function clearOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR, buffer_data[next_index + 1] = e, next_index += 2
}

function clearColorOpt(e, t, i, r) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_COLOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function clearDepthOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_DEPTH, buffer_data[next_index + 1] = e, next_index += 2
}

function clearStencilOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_STENCIL, buffer_data[next_index + 1] = e, next_index += 2
}

function colorMaskOpt(e, t, i, r) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COLOR_MASK, buffer_data[next_index + 1] = e ? 1 : 0, buffer_data[next_index + 2] = t ? 1 : 0, buffer_data[next_index + 3] = i ? 1 : 0, buffer_data[next_index + 4] = r ? 1 : 0, next_index += 5
}

function compileShaderOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COMPILE_SHADER, buffer_data[next_index + 1] = e, next_index += 2
}

function compressedTexImage2DOpt(e, t, i, r, n, o, a) {
	flushCommand(), compressedTexImage2D(e, t, i, r, n, o, a)
}

function compressedTexSubImage2DOpt(e, t, i, r, n, o, a, s) {
	flushCommand(), compressedTexSubImage2D(e, t, i, r, n, o, a, s)
}

function copyTexImage2DOpt(e, t, i, r, n, o, a, s) {
	next_index + 9 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COPY_TEX_IMAGE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = o, buffer_data[next_index + 7] = a, buffer_data[next_index + 8] = s, next_index += 9
}

function copyTexSubImage2DOpt(e, t, i, r, n, o, a, s) {
	next_index + 9 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COPY_TEX_SUB_IMAGE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = o, buffer_data[next_index + 7] = a, buffer_data[next_index + 8] = s, next_index += 9
}

function createBufferOpt() {
	return flushCommand(), createBuffer()
}

function createFramebufferOpt() {
	return flushCommand(), createFramebuffer()
}

function createProgramOpt() {
	return flushCommand(), createProgram()
}

function createRenderbufferOpt() {
	return flushCommand(), createRenderbuffer()
}

function createShaderOpt(e) {
	return flushCommand(), createShader(e)
}

function createTextureOpt() {
	return flushCommand(), createTexture()
}

function cullFaceOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CULL_FACE, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteBufferOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_BUFFER, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteFramebufferOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_FRAME_BUFFER, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteProgramOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_PROGRAM, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteRenderbufferOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_RENDER_BUFFER, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteShaderOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_SHADER, buffer_data[next_index + 1] = e, next_index += 2
}

function deleteTextureOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DELETE_TEXTURE, buffer_data[next_index + 1] = e, next_index += 2
}

function depthFuncOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DEPTH_FUNC, buffer_data[next_index + 1] = e, next_index += 2
}

function depthMaskOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DEPTH_MASK, buffer_data[next_index + 1] = e ? 1 : 0, next_index += 2
}

function depthRangeOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DEPTH_RANGE, buffer_data[next_index + 1] = e, buffer_data[next_index + 1] = t, next_index += 3
}

function detachShaderOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DETACH_SHADER, buffer_data[next_index + 1] = e, buffer_data[next_index + 1] = t, next_index += 3
}

function disableOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DISABLE, buffer_data[next_index + 1] = e, next_index += 2
}

function disableVertexAttribArrayOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DISABLE_VERTEX_ATTRIB_ARRAY, buffer_data[next_index + 1] = e, next_index += 2
}

function drawArraysOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DRAW_ARRAYS, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4, i > 0 && checkFirstFrames()
}

function drawElementsOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DRAW_ELEMENTS, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5, t > 0 && checkFirstFrames()
}

function enableOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_ENABLE, buffer_data[next_index + 1] = e, next_index += 2
}

function enableVertexAttribArrayOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_ENABLE_VERTEX_ATTRIB_ARRAY, buffer_data[next_index + 1] = e, next_index += 2
}

function finishOpt() {
	next_index + 1 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FINISH, next_index += 1
}

function flushOpt() {
	next_index + 1 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FLUSH, next_index += 1
}

function framebufferRenderbufferOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_RENDER_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function framebufferTexture2DOpt(e, t, i, r, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_TEXTURE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, next_index += 6
}

function frontFaceOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FRONT_FACE, buffer_data[next_index + 1] = e, next_index += 2
}

function generateMipmapOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_GENERATE_MIPMAP, buffer_data[next_index + 1] = e, next_index += 2
}

function getActiveAttribOpt(e, t) {
	return flushCommand(), getActiveAttrib(e, t)
}

function getActiveUniformOpt(e, t) {
	return flushCommand(), getActiveUniform(e, t)
}

function getAttachedShadersOpt(e) {
	return flushCommand(), getAttachedShaders(e)
}

function getAttribLocationOpt(e, t) {
	return flushCommand(), getAttribLocation(e, t)
}

function getBufferParameterOpt(e, t) {
	return flushCommand(), getBufferParameter(e, t)
}

function getParameterOpt(e) {
	return flushCommand(), getParameter(e)
}

function getErrorOpt() {
	return flushCommand(), getError()
}

function getFramebufferAttachmentParameterOpt(e, t, i) {
	return flushCommand(), getFramebufferAttachmentParameter(e, t, i)
}

function getProgramParameterOpt(e, t) {
	return flushCommand(), getProgramParameter(e, t)
}

function getProgramInfoLogOpt(e) {
	return flushCommand(), getProgramInfoLog(e)
}

function getRenderbufferParameterOpt(e, t) {
	return flushCommand(), getRenderbufferParameter(e, t)
}

function getShaderParameterOpt(e, t) {
	return flushCommand(), getShaderParameter(e, t)
}

function getShaderPrecisionFormatOpt(e, t) {
	return flushCommand(), getShaderPrecisionFormat(e, t)
}

function getShaderInfoLogOpt(e) {
	return flushCommand(), getShaderInfoLog(e)
}

function getShaderSourceOpt(e) {
	return flushCommand(), getShaderSource(e)
}

function getTexParameterOpt(e, t) {
	return flushCommand(), getTexParameter(e, t)
}

function getUniformOpt(e, t) {
	return flushCommand(), getUniform(e, t)
}

function getUniformLocationOpt(e, t) {
	return flushCommand(), getUniformLocation(e, t)
}

function getVertexAttribOpt(e, t) {
	return flushCommand(), getVertexAttrib(e, t)
}

function getVertexAttribOffsetOpt(e, t) {
	return flushCommand(), getVertexAttribOffset(e, t)
}

function hintOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_HINT, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function isBufferOpt(e) {
	return flushCommand(), isBuffer(e)
}

function isEnabledOpt(e) {
	return flushCommand(), isEnabled(e)
}

function isFramebufferOpt(e) {
	return flushCommand(), isFramebuffer(e)
}

function isProgramOpt(e) {
	return flushCommand(), isProgram(e)
}

function isRenderbufferOpt(e) {
	return flushCommand(), isRenderbuffer(e)
}

function isShaderOpt(e) {
	return flushCommand(), isShader(e)
}

function isTextureOpt(e) {
	return flushCommand(), isTexture(e)
}

function lineWidthOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_LINE_WIDTH, buffer_data[next_index + 1] = e, next_index += 2
}

function linkProgramOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_LINK_PROGRAM, buffer_data[next_index + 1] = e, next_index += 2
}

function pixelStoreiOpt(e, t) {
	flushCommand(), pixelStorei(e, t)
}

function polygonOffsetOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_POLYGON_OFFSET, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function readPixelsOpt(e, t, i, r, n, o, a) {
	flushCommand(), readPixels(e, t, i, r, n, o, a)
}

function renderbufferStorageOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_RENDER_BUFFER_STORAGE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function sampleCoverageOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_SAMPLE_COVERAGE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t ? 1 : 0, next_index += 3
}

function scissorOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_SCISSOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function shaderSourceOpt(e, t) {
	flushCommand(), shaderSource(e, t)
}

function stencilFuncOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function stencilFuncSeparateOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function stencilMaskOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_MASK, buffer_data[next_index + 1] = e, next_index += 2
}

function stencilMaskSeparateOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_MASK_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function stencilOpOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_OP, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function stencilOpSeparateOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_OP_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function texImage2DOpt(e, t, i) {
	switch (flushCommand(), arguments.length) {
		case 6:
			var r = arguments[3],
				n = arguments[4],
				o = arguments[5];
			Object.prototype.hasOwnProperty.call(o, "__nativeObj") ? gl.glTexImage2D(e, t, i, r, n, o.__nativeObj) : Object.prototype.hasOwnProperty.call(o, "buffer") && Object.prototype.hasOwnProperty.call(o.buffer, "eof") && Object.prototype.hasOwnProperty.call(o.buffer, "pointer") && Object.prototype.hasOwnProperty.call(o.buffer, "netOrder") && o.width > 0 && o.height > 0 && gl.glTexImage2D(e, t, i, r, n, o);
			break;
		case 9:
			var a = arguments[3],
				s = arguments[4],
				h = arguments[5],
				r = arguments[6],
				n = arguments[7],
				l = arguments[8];
			gl.glTexImage2D(e, t, i, a, s, h, r, n, l)
	}
}

function texParameterfOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function texParameteriOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function texSubImage2DOpt(e, t, i, r, n, o, a, s, h) {
	flushCommand(), texSubImage2D(e, t, i, r, n, o, a, s, h)
}

function texSubImage2DOpt(e, t, i, r, n, o, a) {
	flushCommand(), texSubImage2D(e, t, i, r, n, o, a)
}

function uniform1fOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function uniform2fOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function uniform3fOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function uniform4fOpt(e, t, i, r, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, next_index += 6
}

function uniform1iOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function uniform2iOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function uniform3iOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function uniform4iOpt(e, t, i, r, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, next_index += 6
}

function uniform1fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform2fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform3fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform4fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform1ivOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1IV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform2ivOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2IV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform3ivOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3IV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniform4ivOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4IV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function uniformMatrix2fvOpt(e, t, i) {
	next_index + 4 + i.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_2FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i.length, buffer_data.set(i, next_index + 4), next_index += 4 + i.length
}

function uniformMatrix3fvOpt(e, t, i) {
	next_index + 4 + i.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_3FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i.length, buffer_data.set(i, next_index + 4), next_index += 4 + i.length
}

function uniformMatrix4fvOpt(e, t, i) {
	next_index + 4 + i.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_4FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i.length, buffer_data.set(i, next_index + 4), next_index += 4 + i.length
}

function useProgramOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_USE_PROGRAM, buffer_data[next_index + 1] = e, next_index += 2
}

function validateProgramOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VALIDATE_PROGRAM, buffer_data[next_index + 1] = e, next_index += 2
}

function vertexAttrib1fOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_1F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function vertexAttrib2fOpt(e, t, i) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_2F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, next_index += 4
}

function vertexAttrib3fOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_3F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function vertexAttrib4fOpt(e, t, i, r, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_4F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, buffer_data[next_index + 5] = n, next_index += 6
}

function vertexAttrib1fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_1FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function vertexAttrib2fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_2FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function vertexAttrib3fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_3FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function vertexAttrib4fvOpt(e, t) {
	next_index + 3 + t.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_4FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t.length, buffer_data.set(t, next_index + 3), next_index += 3 + t.length
}

function vertexAttribPointerOpt(e, t, i, r, n, o) {
	next_index + 7 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_POINTER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r ? 1 : 0, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = o, next_index += 7
}

function viewportOpt(e, t, i, r) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VIEW_PORT, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = i, buffer_data[next_index + 4] = r, next_index += 5
}

function isSupportTypeArray() {
	if ("android" == GameStatusInfo.platform) return !0;
	var e = BK.Director.queryDeviceInfo(),
		t = e.version.split(".");
	return "ios" == e.platform && Number(t[0]) >= 10
}

function attachMethodOpt() {
	gl.activeTexture = activeTextureOpt, gl.attachShader = attachShaderOpt, gl.bindAttribLocation = bindAttribLocationOpt, gl.bindBuffer = bindBufferOpt, gl.bindFramebuffer = bindFramebufferOpt, gl.bindRenderbuffer = bindRenderbufferOpt, gl.bindTexture = bindTextureOpt, gl.blendColor = blendColorOpt, gl.blendEquation = blendEquationOpt, gl.blendEquationSeparate = blendEquationSeparateOpt, gl.blendFunc = blendFuncOpt, gl.blendFuncSeparate = blendFuncSeparateOpt, gl.bufferData = bufferDataOpt, gl.bufferData = bufferDataOpt, gl.bufferSubData = bufferSubDataOpt, gl.checkFramebufferStatus = checkFramebufferStatusOpt, gl.clear = clearOpt, gl.clearColor = clearColorOpt, gl.clearDepth = clearDepthOpt, gl.clearStencil = clearStencilOpt, gl.colorMask = colorMaskOpt, gl.compileShader = compileShaderOpt, gl.compressedTexImage2D = compressedTexImage2DOpt, gl.compressedTexSubImage2D = compressedTexSubImage2DOpt, gl.copyTexImage2D = copyTexImage2DOpt, gl.copyTexSubImage2D = copyTexSubImage2DOpt, gl.createBuffer = createBufferOpt, gl.createFramebuffer = createFramebufferOpt, gl.createProgram = createProgramOpt, gl.createRenderbuffer = createRenderbufferOpt, gl.createShader = createShaderOpt, gl.createTexture = createTextureOpt, gl.cullFace = cullFaceOpt, gl.deleteBuffer = deleteBufferOpt, gl.deleteFramebuffer = deleteFramebufferOpt, gl.deleteProgram = deleteProgramOpt, gl.deleteRenderbuffer = deleteRenderbufferOpt, gl.deleteShader = deleteShaderOpt, gl.deleteTexture = deleteTextureOpt, gl.depthFunc = depthFuncOpt, gl.depthMask = depthMaskOpt, gl.depthRange = depthRangeOpt, gl.detachShader = detachShaderOpt, gl.disable = disableOpt, gl.disableVertexAttribArray = disableVertexAttribArrayOpt, gl.drawArrays = drawArraysOpt, gl.drawElements = drawElementsOpt, gl.enable = enableOpt, gl.enableVertexAttribArray = enableVertexAttribArrayOpt, gl.finish = finishOpt, gl.flush = flushOpt, gl.framebufferRenderbuffer = framebufferRenderbufferOpt, gl.framebufferTexture2D = framebufferTexture2DOpt, gl.frontFace = frontFaceOpt, gl.generateMipmap = generateMipmapOpt, gl.getActiveAttrib = getActiveAttribOpt, gl.getActiveUniform = getActiveUniformOpt, gl.getAttachedShaders = getAttachedShadersOpt, gl.getAttribLocation = getAttribLocationOpt, gl.getBufferParameter = getBufferParameterOpt, gl.getParameter = getParameterOpt, gl.getError = getErrorOpt, gl.getFramebufferAttachmentParameter = getFramebufferAttachmentParameterOpt, gl.getProgramParameter = getProgramParameterOpt, gl.getProgramInfoLog = getProgramInfoLogOpt, gl.getRenderbufferParameter = getRenderbufferParameterOpt, gl.getShaderParameter = getShaderParameterOpt, gl.getShaderPrecisionFormat = getShaderPrecisionFormatOpt, gl.getShaderInfoLog = getShaderInfoLogOpt, gl.getShaderSource = getShaderSourceOpt, gl.getTexParameter = getTexParameterOpt, gl.getUniform = getUniformOpt, gl.getUniformLocation = getUniformLocationOpt, gl.getVertexAttrib = getVertexAttribOpt, gl.getVertexAttribOffset = getVertexAttribOffsetOpt, gl.hint = hintOpt, gl.isBuffer = isBufferOpt, gl.isEnabled = isEnabledOpt, gl.isFramebuffer = isFramebufferOpt, gl.isProgram = isProgramOpt, gl.isRenderbuffer = isRenderbufferOpt, gl.isShader = isShaderOpt, gl.isTexture = isTextureOpt, gl.lineWidth = lineWidthOpt, gl.linkProgram = linkProgramOpt, gl.pixelStorei = pixelStoreiOpt, gl.polygonOffset = polygonOffsetOpt, gl.readPixels = readPixelsOpt, gl.renderbufferStorage = renderbufferStorageOpt, gl.sampleCoverage = sampleCoverageOpt, gl.scissor = scissorOpt, gl.shaderSource = shaderSourceOpt, gl.stencilFunc = stencilFuncOpt, gl.stencilFuncSeparate = stencilFuncSeparateOpt, gl.stencilMask = stencilMaskOpt, gl.stencilMaskSeparate = stencilMaskSeparateOpt, gl.stencilOp = stencilOpOpt, gl.stencilOpSeparate = stencilOpSeparateOpt, gl.texImage2D = texImage2DOpt, gl.texImage2D = texImage2DOpt, gl.texParameterf = texParameterfOpt, gl.texParameteri = texParameteriOpt, gl.texSubImage2D = texSubImage2DOpt, gl.texSubImage2D = texSubImage2DOpt, gl.uniform1f = uniform1fOpt, gl.uniform2f = uniform2fOpt, gl.uniform3f = uniform3fOpt, gl.uniform4f = uniform4fOpt, gl.uniform1i = uniform1iOpt, gl.uniform2i = uniform2iOpt, gl.uniform3i = uniform3iOpt, gl.uniform4i = uniform4iOpt, gl.uniform1fv = uniform1fvOpt, gl.uniform2fv = uniform2fvOpt, gl.uniform3fv = uniform3fvOpt, gl.uniform4fv = uniform4fvOpt, gl.uniform1iv = uniform1ivOpt, gl.uniform2iv = uniform2ivOpt, gl.uniform3iv = uniform3ivOpt, gl.uniform4iv = uniform4ivOpt, gl.uniformMatrix2fv = uniformMatrix2fvOpt, gl.uniformMatrix3fv = uniformMatrix3fvOpt, gl.uniformMatrix4fv = uniformMatrix4fvOpt, gl.useProgram = useProgramOpt, gl.validateProgram = validateProgramOpt, gl.vertexAttrib1f = vertexAttrib1fOpt, gl.vertexAttrib2f = vertexAttrib2fOpt, gl.vertexAttrib3f = vertexAttrib3fOpt, gl.vertexAttrib4f = vertexAttrib4fOpt, gl.vertexAttrib1fv = vertexAttrib1fvOpt, gl.vertexAttrib2fv = vertexAttrib2fvOpt, gl.vertexAttrib3fv = vertexAttrib3fvOpt, gl.vertexAttrib4fv = vertexAttrib4fvOpt, gl.vertexAttribPointer = vertexAttribPointerOpt, gl.viewport = viewportOpt, gl.glCommit = glCommitOpt
}

function __dispatchEvent(e, t, i) {
	BK.Script.log(0, 0, "__dispatchEvent err:" + e + " cmd:" + t + " data:" + i), Array.isArray(__browserMsgHdl.listenerInfos) && __browserMsgHdl.listenerInfos.length <= 0 && "sc.init_global_var.local" == t && (GameStatusInfo = JSON.parse(i)), __browserMsgHdl.listenerInfos.forEach(function(r) {
		if (r.cmd == t) {
			var n = r.callback;
			try {
				"cs.get_file_data.local" == t ? n(e, t, i) : n(e, t, JSON.parse(i))
			} catch (e) {
				console.log(e), BK.Script.log(0, 0, "JSON parse error:" + e + " data: " + i)
			}
		}
	}, this), BK.MQQ.SsoRequest.listenerInfos.forEach(function(r) {
		r.cmd == t && (0, r.callback)(e, t, JSON.parse(i))
	}, this)
}
var hasBK = !("object" != typeof BK),
	isBrowser = !hasBK;
if (isBrowser) "undefined" != typeof BK == 0 && (BK = {}, BK.isBrowser = !0),
	function(e, t) {
		if ("object" == typeof e) {
			var i = function() {
				var e = function() {
						function e() {}
						return e.open = function(e) {
							t.send({
								url: e
							}, "cs.openWebView.local")
						}, e.openTransparent = function(e, i, r) {
							void 0 === i && (i = 1);
							var n = "cs.openWebViewWithoutUrl.local";
							r && (__browserMsgHdl.removeListener(n, this), __browserMsgHdl.addListener(n, this, r)), t.send({
								url: e
							}, n)
						}, e.closeTransparent = function(e) {
							t.send({
								taskId: e
							}, "cs.closeWebview.local")
						}, e.onMessageHandle = function(e) {}, e
					}(),
					t = function() {
						function e() {}
						return e.ssoRequestCallBack = function(e, t, i) {
							BK.Script.log(0, 0, "ssoRequestCallBack cmd:" + t + " errCode:" + e + " data:" + JSON.stringify(i)), __dispatchEvent(e, i.cmd, JSON.stringify(i.data))
						}, e.sendSSO = function(t, i) {
							__browserMsgHdl.addListener("cs.ssoMessage.local", this, this.ssoRequestCallBack), e.send({
								cmd: i,
								data: JSON.stringify(t)
							}, "cs.ssoMessage.local")
						}, e.addListener = function(e, t, i) {
							__browserMsgHdl.addListener(e, t, i)
						}, e.removeListener = function(e, t) {
							__browserMsgHdl.removeListener(e, t)
						}, e.send = function(e, t) {
							-1 != t.indexOf("cs.") && -1 != t.indexOf(".local") ? "undefined" != typeof __browserMsg ? __browserMsg.send(JSON.stringify(e), t) : void 0 !== window.webkit.messageHandlers && window.webkit.messageHandlers.cmWebGameSend.postMessage({
								data: JSON.stringify(e),
								cmd: t
							}) : BK.MQQ.SsoRequest.sendSSO(e, t)
						}, e.sendWebMessage = function(t, i) {
							e.send({
								cmd: i,
								data: JSON.stringify(t)
							}, "sc.web_callback_game.local")
						}, e
					}(),
					i = function() {
						function e() {}
						return e.accountCallBack = function(t, i, r) {
							var n = "0";
							1 === r.nickname ? n = "1" : 1 === r.avatar && (n = "2");
							var o = i + "_" + n;
							e.accountCallBackArr[o] && (0, e.accountCallBackArr[o])(r.openId, r.data)
						}, e.getNick = function(t, i) {
							e.accountCallBackArr["cs.get_userInfo.local_1"] = i, BK.MQQ.SsoRequest.addListener("cs.get_userInfo.local", this, this.accountCallBack), BK.MQQ.SsoRequest.send({
								openId: t,
								nickname: 1
							}, "cs.get_userInfo.local")
						}, e.getHead = function(t, i) {
							e.accountCallBackArr["cs.get_userInfo.local_2"] = i, BK.MQQ.SsoRequest.addListener("cs.get_userInfo.local", this, this.accountCallBack), BK.MQQ.SsoRequest.send({
								openId: t,
								avatar: 1
							}, "cs.get_userInfo.local")
						}, e.accountCallBackArr = [], e
					}(),
					r = function() {
						function e() {}
						return e.log = function(e, t, i) {
							"undefined" != typeof GameStatusInfo && this.compareVersion(GameStatusInfo.QQVer, "7.6.0") >= 0 && ("undefined" != typeof __browserMsg ? __browserMsg.log(e, t, "webGame_log", i, "") : void 0 !== window.webkit.messageHandlers && window.webkit.messageHandlers.cmWebGameLog.postMessage({
								level: e,
								errcode: t,
								info1: "webGame_log",
								info2: i,
								info3: ""
							}))
						}, e.compareVersion = function(t, i) {
							var r = t.split("."),
								n = i.split("."),
								o = r[0] - n[0];
							return 0 == o && t != i ? e.compareVersion(r.splice(1).join("."), n.splice(1).join(".")) : o
						}, e
					}(),
					n = function() {
						function e() {}
						return e.base64ToUint8Array = function(e) {
							var t, i, r, n, o, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
								s = .75 * e.length,
								h = e.length,
								l = 0;
							"=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
							var u = new ArrayBuffer(s),
								d = new Uint8Array(u);
							for (t = 0; t < h; t += 4) i = a.indexOf(e[t]), r = a.indexOf(e[t + 1]), n = a.indexOf(e[t + 2]), o = a.indexOf(e[t + 3]), d[l++] = i << 2 | r >> 4, d[l++] = (15 & r) << 4 | n >> 2, d[l++] = (3 & n) << 6 | 63 & o;
							return d
						}, e.upload = function(e, t, i) {
							var r = e.length > 1024 ? 1024 : e.length,
								n = e.slice(0, r),
								o = BK.Crypt.core_md5(n, r),
								a = new Date,
								s = a.getFullYear() + (a.getMonth() + 1 < 10 ? 0 + (a.getMonth() + 1) : a.getMonth() + 1) + a.getDate(),
								h = t.tmpSecretId,
								l = t.upLoadPrefUrl,
								u = t.downloadUrl,
								d = t.sessionToken,
								c = t.signature,
								f = t.signTime,
								_ = "/" + GameStatusInfo.gameId + "_" + BK.Crypt.bin2hex(o) + GameStatusInfo.gameId + "_" + s + ".png";
							l = l.replace(new RegExp("http://", "gm"), "");
							var g = "put\n" + _ + "\n\nhost=" + l + "&x-cos-storage-class=nearline\n",
								m = "sha1\n" + f + "\n" + BK.Crypt.hex_sha1(g) + "\n",
								p = "q-sign-algorithm=sha1&q-ak=" + h + "&q-sign-time=" + f + "&q-key-time=" + f + "&q-header-list=host;x-cos-storage-class&q-url-param-list=&q-signature=" + BK.Crypt.hex_hmac_sha1(c, m),
								S = new XMLHttpRequest;
							S.onreadystatechange = function() {
								4 == this.readyState && (200 == this.status ? (BK.Script.log(0, 0, " on response res = " + this.status + "   " + JSON.stringify(this.HEADERS_RECEIVED)), u.charAt(u.length - 1) == _.charAt(0) && "/" == _.charAt(0) && (u = u.slice(0, u.length - 1)), i(this.status, u + _)) : i(this.status, ""))
							}, S.open("put", "https://" + l + _, !0), S.setRequestHeader("x-cos-storage-class", "nearline"), S.setRequestHeader("x-cos-security-token", d), S.setRequestHeader("authorization", p), S.send(e)
						}, e.uploadFromFile = function(e, t) {
							var i = "cs.get_file_data.local",
								r = {
									cmd: i,
									path: e
								};
							t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
								var n = BK.FileUtil.base64ToUint8Array(r);
								BK.FileUtil.uploadFromBuff(n, t)
							}), BK.MQQ.SsoRequest.send(r, i))
						}, e.uploadFromBuff = function(e, t) {
							BK.QQ.queryCloudSignature(function(i, r) {
								BK.FileUtil.upload(e, r, t)
							})
						}, e
					}(),
					o = function() {
						function e() {}
						return e.shareToMQQ = function(e, i, r, n) {
							var o = "cs.share_game_result.local",
								a = {
									cmd: o,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									gameVersion: GameStatusInfo.gameVersion,
									roomId: GameStatusInfo.roomId,
									title: e,
									summary: i,
									detailUrl: r,
									picUrl: n
								};
							t.send(a, o)
						}, e.getRankList = function(t, i) {
							var r = {
								cmd: this.CMSHOW_SRV_GET_RANK_LIST,
								from: "default",
								objType: 1,
								objId: 0,
								busType: 3,
								busId: GameStatusInfo.gameId.toString()
							};
							i && (i.objType && (r.objType = i.objType), i.objId && (r.objId = i.objId), i.from && (r.from = i.from)), BK.Script.log(1, 1, "BK.QQ.reqGetRankList! " + JSON.stringify(r)), void 0 != r ? (e._getRankListCallBack = t, BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SRV_GET_RANK_LIST, this), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SRV_GET_RANK_LIST, this, this._event4GetRankList), BK.MQQ.SsoRequest.sendSSO(r, this.CMSHOW_SRV_GET_RANK_LIST)) : BK.Script.log(0, 0, "reqGetRankList data undefined!")
						}, e.consumeItems = function(e, t) {
							var i = "apollo_game_item.consume_game_items",
								r = {
									cmd: i,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									items: e
								};
							t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
								var n = [],
									o = [];
								0 == e && (n = r.data.succList, o = r.data.failList), t(e, n, o)
							})), BK.MQQ.SsoRequest.sendSSO(r, i)
						}, e.getUserGameItems = function(e) {
							var t = "apollo_aio_game.get_user_game_items",
								i = {
									cmd: t,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId
								};
							e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, function(t, i, r) {
								if (void 0 != r) {
									var n = {};
									n.data = r.data, e(t, i, n)
								}
							})), BK.MQQ.SsoRequest.sendSSO(i, t)
						}, e.buyGameItems = function(e, t, i) {
							var r = "apollo_aio_game.buy_game_items",
								n = {
									cmd: r,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									curreType: e,
									itemIdList: t
								};
							i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, function(e, t, r) {
								if (void 0 != r) {
									var n = {};
									n.data = r.data, i(e, t, n)
								}
							})), BK.MQQ.SsoRequest.sendSSO(n, r)
						}, e.queryCloudSignature = function(e) {
							var t = "cs.fetch_cloud_signature.local",
								i = {
									cmd: t,
									now: (new Date).getTime() / 1e3 - 1,
									delta: 600
								};
							e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, function(t, i, r) {
								e(t, r)
							}), BK.MQQ.SsoRequest.send(i, t))
						}, e.notifyCloseGame = function() {
							var e = {
								gameId: GameStatusInfo.gameId,
								roomId: 0
							};
							BK.Script.log(0, 0, "BK.QQ.notifyCloseGame!gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.send(e, "cs.close_room.local")
						}, e.CMSHOW_SRV_GET_RANK_LIST = "apollo_router_game.game_rank_linkcmd_get_fri_rank_for_engine", e.shareToArk = function(e, i, r, n, o, a) {
							"boolean" == typeof n && (n = 1 == n ? 1 : 0);
							var s = "cs.share_game_in_ark.local",
								h = "sc.share_game_to_friend_result.local";
							"android" == GameStatusInfo.platform && 0 == GameStatusInfo.QQVer.indexOf("7.6.0") && (s = "cs.game_shell_share_callback.local");
							var l = {
								cmd: s,
								summary: i,
								picUrl: r,
								gameId: GameStatusInfo.gameId,
								roomId: e,
								gameMode: GameStatusInfo.gameMode,
								isSelectFriend: n,
								extendInfo: o
							};
							BK.Script.log(0, 0, "ShareToArk summary=" + l.summary + " roomId=" + l.roomId + "  gameMode=" + l.gameMode + "picUrl=" + l.picUrl + "  gameId=" + l.gameId), a && (BK.MQQ.SsoRequest.removeListener(h, this), BK.MQQ.SsoRequest.addListener(h, this, a)), t.send(l, s)
						}, e.shareToArkFromFile = function(e, t, i, r) {
							BK.FileUtil.uploadFromFile(r, function(r, n) {
								BK.QQ.shareToArk(e, t, n, !0, i)
							})
						}, e.shareToArkFromBuff = function(e, t, i, r) {
							BK.FileUtil.uploadFromBuff(r, function(r, n) {
								200 == r && BK.QQ.shareToArk(e, t, n, !0, i)
							})
						}, e.fetchOpenKey = function(e) {
							var t = "cs.on_get_open_key.local",
								i = {
									gameId: GameStatusInfo.gameId
								};
							e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(i, t)
						}, e.scoreUpload = function(e, t, i) {
							var r = "apollo_aio_game.report_user_score_3rd",
								n = {
									cmd: r,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									version: GameStatusInfo.gameVersion,
									roomId: GameStatusInfo.roomId,
									gData: e
								};
							i && (n.arkData = i), t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.sendSSO(n, r)
						}, e._getRankListCallBack = void 0, e._event4GetRankList = function(t, i, r) {
							BK.Script.log(1, 1, "BK.QQ.reqGetRankList! callback cmd:" + i + " errCode:" + t + "  data:" + JSON.stringify(r)), void 0 != e._getRankListCallBack && e._getRankListCallBack(t, i, r), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SRV_GET_RANK_LIST, this)
						}, e.uploadScoreWithoutRoom = function(e, t, i) {
							var r = "apollo_report_result.single_user_result",
								n = Math.floor((new Date).getTime() / 1e3),
								o = {
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									version: GameStatusInfo.gameVersion,
									aioType: 1,
									ts: n.toString(),
									src: GameStatusInfo.src,
									mode: void 0 !== e ? e : 1,
									userData: t.userData,
									attr: t.attr
								};
							i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, i)), BK.MQQ.SsoRequest.sendSSO(o, r)
						}, e.getRankListWithoutRoom = function(e, t, i, r) {
							var n = "apollo_router_game.apollo_user_rankinglist_linkcmd_custom_ranking",
								o = Math.floor((new Date).getTime() / 1e3),
								a = {
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									version: GameStatusInfo.gameVersion,
									ts: o.toString(),
									attr: void 0 !== e ? e : "score",
									order: void 0 !== t ? t : 1,
									rankType: void 0 !== i ? i : 0
								};
							r && (BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, r)), BK.MQQ.SsoRequest.sendSSO(a, n)
						}, e.qPayPurchase = function(e, t, i, r) {
							var n = 1,
								o = {
									gameOrientation: e,
									transparent: n = 1 == t ? 1 : 0,
									businessType: 2,
									url: "https://cmshow.qq.com/apollo/html/game-platform/buy-props.html?_wv=3&adtag=inside_game&gameId=" + GameStatusInfo.gameId + "&gameOrientation=" + e + "&itemList=" + encodeURI(JSON.stringify(i))
								};
							if (r) {
								var a = "sc.apolloGameWebMessage.local";
								BK.MQQ.SsoRequest.removeListener(a, this), BK.MQQ.SsoRequest.addListener(a, this, function(e, t, i) {
									0 == e && i.op && "apolloGamePlatform.buyProps" == i.op && r(i.data.code, i.data)
								}.bind(this))
							}
							BK.MQQ.SsoRequest.send(o, "cs.openWebViewWithoutUrl.local")
						}, e.getGameItemList = function(e) {
							var t = "apollo_aio_game.get_game_itemList",
								i = {
									cmd: t,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId
								};
							e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.sendSSO(i, t)
						}, e.rollbackGameItems = function(e, t) {
							var i = "apollo_game_item.rollback_game_items",
								r = {
									cmd: i,
									from: GameStatusInfo.platform,
									gameId: GameStatusInfo.gameId,
									openId: GameStatusInfo.openId,
									items: e
								};
							t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
								var n = [],
									o = [];
								0 == e && (n = r.data.succList, o = r.data.failList), t(e, n, o)
							}.bind(this))), BK.MQQ.SsoRequest.sendSSO(r, i)
						}, e.uploadData = function(e, t, i, r, n, o) {
							var a = "cs.report_data_2_compass.local",
								s = GameStatusInfo.gameId;
							"ios" == GameStatusInfo.platform && (e = e.toString(), i = i.toString());
							var h = {
								cmd: a,
								actionName: e,
								enter: t,
								entry: t,
								result: i,
								r2: s.toString(),
								r3: r,
								r4: n,
								r5: o
							};
							BK.MQQ.SsoRequest.sendSSO(h, a)
						}, e.saveGameData = function(e, t) {
							var i = "apollo_private_data.set_user_data",
								r = Math.floor((new Date).getTime() / 1e3),
								n = {
									openId: GameStatusInfo.openId,
									gameId: GameStatusInfo.gameId,
									version: GameStatusInfo.gameVersion,
									from: GameStatusInfo.platform,
									ts: r.toString(),
									data: e
								};
							t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(n, i)
						}, e.loadGameData = function(e) {
							var t = "apollo_private_data.get_user_data",
								i = Math.floor((new Date).getTime() / 1e3),
								r = {
									openId: GameStatusInfo.openId,
									gameId: GameStatusInfo.gameId,
									version: GameStatusInfo.gameVersion,
									from: GameStatusInfo.platform,
									ts: i.toString()
								};
							e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(r, t)
						}, e.reportGameResult = function(e, t) {
							var i = "apollo_router_game.apollo_reportcm_linkcmd_game_result";
							e.gameId = GameStatusInfo.gameId, t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(e, i)
						}, e.sendB2CRedPacket = function(e, t) {
							if (t) {
								var i = "sc.send_b2c_redpacket_result.local";
								BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
									t(e, i, r), BK.MQQ.SsoRequest.removeListener(i, this)
								})
							}
							var r = {
								groupPushData: {
									gameRedPacketId: 1,
									gameId: GameStatusInfo.gameId,
									extraInfo: e
								}
							};
							BK.Script.log(1, 1, "sendB2CRedPacket:" + JSON.stringify(r)), BK.MQQ.SsoRequest.send(r, "cs.send_b2c_redpacket.local"), BK.Script.log(0, 0, "sendB2CRedPacket")
						}, e
					}(),
					a = function() {
						function e() {}
						return e.close = function() {
							BK.MQQ.SsoRequest.sendWebMessage({}, "cs.close_room.local")
						}, e.packUp = function() {
							BK.MQQ.SsoRequest.sendWebMessage({}, "cs.make_room_min.local")
						}, e
					}(),
					s = function() {
						function e() {}
						return e
					}();
				return {
					Webview: e,
					SsoRequest: t,
					Account: i,
					Script: r,
					FileUtil: n,
					QQ: o,
					Game: a,
					Misc: s
				}
			}();
			void 0 === e.MQQ && (e.MQQ = {
				Webview: i.Webview,
				SsoRequest: i.SsoRequest,
				Account: i.Account
			}), void 0 === e.FileUtil && (e.FileUtil = i.FileUtil), void 0 === e.Script && (e.Script = i.Script), void 0 === e.QQ && (e.QQ = i.QQ), void 0 === e.Game && (e.Game = i.Game), void 0 === e.Misc && (e.Misc = i.Misc)
		}
	}(BK),
	function(e, t) {
		t.Script.setErrorObserver = function(e) {}, e._globalErrorCallback_ = function(e) {}
	}(this, BK), BK.Misc.compQQVersion || (BK.Misc.compQQVersion = function(e, t) {
		for (var i = e.split("."), r = t.split("."), n = Math.min(3, Math.min(i.length, r.length)), o = 0; o < n; o++)
			if (i[o] != r[o]) return i[o] < r[o];
		return !0
	});
else {
	! function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Emitter = t())
	}(BK, function() {
		var e = function() {
			function e(e, t, i) {
				this.once = i, this.target = e, this.callback = t
			}
			return e
		}();
		return function() {
			function t() {
				this._emits = {}
			}
			return t.prototype.__emit_get = function(e) {
				return this._emits[e] || (this._emits[e] = new Array), this._emits[e]
			}, t.prototype.__emit_put = function(e, t) {
				this.__emit_get(e).push(t)
			}, t.prototype.__emit_exists = function(e, t) {
				for (var i = this.__emit_get(e), r = !1, n = 0; n < i.length; n++)
					if (i[n].target == t) {
						r = !0;
						break
					}
				return r
			}, t.prototype.dispose = function() {
				delete this._emits
			}, t.prototype.on = function(t, i, r, n) {
				if (0 == this.__emit_exists(t, i)) {
					var o = new e(i, r, n);
					this.__emit_put(t, o)
				} else BK.Script.log(0, 0, "BK.bkEmitter.on!has found, event = " + t + ", target = " + JSON.stringify(i))
			}, t.prototype.off = function(e, t) {
				for (var i = this.__emit_get(e), r = 0; r < i.length; r++)
					if (i[r].target == t) {
						i.splice(r, 1);
						break
					}
			}, t.prototype.offAll = function(e) {
				Object.keys(this._emits).forEach(function(t) {
					this.off(t, e)
				}.bind(this))
			}, t.prototype.emitAll = function(e, t) {
				for (var i = new Array, r = this.__emit_get(e), n = 0; n < r.length; n++) {
					var o = {
						event: e,
						source: this,
						target: r[n].target,
						extras: t
					};
					r[n].callback && r[n].callback(o), 1 == r[n].once && i.push(r[n].target)
				}
				for (var a = 0; a < i.length; a++) this.off(e, i[a])
			}, t.prototype.emitOnce = function(e, t) {
				for (var i = new Array, r = this.__emit_get(e), n = 0; n < r.length; n++)
					if (1 == r[n].once) {
						var o = {
							event: e,
							source: this,
							target: r[n].target,
							extras: t
						};
						i.push(r[n].target), r[n].callback && r[n].callback(o)
					}
				for (var a = 0; a < i.length; a++) this.off(e, i[a])
			}, t
		}()
	}),
	function() {
		function e(e) {
			var t, i, n, o, a, s = .75 * e.length,
				h = e.length,
				l = 0;
			"=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
			var u = new ArrayBuffer(s);
			for (bytes = new Uint8Array(u), t = 0; t < h; t += 4) i = r.indexOf(e[t]), n = r.indexOf(e[t + 1]), o = r.indexOf(e[t + 2]), a = r.indexOf(e[t + 3]), bytes[l++] = i << 2 | n >> 4, bytes[l++] = (15 & n) << 4 | o >> 2, bytes[l++] = (3 & o) << 6 | 63 & a;
			return u
		}

		function t(e, t, i) {
			var n, o = new Uint8Array(e, t || 0, i || e.byteLength),
				a = o.length,
				s = "";
			for (n = 0; n < a; n += 3) s += r[o[n] >> 2], s += r[(3 & o[n]) << 4 | o[n + 1] >> 4], s += r[(15 & o[n + 1]) << 2 | o[n + 2] >> 6], s += r[63 & o[n + 2]];
			return a % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : a % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s
		}

		function i(e) {
			function t(e, t) {
				var i = t.length,
					r = {
						type: e
					};
				switch (e) {
					case 0:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Int8Array(t.buffer, a * Int8Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 1:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Int16Array(t.buffer, a * Int16Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 2:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Int32Array(t.buffer, a * Int32Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 3:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Uint8Array(t.buffer, a * Uint8Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 5:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Uint16Array(t.buffer, a * Uint16Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 6:
						for (a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Uint32Array(t.buffer, a * Uint32Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
						break;
					case 7:
						for (var a = 0; i > 0;) {
							var n = Math.min(i, 4096),
								o = new Float32Array(t.buffer, a * Float32Array.BYTES_PER_ELEMENT, n);
							BK.Misc.transferArrayBuffer.apply(r, o), a += 4096, i -= 4096
						}
				}
			}
			return e instanceof Int8Array == !0 ? t(0, e) : e instanceof Int16Array == !0 ? t(1, e) : e instanceof Int32Array == !0 ? t(2, e) : e instanceof Uint8Array == !0 ? t(3, e) : e instanceof Uint16Array == !0 ? t(5, e) : e instanceof Uint32Array == !0 ? t(6, e) : e instanceof Float32Array == !0 && t(7, e), BK.Misc.getTransferedArrayBuffer()
		}
		var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		BK.Misc.BKBufferToArrayBuffer = function(t) {
			return t.rewind(), e(BK.Misc.encodeBase64FromBuffer(t))
		}, BK.Misc.arrayBufferToBKBuffer = function(e, i, r) {
			var n = t(e, i, r);
			return BK.Misc.decodeBase64FromString(n)
		}, BK.Misc.typedArrayToBKBuffer = function(e) {
			return BK.Misc.transferArrayBuffer ? i(e) : BK.Misc.arrayBufferToBKBuffer(e.buffer, e.byteOffset, e.byteLength)
		}
	}(), enGameHallSucc = 0, eReqDataLenErr = 1e3, eReqMagicErr = 1001, eReqFrontCmdErr = 1002, eReqBackCmdErr = 1003, eReqBackSrcErr = 1004, eReqFromIdErr = 1005, eSTDecryErr = 1006, eReqDecryErr = 1007, eSTExpire = 1008, eSystmeErr = 1009, eVerUnvalid = 1010, eReqLimit = 1011, eGetSvrErr = 1012, eInitMemErr = 2001, eQueryMemErr = 2002, eUpdateMemErr = 2003, eDelMemErr = 2004, eGetConfigErr = 2005, eNotifyCreateErr = 2006, eGetRoomIdErr = 2007, eCmdInvalid = 2008, eRoomNotExist = 2009, eInBlackList = 2010, eMatchTimeOut = 2011, eGetRoomErr = 3e3, eRoomStatusErr = 3001, eIsNotCreator = 3002, eIsNotInRoom = 3003, eFlushTsErr = 3004, eLogoutIdErr = 3005, eIsNotInSvc = 3006, eUsrOverFlow = 3007, eRoomOverFlow = 3008, eRoomIsExist = 3009, eRmvUsrErr = 3010, eLoginSysErr = 3011, eUsrHasLoginErr = 3012, eRoomIsFullErr = 3013, eCreateRoomErr = 3014, ePlayerHasJoin = 3015, eUgcDataAnti = 3020, eFowardToClientErr = 4e3, eFowardToSvrErr = 4001;
	var DebugRecommandRoomSvrHost = "139.199.216.130",
		DebugRecommandRoomSvrPort = 10060,
		NormalRecommandRoomSvrHost = "139.199.216.128",
		NormalRecommandRoomSvrPort = 10060,
		TLVType = new Object;
	TLVType.Int8 = 33, TLVType.Uint8 = 34, TLVType.Int16 = 33, TLVType.Uint16 = 36, TLVType.Int32 = 37, TLVType.Uint32 = 38, TLVType.Int64 = 39, TLVType.Uint64 = 40, TLVType.Byte = 41, TLVType.Double = 42, TLVType.Float = 43, TLVType.Int8Repeated = 49, TLVType.Uint8Repeated = 50, TLVType.Int16Repeated = 51, TLVType.Uint16Repeated = 52, TLVType.Int32Repeated = 53, TLVType.Uint32Repeated = 54, TLVType.Int64Repeated = 55, TLVType.Uint64Repeated = 56, TLVType.ByteRepeated = 57, TLVType.DoubleRepeated = 58, TLVType.FloatRepeated = 59;
	var fixedHeaderLen = 120,
		HeaderLen = 12,
		currentGameMode = GameStatusInfo.gameMode,
		fromPlatform = GameStatusInfo.platform,
		currentAioType = GameStatusInfo.aioType,
		currentPlayerOpenId = GameStatusInfo.openId,
		isMaster = GameStatusInfo.isMaster;
	NETWORK_ENVIRONMENT_QQ_RELEASE = 0, NETWORK_ENVIRONMENT_QQ_DEBUG = 1, NETWORK_ENVIRONMENT_DEMO_DEV = 2, CMSHOW_SRV_CMD_JOIN_ROOM = "apollo_aio_game.join_room", CMSHOW_SRV_CMD_QUIT_GAME = "apollo_aio_game.quit_room", CMSHOW_SRV_CMD_START_GAME = "apollo_aio_game.start_game", CMSHOW_SRV_CMD_CANCEL_GAME = "apollo_aio_game.cancel_game_room", CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC = "apollo_game_openapi.custom_game_logic", CMSHOW_SRV_GET_RANK_LIST = "apollo_router_game.game_rank_linkcmd_get_fri_rank_for_engine", CMSHOW_SC_CMD_STOP_GAME = "sc.force_stop_game.local", CMSHOW_CS_CMD_MINI_WND = "cs.make_room_min.local", CMSHOW_CS_CMD_CLOSE_WND = "cs.close_room.local", CMSHOW_CS_CMD_CREATE_ROOM = "cs.create_room.local", CMSHOW_CS_CMD_JOIN_ROOM = "cs.join_room.local", CMSHOW_CS_CMD_SEND_GAME_MSG = "cs.send_game_msg.local", CMSHOW_CS_CMD_GAME_TIPS = "cs.game_tips.local", CMSHOW_CS_CMD_GET_PLAYER_DRESS = "cs.get_dress_path.local", CMSHOW_CS_CMD_GAME_READY = "cs.game_ready.local", CMSHOW_CS_CMD_GAME_START = "cs.game_start.local", CMSHOW_CS_CMD_SAVE_RECOMM_VIP = "cs.save_recommend_ip.local", CMSHOW_CS_CMD_GET_SRV_IP_PORT = "cs.get_server_ip_port.local", CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE = "cs.check_pubAccount_state.local", CMSHOW_CS_CMD_ENTER_PUBACCOUNT_CARD = "cs.enter_pubAccount_card.local", CMSHOW_CS_CMD_SHARE_PIC = "cs.share_pic.local", CMSHOW_CS_CMD_SHARE_IN_ARK = "cs.share_game_in_ark.local", CMSHOW_CS_CMD_QUERY_CLOUD_SIGNATURE = "cs.fetch_cloud_signature.local", CMSHOW_AIO_PAUSE = "sc.aio_pause.local", CMSHOW_AIO_RESUME = "sc.aio_resume.local", CMD_CMSHOW_GAME_ENTER_BACKGROUND = "sc.game_enter_background.local", CMD_CMSHOW_GAME_ENTER_FORGROUND = "sc.game_enter_foreground.local", CMD_CMSHOW_GAME_MAXIMIZE = "sc.game_maximize.local", CMD_CMSHOW_GAME_MINIMIZE = "sc.game_minimize.local", CMSHOW_CS_CMD_AUDIOROOM_ENTERN = "cs.audioRoom_enter.local", CMSHOW_CS_CMD_AUDIOROOM_EXIT = "cs.audioRoom_exit.local", CMSHOW_CS_CMD_AUDIOROOM_UPDATEUSERINFO = "cs.audioRoom_update_userinfo.local", CMSHOW_CS_CMD_AUDIOROOM_SET_MIC = "cs.audioRoom_set_mic.local", CMSHOW_CS_CMD_AUDIOROOM_SET_SPEAKER = "cs.audioRoom_set_speaker.local", CMSHOW_CS_CMD_AUDIOROOM_INIT = "cs.audioRoom_init.local", CMSHOW_CS_CMD_AUDIOROOM_DISCONNECT = "cs.audioRoom_disconnect.local", CMSHOW_CS_CMD_AUDIOROOM_CAMERASWITCH = "cs.audioRoom_cameraswitch.local", CMSHOW_CS_CMD_AUDIOROOM_SET_BEAUTY = "cs.audioRoom_set_beauty.local", CMSHOW_CS_CMD_AUDIOROOM_REQ_AUDIO_SESSION = "cs.audioRoom_req_audio_session.local";
	var currentRenderMode, glpause;
	checkRenderMode = function() {
			0 == currentRenderMode && (BK.Script.renderMode = 1, currentRenderMode = 1)
		}(function(e, t) {
			e.QQ = function() {
				return new function() {
					this.gameCfg = clone_(GameStatusInfo), this.gameCfg.gameId = parseInt(this.gameCfg.gameId), this.gameCfg.gameMode = 0, GameStatusInfo.gameMode = 0, this.hasJoinRoomSucc = !1, this.arkData = {
						modeWording: ""
					}, this.setArkData = function(e) {
						this.arkData.modeWording = e
					}, this.gameCfg.roomId && (this.gameCfg.roomId = parseInt(this.gameCfg.roomId)), 1 == this.gameCfg.isMaster ? this.gameCfg.isCreator = !0 : this.gameCfg.isCreator = !1, this.delegate = {}, this.ssoJoinRoomCallback, this.ssoJoinRoomCallbackPublic, BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, function() {
						1 == ("android" == GameStatusInfo.platform ? 1 : 2) && BK.Director.tickerPause()
					}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_ENTER_FORGROUND, this, function() {
						1 == ("android" == GameStatusInfo.platform ? 1 : 2) && BK.Director.tickerResume()
					}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_MINIMIZE, this, function() {
						1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (renderTicker.paused = !0, glpause = !0)
					}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_MAXIMIZE, this, function() {
						1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (renderTicker.paused = !1, glpause = !1)
					}), this.queryCloudSignature = function(e) {
						if (BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.3")) {
							if (e) {
								var t = JSON.parse(GameStatusInfo.extInfo),
									i = t.certInfo.credentials,
									r = i.tmpSecretId,
									n = i.sessionToken,
									o = t.certInfo.upLoadPrefUrl,
									a = t.certInfo.downLoadPrefUrl,
									s = ((l = new Date).getFullYear(), l.getMonth() + 1 < 10 ? l.getMonth() : l.getMonth(), l.getDate(), (u = l.getTime() / 1e3 - 1) + ";" + (u + 600)),
									h = BK.Crypt.hex_hmac_sha1(i.tmpSecretKey, s);
								e(0, d = {
									tmpSecretId: r,
									upLoadPrefUrl: o,
									downloadUrl: a,
									sessionToken: n,
									signature: h,
									signTime: s
								})
							}
						} else {
							var l = new Date,
								u = parseInt(l.getTime() / 1e3) - 1,
								d = {
									cmd: CMSHOW_CS_CMD_QUERY_CLOUD_SIGNATURE,
									now: u,
									delta: 600
								};
							e && (BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_QUERY_CLOUD_SIGNATURE, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_QUERY_CLOUD_SIGNATURE, this, function(t, i, r) {
								e(t, r)
							}), BK.MQQ.SsoRequest.send(d, CMSHOW_CS_CMD_QUERY_CLOUD_SIGNATURE))
						}
					}, this.qGetRankBoard = function(e, t, i, r) {
						var n = {
							gameOrientation: e,
							openId: GameStatusInfo.openId,
							transparent: 1,
							businessType: 2,
							url: "http://cmshow.qq.com/apollo/html/game-platform/general-chart.html?gameId=" + GameStatusInfo.gameId + "&_wwv=2&gameOrientation=" + e
						};
						BK.MQQ.SsoRequest.send(n, "cs.openWebViewWithoutUrl.local")
					}, this.qPayPurchase = function(e, t, i, r) {
						var n = 1;
						n = 1 == t ? 1 : 0;
						var o = {
							gameOrientation: e,
							openId: GameStatusInfo.openId,
							transparent: n,
							businessType: 1,
							itemList: i
						};
						if (r) {
							var a = "sc.apolloGameWebMessage.local";
							BK.MQQ.SsoRequest.removeListener(a, this), BK.MQQ.SsoRequest.addListener(a, this, function(e, t, i) {
								0 == e && i.op && "apolloGamePlatform.buyProps" == i.op && r(i.data.code, i.data)
							}.bind(this))
						}
						BK.MQQ.SsoRequest.send(o, "cs.openWebViewWithoutUrl.local")
					}, this.consumeItems = function(e, t) {
						var i = "apollo_game_item.consume_game_items",
							r = {
								cmd: i,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								items: e
							};
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
							var n = [],
								o = [];
							0 == e && (n = r.data.succList, o = r.data.failList), t(e, n, o)
						}.bind(this))), BK.MQQ.SsoRequest.send(r, i)
					}, this.rollbackGameItems = function(e, t) {
						var i = "apollo_game_item.rollback_game_items",
							r = {
								cmd: i,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								items: e
							};
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
							var n = [],
								o = [];
							0 == e && (n = r.data.succList, o = r.data.failList), t(e, n, o)
						}.bind(this))), BK.MQQ.SsoRequest.send(r, i)
					}, this.shareToMQQ = function(e, t, i, r) {
						var n = "cs.share_game_result.local",
							o = {
								cmd: n,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								gameVersion: GameStatusInfo.gameVersion,
								roomId: GameStatusInfo.roomId,
								title: e,
								summary: t,
								detailUrl: i,
								picUrl: r
							};
						BK.MQQ.SsoRequest.send(o, n)
					}, this.scoreUpload = function(e, t, i) {
						var r = "apollo_aio_game.report_user_score_3rd",
							n = {
								cmd: r,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								version: GameStatusInfo.gameVersion,
								roomId: GameStatusInfo.roomId,
								gData: e
							};
						i && (n.arkData = i), t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.send(n, r)
					}, this.getRoomUserScoreInfo = function(e, t) {
						var i = "apollo_aio_game.get_room_info_3rd",
							r = {
								cmd: i,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								version: GameStatusInfo.gameVersion,
								roomId: e
							};
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(r, i)
					}, this.getUserGameinfo = function(e, t, i) {
						var r = "apollo_aio_game.get_user_gameinfo_3rd",
							n = {
								cmd: r,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								version: GameStatusInfo.gameVersion,
								roomId: GameStatusInfo.roomId,
								toOpenId: e,
								cycleNum: t
							};
						i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, i)), BK.MQQ.SsoRequest.send(n, r)
					}, this.getUserCurrencyInfo = function(e, t) {
						var i = "apollo_aio_game.get_user_curreInfo",
							r = {
								cmd: i,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								version: GameStatusInfo.gameVersion,
								mask: e
							};
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(r, i)
					}, this.getCmshowDressInfo = function(e, t) {
						var i = "cs.get_dress_path.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t));
						var r = {
							openId: e
						};
						BK.MQQ.SsoRequest.send(r, "cs.get_dress_path.local")
					}, this.getGameItemList = function(e) {
						var t = "apollo_aio_game.get_game_itemList",
							i = {
								cmd: t,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId
							};
						e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(i, t)
					}, this.getUserGameItems = function(e) {
						var t = "apollo_aio_game.get_user_game_items",
							i = {
								cmd: t,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId
							};
						e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(i, t)
					}, this.buyGameItems = function(e, t, i) {
						var r = "apollo_aio_game.buy_game_items",
							n = {
								cmd: r,
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								curreType: e,
								itemIdList: t
							};
						i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, i)), BK.MQQ.SsoRequest.send(n, r)
					}, this.notifyNewRoom = function(e, t) {
						var i = {
							gameId: this.gameCfg.gameId,
							roomId: e,
							retcode: t
						};
						this.gameCfg.roomId || (this.gameCfg.roomId = e), BK.Script.log(0, 0, "BK.QQ.notifyNewRoom!gameId = " + i.gameId + ", roomId = " + i.roomId + ", retCode = " + t), BK.MQQ.SsoRequest.send(i, CMSHOW_CS_CMD_CREATE_ROOM)
					}, this.notifyHideGame = function() {
						var e = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.Script.log(0, 0, "BK.QQ.notifyHideGame!gameId = " + e.gameId + ", roomId = " + e.roomId), 1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (BK.Script.renderMode = 0, currentRenderMode = 0), BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_MINI_WND)
					}, this.notifyCloseGame = function() {
						this._closeRoom();
						var e = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.Script.log(0, 0, "BK.QQ.notifyCloseGame!gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_CLOSE_WND)
					}, this.notifyReadyGame = function() {
						var e = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_GAME_READY)
					}, this.notifyGameTips = function(e) {
						var t = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId,
							tips: e
						};
						BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_GAME_TIPS)
					}, this.notifyGameTipsWaiting = function() {
						this.notifyGameTips("等待玩家加入")
					}, this.notifyGameTipsSomeOneJoinRoom = function(e) {
						this.notifyGameTips(e + "加入房间")
					}, this.notifyGameTipsSomeOneLeaveRoom = function(e) {
						this.notifyGameTips(e + "离开房间")
					}, this.notifyGameTipsReady = function() {
						this.notifyGameTips("游戏即将开始")
					}, this.notifyGameTipsPlaying = function() {
						this.notifyGameTips("游戏进行中")
					}, this.notifyGameTipsGameOver = function() {
						this.notifyGameTips("游戏已结束")
					}, this.inviteFriend = function(e, t) {
						var i = "cs.invite_friends.local",
							r = {
								cmd: i,
								wording: e,
								gameId: this.gameCfg.gameId,
								gameMode: 8,
								extendInfo: {}
							};
						t && (r.roomId = t), BK.MQQ.SsoRequest.send(r, i)
					}, this.uploadData = function(e, t, i, r, n, o) {
						var a = "cs.report_data_2_compass.local",
							s = this.gameCfg.gameId;
						"ios" == this.gameCfg.platform && (e = e.toString(), i = i.toString());
						var h = {
							cmd: a,
							actionName: e,
							enter: t,
							entry: t,
							result: i,
							r2: s.toString(),
							r3: r,
							r4: n,
							r5: o
						};
						BK.MQQ.SsoRequest.send(h, a)
					}, this.sharePic = function(e) {
						var t = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId,
							path: e
						};
						BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_SHARE_PIC)
					}, this.addSSOJoinRoomCallBack = function(e) {
						this.ssoJoinRoomCallbackPublic = e
					}, this.checkPubAccountState = function(e, t) {
						t && (BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE, this, t));
						var i = CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE,
							r = {
								cmd: i,
								puin: e
							};
						BK.MQQ.SsoRequest.send(r, i)
					}, this.enterPubAccountCard = function(e) {
						var t = CMSHOW_CS_CMD_ENTER_PUBACCOUNT_CARD,
							i = {
								cmd: t,
								puin: e
							};
						BK.MQQ.SsoRequest.send(i, t)
					}, this.fetchOpenKey = function(e) {
						var t = "cs.on_get_open_key.local",
							i = {
								gameId: GameStatusInfo.gameId
							};
						e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(i, t)
					}, this.listenGameEventEnterBackground = function(e, t) {
						var i = "sc.game_enter_background.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, e), BK.MQQ.SsoRequest.addListener(i, e, t))
					}, this.listenGameEventEnterForeground = function(e, t) {
						var i = "sc.game_enter_foreground.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, e), BK.MQQ.SsoRequest.addListener(i, e, t))
					}, this.listenGameEventMaximize = function(e, t) {
						var i = "sc.game_maximize.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, e), BK.MQQ.SsoRequest.addListener(i, e, t))
					}, this.listenGameEventMinimize = function(e, t) {
						var i = "sc.game_minimize.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, e), BK.MQQ.SsoRequest.addListener(i, e, t))
					}, this._event4GetVIPInfo = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4GetVIPInfo!errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this.delegate.onGetVIPInfoEvent && this.delegate.onGetVIPInfoEvent(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this)
					}, this.notifyGetVIPInfo = function() {
						BK.MQQ.SsoRequest.send({}, CMSHOW_CS_CMD_GET_SRV_IP_PORT), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this, this._event4GetVIPInfo.bind(this))
					}, this.notifySaveRecommVIP = function(e, t) {
						BK.Script.log(0, 0, "BK.QQ.notifySaveRecommVIP!ip = " + e + ", port = " + t);
						var i = {
							gameId: this.gameCfg.gameId,
							roomId: this.game.roomId,
							ip: e,
							port: t
						};
						BK.MQQ.SsoRequest.send(i, CMSHOW_CS_CMD_SAVE_RECOMM_VIP)
					}, this._event4GetPlayerDress = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4GetPlayerDress!errCode = " + e + ", cmd = " + t + ", data = " + JSON.stringify(i)), this.delegate.onGetPlayerDressEvent && this.delegate.onGetPlayerDressEvent(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this)
					}, this.notifyGetPlayerDress = function(e) {
						var t = {
							openId: e
						};
						BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this, this._event4GetPlayerDress.bind(this)), BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_GET_PLAYER_DRESS)
					}, this._startGameLocal = function(e, t) {
						var i = {
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId,
							resp: t,
							retcode: e,
							gameMode: this.gameCfg.gameMode
						};
						BK.MQQ.SsoRequest.send(i, CMSHOW_CS_CMD_GAME_START)
					}, this.notifyJoinRoom = function(e, t, i) {
						e && e.length > 0 ? e.forEach(function(e) {
							var r = e.openId == currentPlayerOpenId;
							BK.Script.log(1, 1, "player.openid=" + e.openId + " currentPlayerOpenId=" + currentPlayerOpenId);
							var n = 0;
							t && t.data && t.data.avRoomId && (n = t.data.avRoomId);
							var o = 0;
							t && t.data && t.data.sdkAppId && (o = t.data.sdkAppId);
							var a = 0;
							t && t.data && t.data.accountType && (a = t.data.accountType);
							var s = {
								gameId: this.gameCfg.gameId,
								openId: e.openId,
								isCreator: this.gameCfg.isCreator && e.openId == currentPlayerOpenId ? 1 : 0,
								roomId: this.gameCfg.roomId,
								resp: t,
								retcode: i,
								gameMode: this.gameCfg.gameMode,
								avRoomId: n,
								sdkAppId: o,
								accountType: a,
								isMine: r,
								isDisableSendMsg: 1
							};
							BK.Script.log(0, 0, "BK.QQ.notifyJoinroom isDisableSendMsg: " + s.isDisableSendMsg), BK.MQQ.SsoRequest.send(s, CMSHOW_CS_CMD_JOIN_ROOM)
						}, this) : BK.Script.log(0, 0, "BK.QQ.notifyJoinRoom!newJoinPlayers data error")
					}, this.sendGameMsg = function() {
						if (this.gameCfg.roomId && this.gameCfg.roomId > 0) {
							var e = {
								gameId: this.gameCfg.gameId,
								openId: GameStatusInfo.openId,
								roomId: this.gameCfg.roomId,
								gameMode: this.gameCfg.gameMode
							};
							BK.Script.log(0, 0, "SendGameMsg : gameId=" + e.gameId + "  openId=" + e.openId + " roomId=" + e.roomId + "  gameMode=" + e.gameMode), BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_SEND_GAME_MSG)
						}
					}, this.shareToArk = function(e, t, i, r, n, o) {
						if (BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.3")) this._oldShareToArk(e, t, i, r, n, o);
						else {
							var a = {
								summary: t,
								extendInfo: n,
								localPicPath: "",
								picUrl: "",
								activityId: 0,
								reqCode: 1
							};
							0 == i.indexOf("GameRes://") || 0 == i.indexOf("GameSandBox://") ? a.localPicPath = i : a.picUrl = i, this._share(a, o)
						}
					}, this._share = function(e, t) {
						if (t) {
							var i = "sc.share_game_to_friend_result.local";
							BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
								t(e, i, r), this.shareUpload(0 == e ? 0 : 1), BK.MQQ.SsoRequest.removeListener(i, this)
							}.bind(this))
						}
						BK.Script.log(0, 0, "share " + JSON.stringify(e)), BK.MQQ.SsoRequest.send(e, "cs.game_shell_share_callback.local")
					}, this.share = function(e, t) {
						this._share(e, function(e, i, r) {
							if (0 == e) {
								var n = r.ret,
									o = r.shareTo,
									a = 1 == r.isFirstShare;
								t(n, o, a)
							} else t(e, -1, !1)
						}.bind(this))
					}, this.shareUpload = function(e) {
						var t = e.toString();
						BK.QQ.uploadData("clickShowOffButton", "", t, "", "", "")
					}, this._oldShareToArk = function(e, t, i, r, n, o) {
						"boolean" == typeof r && (r = 1 == r ? 1 : 0);
						var a = {
							summary: t,
							picUrl: i,
							gameId: this.gameCfg.gameId,
							roomId: e,
							gameMode: this.gameCfg.gameMode,
							isSelectFriend: r,
							extendInfo: n
						};
						if (o) {
							var s = "sc.share_game_to_friend_result.local";
							BK.MQQ.SsoRequest.removeListener(s, this), BK.MQQ.SsoRequest.addListener(s, this, function(e, t, i) {
								o(e, t, i), this.shareUpload(0 == e ? 0 : 1), BK.MQQ.SsoRequest.removeListener(t, this)
							})
						}
						BK.Script.log(0, 0, "ShareToArk summary=" + a.summary + " roomId=" + a.roomId + "  gameMode=" + a.gameMode + "picUrl=" + a.picUrl + "  gameId=" + a.gameId), BK.MQQ.SsoRequest.send(a, CMSHOW_CS_CMD_SHARE_IN_ARK)
					}, this.sendB2CRedPacket = function(e, t) {
						if (t) {
							var i = "sc.send_b2c_redpacket_result.local";
							BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
								t(e, i, r), BK.MQQ.SsoRequest.removeListener(i, this)
							})
						}
						var r = {
							groupPushData: {
								gameRedPacketId: 1,
								gameId: GameStatusInfo.gameId,
								extraInfo: e
							}
						};
						BK.Script.log(1, 1, "sendB2CRedPacket:" + JSON.stringify(r)), BK.MQQ.SsoRequest.send(r, "cs.send_b2c_redpacket.local"), BK.Script.log(0, 0, "sendB2CRedPacket")
					}, this.createShortCut = function(e) {
						var t = "";
						e && (t = e);
						var i = {
							extendInfo: t
						};
						BK.MQQ.SsoRequest.send(i, "cs.create_xy_shortcut.local"), BK.Script.log(0, 0, "createShortCut")
					}, this._event4QuitGame = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4QuitGame errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this.delegate.onQuitGameEvent && this.delegate.onQuitGameEvent(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_QUIT_GAME, this)
					}, this._event4CancelGame = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4CancelGame errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this.delegate.onCancelGameEvent && this.delegate.onCancelGameEvent(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CANCEL_GAME, this)
					}, this.notifyQuitGameSrv = function() {
						var e = {
							cmd: CMSHOW_SRV_CMD_QUIT_GAME,
							from: this.gameCfg.platform,
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.Script.log(0, 0, "BK.QQ.notifyQuitGameSrv!, cmd = " + e.cmd + ", from = " + e.from + ", gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_QUIT_GAME, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_QUIT_GAME, this, this._event4QuitGame.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_QUIT_GAME)
					}, this.notifyCancelGameSrv = function() {
						var e = {
							cmd: CMSHOW_SRV_CMD_CANCEL_GAME,
							from: this.gameCfg.platform,
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.Script.log(0, 0, "BK.QQ.notifyCancelGameSrv!, cmd = " + e.cmd + ", from = " + e.from + ", gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CANCEL_GAME, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_CANCEL_GAME, this, this._event4CancelGame.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_CANCEL_GAME)
					}, this._event4StartGame = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4StartGame! errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this.hasStartGameSucc = 0 == e, this._startGameLocal(e, i), this.delegate.onStartGameEvent && this.delegate.onStartGameEvent(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_START_GAME, this)
					}, this.notifyStartGameSrv = function() {
						var e = {
							cmd: CMSHOW_SRV_CMD_START_GAME,
							from: this.gameCfg.platform,
							gameId: this.gameCfg.gameId,
							roomId: this.gameCfg.roomId
						};
						BK.Script.log(0, 0, "BK.QQ.notifyStartGameSrv!, cmd = " + e.cmd + ", from = " + e.from + ", gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_START_GAME, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_START_GAME, this, this._event4StartGame.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_START_GAME)
					}, this._event4JoinRoom = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4JoinRoom errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this.hasJoinRoomSucc = 0 == e, this.delegate.onJoinRoomEvent && this.delegate.onJoinRoomEvent(e, t, i), BK.QQ.notifyJoinRoom(this.newJoinPlayers, i, e), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_JOIN_ROOM, this), this.ssoJoinRoomCallback && this.ssoJoinRoomCallback(e, t, i), this.ssoJoinRoomCallbackPublic && (i.gameId = this.gameCfg.gameId, i.gameRoomId = this.gameCfg.roomId, i.avRoomId = i.data.avRoomId ? i.data.avRoomId : 0, i.sdkAppId = i.data.sdkAppId ? i.data.sdkAppId : 0, i.accountType = i.data.accountType ? i.data.accountType : 0, this.ssoJoinRoomCallbackPublic(e, t, i))
					}, this.notifyNewOrJoinRoomSrv = function(e, t, i) {
						var r = {
							cmd: CMSHOW_SRV_CMD_JOIN_ROOM,
							from: this.gameCfg.platform,
							aioType: this.gameCfg.aioType,
							gameId: this.gameCfg.gameId,
							version: this.gameCfg.gameVersion,
							roomId: t,
							opType: i,
							gameMode: this.gameCfg.gameMode,
							roomVol: this.roomVol,
							arkData: this.arkData
						};
						BK.Script.log(1, 1, "BK.QQ.notifyNewOrJoinRoomSrv!, cmd = " + r.cmd + ", from = " + r.from + ", aioType = " + r.aioType + ", gameId = " + r.gameId + ", version = " + r.version + ", roomId = " + r.roomId + ", opType = " + r.opType), this.newJoinPlayers = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_JOIN_ROOM, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_JOIN_ROOM, this, this._event4JoinRoom.bind(this)), BK.MQQ.SsoRequest.send(r, CMSHOW_SRV_CMD_JOIN_ROOM)
					}, this._customGameLogicCallBack = void 0, this._event4CustomLogic = function(e, t, i) {
						void 0 != this._customGameLogicCallBack && this._customGameLogicCallBack(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this)
					}, this.reqCustomLogic = function(e, t) {
						void 0 != e ? (this._customGameLogicCallBack = t, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this, this._event4CustomLogic.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC)) : BK.Script.log(0, 0, "reqCustomLogic data undefined!")
					}, this._getRankListLogicCallBack = void 0, this._event4GetRankList = function(e, t, i) {
						BK.Script.log(1, 1, "BK.QQ.reqGetRankList! callback cmd" + t + " errCode:" + e + "  data:" + JSON.stringify(i)), void 0 != this._getRankListLogicCallBack && this._getRankListLogicCallBack(e, t, i), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_GET_RANK_LIST, this)
					}, this.getRankList = function(e, t) {
						var i = {
							cmd: CMSHOW_SRV_GET_RANK_LIST,
							from: "default",
							objType: 1,
							objId: 0,
							busType: 3,
							busId: this.gameCfg.gameId.toString()
						};
						t && (t.objType && (i.objType = t.objType), t.objId && (i.objId = t.objId), t.from && (i.from = t.from)), BK.Script.log(1, 1, "BK.QQ.reqGetRankList! " + JSON.stringify(i)), void 0 != i ? (this._getRankListLogicCallBack = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_GET_RANK_LIST, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_GET_RANK_LIST, this, this._event4GetRankList.bind(this)), BK.MQQ.SsoRequest.send(i, CMSHOW_SRV_GET_RANK_LIST)) : BK.Script.log(0, 0, "reqGetRankList data undefined!")
					}, this._pushPublicMsgCallBack = void 0, this._event4PushPublicMsg = function(e, t, i) {
						BK.Script.log(1, 1, "BK.QQ.pushPublicMsg! callback cmd" + t + " errCode:" + e + "  data:" + JSON.stringify(i)), void 0 != this._pushPublicMsgCallBack && this._pushPublicMsgCallBack(e, t, i)
					}, this.pushPublicMsg = function(e, t) {
						var i = {
							gameid: this.gameCfg.gameId,
							templateid: t.templateid,
							report_ts: t.report_ts,
							tmpl_param: t.tmpl_param
						};
						BK.Script.log(1, 1, "BK.QQ.pushPublicMsg! " + JSON.stringify(i)), void 0 != i ? (this._pushPublicMsgCallBack = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_PUSH_PUBLIC_MSG, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_PUSH_PUBLIC_MSG, this, this._event4PushPublicMsg.bind(this)), BK.MQQ.SsoRequest.send(i, CMSHOW_SRV_PUSH_PUBLIC_MSG)) : BK.Script.log(0, 0, "pushPublicMsg data undefined!")
					}, this.hasJoinRoom = function() {
						return this.hasJoinRoomSucc
					}, this.hasStartGame = function() {
						return this.hasStartGameSucc
					}, this._event4StopGame = function(e, t, i) {
						BK.Script.log(0, 0, "BK.QQ._event4StopGame!errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(i)), this._closeRoom(), this.delegate.onStopGameEvent && this.delegate.onStopGameEvent(e, t, i)
					}, this._closeRoom = function(e) {
						BK.QQ.isNeedSSOServer = void 0 == e || null == e || e, 1 == Boolean(BK.QQ.isNeedSSOServer) && (this.hasStartGameSucc || this.gameCfg.roomId && 0 != this.gameCfg.roomId && (this.gameCfg.isCreator ? this.notifyCancelGameSrv() : this.notifyQuitGameSrv()))
					}, this.uploadScoreWithoutRoom = function(e, t, i) {
						var r = "apollo_report_result.single_user_result",
							n = Math.floor((new Date).getTime() / 1e3),
							o = {
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								version: GameStatusInfo.gameVersion,
								aioType: GameStatusInfo.aioType,
								ts: n.toString(),
								src: GameStatusInfo.src,
								mode: void 0 !== e ? e : 1,
								userData: t.userData,
								attr: t.attr
							};
						i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, i)), BK.MQQ.SsoRequest.send(o, r)
					}, this.getRankListWithoutRoom = function(e, t, i, r) {
						var n = "apollo_router_game.apollo_user_rankinglist_linkcmd_custom_ranking",
							o = Math.floor((new Date).getTime() / 1e3),
							a = {
								from: GameStatusInfo.platform,
								gameId: GameStatusInfo.gameId,
								openId: GameStatusInfo.openId,
								version: GameStatusInfo.gameVersion,
								ts: o.toString(),
								attr: void 0 !== e ? e : "score",
								order: void 0 !== t ? t : 1,
								rankType: void 0 !== i ? i : 0
							};
						r && (BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, r)), BK.MQQ.SsoRequest.send(a, n)
					}, this.saveGameData = function(e, t) {
						var i = "apollo_private_data.set_user_data",
							r = Math.floor((new Date).getTime() / 1e3),
							n = {
								openId: GameStatusInfo.openId,
								gameId: GameStatusInfo.gameId,
								version: GameStatusInfo.gameVersion,
								from: GameStatusInfo.platform,
								ts: r.toString(),
								data: e
							};
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(n, i)
					}, this.loadGameData = function(e) {
						var t = "apollo_private_data.get_user_data",
							i = Math.floor((new Date).getTime() / 1e3),
							r = {
								openId: GameStatusInfo.openId,
								gameId: GameStatusInfo.gameId,
								version: GameStatusInfo.gameVersion,
								from: GameStatusInfo.platform,
								ts: i.toString()
							};
						e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(r, t)
					}, this.reportGameResult = function(e, t) {
						var i = "apollo_router_game.apollo_reportcm_linkcmd_game_result";
						e.gameId = GameStatusInfo.gameId, t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(e, i)
					}, this.updateScoreLocal = function(e) {
						BK.MQQ.SsoRequest.send({
							gameId: GameStatusInfo.gameId,
							score: e
						}, "cs.game_update_score.local")
					}, this.getRedPacketResult = function(e, t) {
						var i = "cs.get_redPacket_result.local";
						t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send({
							gameId: GameStatusInfo.gameId,
							score: e
						}, i)
					}, this.listenRedPacketEvent = function(e) {
						var t = "sc.web_callback_game.local";
						e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e))
					}, this.skipGame = function(e, t) {
						var i = {
							xyId: e,
							extendInfo: t,
							src: 302
						};
						BK.MQQ.SsoRequest.send(i, "cs.create_xy.local");
						var r = new Date,
							n = r.getFullYear(),
							o = r.getMonth() + 1,
							a = r.getDate(),
							s = r.getHours(),
							h = "" + n + (o = ("" + o).length < 2 ? "0" + o : o) + (a = "" + a < 2 ? "0" + a : a) + (s = "" + s < 2 ? "0" + s : s),
							l = "busi_id=4&&action_source=302&&action_type=34&&action_id=gameAtoB&&item_id=" + GameStatusInfo.gameId + "&&ext1=" + e + "&&ext2=" + h,
							u = {
								cmd: "apollo_router_game.game_extend_linkcmd_send_compass",
								from: GameStatusInfo.platform + ".cmshow_create_game",
								dcId: "dc03153",
								busiId: 4,
								fieldsData: l
							};
						BK.QQ.scoreUpload(u, function(e, t, i) {
							BK.Script.log(0, 0, " skip game errCode = " + e)
						})
					}, BK.MQQ.SsoRequest.addListener(CMSHOW_SC_CMD_STOP_GAME, this, this._event4StopGame.bind(this))
				}
			}()
		}(BK)), BK.Room = function() {
			this.roomId, this.gameId, this.mId, this.ownerId, this.createTs, this.status, this.playerNum, this.ip0, this.ip1, this.msgSeq = 1, this.ackSeq, this.lastFrame = 0, this.startGameTs = 0, this.createRoomCallBack, this.queryRoomInfoCallBack, this.joinRoomCallBack, this.leaveRoomCallBack, this.startGameCallBack, this.broadcastDataCallBack, this.sensitiveWordCallBack, this.setUserDataCallBack, this.getUserDataCallBack, this.sendSyncOptCallBack, this.forceStopGameCallBack, this.frameSyncListener, this.queryFrameDataCallBack, this.matchGameCallBack, this.queryMatchGameCallBack, this.quitMatchGameCallBack, this.disconnectNetCallBack, this.reJoinRoomCallBack, this.socket = new BK.Socket, this.reqArray = new Array, this.newJoinPlayers = [], this.currentPlayers = [], this.isCreator = 1 == GameStatusInfo.isMaster, this.gameStatusInfo = GameStatusInfo, this.serverConnected, this._environment = GameStatusInfo.isWhiteUser, this.headerVersion = 769, this.recommandRoomSvrHost = NormalRecommandRoomSvrHost, this.recommandRoomSvrPort = NormalRecommandRoomSvrPort, this.netTimeOutTs = 0, this.options = null, this.setArkData = function(e) {
				BK.QQ.setArkData(e)
			}, this.setRoomVol = function(e) {
				BK.QQ.roomVol = e
			}, this.read32BytesToString = function(e) {
				for (var t = "", i = 0; i < 32; i++) {
					var r = e.readUint8Buffer();
					t += String.fromCharCode(r)
				}
				return t
			}, this.writeOpenIdIntoBuffer = function(e, t) {
				var i = new BK.Buffer(32);
				if (32 == t.length)
					for (n = 0; n < 32; n++) {
						var r = t.charCodeAt(n);
						i.writeUint8Buffer(r)
					} else {
						for (var n = 0; n < 32; n++) i.writeUint8Buffer(0);
						BK.Script.log(0, 0, "writeOpenIdIntoBuffer.length is not 32 bytes,Write empty data")
					}
				e.writeBuffer(i)
			}, this.addHeader = function(e, t, i) {
				e.writeUint16Buffer(4660), e.writeUint16Buffer(this.headerVersion), e.writeUint16Buffer(0), e.writeUint16Buffer(i), e.writeUint32Buffer(t)
			}, this.addFixedHeader = function(e, t, i, r, n, o, a, s, h) {
				void 0 == o && (o = ""), void 0 == a && (a = 0), void 0 == s && (s = 0), void 0 == h && (h = 0), e.writeUint16Buffer(72), e.writeUint16Buffer(t), e.writeUint32Buffer(0), e.writeUint64Buffer(1111), e.writeUint64Buffer(i), e.writeUint64Buffer(r), this.writeOpenIdIntoBuffer(e, n), this.writeOpenIdIntoBuffer(e, o), e.writeUint64Buffer(a), e.writeUint64Buffer(s), e.writeUint64Buffer(h)
			}, this.getHeader = function(e) {
				var t = e.readUint16Buffer(),
					i = e.readUint16Buffer(),
					r = e.readUint16Buffer(),
					n = e.readUint16Buffer(),
					o = e.readUint32Buffer(),
					a = new Object;
				return a.magic = t, a.ver = i, a.stlen = n, a.bodyLen = o, a.seq = r, a
			}, this.getFixedHeader = function(e) {
				var t = e.readUint16Buffer(),
					i = e.readUint16Buffer(),
					r = e.readUint32Buffer(),
					n = e.readUint64Buffer(),
					o = e.readUint64Buffer(),
					a = e.readUint64Buffer(),
					s = "",
					h = "";
				s = this.read32BytesToString(e), h = this.read32BytesToString(e);
				var l = e.readUint64Buffer(),
					u = e.readUint64Buffer(),
					d = e.readUint64Buffer(),
					c = new Object;
				return c.fixLen = t, c.cmd = i, c.ret = r, c.date = n, c.gameId = o, c.roomId = a, c.fromId = s, c.toId = h, c.token = l, c.appId = u, c.accessToken = d, c
			}, this.matchGame = function(e, t, i) {
				this.mId = t, this.gameId = parseInt(e), BK.QQ.gameCfg.gameMode = 6, GameStatusInfo.gameMode = 6;
				var r = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
				BK.Script.log(0, 0, "socket con =" + r), -1 == r ? BK.Script.log(0, 0, "socket connect failed! " + r) : this.serverConnected = 1, this.matchGameCallBack = i;
				var n = new Object;
				n.cmd = 36, n.arg0 = e, n.arg1 = t, this.reqArray.push(n), BK.Script.log(0, 0, "createRoom ")
			}, this.requestMatch = function(e, t) {
				BK.Script.log(0, 0, "match game request in");
				var i = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(i, 36, e, 0, t);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), BK.Script.log(0, 0, "match game request buffer : " + o.bufferLength() + " body len:" + i.bufferLength()), o
			}, this.queryMatchGame = function(e, t, i) {
				BK.Script.log(0, 0, "queryMatchGame in "), this.mId = t, this.gameId = parseInt(e), this.queryMatchGameCallBack = i;
				var r = new Object;
				r.cmd = 38, r.arg0 = e, r.arg1 = t, this.reqArray.push(r)
			}, this.requestQueryMatch = function(e, t) {
				BK.Script.log(0, 0, "query match game request in");
				var i = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(i, 38, e, 0, t);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), BK.Script.log(0, 0, "query match game request buffer : " + o.bufferLength() + " body len:" + i.bufferLength()), o
			}, this.quitMatchGame = function(e, t, i) {
				BK.Script.log(0, 0, "quitMatchGame in "), this.mId = t, this.gameId = parseInt(e), this.quitMatchGameCallBack = i;
				var r = new Object;
				r.cmd = 40, r.arg0 = e, r.arg1 = t, this.reqArray.push(r)
			}, this.requestQuitMatch = function(e, t) {
				BK.Script.log(0, 0, "quit match game request in");
				var i = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(i, 40, e, 0, t);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), BK.Script.log(0, 0, "quit match game request buffer : " + o.bufferLength() + " body len:" + i.bufferLength()), o
			}, this.createRoom = function(e, t, i) {
				if (this.mId = t, this.gameId = parseInt(e), 1 != this.serverConnected) {
					var r = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
					BK.Script.log(0, 0, "socket con =" + r), -1 == r ? BK.Script.log(0, 0, "socket connect failed! " + r) : this.serverConnected = 1
				}
				this.createRoomCallBack = i;
				var n = new Object;
				n.cmd = 6, n.arg0 = e, n.arg1 = t, this.reqArray.push(n), BK.Script.log(0, 0, "createRoom ")
			}, this.requestCreateRoom = function(e, t) {
				BK.Script.log(0, 0, "create room request in");
				var i = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(i, 6, e, 0, t);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), BK.Script.log(0, 0, "create room request buffer : " + o.bufferLength() + " body len:" + i.bufferLength()), o
			}, this.requestQueryRoom = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 10, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var i = t.bufferLength(),
					r = new BK.Buffer(HeaderLen + e.bufferLength() + i, 1);
				return this.addHeader(r, e.bufferLength(), i), r.writeBuffer(t), r.writeBuffer(e), r
			}, this.queryRoom = function(e, t, i, r) {
				this.mId = i, this.roomId = parseFloat(t), this.gameId = parseInt(e), this.queryRoomInfoCallBack = r;
				var n = new Object;
				n.cmd = 10, this.reqArray.push(n), BK.Script.log(0, 0, "queryRoom push")
			}, this.joinRoom = function(e, t, i, r) {
				this.joinRoomCallBack = t, BK.QQ.isNeedSSOServer = void 0 == r || null == r || r, BK.Script.log(0, 0, "BK.QQ.notifyJoinroom isDisableSendMsg   isAuto: " + i + ",isAutoSendJoin:  " + BK.QQ.isAutoSendJoinRoomNotify);
				var n = new Object;
				n.cmd = 2, n.arg0 = e, this.reqArray.push(n)
			}, this.requestJoinRoom = function(e) {
				BK.Script.log(0, 0, "join room request");
				var t = new BK.Buffer(fixedHeaderLen + 5, 1);
				this.addFixedHeader(t, 2, this.gameId, this.roomId, this.mId);
				var i = new BK.TLV(5);
				i.bkJSTLVWriteUInt8(e, TLVType.Uint8, 201), t.writeBuffer(i.bkJSTLVGetBuffer());
				var r = BK.Security.getST();
				BK.Security.encrypt(t);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + t.bufferLength() + n, 1);
				return this.addHeader(o, t.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(t), o
			}, this.setReJoinRoomCallBack = function(e) {
				this.reJoinRoomCallBack = e
			}, this.reConnectAndJoinRoom = function() {
				var e = this.socket.connect(this.gameSvrIp, this.gameSvrPort);
				if (BK.Script.log(0, 0, "socket con =" + e), -1 == e) return BK.Script.log(0, 0, "socket connect failed! " + e), -1;
				this.serverConnected = 1, 0 == e && BK.Script.log(0, 0, "socket connect =0 "), e >= 0 && (BK.Script.log(0, 0, "rejoinroom send"), this.joinRoom(1, function(e, t) {
					BK.Script.log(0, 0, "rejoinroom statusCode:" + e + " roomid is " + t.roomId), this.reJoinRoomCallBack && this.reJoinRoomCallBack(e, this)
				}))
			}, this.leaveRoom = function(e, t) {
				void 0 == t && (t = -1);
				var i = new Object;
				i.cmd = 4, i.arg0 = t, this.reqArray.push(i), this.leaveRoomCallBack = e, BK.Script.log(0, 0, "leaveRoom push")
			}, this.setLeaveRoomCallback = function(e) {
				this.leaveRoomCallBack = e
			}, this.requestLeaveRoom = function(e) {
				var t = new BK.TLV(44),
					i = new BK.Buffer(40, 1);
				this.writeOpenIdIntoBuffer(i, this.mId), i.writeUint64Buffer(e), t.bkJSTLVWriteBuffer(i, TLVType.Byte, 201);
				var r = new BK.Buffer(fixedHeaderLen + t.bkJSTLVGetLength(), 1);
				this.addFixedHeader(r, 4, this.gameId, this.roomId, this.mId), r.writeBuffer(t.bkJSTLVGetBuffer());
				var n = BK.Security.getST(),
					o = n.bufferLength();
				return BK.Security.encrypt(r), buff = new BK.Buffer(HeaderLen + r.bufferLength() + o, 1), this.addHeader(buff, r.bufferLength(), o), buff.writeBuffer(n), buff.writeBuffer(r), BK.Script.log(0, 0, "leave room buffer : " + buff.bufferLength() + " body len:" + r.bufferLength()), buff
			}, this._startGame = function(e) {
				this.startGameCallBack = e;
				var t = new Object;
				t.cmd = 8, this.reqArray.push(t), BK.Script.log(0, 0, "startGame push")
			}, this.startGame = function(e) {
				GameStatusInfo.devPlatform ? (BK.Script.log(0, 0, "startGame dev:"), this._startGame(e)) : 1 == BK.QQ.hasJoinRoomSucc ? (BK.Script.log(0, 0, "startGame qq:cmsrv confirm joinRoom response"), this._startGame(e)) : (BK.Script.log(0, 0, "startGame qq:waiting cmsvr joiroom response"), BK.QQ.delegate.onJoinRoomEvent = function(t, i, r) {
					BK.Script.log(0, 0, "startGame qq:wait finish.start Game"), this._startGame(e)
				}.bind(this))
			}, this.setStartGameCallback = function(e) {
				this.startGameCallBack = e
			}, this.requestStartGame = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 8, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var i = t.bufferLength(),
					r = new BK.Buffer(HeaderLen + e.bufferLength() + i, 1);
				return this.addHeader(r, e.bufferLength(), i), r.writeBuffer(t), r.writeBuffer(e), r
			}, this.setBroadcastDataCallBack = function(e) {
				this.broadcastDataCallBack = e
			}, this.sendBroadcastData = function(e) {
				var t = new Object;
				t.cmd = 1, t.arg0 = e, this.reqArray.push(t)
			}, this.requestsendBroadcastData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					i = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(i, 1, this.gameId, this.roomId, this.mId), i.writeBuffer(e);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), o
			}, this.setSensitiveWordCallBack = function(e) {
				this.sensitiveWordCallBack = e
			}, this.sendSensitiveWordData = function(e) {
				var t = new Object;
				t.cmd = 50, t.arg0 = e, this.reqArray.push(t)
			}, this.requestSendSendSensitiveWordData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					i = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(i, 50, this.gameId, this.roomId, this.mId), i.writeBuffer(e);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), o
			}, this.setUserData = function(e, t) {
				BK.Script.log(0, 0, "setUserData call"), this.setUserDataCallBack = t;
				var i = new Object;
				i.cmd = 32, i.arg0 = e, this.reqArray.push(i), BK.Script.log(0, 0, "setUserData push")
			}, this.requestSetUserData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					i = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(i, 32, this.gameId, this.roomId, this.mId), i.writeBuffer(e);
				var r = BK.Security.getST();
				BK.Security.encrypt(i);
				var n = r.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + n, 1);
				return this.addHeader(o, i.bufferLength(), n), o.writeBuffer(r), o.writeBuffer(i), o
			}, this.getUserData = function(e, t) {
				void 0 == e && (e = 0), this.getUserDataCallBack = t;
				var i = new Object;
				i.cmd = 34, i.arg0 = e, this.reqArray.push(i), BK.Script.log(0, 0, "getUserData push roomId = " + e)
			}, this.requestGetUserData = function(e) {
				var t = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(t, 34, this.gameId, this.roomId, this.mId);
				var i = BK.Security.getST();
				BK.Security.encrypt(t);
				var r = i.bufferLength(),
					n = new BK.Buffer(HeaderLen + t.bufferLength() + r, 1);
				return this.addHeader(n, t.bufferLength(), r), n.writeBuffer(i), n.writeBuffer(t), n
			}, this.syncOpt = function(e, t, i, r, n) {
				this.sendSyncOptCallBack = n;
				var o = new Object;
				o.cmd = 14, o.arg0 = e, o.arg1 = t, o.arg2 = i, o.arg3 = r, this.reqArray.push(o)
			}, this.sendSyncOpt = function(e, t) {
				var i = new BK.Buffer(1, 1);
				i.writeUint8Buffer(0);
				var r = new BK.Buffer(1, 1);
				r.writeUint8Buffer(0), this.syncOpt(i, e, r, void 0, t)
			}, this.requestSyncOpt = function(e, t, i, r) {
				var n = 20 + (e.capacity ? e.capacity : e.bufferLength()) + 4 + (t.capacity ? t.capacity : t.bufferLength()) + 4 + (i.capacity ? i.capacity : i.bufferLength());
				if (r) {
					var o = r.capacity ? r.capacity : r.bufferLength();
					n = n + 4 + o, BK.Script.log(0, 0, "requestSyncOpt with item len" + o)
				}
				var a = new BK.TLV(n);
				a.bkJSTLVWriteUInt32(this.msgSeq, TLVType.Uint32, 201), a.bkJSTLVWriteUInt32(this.lastFrame, TLVType.Uint32, 202), a.bkJSTLVWriteBuffer(e, TLVType.Byte, 203), a.bkJSTLVWriteBuffer(t, TLVType.Byte, 204), a.bkJSTLVWriteBuffer(i, TLVType.Byte, 205), r && a.bkJSTLVWriteBuffer(r, TLVType.Byte, 206), BK.Script.log(0, 0, "requestSyncOpt this.msgSeq:" + this.msgSeq + " this.lastFrame:" + this.lastFrame);
				a.bkJSParseTLV();
				BK.Script.log(0, 0, "requestSyncOpt tlv len:" + a.bkJSTLVGetLength() + " fix header:" + fixedHeaderLen);
				var s = new BK.Buffer(fixedHeaderLen + a.bkJSTLVGetLength(), 1);
				this.addFixedHeader(s, 14, this.gameId, this.roomId, this.mId), s.writeBuffer(a.bkJSTLVGetBuffer());
				var h = BK.Security.getST();
				BK.Security.encrypt(s);
				var l = h.bufferLength(),
					u = new BK.Buffer(HeaderLen + s.bufferLength() + l, 1);
				return this.addHeader(u, s.bufferLength(), l), u.writeBuffer(h), u.writeBuffer(s), this.msgSeq += 1, u
			}, this.setFrameSyncListener = function(e) {
				this.frameSyncListener = e
			}, this.queryFrameData = function(e, t, i) {
				this.queryFrameDataCallBack = i;
				var r = new Object;
				r.cmd = 18, r.arg0 = e, r.arg1 = t, this.reqArray.push(r)
			}, this.requestQueryFrameData = function(e, t) {
				var i = new BK.TLV(22);
				i.bkJSTLVWriteUInt32(this.lastFrame, TLVType.Uint32, 201), i.bkJSTLVWriteUInt32(e, TLVType.Uint32, 202), i.bkJSTLVWriteUInt16(t, TLVType.Uint16, 203);
				var r = new BK.Buffer(fixedHeaderLen + i.bkJSTLVGetLength(), 1);
				this.addFixedHeader(r, 18, this.gameId, this.roomId, this.mId), r.writeBuffer(i.bkJSTLVGetBuffer());
				var n = BK.Security.getST();
				BK.Security.encrypt(r);
				var o = n.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + o, 1);
				return this.addHeader(a, r.bufferLength(), o), a.writeBuffer(n), a.writeBuffer(r), a
			}, this.sendControlCommand = function(e, t, i, r) {
				var n = new Object;
				n.cmd = 48, n.arg0 = e, n.arg1 = t, n.arg2 = i, this.reqArray.push(n), this.controlCommandCallback = r
			}, this.requestControlCommand = function(e, t, i) {
				var r = new BK.TLV(14 + t.bufferLength() + i.bufferLength());
				r.bkJSTLVWriteBuffer(t, TLVType.Byte, 201), r.bkJSTLVWriteUInt16(e, TLVType.Uint16, 202), r.bkJSTLVWriteBuffer(i, TLVType.Byte, 203);
				var n = new BK.Buffer(fixedHeaderLen + r.bkJSTLVGetLength(), 1);
				this.addFixedHeader(n, 48, this.gameId, this.roomId, this.mId), n.writeBuffer(r.bkJSTLVGetBuffer()), BK.Security.encrypt(n);
				var o = BK.Security.getST(),
					a = o.bufferLength(),
					s = new BK.Buffer(HeaderLen + n.bufferLength() + a, 1);
				return this.addHeader(s, n.bufferLength(), a), s.writeBuffer(o), s.writeBuffer(n), s
			}, this.sendKeepAlive = function() {
				var e = new Object;
				e.cmd = 12, this.reqArray.push(e), 0 != this.netTimeOutTs && BK.Time.timestamp - this.netTimeOutTs > 5 && this.disconnectNetCallBack && this.disconnectNetCallBack()
			}, this.requestSendKeepAlive = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 12, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var i = t.bufferLength(),
					r = new BK.Buffer(HeaderLen + e.bufferLength() + i, 1);
				return this.addHeader(r, e.bufferLength(), i), r.writeBuffer(t), r.writeBuffer(e), r
			}, this.recvCreateRoom = function(e, t) {
				BK.Script.log(0, 0, "recvCreateRoom bodyLen=" + t);
				var i = e.readBuffer(t),
					r = new BK.TLV(i).bkJSParseTLV();
				if (r) {
					var n = r.tag202,
						o = n.readUint8Buffer(),
						a = n.readUint8Buffer(),
						s = n.readUint16Buffer();
					n.readUint64Buffer(), n.readUint32Buffer();
					var h = n.readUint8Buffer(),
						l = n.readUint8Buffer(),
						u = n.readUint8Buffer(),
						d = n.readUint8Buffer(),
						c = r.tag201,
						f = c.readUint8Buffer(),
						_ = c.readUint8Buffer(),
						g = c.readUint16Buffer();
					c.readUint64Buffer(), c.readUint32Buffer();
					var m = c.readUint8Buffer(),
						p = c.readUint8Buffer(),
						S = c.readUint8Buffer(),
						v = c.readUint8Buffer(),
						b = new Object;
					return b.ipType_1 = o, b.resServe_1 = a, b.ipType_2 = f, b.resServe_2 = _, b.port_1 = s, b.ip_1 = h + "." + l + "." + u + "." + d, b.port_2 = g, b.ip_2 = m + "." + p + "." + S + "." + v, this.ip0 = b.ip_1, this.ip1 = b.ip_2, b
				}
				return void BK.Script.log(0, 0, "recvCreateRoom parse failed.")
			}, this.recvQueryRoom = function(e, t) {
				BK.Script.log(0, 0, "recvQueryRoom bodyLen:" + t);
				var i = e.readBuffer(t),
					r = new BK.TLV(i).bkJSParseTLV();
				if (r) {
					var n = r.tag202,
						o = n.readUint8Buffer(),
						a = n.readUint8Buffer(),
						s = n.readUint16Buffer();
					n.readUint64Buffer(), n.readUint32Buffer();
					var h = n.readUint8Buffer(),
						l = n.readUint8Buffer(),
						u = n.readUint8Buffer(),
						d = n.readUint8Buffer(),
						c = r.tag201,
						f = c.readUint8Buffer(),
						_ = c.readUint8Buffer(),
						g = c.readUint16Buffer();
					c.readUint64Buffer(), c.readUint32Buffer();
					var m = c.readUint8Buffer(),
						p = c.readUint8Buffer(),
						S = c.readUint8Buffer(),
						v = c.readUint8Buffer(),
						b = r.tag203,
						B = this.read32BytesToString(b),
						x = b.readUint64Buffer(),
						C = b.readUint8Buffer(),
						T = b.readUint8Buffer(),
						E = r.tag205;
					void 0 == E && (E = 0);
					for (var R = [], M = 0; M < T; M++) {
						var A = {};
						A.uid = this.read32BytesToString(b), A.status = b.readUint8Buffer(), R.push(A)
					}
					var y = new Object;
					return y.ipType_1 = o, y.resServe_1 = a, y.ipType_2 = f, y.resServe_2 = _, y.port_1 = s, y.ip_1 = h + "." + l + "." + u + "." + d, y.port_2 = g, y.ip_2 = m + "." + p + "." + S + "." + v, y.ownerId = B, y.createTs = x, y.status = C, y.playerNum = T, y.ext_num = E, this.ip0 = y.ip_1, this.ip1 = y.ip_2, this.ownerId = B, this.createTs = x, this.status = C, this.playerNum = T, this.players = R, y
				}
				return void BK.Script.log(0, 0, "recvQueryRoom parse failed.bodyLen is 0")
			}, this.recvJoinRoom = function(e, t) {
				for (var i = e.readBuffer(t), r = new BK.TLV(i).bkJSParseTLV().tag201, n = this.read32BytesToString(r), o = r.readUint64Buffer(), a = r.readUint8Buffer(), s = r.readUint8Buffer(), h = [], l = 0; l < s; l++) {
					var u = {},
						d = this.read32BytesToString(r),
						c = r.readUint64Buffer(),
						a = r.readUint8Buffer();
					u.openId = d, u.status = a, u.joinTs = c, h.push(u)
				}
				if (this.ownerId = n, this.createTs = o, this.status = a, this.playerNum = s, 0 == this.currentPlayers.length) h.forEach(function(e) {
					this.newJoinPlayers.push(e)
				}, this);
				else {
					var f = [];
					BK.Script.log(0, 0, "recvJoinRoom!curPlayers = " + JSON.stringify(this.currentPlayers)), BK.Script.log(0, 0, "recvJoinRoom!joinPlayers = " + JSON.stringify(h));
					for (l = 0; l < h.length; l++) {
						for (var u = h[l], _ = !1, g = 0; g < this.currentPlayers.length; g++)
							if (this.currentPlayers[g].openId == u.openId) {
								_ = !0;
								break
							}
						0 == _ && f.push(u)
					}
					this.newJoinPlayers = f, BK.Script.log(0, 0, "recvJoinRoom!newPlayers = " + JSON.stringify(this.newJoinPlayers))
				}
				this.currentPlayers = h, BK.Script.log(0, 0, "recvJoinRoom ownerId=" + n + ",createTs =" + o + ",playerNum:" + s)
			}, this.recvLeaveRoom = function(e, t) {
				var i = e.readBuffer(t),
					r = new BK.TLV(i).bkJSParseTLV();
				if (r) {
					var n = r.tag201,
						o = this.read32BytesToString(n),
						a = e.readUint64Buffer(),
						s = new Object;
					return BK.Script.log(0, 0, "recvLeaveRoom!ret = " + a), s.reason = a, s.logOutId = o, this.currentPlayers.splice(this.currentPlayers.indexOf(o)), s
				}
				return void BK.Script.log(0, 0, "recvLeaveRoom parse failed.bodylen is " + t)
			}, this.recvStartGame = function(e, t) {
				this.startGameTs = BK.Time.timestamp, BK.Script.log(0, 0, "recvStartGame")
			}, this.recvPushFrameSync = function(e, t) {
				for (var i = e.readBuffer(t), r = new BK.TLV(i).bkJSParseTLV(), n = (r.tag201, r.tag202, r.tag203), o = new Array, a = 0; a < n.length; a++) {
					var s = n[a].readUint32Buffer();
					this.lastFrame = s;
					var h = n[a].bufferLength() - 4;
					BK.Script.log(0, 0, "sync recv len= " + n[a].bufferLength() + " frameData.length=" + n.length);
					for (var l = new Array; h > 0;) {
						BK.Script.log(0, 0, "push frameNo=" + this.lastFrame);
						var u = n[a].readUint16Buffer();
						BK.Script.log(0, 0, "push databuf 2 datalen=" + u);
						var d = this.read32BytesToString(n[a]),
							c = n[a].readUint64Buffer(),
							f = {
								openId: d,
								itemId: c,
								dataBuffer: n[a].readBuffer(u)
							};
						BK.Script.log(0, 0, "push databuf openid=" + d), BK.Script.log(0, 0, "push databuf itemid=" + c), l.push(f), h -= 42, h -= u
					}
					l.frameSeq = s, o.push(l)
				}
				this.frameSyncListener(o)
			}, this.recvQueryFrameSync = function(e, t) {
				var i = e.readBuffer(t),
					r = new BK.TLV(i).bkJSParseTLV();
				if (!r) return BK.Script.log(0, 0, "recvQueryFrameSync empty."), void this.queryFrameDataCallBack(0, void 0);
				for (var n = r.tag201, o = new Array, a = 0; a < n.length; a++) {
					var s = n[a].readUint32Buffer(),
						h = n[a].bufferLength() - 4;
					BK.Script.log(0, 0, "sync query recv = " + n[a].bufferLength() + " frameData.length=" + n.length);
					for (var l = new Array; h > 0;) {
						BK.Script.log(0, 0, "push frameNo=" + this.lastFrame);
						var u = n[a].readUint16Buffer();
						BK.Script.log(0, 0, "push databuf 2 datalen=" + u);
						var d = this.read32BytesToString(n[a]),
							c = n[a].readUint64Buffer(),
							f = {
								openId: d,
								itemId: c,
								dataBuffer: n[a].readBuffer(u)
							};
						BK.Script.log(0, 0, "push databuf openid=" + d), BK.Script.log(0, 0, "push databuf itemid=" + c), l.push(f), h -= 42, h -= u
					}
					l.frameSeq = s, o.push(l)
				}
				BK.Script.log(0, 0, "query end"), this.queryFrameDataCallBack(0, o)
			}, this.recvControlCommand = function(e, t) {
				var i = e.readBuffer(t),
					r = new BK.TLV(i).bkJSParseTLV(),
					n = {};
				r.tag201 && (n = JSON.parse(r.tag201.readAsString())), this.controlCommandCallback && this.controlCommandCallback(0, n)
			}, this.recvSSOJoinRoom = function(e, t, i) {
				if (BK.Script.log(1, 1, "recvSSOJoinRoom = true data=" + JSON.stringify(i)), 0 == e) {
					var r = i.data.avRoomId,
						n = i.data.sdkAppId,
						o = i.data.accountType;
					GameStatusInfo.avAppId = n, GameStatusInfo.avAccountType = o, GameStatusInfo.avRoomId = r, GameStatusInfo.roomId = this.roomId
				}
			}, this.handleServerError = function(e) {
				switch (BK.Script.log(0, 1, "handleServerError!cmd = " + e.cmd + ", errCode = " + e.ret), e.cmd) {
					case 7:
						this.roomId = e.roomId, this.createRoomCallBack(header.ret, null, e.roomId);
						break;
					case 11:
						this.queryRoomInfoCallBack(e.ret, null);
						break;
					case 3:
						this.joinRoomCallBack(e.ret, this);
						break;
					case 4:
					case 5:
						this.leaveRoomCallBack(e.ret, null);
						break;
					case 9:
						this.startGameCallBack(e.ret);
						break;
					case 1:
						this.broadcastDataCallBack(e.fromId, null);
						break;
					case 51:
						this.sensitiveWordCallBack(e.ret, e.fromId, null);
						break;
					case 33:
						this.setUserDataCallBack(e.ret);
						break;
					case 35:
						this.getUserDataCallBack(e.ret, null);
						break;
					case 15:
						this.sendSyncOptCallBack(e.ret, null);
						break;
					case 16:
						break;
					case 19:
						this.queryFrameDataCallBack(e.ret, null);
						break;
					case 37:
						this.matchGameCallBack(e.ret);
						break;
					case 39:
						this.queryMatchGameCallBack(e.ret);
						break;
					case 41:
						this.quitMatchGameCallBack(e.ret);
						break;
					case 49:
						this.controlCommandCallback && this.controlCommandCallback(e.ret, {})
				}
			}, this.handleRecv = function(e) {
				var t = this.getHeader(e);
				if (0 != t.stlen) {
					e.readBuffer(t.stlen);
					BK.Script.log(0, 0, "st.len = " + t.stlen)
				}
				var i = e.readBuffer(t.bodyLen);
				BK.Security.decrypt(i);
				var r = this.getFixedHeader(i);
				if (this.netTimeOutTs = 0, 0 == r.ret) switch (BK.Script.log(0, 0, "handleRecv = " + r.cmd + ",bodyLen=" + t.bodyLen + ",bodyreal=" + i.bufferLength()), r.cmd) {
					case 7:
						this.roomId = r.roomId;
						var n = this.recvCreateRoom(i, i.bufferLength() - fixedHeaderLen);
						BK.Script.log(0, 0, "magic = " + t.magic + ",stlen = " + t.stlen + ",bodyLen=" + t.bodyLen + ",cmd=" + r.cmd + ",roomId=" + r.roomId), this.createRoomCallBack(r.ret, n, r.roomId), BK.QQ.notifyNewRoom(this.roomId, r.ret);
						break;
					case 11:
						var o = this.recvQueryRoom(i, i.bufferLength() - fixedHeaderLen);
						this.queryRoomInfoCallBack(r.ret, o), BK.Script.log(0, 0, "magic = " + t.magic + ",stlen = " + t.stlen + ",bodyLen=" + t.bodyLen + ",cmd=" + r.cmd + ",roomId=" + r.roomId);
						break;
					case 3:
						if (this.recvJoinRoom(i, i.bufferLength() - fixedHeaderLen), this.joinRoomCallBack(r.ret, this), 1 == Boolean(BK.QQ.isNeedSSOServer))
							for (var a = 0; a < this.newJoinPlayers.length; a++)
								if (this.newJoinPlayers[a].openId == currentPlayerOpenId) return BK.QQ.ssoJoinRoomCallback = this.recvSSOJoinRoom.bind(this), void BK.QQ.notifyNewOrJoinRoomSrv(this.newJoinPlayers, this.roomId, this.ownerId == GameStatusInfo.openId ? 1 : 2);
						BK.QQ.notifyJoinRoom(this.newJoinPlayers, {}, r.ret);
						break;
					case 5:
						var s = this.recvLeaveRoom(i, i.bufferLength() - fixedHeaderLen);
						this.leaveRoomCallBack && this.leaveRoomCallBack(r.ret, s);
						break;
					case 9:
						this.recvStartGame(i, i.bufferLength() - fixedHeaderLen), this.startGameCallBack(r.ret), 1 == Boolean(BK.QQ.isNeedSSOServer) && BK.QQ.notifyStartGameSrv(), 0 == r.ret && (BK.QQ.hasJoinRoomSucc = !1);
						break;
					case 1:
						h = i.readBuffer(i.bufferLength() - fixedHeaderLen);
						this.broadcastDataCallBack(r.fromId, h, r.toId);
						break;
					case 51:
						h = i.readBuffer(i.bufferLength() - fixedHeaderLen);
						this.sensitiveWordCallBack(r.ret, r.fromId, h, r.toId);
						break;
					case 33:
						h = i.readBuffer(i.bufferLength() - fixedHeaderLen);
						this.setUserDataCallBack(r.ret);
						break;
					case 35:
						var h = i.readBuffer(i.bufferLength() - fixedHeaderLen);
						this.getUserDataCallBack(r.ret, h);
						break;
					case 15:
						var l = i.readUint32Buffer();
						this.ackSeq = l, this.sendSyncOptCallBack(r.ret, l);
						break;
					case 16:
						this.recvPushFrameSync(i, i.bufferLength() - fixedHeaderLen);
						break;
					case 19:
						this.recvQueryFrameSync(i, i.bufferLength() - fixedHeaderLen);
						break;
					case 37:
						this.matchGameCallBack(r.ret);
						break;
					case 39:
						this.roomId = r.roomId, this.queryMatchGameCallBack(r.ret);
						break;
					case 41:
						this.roomId = r.roomId, this.quitMatchGameCallBack(r.ret);
						break;
					case 49:
						this.recvControlCommand(i, i.bufferLength() - fixedHeaderLen)
				} else this.handleServerError(r)
			}, this.requestSocket = function(e) {
				var t;
				switch (BK.Script.log(0, 0, "requestSocket = " + e.cmd), e.cmd) {
					case 6:
						t = this.requestCreateRoom(e.arg0, e.arg1);
						break;
					case 10:
						t = this.requestQueryRoom();
						break;
					case 2:
						t = this.requestJoinRoom(e.arg0);
						break;
					case 4:
						t = this.requestLeaveRoom(e.arg0);
						break;
					case 8:
						t = this.requestStartGame();
						break;
					case 1:
						t = this.requestsendBroadcastData(e.arg0);
						break;
					case 50:
						t = this.requestSendSendSensitiveWordData(e.arg0);
						break;
					case 32:
						t = this.requestSetUserData(e.arg0);
						break;
					case 34:
						t = this.requestGetUserData(e.arg0);
						break;
					case 14:
						t = this.requestSyncOpt(e.arg0, e.arg1, e.arg2, e.arg3);
						break;
					case 18:
						t = this.requestQueryFrameData(e.arg0, e.arg1);
						break;
					case 36:
						t = this.requestMatch(e.arg0, e.arg1);
						break;
					case 38:
						t = this.requestQueryMatch(e.arg0, e.arg1);
						break;
					case 40:
						t = this.requestQuitMatch(e.arg0, e.arg1);
						break;
					case 12:
						t = this.requestSendKeepAlive(), 0 == this.netTimeOutTs && (this.netTimeOutTs = BK.Time.timestamp);
						break;
					case 48:
						var i = new BK.Buffer,
							r = new BK.Buffer;
						i.writeAsString(e.arg1), r.writeAsString(e.arg2), t = this.requestControlCommand(e.arg0, i, r)
				}
				void 0 != t && (BK.Script.log(0, 0, "requestSocket = " + e.cmd), this.socket.send(t))
			}, this.seperatePackHandle = function() {
				for (;;) {
					var e = this.socket.receiveNotRemove(),
						t = e.bufferLength(),
						i = this.getHeader(e),
						r = i.stlen + i.bodyLen + HeaderLen;
					if (BK.Script.log(0, 0, "this.socket.receive():totalLen = " + t + "  onePackLen=" + r), t == r) {
						BK.Script.log(0, 0, "  this.socket.receive():onePackLen=" + r), void 0 != (n = this.socket.receive(r)) && this.handleRecv(n);
						break
					}
					if (t < r) {
						BK.Script.log(0, 0, "  this.socket.receive():part of onePackLen=" + r);
						break
					}
					if (t > r) {
						BK.Script.log(0, 0, "  this.socket.receive():Multipacks onePackLen=" + r);
						var n = this.socket.receive(r);
						void 0 != n && this.handleRecv(n)
					}
				}
			}, this.curConnRetrys = 0, this.curConnTimeout = 0, this.prevNetState = 0, this.reConnectTime = 0, this.updateNet = function() {
				var e = this.socket.update(),
					t = this.socket.state;
				if (-1 != e) switch (this.prevNetState) {
					case 0:
						switch (t) {
							case 3:
								this.onErrorEvent(this);
								break;
							case 1:
								this.onConnectingEvent(this);
								break;
							case 2:
								this.onConnectedEvent(this)
						}
						break;
					case 1:
						switch (t) {
							case 2:
								switch (e) {
									case 2:
										this.onConnectedEvent();
										break;
									case 3:
										BK.Script.log(0, 0, "BK.Socket.update!unexcepted status")
								}
						}
						break;
					case 2:
						switch (t) {
							case 2:
								this.onUpdateEvent();
								break;
							default:
								this.onErrorEvent()
						}
				} else switch (BK.Script.log(0, 0, "BK.Socket.DisconnectEvent prevNetState=" + this.prevNetState), this.prevNetState) {
					case 3:
					case 2:
					case 1:
						this.onDisconnectEvent()
				}
				return this.prevNetState = t, e
			}, this.onErrorEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.ErrorEvent")
			}, this.onUpdateEvent = function() {
				return 0
			}, this.onTimeoutEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.TimeoutEvent")
			}, this.onConnectingEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.ConnectingEvent")
			}, this.onConnectedEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.ConnectedEvent"), this.connectedNetCallback && this.connectedNetCallback()
			}, this.onReconnectEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.ReconnectEvent")
			}, this.onDisconnectEvent = function() {
				BK.Script.log(0, 0, "BK.Socket.DisconnectEvent"), this.disconnectNetCallBack && this.disconnectNetCallBack(), this.reConnectTime < 3 ? (BK.Script.log(0, 0, "BK.Socket.DisconnectEvent reconnectAndJoinRoom"), (BK.Time.timestamp - this.startGameTs) / 60 < 5 ? (this.reConnectTime++, this.reConnectAndJoinRoom()) : BK.Script.log(0, 0, "BK.Socket.DisconnectEvent over 5 min")) : this.terminatedNetCallback && this.terminatedNetCallback()
			}, this.setConnectedNetCallBack = function(e) {
				this.connectedNetCallback = e
			}, this.setDisconnectNetCallBack = function(e) {
				this.disconnectNetCallBack = e
			}, this.setTerminatedNetCallback = function(e) {
				this.terminatedNetCallback = e
			}, this.updateSocket = function() {
				var e = this.updateNet();
				if ((3 == e || 2 == e) && this.reqArray.length > 0) {
					var t = this.reqArray.pop();
					void 0 != t && null != t && this.requestSocket(t)
				}
				return 3 != e && 1 != e || this.seperatePackHandle(), e
			}, this.createAndJoinRoom = function(e, t, i, r, n) {
				this.createRoom(e, t, function(e, t, o) {
					0 == e ? (BK.Script.log(0, 0, "创建游戏 statusCode:" + e + " roomId:" + o), this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
						BK.Script.log(0, 0, "加入房间 statusCode:" + e + " roomid is " + t.roomId), 0 == e && (GameStatusInfo.roomId = t.roomId, BK.QQ.gameCfg.roomId = t.roomId), n ? 1 == BK.QQ.hasJoinRoomSucc ? i(e, this) : BK.QQ.delegate.onJoinRoomEvent = function(t, r, n) {
							i(e, this)
						}.bind(this) : i(e, this)
					}, r, n)) : i(e, this)
				})
			}, this.queryAndJoinRoom = function(e, t, i, r, n, o) {
				1 != this.serverConnected && (this.socket.close(), this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort)), this.queryRoom(e, t, i, function(e, t) {
					0 == e ? (this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
						BK.QQ.hasJoinRoomSucc = !0, BK.Script.log(0, 0, "加入房间 statusCode:" + e + " roomid is " + t.roomId), r(e, this)
					}, n, o)) : r(e, void 0)
				})
			}, this.forceLeaveRoom = function(e, t) {
				var i = new Object;
				i.cmd = 4, i.arg0 = t, this.leaveRoomCallBack = e;
				var r = this.requestLeaveRoom(i.arg0),
					n = this.socket.update();
				3 == n || 2 == n ? (this.socket.send(r), BK.Script.log(0, 0, "forceLeaveRoom push")) : BK.Script.log(0, 0, "forceLeaveRoom push Failed. Socket not allow Send.")
			}, this._event4StopGame = function(e, t, i) {
				BK.Script.log(0, 0, "BK.Room._event4StopGame!errCode = " + e + ", cmd = " + t + ", data = " + JSON.stringify(i)), 0 == e && this.forceLeaveRoom(function(e, t) {
					BK.Script.log(0, 0, "forceLeaveRoom callback")
				}, 0)
			}, BK.MQQ.SsoRequest.addListener(CMSHOW_SC_CMD_STOP_GAME, this, this._event4StopGame.bind(this)), this.addDebugFunctions = function() {
				this.createFixedRoom = function(e, t, i, r) {
					this.roomId = i, this.mId = t, this.gameId = e;
					var n = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
					BK.Script.log(0, 0, "socket con =" + n), -1 != n && BK.Script.log(0, 0, "socket connect failed! " + n), this.createRoomCallBack = r;
					var o = new Object;
					o.cmd = 6, o.arg0 = e, o.arg1 = t, this.reqArray.push(o), BK.Script.log(0, 0, "create Fixed Room ")
				}, this.createAndJoinFixedRoom = function(e, t, i, r, n) {
					this.createFixedRoom(e, t, i, function(e, t, i) {
						0 == e ? (BK.Script.log(0, 0, "创建固定房间号 游戏 statusCode:" + e + " roomId:" + i), this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
							BK.Script.log(0, 0, "加入房间 statusCode:" + e + " roomid is " + t.roomId), r(e, this)
						}, n)) : r(e, this)
					})
				}, this.requestCreateRoom = function(e, t) {
					var i = this.roomId;
					i || (i = 0), BK.Script.log(0, 0, "create fixed room request in fixedRoomId:" + i);
					var r = new BK.Buffer(fixedHeaderLen, 1);
					this.addFixedHeader(r, 6, e, i, t);
					var n = BK.Security.getST();
					BK.Security.encrypt(r);
					var o = n.bufferLength(),
						a = new BK.Buffer(HeaderLen + r.bufferLength() + o, 1);
					return this.addHeader(a, r.bufferLength(), o), a.writeBuffer(n), a.writeBuffer(r), BK.Script.log(0, 0, "create room request buffer : " + a.bufferLength() + " body len:" + r.bufferLength()), a
				}
			}, Object.defineProperty(this, "environment", {
				get: function() {
					return this._environment
				},
				set: function(e) {
					BK.Script.log(0, 0, "Set Environment failed!Can't set the environment!!!")
				}
			}), GameStatusInfo.devPlatform ? (this._environment = NETWORK_ENVIRONMENT_DEMO_DEV, BK.Script.log(1, 1, "当前环境为---开发环境")) : 1 == GameStatusInfo.isWhiteUser ? (this._environment = NETWORK_ENVIRONMENT_QQ_DEBUG, BK.Script.log(1, 1, "当前环境为---手Q开发环境")) : (this._environment = NETWORK_ENVIRONMENT_QQ_RELEASE, BK.Script.log(1, 1, "当前环境为---正式环境")), this._environment == NETWORK_ENVIRONMENT_QQ_DEBUG ? (this.headerVersion = 769, this.recommandRoomSvrHost = DebugRecommandRoomSvrHost, this.recommandRoomSvrPort = DebugRecommandRoomSvrPort) : this._environment == NETWORK_ENVIRONMENT_DEMO_DEV && (this.addDebugFunctions(), this.headerVersion = 257, this.recommandRoomSvrHost = DebugRecommandRoomSvrHost, this.recommandRoomSvrPort = DebugRecommandRoomSvrPort)
		},
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Device = t(), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, function() {
				BK.Script.log(1, 1, "keepScreenOn CMD_CMSHOW_GAME_ENTER_BACKGROUND "), BK.Device.innnerSetKeepScreenOn(!1)
			}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_ENTER_FORGROUND, this, function() {
				BK.Script.log(1, 1, "keepScreenOn CMD_CMSHOW_GAME_ENTER_FORGROUND "), BK.Device.isKeepScreenOnInit ? BK.Device.innnerSetKeepScreenOn(BK.Device.userSetDeviceScreenValue) : BK.Device.innnerSetKeepScreenOn(!1)
			}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_MINIMIZE, this, function() {
				BK.Script.log(1, 1, "keepScreenOn CMD_CMSHOW_GAME_MINIMIZE "), BK.Device.innnerSetKeepScreenOn(!1)
			}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_MAXIMIZE, this, function() {
				BK.Script.log(1, 1, "keepScreenOn CMD_CMSHOW_GAME_MAXIMIZE "), BK.Device.isKeepScreenOnInit ? BK.Device.innnerSetKeepScreenOn(BK.Device.userSetDeviceScreenValue) : BK.Device.innnerSetKeepScreenOn(!1)
			}), BK.MQQ.SsoRequest.addListener(CMSHOW_SC_CMD_STOP_GAME, this, function() {
				BK.Script.log(1, 1, "keepScreenOn CMSHOW_SC_CMD_STOP_GAME "), BK.Device.innnerSetKeepScreenOn(!1)
			}))
		}(BK, function() {
			function e() {
				this.isKeepScreenOnInit = !1, this.userSetDeviceScreenValue = void 0, BK.Director.isKeepScreenOn = !1
			}
			return e.prototype.innnerSetKeepScreenOn = function(e) {
				this.isKeepScreenOnInit ? (BK.QQ.uploadData("call_screen_on", GameStatusInfo.src, e ? 1 : 0, "", "", ""), BK.Director.isKeepScreenOn = e) : BK.Script.log(1, 1, "user unset keepScreenOn,ignore the value")
			}, e.prototype.setKeepScreenOn = function(e) {
				BK.Script.log(1, 1, "user set keepScreenOn " + e), this.userSetDeviceScreenValue = e, this.isKeepScreenOnInit = !0, this.innnerSetKeepScreenOn(e)
			}, new e
		}), BK.Script.log(0, 0, "filemanage.js is loaded"),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.FileManager = t())
		}(BK, function() {
			function e() {
				BK.FileUtil.getCompleteQueue && (this.taskQ = new Array, BK.Director.ticker.add(function() {
					for (var e = BK.FileUtil.getCompleteQueue(); e.length > 0;)
						for (var t = e.shift(), i = 0; i < this.taskQ.length; i++) {
							var r = this.taskQ[i];
							if (r.taskId == t.id) {
								this.taskQ.splice(i, 1);
								for (var n = 0; n < t.res.length; n++) switch (r.taskInfo[n].tag) {
									case 1:
										r.callback && (void 0 != r.taskInfo[n].encoding && "binary" != r.taskInfo[n].encoding || t.res[n].errcode && (t.res[n].data = {}))
								}
								r.callback(t.res);
								break
							}
						}
				}.bind(this)))
			}
			return e.Instance = new e, e.prototype._addReadIOTask = function(e, t) {
				var i = BK.FileUtil.addReadIOTask(e); - 1 != i && this.taskQ.push({
					taskId: i,
					taskInfo: e,
					callback: t
				})
			}, e.prototype.readFile = function(e, t) {
				if (BK.FileUtil.addReadIOTask && e && e.file) {
					for (var i = new Array, r = 0; r < e.file.length; r++) void 0 != e.file[r].path && i.push({
						tag: 1,
						path: e.file[r].path,
						encoding: void 0 == e.file[r].encoding ? "binary" : e.file[r].encoding
					});
					this._addReadIOTask(i, t)
				}
			}, e.prototype.writeFile = function(e, t) {}, e
		}),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.DNS = t())
		}(BK, function() {
			function e() {
				this.records = [], this.running = !1
			}
			return e.prototype.exists = function(e) {
				for (var t = 0; t < this.records.length; t++)
					if (this.records[t].hostname === e) return !0;
				return !1
			}, e.prototype.query = function(e, t) {
				for (var i = 0; i < this.records.length; i++)
					if (this.records[i].af === t && this.records[i].hostname === e) return this.records[i];
				return null
			}, e.prototype.update = function(e, t, i, r) {
				for (var n = 0; n < this.records.length; n++)
					if (this.records[n].af === i && this.records[n].hostname === e) return void this.records[n].callbacks.push(t);
				this.records.push({
					af: i,
					timeout: r,
					hostname: e,
					callbacks: [t]
				})
			}, e.prototype.delete = function(e) {
				for (var t = this.records.length - 1; t >= 0; t--)
					if (this.records[t].hostname === e) {
						this.records.splice(t, 1);
						break
					}
			}, e.prototype.start = function() {
				if (!this.running) {
					this.running = !0;
					var e = this;
					BK.Director.ticker.add(function(t, i) {
						e.records.length && BK.Misc.handleDNSQueryResult()
					})
				}
			}, e.prototype.queryIPAddress = function(e, t, i, r) {
				var n = !this.exists(e);
				if (void 0 == i && (i = 2), void 0 == r && (r = 0), this.update(e, t, i, r), n) {
					var o = this;
					o.start(), BK.Misc.queryIPAddress(e, function(t, i, r) {
						var n = o.query(e, i);
						if (n)
							for (var a = n.callbacks, s = 0; s < a.length; s++) a[s].call(o, t, i, r);
						o.delete(e)
					}, i, r)
				}
			}, new e
		}),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.HTTPParser = t())
		}(this, function() {
			function e(e) {
				this.onHeaders = void 0, this.onComplete = void 0, this.reinitialize(e)
			}
			var t = /^HTTP\/1\.([01]) ([0-9]{3})(?: ((?:[\x21-\x7E](?:[\t ]+[\x21-\x7E])*)*))?$/,
				i = /^([!#$%'*+\-.^_`|~0-9A-Za-z]+):[\t ]*((?:[\x21-\x7E](?:[\t ]+[\x21-\x7E])*)*)[\t ]*$/,
				r = /^[\t ]+(.*)$/;
			return e.prototype.reinitialize = function(t) {
				this.execute = this._executeHeader, this.type = t, t === e.RESPONSE && (this._state = 1), this._err = void 0, this._flags = 0, this._contentLen = void 0, this._nbytes = 0, this._nhdrbytes = 0, this._nhdrpairs = 0, this._buf = "", this._seenCR = !1, this.headers = {}, this.httpMajor = 1, this.httpMinor = void 0, this.maxHeaderPairs = 2e3, this.method = void 0, this.url = void 0, this.statusCode = void 0, this.statusText = void 0
			}, e.prototype._processHdrLine = function(e) {
				switch (this._state) {
					case 2:
						if (0 === e.length) return void this._headersEnd();
						if (null === (u = i.exec(e))) {
							if (null === (u = r.exec(e))) return this.execute = this._executeError, this._err = new Error("Malformed header line"), this.execute(this._err), this._err;
							var n = u[1];
							n.length > 0 && BK.Script.log(1, 0, "processHdrLine!extra = " + n)
						} else {
							var o = u[1],
								a = u[2];
							switch (o.toLowerCase()) {
								case "connection":
									"close" === (s = a.toLowerCase()).substring(0, 5) ? this._flags |= 4 : "keep-alive" === s.substring(0, 10) ? this._flags |= 2 : "upgrade" === s.substring(0, 7) && (this._flags |= 8);
									break;
								case "transfer-encoding":
									var s = a.toLowerCase();
									"chunked" === s.substring(0, 7) && (this._flags |= 1);
									break;
								case "upgrade":
									this._flags |= 32;
									break;
								case "content-length":
									var h = parseInt(a, 10);
									if (isNaN(h) || h > 524288) return this.execute = this._executeError, this._err = new Error("Bad Content-Length: " + inspect(h)), this.execute(this._err), this._err;
									this._contentLen = h
							}
							var l = this.maxHeaderPairs;
							(l <= 0 || ++this._nhdrpairs < l) && (this.headers[o.toLowerCase()] = a)
						}
						break;
					case 1:
						if (0 === e.length) return !0;
						var u = t.exec(e);
						if (null === u) return this.execute = this._executeError, this._err = new Error("Malformed status line"), this.execute(this._err), this._err;
						this.httpMinor = parseInt(u[1], 10), this.statusCode = parseInt(u[2], 10), this.statusText = u[3] || "", this._state = 2;
						break;
					default:
						return this.execute = this._executeError, this._err = new Error("Unexpected HTTP parser state: " + this._state), this.execute(this._err), this._err
				}
			}, e.prototype._headersEnd = function() {
				var e = this._flags,
					t = this.method && this.method.toLowerCase(),
					i = 40 == (40 & e) || "connect" === t,
					r = 0 == (4 & e),
					n = this._contentLen;
				if (this._buf = "", this._seenCR = !1, this._nbytes = 0, (0 === this.httpMajor && 9 === this.httpMinor || 0 === this.httpMinor && 0 == (2 & e)) && (r = !1), (16 & e) > 0) return this.onComplete && this.onComplete(), void this.reinitialize(this.type);
				if (this.onHeaders) {
					var o = this.headers;
					!0 === this.onHeaders(this.httpMajor, this.httpMinor, o, this.method, this.url, this.statusCode, this.statusText, i, r) && (e = this._flags |= 64)
				}
				i ? (this.onComplete && this.onComplete(), this._state = 3) : (0 === n || (64 & e) > 0 || 0 == (1 & e) && void 0 === n && !this._needsEOF()) && (this.onComplete && this.onComplete(), this.reinitialize(this.type))
			}, e.prototype._executeHeader = function(e) {
				for (var t, i, r, n = 0, o = e.length, a = this._seenCR, s = this._buf, h = this._nhdrbytes; n < o;) {
					if (a)
						if (a = !1, 10 === e.charCodeAt(n)) {
							if (++n, i = this._processHdrLine(s), s = "", "object" == typeof i) return this._err = i, this.execute(this._err), i;
							if (void 0 === i && 2 !== (u = this._state)) return u < 3 && n < o ? (i = this.execute(e.slice(n)), "number" != typeof i ? (this._err = i, this.execute(this._err), i) : n + i) : (3 === u && this.reinitialize(this.type), n)
						} else if (s += "\r", ++h > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
					if (!((t = e.indexOf("\r\n", n)) > -1)) {
						var l;
						if (13 === e.charCodeAt(o - 1) ? (a = !0, l = o - 1) : l = o, (h += l - n) > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
						s += e.substring(n, l);
						break
					}
					if ((r = t - n) > 0) {
						if ((h += r) > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
						s += e.substring(n, t)
					}
					if (n = t + 2, i = this._processHdrLine(s), s = "", "object" == typeof i) return this._err = i, this.execute(this._err), i;
					if (void 0 === i) {
						var u = this._state;
						if (2 !== u) return u < 3 && n < o ? (i = this.execute(e.slice(n)), "number" != typeof i ? (this._err = i, this.execute(this._err), i) : n + i) : (3 === u && this.reinitialize(this.type), n)
					}
				}
				return this._buf = s, this._seenCR = a, this._nhdrbytes = h, o
			}, e.prototype._executeError = function(e) {
				return BK.Script.log(1, 0, "_executeError!err = " + e.message), this._err
			}, e.prototype.execute = e.prototype._executeHeader, e.prototype._needsEOF = function() {
				if (this.type === e.REQUEST) return !1;
				var t = this.statusCode,
					i = this._flags;
				return !(void 0 !== t && (204 === t || 304 === t || 1 === parseInt(t / 100, 1)) || 64 & i) && !((1 & i) > 0 || void 0 != this._contentLen)
			}, e.REQUEST = 0, e.RESPONSE = 1, e
		}),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.URL = t())
		}(BK, function() {
			return function() {
				function e() {
					return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
				}

				function t(e) {
					return decodeURIComponent(e.replace(/\+/g, " "))
				}

				function i(e, t) {
					var i = e.charAt(0),
						r = t.split(i);
					return i === e ? r : (e = parseInt(e.substring(1), 10), r[e < 0 ? r.length + e : e - 1])
				}

				function r(e, i) {
					for (var r = e.charAt(0), n = i.split("&"), o = [], a = {}, s = [], h = e.substring(1), l = 0, u = n.length; l < u; l++)
						if ((o = n[l].match(/(.*?)=(.*)/)) || (o = [n[l], n[l], ""]), "" !== o[1].replace(/\s/g, "")) {
							if (o[2] = t(o[2] || ""), h === o[1]) return o[2];
							(s = o[1].match(/(.*)\[([0-9]+)\]/)) ? (a[s[1]] = a[s[1]] || [], a[s[1]][s[2]] = o[2]) : a[o[1]] = o[2]
						}
					return r === e ? a : a[h]
				}
				return function(t, n) {
					var o, a = {};
					if ("tld?" === t) return e();
					if (n = n || window.location.toString(), !t) return n;
					if (t = t.toString(), o = n.match(/^mailto:([^\/].+)/)) a.protocol = "mailto", a.email = o[1];
					else {
						if ((o = n.match(/(.*?)\/#\!(.*)/)) && (n = o[1] + o[2]), (o = n.match(/(.*?)#(.*)/)) && (a.hash = o[2], n = o[1]), a.hash && t.match(/^#/)) return r(t, a.hash);
						if ((o = n.match(/(.*?)\?(.*)/)) && (a.query = o[2], n = o[1]), a.query && t.match(/^\?/)) return r(t, a.query);
						if ((o = n.match(/(.*?)\:?\/\/(.*)/)) && (a.protocol = o[1].toLowerCase(), n = o[2]), (o = n.match(/(.*?)(\/.*)/)) && (a.path = o[2], n = o[1]), a.path = (a.path || "").replace(/^([^\/])/, "/$1"), t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")), t.match(/^\//)) return i(t, a.path.substring(1));
						if ((o = i("/-1", a.path.substring(1))) && (o = o.match(/(.*?)\.(.*)/)) && (a.file = o[0], a.filename = o[1], a.fileext = o[2]), (o = n.match(/(.*)\:([0-9]+)$/)) && (a.port = o[2], n = o[1]), (o = n.match(/(.*?)@(.*)/)) && (a.auth = o[1], n = o[2]), a.auth && (o = a.auth.match(/(.*)\:(.*)/), a.user = o ? o[1] : a.auth, a.pass = o ? o[2] : void 0), a.hostname = n.toLowerCase(), "." === t.charAt(0)) return i(t, a.hostname);
						e() && (o = a.hostname.match(e())) && (a.tld = o[3], a.domain = o[2] ? o[2] + "." + o[3] : void 0, a.sub = o[1] || void 0), a.port || ("http" === a.protocol || "ws" === a.protocol ? a.port = "80" : "https" !== a.protocol && "wss" !== a.protocol || (a.port = "443"))
					}
					return t in a ? a[t] : "{}" === t ? a : void 0
				}
			}()
		});
	var __extends = this && this.__extends || function() {
		var e = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(e, t) {
			e.__proto__ = t
		} || function(e, t) {
			for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
		};
		return function(t, i) {
			function r() {
				this.constructor = t
			}
			e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
		}
	}();
	! function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.WebSocket = t())
	}(BK, function() {
		var e = function() {
				function e() {
					this._wsArray = [], BK.Director.ticker.add(function(t, i) {
						e.Instance.dispatchEvent()
					})
				}
				return e.prototype.add = function(e) {
					this._wsArray.push(e), BK.Script.log(1, 0, "SocketEventMgr.add!so = " + e)
				}, e.prototype.del = function(e) {
					var t = this._wsArray.indexOf(e, 0);
					t >= 0 && (this._wsArray.splice(t, 1), BK.Script.log(1, 0, "SocketEventMgr.del!so = " + e))
				}, e.prototype.dispatchEvent = function() {
					this._wsArray.forEach(function(e, t, i) {
						e && e.update()
					})
				}, e.Instance = new e, e
			}(),
			t = function() {
				function t(e, t) {
					this.ip = e, this.port = t, this.__nativeObj = new BK.Socket, this.prevConnTs = 0, this.curConnRetrys = 0, this.curConnTimeout = 0, this.prevNetState = 0, this.options = {
						ConnectRetryCount: 3,
						ConnectTimeoutInterval: 3e3
					}
				}
				return t.prototype.__internalClose = function() {
					return this.__nativeObj ? this.__nativeObj.close() : -2
				}, t.prototype.__internalSend = function(e) {
					return this.__nativeObj ? this.__nativeObj.send(e) : -2
				}, t.prototype.__internalRecv = function(e) {
					if (this.__nativeObj) return this.__nativeObj.receive(e)
				}, t.prototype.__internalUpdate = function() {
					return this.__nativeObj ? this.__nativeObj.update() : -2
				}, t.prototype.__internalConnect = function() {
					if (this.__nativeObj) {
						var e = this.__nativeObj.connect(this.ip, this.port),
							t = this.curNetState();
						switch (this.prevNetState) {
							case 3:
								this.onReconnectEvent(this);
							case 0:
								switch (t) {
									case 3:
										this.onErrorEvent(this);
										break;
									case 1:
									case 4:
										this.prevConnTs = BK.Time.clock, this.curConnTimeout || (this.curConnTimeout = this.options.ConnectTimeoutInterval), this.onConnectingEvent(this), e = 0;
										break;
									case 2:
									case 5:
										this.onConnectedEvent(this), e = 0
								}
						}
						return this.prevNetState = t, e
					}
					return -2
				}, t.prototype.__internalCanReadLength = function() {
					return this.__nativeObj ? this.__nativeObj.canReadLength() : 0
				}, t.prototype.__internalIsEnableSSL = function() {
					return !!this.__nativeObj && this.__nativeObj.getSSLEnable()
				}, t.prototype.__internalEnableSSL = function(e) {
					this.__nativeObj && this.__nativeObj.setSSLEnable(e)
				}, t.prototype.__internalUpdateSSL = function() {
					var e = this.__internalUpdate(),
						t = this.curNetState();
					if (-1 != e) switch (this.prevNetState) {
						case 1:
							switch (t) {
								case 2:
									BK.Script.log(1, 0, "BK.Socket.update.ssl!connected, ip = " + this.ip + ", port = " + this.port);
									break;
								case 4:
								case 5:
									break;
								default:
									i = BK.Time.clock;
									return 1e3 * (r = BK.Time.diffTime(this.prevConnTs, i)) >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
							}
							break;
						case 2:
							break;
						case 4:
							switch (t) {
								case 5:
									switch (e) {
										case 2:
										case 3:
											this.onConnectedEvent(this)
									}
									break;
								default:
									var i = BK.Time.clock,
										r = BK.Time.diffTime(this.prevConnTs, i);
									return 1e3 * r >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
							}
							break;
						case 5:
							switch (t) {
								case 5:
									this.onUpdateEvent(this);
									break;
								case 3:
									this.onDisconnectEvent(this);
									break;
								default:
									this.onErrorEvent(this)
							}
					} else switch (this.prevNetState) {
						case 2:
						case 1:
							this.onDisconnectEvent(this);
							break;
						case 4:
						case 6:
						case 5:
							this.onErrorEvent(this)
					}
					return this.prevNetState = t, e
				}, t.prototype.__internalUpdateNoSSL = function() {
					var e = this.__internalUpdate(),
						t = this.curNetState();
					if (-1 != e) switch (this.prevNetState) {
						case 1:
							switch (t) {
								case 2:
									switch (e) {
										case 2:
											this.onConnectedEvent(this);
											break;
										case 3:
											BK.Script.log(1, 0, "BK.Socket.update!unexcepted status")
									}
									break;
								default:
									var i = BK.Time.clock;
									return 1e3 * BK.Time.diffTime(this.prevConnTs, i) >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
							}
							break;
						case 2:
							switch (t) {
								case 2:
									this.onUpdateEvent(this);
									break;
								case 3:
									this.onDisconnectEvent(this);
									break;
								default:
									this.onErrorEvent(this)
							}
					} else switch (this.prevNetState) {
						case 2:
						case 1:
							this.onDisconnectEvent(this)
					}
					return this.prevNetState = t, e
				}, t.prototype.curNetState = function() {
					return this.__nativeObj ? this.__nativeObj.state : 0
				}, t.prototype.close = function() {
					var t = this.__internalClose();
					return t || (this.prevNetState = 0), e.Instance.del(this), t
				}, t.prototype.send = function(e) {
					var i = this.__internalSend(e);
					return i < 0 && (this.onErrorEvent(this), t.prototype.close.call(this)), i
				}, t.prototype.recv = function(e) {
					return this.__internalRecv(e)
				}, t.prototype.canRecvLength = function() {
					return this.__internalCanReadLength()
				}, t.prototype.update = function() {
					return this.isEnableSSL() ? this.__internalUpdateSSL() : this.__internalUpdateNoSSL()
				}, t.prototype.connect = function() {
					var t = this.curNetState();
					if (0 == t || 3 == t) {
						var i = this.__internalConnect();
						return i || e.Instance.add(this), i
					}
					return 0
				}, t.prototype.isEnableSSL = function() {
					return this.__internalIsEnableSSL()
				}, t.prototype.enableSSL = function(e) {
					this.__internalEnableSSL(e)
				}, t.prototype.onErrorEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.ErrorEvent")
				}, t.prototype.onUpdateEvent = function(e) {
					return 0
				}, t.prototype.onTimeoutEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.TimeoutEvent")
				}, t.prototype.onConnectingEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.ConnectingEvent")
				}, t.prototype.onConnectedEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.ConnectedEvent")
				}, t.prototype.onReconnectEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.ReconnectEvent")
				}, t.prototype.onDisconnectEvent = function(e) {
					BK.Script.log(1, 0, "BK.Socket.DisconnectEvent")
				}, t
			}(),
			i = function() {
				function e(e, t) {
					this.data = e, this.isBinary = t
				}
				return e
			}(),
			r = function(e) {
				function t(t, i, r, n, o) {
					var a = e.call(this, t, i) || this;
					return a.path = n || "/", a.host = r, a.query = o, a.httpVer = 1.1, a.httpParser = new HTTPParser(HTTPParser.RESPONSE), a.version = 13, a.protocols = new Array, a.extensions = new Array, a.delegate = {
						onOpen: null,
						onClose: null,
						onError: null,
						onMessage: null,
						onSendComplete: null
					}, a.options || (a.options = {}), a.options.DrainSegmentCount = 8, a.options.DefaultSegmentSize = 4096, a.options.PingPongInterval = 0, a.options.HandleShakeRequestTimeout = 1e4, a.options.HandleShakeResponseTimeout = 1e4, a.options.CloseAckTimeout = 2e3, a.options.PingPongTimeout = 3e3, a.clear(), a
				}
				return __extends(t, e), t.prototype.clear = function() {
					this.mask4 = new BK.Buffer(4, !1), this.txbuf = new BK.Buffer(128, !0), this.rxbuf = new BK.Buffer(128, !0), this.txMsgQue = new Array, this.rxbufQue = new Array, this.udataQue = new Array, this.peerClosed = !1, this.txSegCount = 0, this.rxSegCount = 0, this.rxFrameType = -1, this.isFinalSeg = !1, this.inTxSegFrame = !1, this.inRxSegFrame = !1, this.inPartialTxbuf = !1, this.inPingFrame = !1, this.inPongFrame = !1, this.errcode = 65535, this.state = 0, this.parseState = 0, this.phaseTimeout = 0, this.pingpongTimer = 0, this.prevPhaseTickCount = 0, this.prevPingPongTickCount = 0, this.framePackageCount = 0
				}, t.prototype.getReadyState = function() {
					return this.state
				}, t.prototype.getErrorCode = function() {
					return this.errcode
				}, t.prototype.getErrorString = function() {
					return this.message
				}, t.prototype.randomN = function(e) {
					for (var t = new BK.Buffer(e, !1), i = 0; i < e; i++) {
						var r = Math.round(65535 * Math.random());
						t.writeUint8Buffer(r)
					}
					return t
				}, t.prototype.toHex = function(e) {
					if (e >= 0 && e <= 9) return e.toString();
					switch (e) {
						case 10:
							return "A";
						case 11:
							return "B";
						case 12:
							return "C";
						case 13:
							return "D";
						case 14:
							return "E";
						case 15:
							return "F"
					}
					return "u"
				}, t.prototype.bufferToHexString = function(e) {
					var t = "";
					for (e.rewind(); !e.eof;) {
						var i = e.readUint8Buffer();
						t = t.concat("x" + this.toHex((240 & i) >> 4) + this.toHex(15 & i) + " ")
					}
					return t
				}, t.prototype.startPhaseTimeout = function(e) {
					if (6 == e) this.phaseTimeout = e, this.prevPhaseTickCount = 0;
					else switch (this.state) {
						case 2:
							1 == e && (this.phaseTimeout = e, this.prevPhaseTickCount = BK.Time.clock);
							break;
						case 3:
							2 == e && (this.phaseTimeout = e, this.prevPhaseTickCount = BK.Time.clock);
							break;
						case 1:
							3 == e && (this.phaseTimeout = e, this.prevPhaseTickCount = BK.Time.clock);
							break;
						case 4:
							switch (e) {
								case 4:
									this.options.PingPongTimeout = Math.min(this.options.PingPongTimeout, this.options.PingPongInterval)
							}
							this.phaseTimeout = e, this.prevPhaseTickCount = BK.Time.clock
					}
				}, t.prototype.handlePhaseTimeout = function() {
					if (6 != this.phaseTimeout) {
						var t = BK.Time.diffTime(this.prevPhaseTickCount, BK.Time.clock);
						switch (this.phaseTimeout) {
							case 1:
								1e3 * t > this.options.HandleShakeRequestTimeout && (BK.Script.log(1, 0, "BK.WebSocket.handlePhaseTimeout!handshake request timeout"), this.prevPhaseTickCount = BK.Time.clock, this.state = -1, this.errcode = 4096, this.message = "handshake request timeout", e.prototype.close.call(this), this.delegate.onError && this.delegate.onError(this));
								break;
							case 2:
								1e3 * t > this.options.HandleShakeResponseTimeout && (BK.Script.log(1, 0, "BK.WebSocket.handlePhaseTimeout!handshake response timeout"), this.prevPhaseTickCount = BK.Time.clock, this.state = -1, this.errcode = 4097, this.message = "handshake response timeout", e.prototype.close.call(this), this.delegate.onError && this.delegate.onError(this));
								break;
							case 3:
								1e3 * t > this.options.CloseAckTimeout && (BK.Script.log(1, 0, "BK.WebSocket.handlePhaseTimeout!close ack timeout"), this.prevPhaseTickCount = BK.Time.clock, e.prototype.close.call(this), 1 == this.state ? this.peerClosed ? this.delegate.onClose && this.delegate.onClose(this) : (this.errcode = 1006, this.message = "abnormal close", this.delegate.onError && this.delegate.onError(this), this.startPhaseTimeout(6)) : this.delegate.onError && this.delegate.onError(this));
								break;
							case 4:
								1e3 * t > this.options.PingPongTimeout && (BK.Script.log(1, 0, "BK.WebSocket.handlePhaseTimeout!receive pong timeout"), this.prevPhaseTickCount = BK.Time.clock)
						}
					}
				}, t.prototype.restartPingPongTimer = function() {
					4 == this.state && this.options.PingPongInterval > 0 && (this.prevPingPongTickCount = BK.Time.clock)
				}, t.prototype.handlePingPongTimer = function() {
					4 == this.state && this.options.PingPongInterval > 0 && 1e3 * BK.Time.diffTime(this.prevPingPongTickCount, BK.Time.clock) > this.options.PingPongInterval && (this.inPingFrame = !1, this.txPingData = this.randomN(16), this.sendPingFrame(this.txPingData), this.restartPingPongTimer())
				}, t.prototype.doHandshakePhase = function() {
					var t = "";
					t = t.concat("GET " + this.path + " HTTP/" + this.httpVer + "\r\n"), t = (t = (t = 80 == this.port || 443 == this.port ? t.concat("Host: " + this.host + "\r\n") : t.concat("Host: " + this.host + ":" + this.port + "\r\n")).concat("Upgrade: websocket\r\n")).concat("Connection: Upgrade\r\n"), t = this.isEnableSSL() ? t.concat("Origin: https://" + this.host + "\r\n") : t.concat("Origin: http://" + this.host + "\r\n");
					var i = this.randomN(16),
						r = BK.Misc.encodeBase64FromBuffer(i);
					if (t = t.concat("Sec-WebSocket-Key: " + r + "\r\n"), t = t.concat("Sec-WebSocket-Version: " + this.version + "\r\n"), this.query)
						for (var n = this.query.split("&"), o = 0; o < n.length; o++) {
							var a = n[o].split("=");
							a.length > 0 && (t = t.concat(a[0] + ": " + a[1] + "\r\n"))
						}
					t = t.concat("\r\n");
					var s = BK.Misc.sha1(r.concat("258EAFA5-E914-47DA-95CA-C5AB0DC85B11"));
					this.handshakeSig = BK.Misc.encodeBase64FromBuffer(s);
					var h = new BK.Buffer(t.length, !1);
					h.writeAsString(t, !1), 0 < e.prototype.send.call(this, h) && (this.state = 2, this.startPhaseTimeout(1))
				}, t.prototype.doSvrHandshakePhase1 = function(t) {
					var i = this;
					t && (this.httpParser.onComplete || (this.httpParser.onComplete = function() {
						for (var t in i.httpParser.headers);
						i.doSvrHandshakePhase2() ? (i.restartPingPongTimer(), i.startPhaseTimeout(6), i.delegate.onOpen && i.delegate.onOpen(i)) : (i.errcode = 4098, i.message = "handshake parse error", i.startPhaseTimeout(6), e.prototype.close.call(i), i.delegate.onError && i.delegate.onError(i))
					}), this.httpParser.execute(t), 2 == this.state && (this.state = 3, this.startPhaseTimeout(2)))
				}, t.prototype.doSvrHandshakePhase2 = function() {
					switch (this.httpParser.statusCode) {
						case 101:
							return void 0 == this.httpParser.headers.upgrade ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'upgrade' header"), !1) : void 0 == this.httpParser.headers.connection ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'connection' header"), !1) : "upgrade" != this.httpParser.headers.connection.toLowerCase() ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!error 'connection' header"), !1) : void 0 == this.httpParser.headers["sec-websocket-accept"] ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'sec-websocket-accept' header"), !1) : this.handshakeSig != this.httpParser.headers["sec-websocket-accept"] ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!error 'sec-websocket-accept' header"), !1) : (this.state = 4, !0)
					}
					return !1
				}, t.prototype.doFrameDataPhase = function(e, i, r) {
					void 0 === r && (r = !1);
					var n = 6,
						o = e.length;
					this.extensions.length, n += o;
					var a = new BK.Buffer(n, !1),
						s = 0,
						h = !1;
					switch (this.version) {
						case 13:
							h = !0, s = 128
					}
					var l = !0;
					switch (i) {
						case 1:
						case 2:
							r ? this.inTxSegFrame ? (l = !1, i = 0) : (l = !1, this.inTxSegFrame = !0) : this.inTxSegFrame && (i = 0)
					}
					if (l ? a.writeUint8Buffer(128 | 15 & i) : a.writeUint8Buffer(15 & i), o < 126 ? a.writeUint8Buffer(s | 127 & e.length) : o < 65536 ? (a.writeUint8Buffer(126 | s), t.isLittleEndian ? (a.writeUint8Buffer((65280 & o) >> 8), a.writeUint8Buffer(255 & o)) : (a.writeUint8Buffer(255 & o), a.writeUint8Buffer((65280 & o) >> 8))) : BK.Script.log(1, 0, "BK.WebSocket.doFrameDataPhase!js don't support 64bit data type"), h) {
						var u = this.randomN(4);
						BK.Misc.encodeBufferXorMask4(e, u), a.writeBuffer(u)
					}
					return a.writeBuffer(e), a
				}, t.prototype.doSvrFrameDataPhase = function(e) {
					if (!e) return !0;
					for (; !e.eof;) {
						switch (this.parseState) {
							case 0:
								this.mask4.rewind(), this.rxbuf = new BK.Buffer(this.options.DefaultSegmentSize, !0), this.maskBit = 0, this.rxbuflen = 0, this.isFinalSeg = !1, this.parseState = 1;
							case 1:
								var i = e.readUint8Buffer();
								switch (this.isFinalSeg = !!(128 & i), this.opcode = 15 & i, this.version) {
									case 13:
										switch (this.opcode) {
											case 3:
											case 4:
											case 5:
											case 6:
											case 7:
											case 11:
											case 12:
											case 13:
											case 14:
											case 15:
												return this.errcode = 1002, this.message = "protocol error", BK.Script.log(1, 0, "BK.WebSocket.doSvrFrameDataPhase!unknown opcode = " + this.opcode), !1
										}
								}
								switch (this.opcode) {
									case 8:
									case 9:
									case 10:
									case 0:
										break;
									default:
										if (!this.isFinalSeg && 1 != this.opcode && 2 != this.opcode) return this.errcode = 1003, this.message = "unsupported data", BK.Script.log(1, 0, "BK.WebSocket.doSvrFrameDataPhase!illegal opcode = " + this.opcode), !1;
										if (-1 == this.rxFrameType) this.rxFrameType = this.opcode;
										else if (this.rxFrameType != this.opcode) return this.errcode = 1002, this.message = "protocol error", BK.Script.log(1, 0, "BK.WebSocket.doSvrFrameDataPhase!rxFrameType = " + this.rxFrameType + ", illegal opcode = " + this.opcode), !1
								}
								if (this.parseState = 2, e.eof) return !0;
							case 2:
								var r = e.readUint8Buffer();
								switch (this.maskBit = (128 & r) >> 7, 127 & r) {
									case 126:
										if (this.parseState = 3, e.eof) return !0;
										break;
									case 127:
										if (this.parseState = 5, e.eof) return !0;
										break;
									default:
										if (this.rxbuflen = 127 & r, 1 == this.maskBit ? this.parseState = 13 : this.parseState = 17, this.rxbuflen > 0 && e.eof) return !0
								}
						}
						switch (this.parseState) {
							case 3:
								n = e.readUint8Buffer();
								if (t.isLittleEndian ? this.rxbuflen |= (255 & n) << 8 : this.rxbuflen |= 255 & n, e.eof) return !0;
							case 4:
								var n = e.readUint8Buffer();
								if (t.isLittleEndian ? this.rxbuflen |= 255 & n : this.rxbuflen |= (255 & n) << 8, 1 == this.maskBit ? this.parseState = 13 : this.parseState = 17, this.rxbuflen > 0 && e.eof) return !0;
								break;
							case 5:
							case 6:
							case 7:
							case 8:
							case 9:
							case 10:
							case 11:
							case 12:
								return this.errcode = 1002, this.message = "protocol errors", BK.Script.log(1, 0, "BK.WebSocket.doSvrFrameDataPhase!js don't support 64bit data type"), !1
						}
						switch (this.parseState) {
							case 13:
								if (this.mask4.writeUint8Buffer(e.readUint8Buffer()), this.parseState = 14, e.eof) return !0;
							case 14:
								if (this.mask4.writeUint8Buffer(e.readUint8Buffer()), this.parseState = 15, e.eof) return !0;
							case 15:
								if (this.mask4.writeUint8Buffer(e.readUint8Buffer()), this.parseState = 16, e.eof) return !0;
							case 16:
								if (this.mask4.writeUint8Buffer(e.readUint8Buffer()), this.parseState = 17, e.eof) return !0
						}
						if (17 == this.parseState) {
							var o = e.length - e.pointer;
							if (o <= this.rxbuflen - this.rxbuf.length ? this.rxbuf.writeBuffer(e.readBuffer(o)) : this.rxbuf.writeBuffer(e.readBuffer(this.rxbuflen - this.rxbuf.length)), this.rxbuf.length == this.rxbuflen)
								if (this.rxSegCount = this.rxSegCount + 1, this.parseState = 0, this.isFinalSeg) switch (this.rxbuf.rewind(), this.opcode) {
									case 8:
										BK.Script.log(0, 0, "BK.WebSocket.doSvrFrameDataPhase!receive close frame"), this.handleCloseFrame();
										break;
									case 9:
										BK.Script.log(0, 0, "BK.WebSocket.doSvrFrameDataPhase!receive ping frame"), this.handlePingFrame();
										break;
									case 10:
										BK.Script.log(0, 0, "BK.WebSocket.doSvrFrameDataPhase!receive pong frame"), this.handlePongFrame();
										break;
									default:
										this.rxbufQue.push(this.rxbuf), this.recvFrameFromRxQ(this.rxFrameType), this.rxSegCount = 0, this.rxFrameType = -1
								} else this.rxbuf.rewind(), this.rxbufQue.push(this.rxbuf)
						}
					}
					return !0
				}, t.prototype.handleCloseFrame = function() {
					if (this.peerClosed = !0, 4 == this.state) {
						var e = this.rxbuf.readUint16Buffer(),
							t = this.rxbuf.readBuffer(this.rxbuflen - 2);
						e ? (this.errcode = e, this.message = t.readAsString()) : (this.errcode = 1005, this.message = "no status recv"), BK.Script.log(1, 0, "BK.WebSocket.handleCloseFrame!errcode = " + this.errcode + ", msg = " + this.message), this.sendCloseFrame(this.errcode, this.message ? this.message : "")
					} else if (1 == this.state) {
						if (BK.Script.log(1, 0, "BK.WebSocket.handleCloseFrame!normal closed"), this.close(), this.state = 0, this.delegate.onMessage)
							for (; this.udataQue.length > 0;) {
								var i = this.udataQue.shift();
								this.delegate.onMessage(this, i)
							}
						this.delegate.onClose && this.delegate.onClose(this)
					}
				}, t.prototype.handlePingFrame = function() {
					if (4 == this.state) {
						if (this.rxbuflen > 125) return this.errcode = 4099, void(this.message = "ping packet large");
						if (this.inPongFrame) return void BK.Script.log(1, 0, "BK.WebSocket.handlePingFrame!already recv ping, drop it.");
						this.rxPongData = new BK.Buffer(this.rxbuflen, !0), this.rxPongData.writeBuffer(this.rxbuf.readBuffer(this.rxbuflen)), this.sendPongFrame(this.rxPongData)
					}
				}, t.prototype.handlePongFrame = function() {
					if (4 == this.state) {
						var e = new BK.Buffer(this.rxbuflen, !0);
						e.writeBuffer(this.rxbuf.readBuffer(this.rxbuflen)), this.startPhaseTimeout(6), BK.Script.log(0, 0, "BK.WebSocket.handlePongFrame!pong data = " + this.bufferToHexString(e))
					}
				}, t.prototype.sendFrameFromTxQ = function(t) {
					if (4 == this.state && this.packageSendCheck()) {
						if (this.inPartialTxbuf) {
							if (!((u = e.prototype.send.call(this, this.txbuf)) > 0)) return BK.Script.log(1, u, "BK.WebSocket.sendFrameFromTxQ!partial send failed, data type = " + t), !1;
							if (this.restartPingPongTimer(), u < this.txbuf.length) {
								var i = this.txbuf.length - u,
									r = new BK.Buffer(i, !1);
								return this.txbuf.rewind(), this.txbuf.jumpBytes(u), r.writeBuffer(this.txbuf.readBuffer(i)), this.txbuf = r, !1
							}
							this.framePackageCount++, this.inPartialTxbuf = !1
						}
						for (var n = !0, o = 0; o < this.txMsgQue.length; o++) {
							for (var a = element = this.txMsgQue[o]; a.length > 0;) {
								var s = a.shift(),
									h = a.length > 0,
									l = this.doFrameDataPhase(s, t, h),
									u = e.prototype.send.call(this, l);
								if (!(u > 0)) {
									n = !1, BK.Script.log(1, u, "BK.WebSocket.sendFrameFromTxQ!send failed, data type = " + t);
									break
								}
								if (this.restartPingPongTimer(), u < l.length) {
									l.rewind(), l.jumpBytes(u), this.txbuf.rewind(), this.txbuf.writeBuffer(l.readBuffer(l.length - u)), this.inPartialTxbuf = !0, n = !1, BK.Script.log(1, 0, "BK.WebSocket.sendFrameFromTxQ!partial send, total size = " + l.length + ", tx size = " + u);
									break
								}
								if (0 == a.length && (this.inTxSegFrame = !1), this.framePackageCount++, !this.packageSendCheck()) return
							}
							if (0 == a.length && this.txMsgQue.shift(), !n) break;
							if (!this.packageSendCheck()) return
						}
						return n && !this.txMsgQue.length && this.inTxSegFrame && (this.inTxSegFrame = !1), n
					}
				}, t.prototype.recvFrameFromRxQ = function(e) {
					for (var t = 2 == e, r = new BK.Buffer(128, !0); this.rxbufQue.length > 0;) {
						var n = this.rxbufQue.shift();
						r.writeBuffer(n)
					}
					0 == t && r.writeUint8Buffer(0), r.rewind(), this.udataQue.push(new i(r, t))
				}, t.prototype.__sendBinaryFrame = function(e, t) {
					var i = e.length,
						r = this.options.DefaultSegmentSize,
						n = 0;
					e.rewind();
					for (var o = new Array; i > r;) {
						a = new BK.Buffer(r, !1);
						e.rewind(), e.jumpBytes(n), a.writeBuffer(e.readBuffer(r)), a.rewind(), o.push(a), n += r, i -= r
					}
					if (i > 0) {
						var a = new BK.Buffer(i, !1);
						e.rewind(), e.jumpBytes(n), a.writeBuffer(e.readBuffer(i)), a.rewind(), o.push(a)
					}
					return this.txMsgQue.push(o), this.txFrameType = t, this.sendFrameFromTxQ(t)
				}, t.prototype.sendTextFrame = function(e) {
					if (4 != this.state) return !1;
					var t = new BK.Buffer(128, !0);
					return t.writeAsString(e, !1), t.rewind(), this.__sendBinaryFrame(t, 1)
				}, t.prototype.sendBinaryFrame = function(e) {
					if (4 == this.state) return this.__sendBinaryFrame(e, 2)
				}, t.prototype.sendCloseFrame = function(i, r) {
					if (!this.isSendClose) {
						this.isSendClose = !0;
						var n = new BK.Buffer(r.length + 1, !1),
							o = new BK.Buffer(3 + r.length, !1);
						t.isLittleEndian ? (o.writeUint8Buffer((65280 & i) >> 8), o.writeUint8Buffer(255 & i)) : (o.writeUint8Buffer(255 & i), o.writeUint8Buffer((65280 & i) >> 8)), n.writeAsString(r, !0), o.writeBuffer(n);
						var a = this.doFrameDataPhase(o, 8);
						0 < e.prototype.send.call(this, a) && (0 == this.peerClosed && (this.state = 1, this.startPhaseTimeout(3)), BK.Script.log(1, 0, "BK.WebSocket.sendCloseFrame!code = " + i + ", reason = " + r))
					}
				}, t.prototype.sendPingFrame = function(t) {
					if (!this.inPingFrame) {
						BK.Script.log(0, 0, "BK.WebSocket.sendPingFrame!ping data = " + this.bufferToHexString(t));
						var i = this.doFrameDataPhase(t, 9);
						0 < e.prototype.send.call(this, i) && (this.inPingFrame = !0, this.startPhaseTimeout(4))
					}
				}, t.prototype.sendPongFrame = function(t) {
					if (!this.inPongFrame) {
						var i = this.doFrameDataPhase(t, 10);
						0 < e.prototype.send.call(this, i) && (this.inPongFrame = !0)
					}
				}, t.prototype.onErrorEvent = function(t) {
					0 != this.state && 1 != this.state && (e.prototype.onErrorEvent.call(this, t), this.state = -1, this.errcode = 1006, this.message = "abnormal closure", this.delegate.onError && this.delegate.onError(this))
				}, t.prototype.onTimeoutEvent = function(t) {
					e.prototype.onErrorEvent.call(this, t), this.state = 0, this.errcode = -1e3, this.message = "socket connect timeout", this.delegate.onError && this.delegate.onError(this)
				}, t.prototype.onDisconnectEvent = function(t) {
					switch (e.prototype.onDisconnectEvent.call(this, t), this.state) {
						case 2:
						case 3:
						case 4:
							this.state = -1, this.errcode = 1006, this.message = "abnormal closure", this.delegate.onError && this.delegate.onError(this);
							break;
						case 1:
							this.state = 0, this.delegate.onClose && this.delegate.onClose(this), BK.Script.log(1, 0, "BK.WebSocket.onDisconnectEvent!enter closed state")
					}
				}, t.prototype.onConnectedEvent = function(t) {
					e.prototype.onConnectedEvent.call(this, t), 0 == this.state && (this.clear(), this.doHandshakePhase())
				}, t.prototype.phaseBufferCheck = function(e) {
					for (var t = 0, i = 0; !e.eof;)
						if (i++, e.readUint8Buffer() == "\r\n\r\n".charCodeAt(t)) {
							if (++t == "\r\n\r\n".length) return i
						} else t = 0;
					return -1
				}, t.prototype.packageSendCheck = function() {
					return this.framePackageCount < this.options.DrainSegmentCount
				}, t.prototype.onUpdateEvent = function(t) {
					switch (this.framePackageCount = 0, e.prototype.onUpdateEvent.call(this, t), this.state) {
						case 2:
						case 3:
							if ((o = t.canRecvLength()) > 0) {
								var i = this.recv(o),
									r = this.phaseBufferCheck(i);
								if (i.rewind(), r < i.length) {
									var n = i.readBuffer(r);
									if (void 0 != n && this.doSvrHandshakePhase1(n.readAsString(!0)), this.handlePhaseTimeout(), 4 != this.state) {
										BK.Script.log(1, 0, "BK.Websocket websocket state expected ESTABLISHED!");
										break
									}
									if (BK.Script.log(1, 0, "BK.Websocket pointer:" + i.pointer + "length:" + i.length), void 0 != i)
										for (; !i.eof;)
											if (!this.doSvrFrameDataPhase(i)) {
												this.sendCloseFrame(this.errcode, this.message ? this.message : ""), this.delegate.onError && this.delegate.onError(this);
												break
											}
									if (this.delegate.onMessage)
										for (; this.udataQue.length > 0;) {
											h = this.udataQue.shift();
											this.delegate.onMessage(this, h)
										}
									this.txMsgQue.length > 0 && this.sendFrameFromTxQ(this.txFrameType), this.delegate.onSendComplete && this.delegate.onSendComplete(this), this.inPongFrame = !1, this.handlePhaseTimeout(), this.handlePingPongTimer()
								} else void 0 != i && this.doSvrHandshakePhase1(i.readAsString(!0)), this.handlePhaseTimeout()
							}
							break;
						case 4:
							for (var o = t.canRecvLength(); o > 0;) {
								var a = o,
									s = this.recv(o);
								if (void 0 != s)
									for (; !s.eof;)
										if (!this.doSvrFrameDataPhase(s)) {
											this.sendCloseFrame(this.errcode, this.message ? this.message : ""), this.delegate.onError && this.delegate.onError(this);
											break
										}
								if ((o = t.canRecvLength()) == a) break
							}
							if (this.delegate.onMessage)
								for (; this.udataQue.length > 0;) {
									h = this.udataQue.shift();
									this.delegate.onMessage(this, h)
								}
							this.txMsgQue.length > 0 && this.sendFrameFromTxQ(this.txFrameType), this.delegate.onSendComplete && this.delegate.onSendComplete(this), this.inPongFrame = !1, this.handlePhaseTimeout(), this.handlePingPongTimer();
							break;
						case 1:
							if ((o = t.canRecvLength()) > 0 && this.doSvrFrameDataPhase(this.recv(o)) && this.delegate.onMessage)
								for (; this.udataQue.length > 0;) {
									var h = this.udataQue.shift();
									this.delegate.onMessage(this, h)
								}
							this.handlePhaseTimeout()
					}
					return 0
				}, t.isLittleEndian = BK.Misc.isLittleEndian(), t
			}(t),
			n = function() {
				function e(e, t) {
					this.data = e, this.isBinary = t
				}
				return e
			}();
		return function() {
			function e(e) {
				var t = this;
				this.__url = e, this.options = null, this.inTrans = !1, this.isPendingConn = !0, this.txdataQ = new Array;
				var i = BK.URL("{}", e);
				this.scheme = i.protocol, this.port = i.port, this.path = i.path, this.query = i.query, this.host = i.hostname, BK.DNS.queryIPAddress(i.hostname, function(e, i, n) {
					switch (e) {
						case 0:
							BK.Script.log(1, 0, "BK.WebSocket.queryIPAddress!iplist = " + JSON.stringify(n)), t.iplist = n, t.__nativeObj = new r(n[0], t.port, t.host, t.path, t.query), BK.Notification.on("game_network_change", t, function(e) {
								this.__nativeObj.close(), this.__nativeObj.delegate.onClose(this.__nativeObj)
							}.bind(t), !0), "wss" == t.scheme && t.__nativeObj.enableSSL(!0), t.options && (t.setOptions(t.options), t.options = null), t.isPendingConn && (t.connect(), t.isPendingConn = !1), t.__nativeObj.delegate.onOpen = function(e) {
								t.txdataQ.length > 0 && t.send(t.txdataQ.shift()), t.onOpen ? t.onOpen(t) : t.onopen && t.onopen.call(t)
							}, t.__nativeObj.delegate.onClose = function(e) {
								var i = {};
								i.code = t.getErrorCode(), i.reason = t.getErrorString(), t.onClose ? t.onClose(t, i) : t.onclose && t.onclose.call(t, i)
							}, t.__nativeObj.delegate.onError = function(e) {
								var i = {};
								i.code = t.getErrorCode(), i.reason = t.getErrorString(), t.onError ? t.onError(t, i) : t.onerror && t.onerror.call(t, i)
							}, t.__nativeObj.delegate.onMessage = function(e, i) {
								if (t.onMessage) t.onMessage(t, i);
								else if (t.onmessage) {
									if (1 == i.isBinary) {
										var r = i.data;
										r.rewind();
										for (var n = new ArrayBuffer(r.length), o = new DataView(n); !r.eof;) o.setUint8(r.pointer, r.readUint8Buffer());
										i.data = n
									}
									t.onmessage.call(t, i)
								}
							}, t.__nativeObj.delegate.onSendComplete = function(e) {
								for (var i = t.txdataQ.length; i > 0 && t.__nativeObj.packageSendCheck(); i--) {
									var r = t.txdataQ.shift();
									r.isBinary ? t.__sendBinaryFrame(r.data) : t.__nativeObj.sendTextFrame(r.data)
								}
							}
					}
				})
			}
			return Object.defineProperty(e.prototype, "url", {
				get: function() {
					return this.__url
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "readyState", {
				get: function() {
					return this.getReadyState()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "bufferedAmount", {
				get: function() {
					for (var e = 0, t = 0; t < this.txdataQ.length; t++) e += this.txdataQ[t].data.length;
					return e
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.__sendBinaryFrame = function(e) {
				if (Object.prototype.hasOwnProperty.call(e, "__rawBKData")) return this.__nativeObj.sendBinaryFrame(e.__rawBKData);
				if (e instanceof Int8Array == 1 || e instanceof Uint8Array == 1 || e instanceof Int16Array == 1 || e instanceof Uint16Array == 1 || e instanceof Int32Array == 1 || e instanceof Uint32Array == 1 || e instanceof Float32Array == 1) {
					for (var t = new BK.Buffer(e.byteLength), i = new DataView(e.buffer), r = 0; r < e.byteLength; r++) t.writeUint8Buffer(i.getUint8(r));
					return this.__nativeObj.sendBinaryFrame(t)
				}
				if (e instanceof ArrayBuffer == 1) {
					for (var t = new BK.Buffer(e.byteLength), i = new DataView(e), r = 0; r < e.byteLength; r++) t.writeUint8Buffer(i.getUint8(r));
					return this.__nativeObj.sendBinaryFrame(t)
				}
				return this.__nativeObj.sendBinaryFrame(e)
			}, e.prototype.getReadyState = function() {
				return this.__nativeObj ? this.__nativeObj.getReadyState() : 0
			}, e.prototype.getErrorCode = function() {
				return this.__nativeObj ? this.__nativeObj.getErrorCode() : 65535
			}, e.prototype.getErrorString = function() {
				return this.__nativeObj ? this.__nativeObj.getErrorString() : ""
			}, e.prototype.close = function() {
				4 == this.getReadyState() && this.__nativeObj.sendCloseFrame(1e3, "see ya")
			}, e.prototype.connect = function() {
				return !this.__nativeObj || 0 != this.__nativeObj.connect()
			}, e.prototype.send = function(e) {
				var t = this.getReadyState();
				if (1 == t || 0 == t) return !1;
				if ("string" == typeof e) {
					if (this.__nativeObj.packageSendCheck() && 4 == t) return this.__nativeObj.sendTextFrame(e);
					this.txdataQ.push(new n(e, !1))
				} else if ("object" == typeof e) {
					if (this.__nativeObj.packageSendCheck() && 4 == t) return this.__sendBinaryFrame(e);
					this.txdataQ.push(new n(e, !0))
				}
				return !1
			}, e.prototype.setOptions = function(e) {
				this.__nativeObj ? (e.DrainSegmentCount && (this.__nativeObj.options.DrainSegmentCount = e.DrainSegmentCount), e.DefaultSegmentSize && (this.__nativeObj.options.DefaultSegmentSize = e.DefaultSegmentSize), e.PingPongInterval && (this.__nativeObj.options.PingPongInterval = e.PingPongInterval), e.HandleShakeRequestTimeout && (this.__nativeObj.options.HandleShakeRequestTimeout = e.HandleShakeRequestTimeout), e.HandleShakeResponseTimeout && (this.__nativeObj.options.HandleShakeResponseTimeout = e.HandleShakeResponseTimeout), e.CloseAckTimeout && (this.__nativeObj.options.CloseAckTimeout = e.CloseAckTimeout), e.PingPongTimeout && (this.__nativeObj.options.PingPongTimeout = e.PingPongTimeout)) : this.options = e
			}, e
		}()
	});
	var SheetSprite = function() {
		function e(e, t, i, r, n, o, a) {
			this.size = {
				width: 0,
				height: 0
			}, this.flipU = 0, this.flipV = 1, this.stretchX = 1, this.stretchY = 1, r && (this.flipU = r), n && (this.flipV = n), o && (this.stretchX = o), a && (this.stretchY = a), t && (this.size.width = t), i && (this.size.height = i), this.textureInfo = e, this.onInit(this.size.width, this.size.height), this.adjustWithTextureInfo(e)
		}
		return e.prototype.onInit = function(e, t) {
			this.createSprites(e, t), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
				var t = e;
				Object.defineProperty(this, t, {
					get: function() {
						return this.__nativeObj[t]
					},
					set: function(e) {
						this.__nativeObj[t] = e
					}
				})
			}, this), Object.defineProperty(this, "size", {
				get: function() {
					return this.__nativeObj.contentSize
				},
				set: function(e) {
					this.__nativeObj.contentSize = e, this.updateSize(this.textureInfo)
				}
			}), Object.defineProperty(this, "anchor", {
				get: function() {
					return this.__nativeObj.localAnchor
				},
				set: function(e) {
					this.__nativeObj.localAnchor = e
				}
			})
		}, e.prototype.updateSize = function(e) {
			if (1 == e.frameInfo.trimmed) {
				var t = e.frameInfo.spriteSourceSize.x,
					i = e.frameInfo.spriteSourceSize.y,
					r = e.frameInfo.spriteSourceSize.w,
					n = e.frameInfo.spriteSourceSize.h,
					o = e.frameInfo.sourceSize,
					a = this.__nativeObj.contentSize;
				t = a.width * t / o.w, i = a.height * i / o.h, r = a.width * r / o.w, n = a.height * n / o.h, this.contentSprite.position = {
					x: t,
					y: i
				}, this.contentSprite.contentSize = {
					width: r,
					height: n
				}
			} else this.contentSprite.contentSize = this.__nativeObj.contentSize
		}, e.prototype.adjustWithTextureInfo = function(e) {
			if (e) {
				this.textureInfo = e;
				var t = e.texture,
					i = e.frameInfo;
				this.updateSize(e), this.currTexturePath = e.texturePath;
				t = new BK.Texture(this.currTexturePath);
				this.contentSprite.setTexture(t), this.contentSprite.adjustTexturePosition(i.frame.x, i.frame.y, i.frame.w, i.frame.h, i.rotated)
			}
		}, e.prototype.setTexture = function(e) {
			this.__nativeObj.setTexture(e)
		}, e.prototype.dispose = function() {
			BK.Director.ticker.remove(this), this.__nativeObj.dispose()
		}, e.prototype.removeChild = function(e) {
			return this.__nativeObj.removeChild(e)
		}, e.prototype.removeChildById = function(e, t) {
			return this.__nativeObj.removeChildById(e, t)
		}, e.prototype.removeChildByName = function(e, t) {
			return this.__nativeObj.removeChildByName(e, t)
		}, e.prototype.removeFromParent = function() {
			return this.__nativeObj.removeFromParent()
		}, e.prototype.addChild = function(e, t) {
			return this.__nativeObj.addChild(e, t)
		}, e.prototype.hittest = function(e) {
			return this.__nativeObj.hittest(e)
		}, e.prototype.convertToWorldSpace = function(e) {
			return this.__nativeObj.convertToWorldSpace(e)
		}, e.prototype.convertToNodeSpace = function(e) {
			return this.__nativeObj.convertToNodeSpace(e)
		}, e.prototype.createSprites = function(e, t) {
			this.__nativeObj = new BK.SpriteNode(e, t, {}, this.flipU, this.flipV, this.stretchX, this.stretchY), this.contentSprite = new BK.SpriteNode(e, t, {}, this.flipU, this.flipV, this.stretchX, this.stretchY), this.__nativeObj.addChild(this.contentSprite)
		}, e
	}();
	BK.SheetSprite || (BK.SheetSprite = SheetSprite);
	var SpriteSheetCache = function() {
			function e() {
				this.sheets = {}, this.jsonConfigs = {}
			}
			return e.prototype.getFrameInfoByFilename = function(e) {
				for (var t in this.jsonConfigs)
					if (this.jsonConfigs.hasOwnProperty(t)) {
						var i = this.jsonConfigs[t],
							r = (this.sheets[t], i.frames),
							n = i.meta;
						this.fullWidth = n.size.w, this.fullHeight = n.size.h;
						for (var o = 0; o < r.length; o++) {
							var a = r[o];
							if (e == a.filename) {
								var s = {
										x: 0,
										y: 1,
										w: 0,
										h: 0
									},
									h = a.rotated,
									l = a.trimmed,
									u = a.spriteSourceSize,
									d = a.sourceSize;
								return h ? (s.x = a.frame.x, s.y = this.fullHeight - a.frame.y - a.frame.w, s.w = a.frame.w, s.h = a.frame.h) : (s.x = a.frame.x, s.y = this.fullHeight - a.frame.y - a.frame.h, s.w = a.frame.w, s.h = a.frame.h), u.y = d.h - u.y - u.h, {
									filename: e,
									frame: s,
									rotated: h,
									trimmed: l,
									spriteSourceSize: u,
									sourceSize: d
								}
							}
						}
					}
				return null
			}, e.prototype.getTexturePathByFilename = function(e) {
				for (var t in this.jsonConfigs)
					if (this.jsonConfigs.hasOwnProperty(t))
						for (var i = this.jsonConfigs[t].frames, r = 0; r < i.length; r++)
							if (i[r].filename == e) return t;
				return null
			}, e.prototype.loadSheet = function(e, t, i, r, n, o, a) {
				var s = BK.FileUtil.readFile(e).readAsString();
				if (s) {
					var h = JSON.parse(s);
					void 0 === t && (t = e.replace(/.json$/, ".png")), this.jsonConfigs[t] = h, void 0 === i && (i = 4), i = 4, void 0 === r && (r = 1), void 0 === n && (n = 1), void 0 === o && (o = 1), void 0 === a && (a = 1);
					var l = new BK.Texture(t, i, r, n, o, a);
					this.sheets[t] = l
				} else BK.Script.log(0, 0, "loadSheet Failed.Please check path")
			}, e.prototype.removeSheet = function(e, t) {
				if (this.jsonConfigs[t])
					for (var i in this.jsonConfigs)
						if (this.jsonConfigs.hasOwnProperty(i)) {
							r = this.jsonConfigs[i];
							i == t && (delete this.jsonConfigs[t], BK.Script.log(0, 0, "Delete jsonConfigs key:" + i + " val:" + r))
						}
				if (this.sheets[t])
					for (var i in this.sheets)
						if (this.sheets.hasOwnProperty(i)) {
							var r = this.sheets[i];
							i == t && (delete this.sheets[t], BK.Script.log(0, 0, "Delete sheets key:" + i + " val:" + r))
						}
			}, e.prototype.getTextureByFilename = function(e) {
				var t = this.getFrameInfoByFilename(e),
					i = this.getTexturePathByFilename(e);
				return t && i ? new BK.Texture(i) : (BK.Script.log(0, 0, "getTexture Failed.Please check path"), null)
			}, e.prototype.getSprite = function(e, t, i) {
				var r = this.getTextureFrameInfoByFileName(e);
				if (r) {
					var n = r.frameInfo,
						o = r.texturePath,
						a = new BK.Texture(o);
					if (t || (t = n.frame.w), i || (i = n.frame.h), BK.Script.log(0, 0, "getSprite  texture:" + a + " width:" + t + " height:" + i), n.trimmed) return s = new BK.SheetSprite(r, t, i);
					var s = new BK.Sprite(t, i, a, 0, 1, 1, 1);
					return s.adjustTexturePosition(n.frame.x, n.frame.y, n.frame.w, n.frame.h, n.rotated), s
				}
				return null
			}, e.prototype.createSheetSprite = function(e, t, i) {
				var r = this.getTextureFrameInfoByFileName(e);
				if (r) {
					var n = r.frameInfo,
						o = r.texturePath,
						a = new BK.Texture(o);
					return t || (t = n.frame.w), i || (i = n.frame.h), BK.Script.log(0, 0, "SheetSprite  texture:" + a + " width:" + t + " height:" + i), new BK.SheetSprite(r, t, i)
				}
				return null
			}, e.prototype.getTextureFrameInfoByFileName = function(e) {
				var t = this.getFrameInfoByFilename(e),
					i = this.getTexturePathByFilename(e);
				return t && i ? {
					frameInfo: t,
					texturePath: i
				} : null
			}, e
		}(),
		Sprite9 = function() {
			function e(e, t, i, r, n, o) {
				void 0 === n && (n = {
					x: 0,
					y: 0
				}), this._size = {
					width: 0,
					height: 0
				}, this.__nativeObj = new BK.Node, this.onInit(), this._grid = r, this._size = {
					width: t,
					height: t
				}, this._leftTop = new BK.Sprite(r.left, r.top, i, 0, 1, 1, 1), this._leftTop.position = {
					x: 0,
					y: t - r.top
				}, this._leftTop.zOrder = 99999, this._leftTop.name = "_leftTop", this.__nativeObj.addChild(this._leftTop), this._centerTop = new BK.Sprite(e - r.left - r.right, r.top, i, 0, 1, 1, 1), this._centerTop.position = {
					x: r.left,
					y: t - r.top
				}, this._centerTop.zOrder = 99999, this._centerTop.name = "_centerTop", this.__nativeObj.addChild(this._centerTop), this._rightTop = new BK.Sprite(r.right, r.top, i, 0, 1, 1, 1), this._rightTop.position = {
					x: e - r.right,
					y: t - r.top
				}, this._rightTop.zOrder = 99999, this._rightTop.name = "_rightTop", this.__nativeObj.addChild(this._rightTop), this._leftCenter = new BK.Sprite(r.left, t - r.top - r.bottom, i, 0, 1, 1, 1), this._leftCenter.position = {
					x: 0,
					y: r.bottom
				}, this._leftCenter.name = "_leftCenter", this.__nativeObj.addChild(this._leftCenter), this._centerCenter = new BK.Sprite(e - r.left - r.right, t - r.top - r.bottom, i, 0, 1, 1, 1), this._centerCenter.position = {
					x: r.left,
					y: r.bottom
				}, this._centerCenter.name = "_centerCenter", this.__nativeObj.addChild(this._centerCenter), this._rightCenter = new BK.Sprite(r.right, t - r.bottom - r.top, i, 0, 1, 1, 1), this._rightCenter.position = {
					x: e - r.right,
					y: r.bottom
				}, this._rightCenter.name = "_rightCenter", this.__nativeObj.addChild(this._rightCenter), this._leftBottom = new BK.Sprite(r.left, r.bottom, i, 0, 1, 1, 1), this._leftBottom.position = {
					x: 0,
					y: 0
				}, this._leftBottom.name = "_leftBottom", this.__nativeObj.addChild(this._leftBottom), this._centerBottom = new BK.Sprite(e - r.left - r.right, r.bottom, i, 0, 1, 1, 1), this._centerBottom.position = {
					x: r.left,
					y: 0
				}, this._centerBottom.name = "_centerBottom", this.__nativeObj.addChild(this._centerBottom), this._rightBottom = new BK.Sprite(r.right, r.bottom, i, 0, 1, 1, 1), this._rightBottom.position = {
					x: e - r.right,
					y: 0
				}, this._rightBottom.name = "_rightBottom", this.__nativeObj.addChild(this._rightBottom), 1 == o ? (this._leftTop.adjustTexturePosition(n.x + (t - r.top), n.y + (e - r.left), r.left, r.top, o), this._centerTop.adjustTexturePosition(n.x + (t - r.top), n.y + r.right, e - r.left - r.right, r.top, o), this._rightTop.adjustTexturePosition(n.x + (t - r.top), n.y, r.right, r.top, o), this._leftCenter.adjustTexturePosition(n.x + r.bottom, n.y + (e - r.left), r.left, t - r.top - r.bottom, o), this._centerCenter.adjustTexturePosition(n.x + r.bottom, n.y + r.right, e - r.left - r.right, t - r.top - r.bottom, o), this._rightCenter.adjustTexturePosition(n.x + r.bottom, n.y, r.right, t - r.bottom - r.top, o), this._leftBottom.adjustTexturePosition(n.x, n.y + (e - r.left), r.left, r.bottom, o), this._centerBottom.adjustTexturePosition(n.x, n.y + r.right, e - r.left - r.right, r.bottom, o), this._rightBottom.adjustTexturePosition(n.x, n.y, r.right, r.bottom, o)) : (this._leftTop.adjustTexturePosition(0 + n.x, t - r.top + n.y, r.left, r.top), this._centerTop.adjustTexturePosition(r.left + n.x, t - r.top + n.y, e - r.left - r.right, r.top), this._rightTop.adjustTexturePosition(e - r.right + n.x, t - r.top + n.y, r.right, r.top), this._leftCenter.adjustTexturePosition(0 + n.x, r.bottom + n.y, r.left, t - r.top - r.bottom), this._centerCenter.adjustTexturePosition(r.left + n.x, r.bottom + n.y, e - r.left - r.right, t - r.top - r.bottom), this._rightCenter.adjustTexturePosition(e - r.right + n.x, r.bottom + n.y, r.right, t - r.bottom - r.top), this._leftBottom.adjustTexturePosition(0 + n.x, 0 + n.y, r.left, r.bottom), this._centerBottom.adjustTexturePosition(r.left + n.x, 0 + n.y, e - r.left - r.right, r.bottom), this._rightBottom.adjustTexturePosition(e - r.right + n.x, 0 + n.y, r.right, r.bottom))
			}
			return e.prototype.onInit = function() {
				Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
					var t = e;
					"size" != t && Object.defineProperty(this, t, {
						get: function() {
							return this.__nativeObj[t]
						},
						set: function(e) {
							this.__nativeObj[t] = e
						}
					})
				}, this)
			}, Object.defineProperty(e.prototype, "alpha", {
				get: function() {
					return this._rightBottom.vertexColor.a
				},
				set: function(e) {
					this._leftTop.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._centerTop.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._rightTop.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._leftCenter.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._centerCenter.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._rightCenter.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._leftBottom.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._centerBottom.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}, this._rightBottom.vertexColor = {
						r: 1,
						g: 1,
						b: 1,
						a: e
					}
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "size", {
				get: function() {
					return this._size
				},
				set: function(e) {
					this._size = e;
					var t = e.width - this._grid.left - this._grid.right,
						i = e.height - this._grid.top - this._grid.bottom;
					this._leftTop.position = {
						x: 0,
						y: e.height - this._grid.top
					}, this._leftCenter.size = {
						width: this._grid.left,
						height: i
					}, this._leftCenter.position = {
						x: 0,
						y: this._grid.bottom
					}, this._rightCenter.size = {
						width: this._grid.right,
						height: i
					}, this._rightCenter.position = {
						x: e.width - this._grid.right,
						y: this._grid.bottom
					}, this._centerCenter.size = {
						width: t,
						height: i
					}, this._centerTop.size = {
						width: t,
						height: this._grid.top
					}, this._centerTop.position = {
						x: this._grid.left,
						y: e.height - this._grid.top
					}, this._centerBottom.size = {
						width: t,
						height: this._grid.bottom
					}, this._centerBottom.position = {
						x: this._grid.left,
						y: 0
					}, this._rightCenter.size = {
						width: this._grid.right,
						height: i
					}, this._rightCenter.position = {
						x: e.width - this._grid.right,
						y: this._grid.bottom
					}, this._rightBottom.position = {
						x: e.width - this._grid.right,
						y: 0
					}, this._rightTop.position = {
						x: e.width - this._grid.right,
						y: e.height - this._grid.top
					}
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.pos = function(e, t) {
				this.__nativeObj.position = {
					x: e,
					y: t
				}
			}, e.prototype.dispose = function() {
				this.__nativeObj.dispose()
			}, e.prototype.attachBody = function(e) {
				this.__nativeObj.attachComponent(e)
			}, e.prototype.addChild = function(e) {
				this.__nativeObj.addChild(e)
			}, e.prototype.removeChildById = function(e, t) {
				return this.__nativeObj.removeChildById(e, t)
			}, e.prototype.removeChildByName = function(e, t) {
				return this.__nativeObj.removeChildByName(e, t)
			}, e.prototype.removeFromParent = function() {
				return this.__nativeObj.removeFromParent()
			}, e.prototype.hittest = function(e) {
				return this.__nativeObj.hittest(e)
			}, e
		}();
	BK.SpriteSheetCache || (BK.SpriteSheetCache = new SpriteSheetCache), BK.Sprite9 || (BK.Sprite9 = Sprite9),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.AnimatedSprite = t())
		}(BK, function() {
			return function() {
				function e(e) {
					this.paused = !1, this.delayUnits = 1 / 30, this.tmpPlayingIdx = 0, this.previousTs = -1, this.playedCount = 0, this.size = {
						width: 0,
						height: 0
					}, this.readyTextureInfo(e), this.onInit(this.size.width, this.size.height), this.displayFrame(0), this.paused = !0, BK.Director.ticker.add(function(e, t, i) {
						i.update(e, t)
					}, this)
				}
				return e.prototype.onInit = function(e, t) {
					this.createSprites(e, t), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
						var t = e;
						Object.defineProperty(this, t, {
							get: function() {
								return this.__nativeObj[t]
							},
							set: function(e) {
								this.__nativeObj[t] = e
							}
						})
					}, this), Object.defineProperty(this, "size", {
						get: function() {
							return this.__nativeObj.contentSize
						},
						set: function(e) {
							this.__nativeObj.contentSize = e, this.displayFrame(this.currDisplayIdx)
						}
					}), Object.defineProperty(this, "anchor", {
						get: function() {
							return this.__nativeObj.localAnchor
						},
						set: function(e) {
							this.__nativeObj.localAnchor = e, this.displayFrame(this.currDisplayIdx)
						}
					})
				}, e.prototype.setTexture = function(e) {
					this.__nativeObj.setTexture(e)
				}, e.prototype.dispose = function() {
					BK.Director.ticker.remove(this), this.__nativeObj.dispose()
				}, e.prototype.removeChild = function(e) {
					return this.__nativeObj.removeChild(e)
				}, e.prototype.removeChildById = function(e, t) {
					return this.__nativeObj.removeChildById(e, t)
				}, e.prototype.removeChildByName = function(e, t) {
					return this.__nativeObj.removeChildByName(e, t)
				}, e.prototype.removeFromParent = function() {
					return this.__nativeObj.removeFromParent()
				}, e.prototype.addChild = function(e, t) {
					return this.__nativeObj.addChild(e, t)
				}, e.prototype.hittest = function(e) {
					return this.__nativeObj.hittest(e)
				}, e.prototype.convertToWorldSpace = function(e) {
					return this.__nativeObj.convertToWorldSpace(e)
				}, e.prototype.convertToNodeSpace = function(e) {
					return this.__nativeObj.convertToNodeSpace(e)
				}, e.prototype.createSprites = function(e, t) {
					this.__nativeObj = new BK.SpriteNode(e, t, {}, 0, 1, 1, 1), this.contentSprite = new BK.SpriteNode(e, t, {}, 0, 1, 1, 1), this.__nativeObj.addChild(this.contentSprite)
				}, e.prototype.readyTextureInfo = function(e) {
					var t = this;
					this.textureInfoArr = [], e.forEach(function(e) {
						e.texturePath && (e.texture = new BK.Texture(e.texturePath), t.textureInfoArr.push(e), t.size = {
							width: e.frameInfo.sourceSize.w,
							height: e.frameInfo.sourceSize.h
						})
					})
				}, e.prototype.displayFrame = function(e) {
					if (this.textureInfoArr.length > 0) {
						var t = this.textureInfoArr[e];
						if (t) {
							this.currDisplayIdx = e;
							var i = t.texture,
								r = t.frameInfo;
							if (1 == t.frameInfo.trimmed) {
								var n = t.frameInfo.spriteSourceSize.x,
									o = t.frameInfo.spriteSourceSize.y,
									a = t.frameInfo.spriteSourceSize.w,
									s = t.frameInfo.spriteSourceSize.h,
									h = t.frameInfo.sourceSize,
									l = this.__nativeObj.contentSize;
								n = l.width * n / h.w, o = l.height * o / h.h, a = l.width * a / h.w, s = l.height * s / h.h, this.contentSprite.position = {
									x: n,
									y: o
								}, this.contentSprite.contentSize = {
									width: a,
									height: s
								}
							} else this.contentSprite.contentSize = this.__nativeObj.contentSize;
							this.currTexturePath && this.currTexturePath == t.texturePath || (BK.Script.log(1, -1, "this.currTexture != tex"), this.currTexturePath = t.texturePath, this.contentSprite.setTexture(i)), this.contentSprite.adjustTexturePosition(r.frame.x, r.frame.y, r.frame.w, r.frame.h, r.rotated)
						} else BK.Script.log(1, -1, "displayFrame failed! textureInfo is null. index is " + e)
					} else BK.Script.log(1, -1, "displayFrame failed! textureInfoArr.length is 0")
				}, e.prototype.render = function() {
					this.tmpPlayingIdx > this.textureInfoArr.length - 1 && (this.tmpPlayingIdx = 0), this.displayFrame(this.tmpPlayingIdx), this.tmpPlayingIdx++, this.currDisplaySum++, this.updateCallback()
				}, e.prototype.update = function(e, t) {
					0 == this.paused && (this.previousTs < 0 ? (this.previousTs = e, this.render()) : e - this.previousTs > 1e3 * this.delayUnits && (this.previousTs = e, this.render()))
				}, e.prototype.play = function(e, t) {
					void 0 === e && (e = 0), void 0 === t && (t = -1), e > this.textureInfoArr.length - 1 ? this.tmpPlayingIdx = 0 : this.tmpPlayingIdx = e, this.paused = !1, this.repeatCount = t, this.currDisplaySum = 0, this.playedCount = 0
				}, e.prototype.stop = function(e) {
					void 0 === e && (e = -1), this.paused = !0, e > -1 && this.displayFrame(e)
				}, e.prototype.updateCallback = function() {
					var e = this.textureInfoArr.length;
					this.currDisplaySum % e == 0 && (this.playedCount = parseInt(String(this.currDisplaySum / e)), this.completeCallback && this.completeCallback(this, this.playedCount), this.repeatCount > 0 && this.repeatCount <= this.playedCount && (this.endCallback && this.endCallback(this, this.playedCount), this.stop()))
				}, e.prototype.setCompleteCallback = function(e) {
					this.completeCallback = e
				}, e.prototype.setEndCallback = function(e) {
					this.endCallback = e
				}, e
			}()
		}), Canvas.prototype.setImagePath = function(e) {
			if (e) {
				this.imagePath = e;
				var t = new BK.Texture(e);
				this.__nativeObj.setTexture(t)
			}
		}, Canvas.prototype.getImagePath = function() {
			return this.imagePath
		}, Canvas.prototype.setTexture = function(e) {
			this.__nativeObj.setTexture(e)
		}, Canvas.prototype.setFlipXY = function(e, t) {
			this.__nativeObj.setUVFlip(e, t)
		}, Canvas.prototype.setUVFlip = function(e, t) {
			this.__nativeObj.setUVFlip(e, t)
		}, Canvas.prototype.setUVWrap = function(e, t) {
			this.__nativeObj.setUVWrap(e, t)
		}, Canvas.prototype.setXYStretch = function(e, t) {
			this.__nativeObj.setXYStretch(e, t)
		}, Canvas.prototype.adjustTexturePosition = function(e, t, i, r, n) {
			this.__nativeObj.adjustTexturePosition(e, t, i, r, n)
		}, Canvas.prototype.addChild = function(e) {
			return this.__nativeObj.addChild(e)
		}, Canvas.prototype.dispose = function() {
			return this.__nativeObj.dispose()
		}, Canvas.prototype.removeChild = function(e) {
			return this.__nativeObj.removeChild(e)
		}, Canvas.prototype.removeChildById = function(e) {
			return this.__nativeObj.removeChildById(e)
		}, Canvas.prototype.removeChildByName = function(e) {
			return this.__nativeObj.removeChildByName(e)
		}, Canvas.prototype.removeChildByTag = function(e) {
			return this.__nativeObj.removeChildByTag(e)
		}, Canvas.prototype.queryChildAtIndex = function(e) {
			return this.__nativeObj.queryChildAtIndex(e)
		}, Canvas.prototype.queryChildById = function(e) {
			return this.__nativeObj.queryChildById(e)
		}, Canvas.prototype.queryChildByName = function(e) {
			return this.__nativeObj.queryChildByName(e)
		}, Canvas.prototype.queryChildByTag = function(e) {
			return this.__nativeObj.queryChildByTag(e)
		}, Canvas.prototype.getChildCount = function() {
			return this.__nativeObj.getChildCount()
		}, Canvas.prototype.removeFromParent = function() {
			return this.__nativeObj.removeFromParent()
		}, Canvas.prototype.attachComponent = function(e) {
			return this.__nativeObj.attachComponent(e)
		}, Canvas.prototype.detachComponent = function(e) {
			return this.__nativeObj.detachComponent(e)
		}, Canvas.prototype.queryComponent = function(e) {
			return this.__nativeObj.queryComponent(e)
		}, Canvas.prototype.queryComponentList = function(e) {
			return this.__nativeObj.queryComponentList(e)
		}, Canvas.prototype.hittest = function(e) {
			return this.__nativeObj.hittest(e)
		}, Canvas.prototype.isEqual = function(e) {
			return this.__nativeObj.isEqual(e)
		}, Canvas.prototype.convertToWorldSpace = function(e) {
			return this.__nativeObj.convertToWorldSpace(e)
		}, Canvas.prototype.convertToNodeSpace = function(e) {
			return this.__nativeObj.convertToNodeSpace(e)
		}, Canvas.prototype.setAtlas = function(e, t) {
			if (this.__nativeObj) {
				BK.CanvasSheetCache.loadSheet(e);
				var i = BK.CanvasSheetCache.getTexturePathByFilename(t),
					r = new BK.Texture(i);
				this.__nativeObj.setTexture(r);
				var n = BK.CanvasSheetCache.getFrameInfoByFilename(t);
				this.__nativeObj.adjustTexturePosition(n.frame.x, n.frame.y, n.frame.w, n.frame.h, n.rotated)
			}
			return 0
		}, Canvas.prototype.useH5Mode = function() {
			return this.__nativeObj ? (this._useH5Mode = 1, 1 == arguments.length ? (this._useH5Mode = arguments[0], this.__nativeObj.useH5Mode(arguments[0])) : this.__nativeObj.useH5Mode()) : 0
		}, Canvas.prototype.drawCircle = function() {
			return this.__nativeObj ? this.__nativeObj.drawCircle(arguments[0], arguments[1], arguments[2]) : 0
		}, Canvas.prototype.drawEllipse = function() {
			return this.__nativeObj ? this.__nativeObj.drawEllipse(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.drawImage = function() {
			if (this.__nativeObj) {
				var e = arguments.length;
				if (9 == e) this.__nativeObj.drawImage(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8]);
				else if (5 == e) this.__nativeObj.drawImage(arguments[0], 0, 0, 0, 0, arguments[1], arguments[2], arguments[3], arguments[4]);
				else {
					if (3 != e) return;
					this.__nativeObj.drawImage(arguments[0], 0, 0, 0, 0, arguments[1], arguments[2], 0, 0)
				}
				this._innerSetTransform()
			}
			return 0
		}, Canvas.prototype.fill = function() {
			return this.__nativeObj ? this.__nativeObj.fill() : 0
		}, Canvas.prototype.stroke = function() {
			return this.__nativeObj ? this.__nativeObj.stroke() : 0
		}, Canvas.prototype.rect = function() {
			return this.__nativeObj ? this.__nativeObj.rect(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.fillRect = function() {
			return this.__nativeObj ? this.__nativeObj.fillRect(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.strokeRect = function() {
			return this.__nativeObj ? this.__nativeObj.strokeRect(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.clearRect = function() {
			return this.__nativeObj ? this.__nativeObj.clearRect(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.beginPath = function() {
			return this.__nativeObj ? this.__nativeObj.beginPath() : 0
		}, Canvas.prototype.closePath = function() {
			return this.__nativeObj ? this.__nativeObj.closePath() : 0
		}, Canvas.prototype.moveTo = function() {
			return this.__nativeObj ? this.__nativeObj.moveTo(arguments[0], arguments[1]) : 0
		}, Canvas.prototype.lineTo = function() {
			return this.__nativeObj ? this.__nativeObj.lineTo(arguments[0], arguments[1]) : 0
		}, Canvas.prototype.arcTo = function() {
			return this.__nativeObj ? this.__nativeObj.arcTo(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]) : 0
		}, Canvas.prototype.arc = function() {
			if (this.__nativeObj) {
				var e = arguments.length;
				if (5 == e) return this.__nativeObj.arc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
				if (6 == e) return this.__nativeObj.arc(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
			}
			return 0
		}, Canvas.prototype.quadraticCurveTo = function() {
			return this.__nativeObj ? this.__nativeObj.quadraticCurveTo(arguments[0], arguments[1], arguments[2], arguments[3]) : 0
		}, Canvas.prototype.bezierCurveTo = function() {
			return this.__nativeObj ? this.__nativeObj.bezierCurveTo(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : 0
		}, Canvas.prototype.save = function() {
			return this.__nativeObj ? this.__nativeObj.save() : 0
		}, Canvas.prototype.restore = function() {
			return this.__nativeObj ? this.__nativeObj.restore() : 0
		}, Canvas.prototype.fillText = function() {
			if (3 == arguments.length) {
				var e = this.measureText(arguments[0], 2048, 1024),
					t = arguments[1],
					i = arguments[2];
				switch (1 == this._useH5Mode ? 2 - this._textBaseLine : this._textBaseLine) {
					case 1:
						i -= .5 * e.height;
						break;
					case 2:
						i -= 1 * e.height
				}
				switch (this._textAlign) {
					case 1:
						t -= .5 * e.width;
						break;
					case 2:
						t -= 1 * e.width
				}
				this.__nativeObj.fillText(arguments[0], t, i, Math.min(2048, e.width), Math.min(1024, e.height)), this._innerSetTransform()
			}
			return 0
		}, Canvas.prototype.clip = function() {
			return this.__nativeObj ? this.__nativeObj.clip() : 0
		}, Canvas.prototype.isPointInPath = function() {
			if (this.__nativeObj) return this.__nativeObj.isPointInPath(arguments[0], arguments[1])
		}, Canvas.prototype.createImageData = function() {
			var e = arguments.length;
			if (this.__nativeObj && 2 == e) {
				var t = new BK.Buffer(arguments[0] * arguments[1] * 4);
				return t.__inner_image_width = arguments[0], t.__inner_image_height = arguments[1], t
			}
		}, Canvas.prototype.getImageData = function() {
			var e = arguments.length;
			if (this.__nativeObj && 4 == e) {
				var t = this.__nativeObj.getImageData(arguments[0], arguments[1], arguments[2], arguments[3]);
				return t.__inner_image_width = arguments[2], t.__inner_image_height = arguments[3], t
			}
		}, Canvas.prototype.putImageData = function() {
			var e = arguments.length;
			if (this.__nativeObj && 3 == e) {
				var t = arguments[0],
					i = arguments[1],
					r = arguments[2],
					n = t.__inner_image_width,
					o = t.__inner_image_height;
				return this.__nativeObj.putImageData(arguments[0], i, r, n, o)
			}
		}, Canvas.prototype.scale = function() {
			if (this.__nativeObj) return BK.Script.log(0, 0, "bk.canvas. scale  :" + arguments[0] + " , " + arguments[1]), this.__nativeObj.scales(arguments[0], arguments[1])
		}, Canvas.prototype.scales = function() {
			if (this.__nativeObj) return BK.Script.log(0, 0, "bk.canvas. scales  :" + arguments[0] + " , " + arguments[1]), this.__nativeObj.scales(arguments[0], arguments[1])
		}, Canvas.prototype.rotate = function() {
			if (this.__nativeObj) return BK.Script.log(0, 0, "bk.canvas. rotate  :" + arguments[0]), this.__nativeObj.rotate(arguments[0])
		}, Canvas.prototype.translate = function() {
			if (this.__nativeObj) {
				var e = GameStatusInfo.QQVer.split(".");
				7 == Number(e[0]) && Number(7 == e[1] && Number(e[2]) <= 5) ? (this._tx = arguments[0], this._ty = arguments[1], this._innerSetTransform()) : this.__nativeObj.translate(arguments[0], arguments[1])
			}
		}, Canvas.prototype.transform = function() {
			if (this.__nativeObj) return this.__nativeObj.transforms(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
		}, Canvas.prototype.transforms = function() {
			var e = GameStatusInfo.QQVer.split(".");
			return Number(e[0]) < 7 || 7 == Number(e[0]) && Number(e[1]) < 7 ? this.__nativeObj.transforms(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : this.setTransform(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
		}, Canvas.prototype.setTransform = function() {
			if (this.__nativeObj) return this._a = arguments[0], this._b = arguments[1], this._c = arguments[2], this._d = arguments[3], this._tx = arguments[4], this._ty = arguments[5], this.__nativeObj.setTransform(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
		}, Canvas.prototype._innerSetTransform = function() {
			if (this.__nativeObj) {
				var e = GameStatusInfo.QQVer.split(".");
				if (7 == Number(e[0]) && Number(7 == e[1] && Number(e[2]) <= 5)) return this.__nativeObj.setTransform(this._a, this._b, this._c, this._d, this._tx, this._ty)
			}
		}, Canvas.prototype.shadowColor = function() {
			if (this._shadowColor = arguments[0], this.__nativeObj) return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor)
		}, Canvas.prototype.shadowRadius = function() {
			if (this._shadowRadius = arguments[0], this.__nativeObj) return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor)
		}, Canvas.prototype.shadowOffsetX = function() {
			if (this._shadowOffset.x = arguments[0], this.__nativeObj) return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor)
		}, Canvas.prototype.shadowOffsetY = function() {
			if (this._shadowOffset.y = arguments[0], this.__nativeObj) return this.__nativeObj.setTextShadow(this._shadowOffset.x, this._shadowOffset.y, this._shadowRadius, this._shadowColor)
		}, Canvas.prototype.clear = function() {
			if (this.__nativeObj) return this.__nativeObj.clear()
		}, Canvas.prototype.getTexture = function() {
			return this.__nativeObj ? this.__nativeObj.getTexture() : null
		}, Canvas.prototype.drawText = function() {
			return this.__nativeObj && (this.__nativeObj.drawText(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), this._innerSetTransform()), null
		}, Canvas.prototype.setTextSize = function() {
			return this.__nativeObj ? this.__nativeObj.setTextSize(arguments[0]) : null
		}, Canvas.prototype.setTextAlign = function() {
			if (this.__nativeObj) {
				switch (arguments[0]) {
					case 0:
					case 1:
					case 2:
						this._textAlign = arguments[0];
						break;
					case "left":
						this._textAlign = 0;
						break;
					case "center":
						this._textAlign = 1;
						break;
					case "right":
						this._textAlign = 2
				}
				return this.__nativeObj.setTextAlign(this._textAlign)
			}
			return null
		}, Canvas.prototype.setTextBold = function() {
			return this.__nativeObj ? this.__nativeObj.setTextBold(arguments[0]) : null
		}, Canvas.prototype.setTextItalic = function() {
			return this.__nativeObj ? this.__nativeObj.setTextItalic(arguments[0]) : null
		}, Canvas.prototype.measureText = function() {
			return this.__nativeObj ? this.__nativeObj.measureText(arguments[0], arguments[1], arguments[2]) : null
		}, Canvas.prototype.updateCanvasTexture = function() {
			return this.__nativeObj ? this.__nativeObj.updateCanvasTexture() : null
		}, Canvas.prototype.saveTo = function() {
			var e = arguments.length;
			return this.__nativeObj && 1 == e && this.__nativeObj.saveTo(arguments[0]), null
		}, BK.Canvas = Canvas, BK.Script.log(0, 0, "Load Canvas.js succeed."), BK.Sprite.__proto__.setImagePath = function(e) {
			if (e) {
				this.imagePath = e;
				var t = new BK.Texture(e);
				this.setTexture(t)
			}
		}, BK.Sprite.__proto__.getImagePath = function() {
			return this.imagePath
		}, BK.Sprite.__proto__.setAtlas = function(e, t) {
			BK.SpriteSheetCache.loadSheet(e);
			var i = BK.SpriteSheetCache.getTexturePathByFilename(t),
				r = new BK.Texture(i);
			this.setTexture(r);
			var n = BK.SpriteSheetCache.getFrameInfoByFilename(t);
			return this.adjustTexturePosition(n.frame.x, n.frame.y, n.frame.w, n.frame.h, n.rotated), 0
		}, BK.Script.log(0, 0, "Load Sprite.js succeed.");
	var gl;
	BK.ScreenShot = function() {
		function e() {
			if (void 0 == o) {
				"android" == GameStatusInfo.platform && (o = !0);
				var e = BK.Director.queryDeviceInfo(),
					t = e.version.split(".");
				"ios" == e.platform && Number(t[0]) >= 10 || "android" == e.platform ? o = !0 : (BK.Script.log(1, 0, "Current Device dont supoort TypedArray.[info = " + JSON.stringify(e) + "]"), o = !1)
			}
			return o
		}

		function t(t) {
			if (Object.prototype.hasOwnProperty.call(t, "__rawBKData")) return t.__rawBKData;
			if (Object.prototype.hasOwnProperty.call(t, "__nativeObj")) return t.__nativeObj;
			if (0 == e()) {
				if (t instanceof Uint16Array == 1) {
					for (var i = new BK.Buffer(t.byteLength, !1), r = 0; r < t.length; r++) i.writeUint16Buffer(t[r]);
					return i
				}
				if (t instanceof Float32Array == 1) {
					for (var i = new BK.Buffer(t.byteLength, !1), r = 0; r < t.length; r++) i.writeFloatBuffer(t[r]);
					return i
				}
			}
			return t
		}

		function i() {
			var e = gl.glCreateShader(gl.VERTEX_SHADER);
			0 != e && (gl.glShaderSource(e, "attribute vec2 pos; attribute vec2 inUVs; varying lowp vec2 outUVs; void main() { gl_Position = vec4(pos, 0, 1); outUVs = inUVs; }"), gl.glCompileShader(e));
			var t = gl.glCreateShader(gl.FRAGMENT_SHADER);
			0 != t && (gl.glShaderSource(t, "varying lowp vec2 outUVs; uniform sampler2D uSampler; void main() { gl_FragColor = texture2D(uSampler, outUVs); }"), gl.glCompileShader(t));
			var i = gl.glCreateProgram();
			return gl.glAttachShader(i, e), gl.glAttachShader(i, t), gl.glLinkProgram(i), gl.glDeleteShader(e), gl.glDeleteShader(t), i
		}

		function r(e, t) {
			gl.glActiveTexture(gl.TEXTURE1);
			var i = gl.glCreateTexture(),
				r = gl.glGetParameterInt(gl.TEXTURE_BINDING_2D, 1);
			gl.glBindTexture(gl.TEXTURE_2D, i), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.glTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, e, t, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
			var n = gl.glCreateFramebuffer();
			gl.glBindFramebuffer(gl.FRAMEBUFFER, n), gl.glFramebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, i, 0);
			var o = gl.glCheckFramebufferStatus(gl.FRAMEBUFFER);
			return o != gl.FRAMEBUFFER_COMPLETE && BK.Script.log(1, -1, "_createFramebuffer!failed, status = " + o), gl.glActiveTexture(gl.TEXTURE1), gl.glBindTexture(gl.TEXTURE_2D, r), {
				tex: i,
				fbo: n
			}
		}

		function n(e) {
			var n = i();
			gl.glUseProgram(n);
			var o = gl.glGetAttribLocation(n, "pos"),
				a = gl.glGetAttribLocation(n, "inUVs"),
				s = gl.glGetUniformLocation(n, "uSampler");
			gl.glActiveTexture(gl.TEXTURE0);
			var h = gl.glCreateTexture(),
				l = gl.glGetParameterInt(gl.TEXTURE_BINDING_2D, 1);
			gl.glBindTexture(gl.TEXTURE_2D, h), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.glTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, e), gl.glUniform1i(s, 0);
			var u = gl.glGetParameterInt(gl.ARRAY_BUFFER_BINDING, 1),
				d = gl.glGetParameterInt(gl.ELEMENT_ARRAY_BUFFER_BINDING, 1),
				c = new Float32Array([-1, -1, 0, 1, 1, -1, 1, 1, 1, 1, 1, 0, -1, 1, 0, 0]),
				f = gl.glCreateBuffer();
			gl.glBindBuffer(gl.ARRAY_BUFFER, f), gl.glEnableVertexAttribArray(o), gl.glVertexAttribPointer(o, 2, gl.FLOAT, !1, 16, 0), gl.glVertexAttribPointer(a, 2, gl.FLOAT, !1, 16, 8), gl.glBufferData(gl.ARRAY_BUFFER, t(c), gl.STATIC_DRAW);
			var _ = new Uint16Array([0, 1, 2, 0, 2, 3]),
				g = gl.glCreateBuffer();
			gl.glBindBuffer(gl.ELEMENT_ARRAY_BUFFER, g), gl.glBufferData(gl.ELEMENT_ARRAY_BUFFER, t(_), gl.STATIC_DRAW);
			var m = new BK.Buffer(e.width * e.height * 4),
				p = gl.glGetParameterInt(gl.FRAMEBUFFER_BINDING, 1),
				S = r(e.width, e.height);
			gl.glClearColor(1, 1, 1, 1), gl.glClear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT), gl.glDrawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0), gl.glReadPixels(0, 0, e.width, e.height, gl.RGBA, gl.UNSIGNED_BYTE, m), gl.glBindFramebuffer(gl.FRAMEBUFFER, p);
			for (var v = 0, b = 1; b <= 10; b++) {
				gl.glUseProgram(b);
				var B = gl.glGetAttribLocation(b, "Position"),
					x = gl.glGetAttribLocation(b, "SourceColor"),
					C = gl.glGetAttribLocation(b, "TexCoordIn");
				if (-1 != B && -1 != x && -1 != C) {
					v = 1;
					break
				}
			}
			return gl.glBindBuffer(gl.ARRAY_BUFFER, u), 1 == v ? (gl.glEnableVertexAttribArray(B), gl.glEnableVertexAttribArray(x), gl.glEnableVertexAttribArray(C), gl.glVertexAttribPointer(B, 3, gl.FLOAT, !1, 36, 0), gl.glVertexAttribPointer(x, 4, gl.FLOAT, !1, 36, 12), gl.glVertexAttribPointer(C, 2, gl.FLOAT, !1, 36, 28)) : (gl.glEnableVertexAttribArray(0), gl.glEnableVertexAttribArray(1), gl.glEnableVertexAttribArray(2), gl.glVertexAttribPointer(0, 3, gl.FLOAT, !1, 36, 0), gl.glVertexAttribPointer(1, 4, gl.FLOAT, !1, 36, 12), gl.glVertexAttribPointer(2, 2, gl.FLOAT, !1, 36, 28)), gl.glBindBuffer(gl.ELEMENT_ARRAY_BUFFER, d), gl.glActiveTexture(gl.TEXTURE0), gl.glBindTexture(gl.TEXTURE_2D, l), gl.glDeleteProgram(n), gl.glDeleteTexture(h), gl.glDeleteTexture(S.tex), gl.glDeleteFramebuffer(S.fbo), m
		}
		if (this.origin = {
				x: 0,
				y: 0
			}, this.size = {
				width: 0,
				height: 0
			}, GameStatusInfo) {
			BK.Misc.compQQVersion || (BK.Misc.compQQVersion = function(e, t) {
				for (var i = e.split("."), r = t.split("."), n = Math.min(3, Math.min(i.length, r.length)), o = 0; o < n; o++)
					if (i[o] != r[o]) return i[o] < r[o];
				return !0
			});
			var o;
			gl || (gl = new BK.WebGL, function() {
				gl.DEPTH_BUFFER_BIT = 256, gl.STENCIL_BUFFER_BIT = 1024, gl.COLOR_BUFFER_BIT = 16384, gl.TRIANGLES = 4, gl.TEXTURE_BINDING_2D = 32873, gl.ARRAY_BUFFER = 34962, gl.ARRAY_BUFFER_BINDING = 34964, gl.ELEMENT_ARRAY_BUFFER = 34963, gl.ELEMENT_ARRAY_BUFFER_BINDING = 34965, gl.STATIC_DRAW = 35044, gl.UNSIGNED_BYTE = 5121, gl.UNSIGNED_SHORT = 5123, gl.FLOAT = 5126, gl.RGBA = 6408, gl.FRAGMENT_SHADER = 35632, gl.VERTEX_SHADER = 35633, gl.LINK_STATUS = 35714, gl.CURRENT_PROGRAM = 35725, gl.NEAREST = 9728, gl.LINEAR = 9729, gl.TEXTURE_MAG_FILTER = 10240, gl.TEXTURE_MIN_FILTER = 10241, gl.TEXTURE_WRAP_S = 10242, gl.TEXTURE_WRAP_T = 10243, gl.TEXTURE_2D = 3553, gl.TEXTURE0 = 33984, gl.TEXTURE1 = 33985, gl.ACTIVE_TEXTURE = 34016, gl.REPEAT = 10497, gl.CLAMP_TO_EDGE = 33071, gl.MIRRORED_REPEAT = 33648, gl.FRAMEBUFFER = 36160, gl.RENDERBUFFER = 36161, gl.COLOR_ATTACHMENT0 = 36064, gl.DEPTH_ATTACHMENT = 36096, gl.STENCIL_ATTACHMENT = 36128, gl.NONE = 0, gl.FRAMEBUFFER_COMPLETE = 36053, gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, gl.FRAMEBUFFER_UNSUPPORTED = 36061, gl.FRAMEBUFFER_BINDING = 36006, gl.RENDERBUFFER_BINDING = 36007, gl.INVALID_FRAMEBUFFER_OPERATION = 1286
			}()), BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.1") && (this.doImage_rotate180 = n), BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.1") && (this.bufferFromScreenShot_760 = function(e, t, i, r, n) {
				var o = gl.glCreateTexture();
				gl.glActiveTexture(gl.TEXTURE1), gl.glBindTexture(gl.TEXTURE_2D, o), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.glTexParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.glTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
				var a = gl.glGetParameterInt(gl.FRAMEBUFFER_BINDING, 1),
					s = gl.glGetParameterInt(gl.RENDERBUFFER_BINDING, 1),
					h = gl.glCreateRenderbuffer();
				gl.glBindRenderbuffer(gl.RENDERBUFFER, h), gl.glRenderbufferStorage(gl.RENDERBUFFER, 35056, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height), gl.glBindRenderbuffer(gl.RENDERBUFFER, s);
				var l = gl.glCreateFramebuffer();
				gl.glBindFramebuffer(gl.FRAMEBUFFER, l), gl.glFramebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, o, 0), gl.glFramebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, h), gl.glFramebufferRenderbuffer(gl.FRAMEBUFFER, gl.STENCIL_ATTACHMENT, gl.RENDERBUFFER, h);
				var u, d = gl.glCheckFramebufferStatus(gl.FRAMEBUFFER);
				return d == gl.FRAMEBUFFER_COMPLETE ? (BK.Render.render(e, 0), u = new BK.Buffer(r * n * 4), gl.glReadPixels(t, i, r, n, gl.RGBA, gl.UNSIGNED_BYTE, u)) : BK.Script.log(1, -1, "bufferFromScreenShot_760!framebuffer failed, code = " + d), gl.glBindFramebuffer(gl.FRAMEBUFFER, a), gl.glDeleteTexture(o), gl.glDeleteRenderbuffer(h), gl.glDeleteFramebuffer(l), u
			})
		}
		this.isInScreen = function() {
			(void 0 == this.origin.x || this.origin.x < 0 || this.origin.x > BK.Director.screenPixelSize.width) && (this.origin.x = 0), (void 0 == this.origin.y || this.origin.y < 0 || this.origin.y > BK.Director.screenPixelSize.height) && (this.origin.y = 0), (void 0 == this.size.width || this.size.width <= 0 || this.size.width > BK.Director.screenPixelSize.width - this.origin.x) && (this.origin.x = 0, this.size.width = BK.Director.screenPixelSize.width), (void 0 == this.size.height || this.size.height <= 0 || this.size.height > BK.Director.screenPixelSize.height - this.origin.y) && (this.origin.y = 0, this.size.height = BK.Director.screenPixelSize.height)
		}, this.isInNode = function(e) {
			(void 0 == this.origin.x || this.origin.x < 0 || this.origin.x > e.contentSize.width) && (this.origin.x = 0), (void 0 == this.origin.y || this.origin.y < 0 || this.origin.y > e.contentSize.height) && (this.origin.y = 0), (void 0 == this.size.width || this.size.width <= 0) && (this.size.width = e.contentSize.width), (void 0 == this.size.height || this.size.height <= 0) && (this.size.height = e.contentSize.height)
		}, this.saveImage = function(e, t, i) {
			GameStatusInfo && BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.1") ? (e = this.doImage_rotate180({
				buffer: e,
				width: this.size.width,
				height: this.size.height
			}), BK.Image.saveImage(e, this.size.width, this.size.height, t, i)) : BK.Image.saveImage(e, this.size.width, this.size.height, t, i, 1)
		}, this.shotToFile = function(e, t) {
			this.isInScreen();
			var i = "";
			if (this.bufferFromScreenShot_760) {
				var r = this.bufferFromScreenShot_760(BK.Director.root, this.origin.x, this.origin.y, this.size.width, this.size.height);
				void 0 != r && (i = "GameSandBox://" + e, this.saveImage(r, i, t))
			} else {
				i = "GameSandBox://" + e + "." + t;
				var n = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				BK.Render.renderToTexture(BK.Director.root, n), n.writeToDiskWithXY(i, this.origin.x, this.origin.y, this.size.width, this.size.height)
			}
			return i
		}, this.shotToBuff = function() {
			if (this.isInScreen(), this.bufferFromScreenShot_760) return this.bufferFromScreenShot_760(BK.Director.root, this.origin.x, this.origin.y, this.size.width, this.size.height);
			var e = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
			return BK.Render.renderToTexture(BK.Director.root, e), e.readPixels(this.origin.x, this.origin.y, this.size.width, this.size.height)
		}, this.shotToFileFromNode = function(e, t, i) {
			this.isInNode(e);
			var r = "";
			if (this.bufferFromScreenShot_760) {
				var n = this.bufferFromScreenShot_760(e, this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height);
				void 0 != n && (r = "GameSandBox://" + t, this.saveImage(n, r, i))
			} else {
				r = "GameSandBox://" + t + "." + i;
				var o = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				BK.Render.renderToTexture(e, o), o.writeToDiskWithXY(r, this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height)
			}
			return r
		}, this.shotToBuffFromNode = function(e) {
			if (this.isInNode(e), this.bufferFromScreenShot_760) return this.bufferFromScreenShot_760(e, this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height);
			var t = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
			return BK.Render.renderToTexture(e, t), t.readPixels(this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height)
		}, this.shotToFileFromGL = function(e, t, i, r) {
			BK.Notification.on("frame_final", this, function() {
				this.isInScreen();
				var n = "GameSandBox://" + t,
					o = new BK.Buffer(this.size.height * this.size.width * 4);
				e.glReadPixels(this.origin.x, this.origin.y, this.size.width, this.size.height, e.RGBA, e.UNSIGNED_BYTE, o), this.saveImage(o, n, i), r && r(n + "." + i)
			}.bind(this), !0)
		}, this.shotToBuffFromGL = function(e, t) {
			BK.Notification.on("frame_final", this, function() {
				this.isInScreen();
				var i = new BK.Buffer(this.size.height * this.size.width * 4);
				e.glReadPixels(this.origin.x, this.origin.y, this.size.width, this.size.height, e.RGBA, e.UNSIGNED_BYTE, i), t && t(i)
			}.bind(this), !0)
		}
	};
	var gl, isSupportTA, firstFrameUpload = !1,
		GL_COMMAND_ACTIVE_TEXTURE = 0,
		GL_COMMAND_ATTACH_SHADER = 1,
		GL_COMMAND_BIND_ATTRIB_LOCATION = 2,
		GL_COMMAND_BIND_BUFFER = 3,
		GL_COMMAND_BIND_FRAME_BUFFER = 4,
		GL_COMMAND_BIND_RENDER_BUFFER = 5,
		GL_COMMAND_BIND_TEXTURE = 6,
		GL_COMMAND_BLEND_COLOR = 7,
		GL_COMMAND_BLEND_EQUATION = 8,
		GL_COMMAND_BLEND_EQUATION_SEPARATE = 9,
		GL_COMMAND_BLEND_FUNC = 10,
		GL_COMMAND_BLEND_FUNC_SEPARATE = 11,
		GL_COMMAND_BUFFER_DATA = 12,
		GL_COMMAND_BUFFER_SUB_DATA = 13,
		GL_COMMAND_CLEAR = 14,
		GL_COMMAND_CLEAR_COLOR = 15,
		GL_COMMAND_CLEAR_DEPTH = 16,
		GL_COMMAND_CLEAR_STENCIL = 17,
		GL_COMMAND_COLOR_MASK = 18,
		GL_COMMAND_COMMIT = 19,
		GL_COMMAND_COMPILE_SHADER = 20,
		GL_COMMAND_COMPRESSED_TEX_IMAGE_2D = 21,
		GL_COMMAND_COMPRESSED_TEX_SUB_IMAGE_2D = 22,
		GL_COMMAND_COPY_TEX_IMAGE_2D = 23,
		GL_COMMAND_COPY_TEX_SUB_IMAGE_2D = 24,
		GL_COMMAND_CULL_FACE = 25,
		GL_COMMAND_DELETE_BUFFER = 26,
		GL_COMMAND_DELETE_FRAME_BUFFER = 27,
		GL_COMMAND_DELETE_PROGRAM = 28,
		GL_COMMAND_DELETE_RENDER_BUFFER = 29,
		GL_COMMAND_DELETE_SHADER = 30,
		GL_COMMAND_DELETE_TEXTURE = 31,
		GL_COMMAND_DEPTH_FUNC = 32,
		GL_COMMAND_DEPTH_MASK = 33,
		GL_COMMAND_DEPTH_RANGE = 34,
		GL_COMMAND_DETACH_SHADER = 35,
		GL_COMMAND_DISABLE = 36,
		GL_COMMAND_DISABLE_VERTEX_ATTRIB_ARRAY = 37,
		GL_COMMAND_DRAW_ARRAYS = 38,
		GL_COMMAND_DRAW_ELEMENTS = 39,
		GL_COMMAND_ENABLE = 40,
		GL_COMMAND_ENABLE_VERTEX_ATTRIB_ARRAY = 41,
		GL_COMMAND_FINISH = 42,
		GL_COMMAND_FLUSH = 43,
		GL_COMMAND_FRAME_BUFFER_RENDER_BUFFER = 44,
		GL_COMMAND_FRAME_BUFFER_TEXTURE_2D = 45,
		GL_COMMAND_FRONT_FACE = 46,
		GL_COMMAND_GENERATE_MIPMAP = 47,
		GL_COMMAND_HINT = 48,
		GL_COMMAND_LINE_WIDTH = 49,
		GL_COMMAND_LINK_PROGRAM = 50,
		GL_COMMAND_PIXEL_STOREI = 51,
		GL_COMMAND_POLYGON_OFFSET = 52,
		GL_COMMAND_RENDER_BUFFER_STORAGE = 53,
		GL_COMMAND_SAMPLE_COVERAGE = 54,
		GL_COMMAND_SCISSOR = 55,
		GL_COMMAND_SHADER_SOURCE = 56,
		GL_COMMAND_STENCIL_FUNC = 57,
		GL_COMMAND_STENCIL_FUNC_SEPARATE = 58,
		GL_COMMAND_STENCIL_MASK = 59,
		GL_COMMAND_STENCIL_MASK_SEPARATE = 60,
		GL_COMMAND_STENCIL_OP = 61,
		GL_COMMAND_STENCIL_OP_SEPARATE = 62,
		GL_COMMAND_TEX_IMAGE_2D = 63,
		GL_COMMAND_TEX_PARAMETER_F = 64,
		GL_COMMAND_TEX_PARAMETER_I = 65,
		GL_COMMAND_TEX_SUB_IMAGE_2D = 66,
		GL_COMMAND_UNIFORM_1F = 67,
		GL_COMMAND_UNIFORM_1FV = 68,
		GL_COMMAND_UNIFORM_1I = 69,
		GL_COMMAND_UNIFORM_1IV = 70,
		GL_COMMAND_UNIFORM_2F = 71,
		GL_COMMAND_UNIFORM_2FV = 72,
		GL_COMMAND_UNIFORM_2I = 73,
		GL_COMMAND_UNIFORM_2IV = 74,
		GL_COMMAND_UNIFORM_3F = 75,
		GL_COMMAND_UNIFORM_3FV = 76,
		GL_COMMAND_UNIFORM_3I = 77,
		GL_COMMAND_UNIFORM_3IV = 78,
		GL_COMMAND_UNIFORM_4F = 79,
		GL_COMMAND_UNIFORM_4FV = 80,
		GL_COMMAND_UNIFORM_4I = 81,
		GL_COMMAND_UNIFORM_4IV = 82,
		GL_COMMAND_UNIFORM_MATRIX_2FV = 83,
		GL_COMMAND_UNIFORM_MATRIX_3FV = 84,
		GL_COMMAND_UNIFORM_MATRIX_4FV = 85,
		GL_COMMAND_USE_PROGRAM = 86,
		GL_COMMAND_VALIDATE_PROGRAM = 87,
		GL_COMMAND_VERTEX_ATTRIB_1F = 88,
		GL_COMMAND_VERTEX_ATTRIB_2F = 89,
		GL_COMMAND_VERTEX_ATTRIB_3F = 90,
		GL_COMMAND_VERTEX_ATTRIB_4F = 91,
		GL_COMMAND_VERTEX_ATTRIB_1FV = 92,
		GL_COMMAND_VERTEX_ATTRIB_2FV = 93,
		GL_COMMAND_VERTEX_ATTRIB_3FV = 94,
		GL_COMMAND_VERTEX_ATTRIB_4FV = 95,
		GL_COMMAND_VERTEX_ATTRIB_POINTER = 96,
		GL_COMMAND_VIEW_PORT = 97,
		total_size = 1e5,
		next_index = 0,
		buffer_data, bufferdata_array, bufferdata_view, bufferdata_pointer = 0;
	if (function(e, t) {
			"object" == typeof e && (e.MQQ.Webview.openTransparent = t().openTransparent, e.MQQ.Webview.closeTransparent = t().closeTransparent, e.MQQ.Webview.sendMessageToWebView = t().sendMessageToWebView, e.MQQ.Webview.onMessageHandle = t().onMessageHandle)
		}(BK, function() {
			function e(e, t, i) {
				void 0 === t && (t = 1);
				var r = "cs.openWebViewWithoutUrl.local",
					n = {
						url: e,
						gameOrientation: t,
						businessType: 2
					};
				GameStatusInfo.devPlatform && BK.Script.log(0, 0, "BK.MQQ.Webview.openTransparent rely QQ.Call Failed!"), i && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, i)), BK.MQQ.SsoRequest.send(n, r)
			}

			function t(e) {
				var t = {
					taskId: e
				};
				BK.MQQ.SsoRequest.send(t, "cs.closeWebview.local")
			}

			function i(e, t) {
				var i = {
					taskId: e,
					msg: t
				};
				BK.MQQ.SsoRequest.send(i, "cs.apolloGameTargetWebMessage.local")
			}

			function r(e) {
				BK.MQQ.SsoRequest.addListener("sc.web_callback_game.local", null, function(t, i, r) {
					e && e(i, r)
				})
			}
			return {
				openTransparent: e,
				closeTransparent: t,
				sendMessageToWebView: i,
				onMessageHandle: r
			}
		}), function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Audio = t())
		}(BK, function() {
			var e = BK.Audio,
				t = function() {
					function t(t, i, r) {
						this.__nativeObj = new e(t, i, r), this.type = t, this.path = i, this.loopCount = r
					}
					return t.pauseAllBackground = function() {
						if (this.playingBackgrounds)
							for (var e = 0; e < this.playingBackgrounds.length; e++) {
								var t = this.playingBackgrounds[e];
								"string" != typeof t.music && t.music.pauseMusic()
							}
					}, t.resumeAllBackground = function() {
						if (this.playingBackgrounds)
							for (var t = 0; t < this.playingBackgrounds.length; t++) {
								var i = this.playingBackgrounds[t];
								"string" != typeof i.music ? (i.music.resumeMusic(), BK.Script.log(1, 1, " music.resumeMusic not string")) : (BK.Script.log(1, 1, " music.resumeMusic " + typeof i.music), e.playMusic(i.type, i.music, i.loop))
							}
					}, t.removeBackgrounFromArray = function(e) {
						if (this.playingBackgrounds)
							for (var i = 0; i < t.playingBackgrounds.length; i++) t.playingBackgrounds[i].music
					}, t.addBackgroundToArray = function(e, i, r) {
						var n = {
							music: e,
							type: i,
							loop: r
						};
						void 0 === this.playingBackgrounds && (this.playingBackgrounds = []);
						for (var o = 0; o < t.playingBackgrounds.length; o++) t.playingBackgrounds[o].music;
						this.playingBackgrounds.push(n)
					}, t.playMusic = function(i, r, n) {
						0 == i && t.addBackgroundToArray(r, i, n), e.playMusic(i, r, n)
					}, t.prototype.startMusic = function(i) {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 ? e.playMusic(this.type, this.path, this.loopCount) : (null != i && void 0 != i ? this.__nativeObj.startMusic(i) : this.__nativeObj.startMusic(), t.addBackgroundToArray(this.__nativeObj, this.type, this.loopCount))
					}, t.prototype.pauseMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || (this.__nativeObj.pauseMusic(), 0 == this.type && t.removeBackgrounFromArray(this.__nativeObj))
					}, t.prototype.resumeMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || (this.__nativeObj.resumeMusic(), 0 == this.type && t.addBackgroundToArray(this.__nativeObj, this.type, this.loopCount))
					}, t.prototype.stopMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || (0 == this.type && t.removeBackgrounFromArray(this.__nativeObj), this.__nativeObj.stopMusic())
					}, t
				}();
			return Object.defineProperty(t, "switch", {
				get: function() {
					return e.switch
				},
				set: function(t) {
					e.switch = t
				},
				enumerable: !0,
				configurable: !0
			}), t
		}), BK.MQQ && BK.MQQ.Account) {
		var headCacheDir_1 = "GameSandBox://_head/";
		BK.FileUtil.isFileExist(headCacheDir_1) || BK.FileUtil.makeDir(headCacheDir_1), BK.MQQ.Account.getHeadEx || (BK.MQQ.Account.getHeadEx = function(e, t) {
			BK.MQQ.Account.getHead(e, function(i, r) {
				if (r && r.buffer && r.width && r.height)
					if (BK.Image.saveImage) BK.Image.saveImage(r.buffer, r.width, r.height, headCacheDir_1 + i, "jpg"), t(i, headCacheDir_1 + i + ".jpg");
					else {
						var n = new BK.Texture(r.buffer, r.width, r.height),
							o = new BK.Sprite(r.width, r.height, n, 0, 0, 1, 1),
							a = new BK.RenderTexture(r.width, r.height);
						BK.Render.renderToTexture(o.__nativeObj ? o.__nativeObj : o, a), a.saveTo(headCacheDir_1 + i), t(e, headCacheDir_1 + i)
					}
				else t(e, "")
			})
		})
	}
	BK.Misc.compQQVersion || (BK.Misc.compQQVersion = function(e, t) {
			for (var i = e.split("."), r = t.split("."), n = Math.min(3, Math.min(i.length, r.length)), o = 0; o < n; o++)
				if (i[o] != r[o]) return i[o] < r[o];
			return !0
		}, BK.Misc.qqVerLessthan = function(e, t) {
			for (var i = e.split("."), r = t.split("."), n = Math.min(3, Math.min(i.length, r.length)), o = 0; o < n; o++)
				if (i[o] < r[o]) return !0;
			return !1
		}),
		function(e, t) {
			"object" == typeof e && (e.TouchEventDispatch = function() {
				var e = BK.TouchEvent.getAllTouchEvent,
					t = BK.TouchEvent.getTouchEvent,
					i = BK.TouchEvent.updateTouchStatus;
				return {
					TouchEventDispatch: function() {
						function r() {}
						return r.listenAllTouch = function(e, t) {
							void 0 === this.listenerInfos && (this.listenerInfos = []);
							var i = {
								obj: e,
								callback: t
							};
							this.listenerInfos.push(i)
						}, r.remove = function(e) {
							for (var t = -1, i = 0; i < len; i++) this.listenerInfos[i].obj == e && (t = i); - 1 != t && this.listenerInfos.splice(t, 1)
						}, r.dispatch = function(e) {
							e && this.listenerInfos.forEach(function(t) {
								t.callback(e)
							})
						}, r.getTouchEvent = function() {
							var e = t();
							return e && this.dispatch([e]), e
						}, r.getAllTouchEvent = function() {
							var t = e();
							return t && this.dispatch(t), t
						}, r.updateTouchStatus = function() {
							i()
						}, r.listenerInfos = [], r
					}()
				}
			}().TouchEventDispatch)
		}(BK),
		function(e, t) {
			e.TouchEvent = function() {
				return function() {
					function e() {}
					return e.getTouchEvent = function() {
						return BK.TouchEventDispatch.getTouchEvent()
					}, e.getAllTouchEvent = function() {
						return BK.TouchEventDispatch.getAllTouchEvent()
					}, e.updateTouchStatus = function() {
						BK.TouchEventDispatch.updateTouchStatus()
					}, e
				}()
			}()
		}(BK),
		function(e, t) {
			function i(t, i) {
				try {
					e.gl && 0 == r && (r = !0, o()), a(t, i), e.gl && e.gl.__oldGlCommit()
				} catch (e) {}
				BK.Notification.emitAll("frame_final", {})
			}
			var r = !1,
				n = function() {},
				o = function() {
					this.__gl = bkWebGLGetInstance(), this.__oldGlCommit = this.__gl.glCommit, this.__gl.glCommit = n, this.__gl.__oldGlCommit = this.__oldGlCommit, n.bind(this.__gl)
				};
			BK.Notification = new BK.Emitter;
			var a = e._tickerCallback_;
			e._tickerCallback_ = i
		}(this),
		function(e, t) {
			var i = void 0;
			t.Script.setErrorObserver = function(e) {
				i = e
			}, e._globalErrorCallback_ = function(e) {
				i && i(e.message, e.stack)
			}
		}(this, BK),
		function(e, t) {
			t && t.Image && !t.Image.loadImageWithBase64 && (t.Image.loadImageWithBase64 = function(e) {
				if (e) {
					var i = t.Misc.decodeBase64FromString(e);
					return t.Image.loadImage(i)
				}
				t.Script.log(1, 0, "buffer is empty")
			})
		}(0, BK),
		function(e, t) {
			if (BK.Notification) {
				BK.MQQ.SsoRequest.addListener("sc.game_enter_background.local", null, function() {
					BK.Notification.emitAll("game_enter_background", {})
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.game_enter_foreground.local", null, function() {
					BK.Notification.emitAll("game_enter_foreground", {})
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.game_maximize.local", null, function() {
					BK.Notification.emitAll("game_maximize", {})
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.game_minimize.local", null, function() {
					BK.Notification.emitAll("game_minimize", {})
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.game_shell_pack_up.local", null, function() {
					BK.Notification.emitAll("game_pack_up", {})
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.game_shell_close.local", null, function() {
					if ("ios" === GameStatusInfo.platform || BK.showPlusTips && 3 == BK.showPlusTips || 0 == (1 & GameStatusInfo.commFlagBits) || 1 == BK.Misc.compQQVersion(GameStatusInfo.QQVer, "7.6.9")) BK.Notification.emitAll("game_close", {}), isBrowser ? BK.MQQ.SsoRequest.sendTo({}, "cs.close_room.local") : BK.MQQ.SsoRequest.send({}, "cs.close_room.local");
					else {
						var e = "apollo_router_game.apl_d_r_linkcmd_plus_exist_tips",
							t = {
								cmd: e,
								gameid: GameStatusInfo.gameId + ""
							};
						BK.MQQ.SsoRequest.send(t, e), BK.MQQ.SsoRequest.addListener(e, this, function(e, t, i) {
							BK.Script.log(0, 0, " apl_d_r_linkcmd_plus_exist_tips = " + e)
						});
						new BK.PlusTips(!1).showTips(function() {
							BK.Notification.emitAll("game_close", {}), isBrowser ? BK.MQQ.SsoRequest.sendTo({}, "cs.close_room.local") : BK.MQQ.SsoRequest.send({}, "cs.close_room.local")
						}), BK.showPlusTips = 3
					}
				}.bind(this)), BK.MQQ.SsoRequest.addListener("sc.network_change.local", null, function(e, t, i) {
					void 0 === i.type ? BK.Script.log(1, 1, "net work change .data is worng!") : BK.Notification.emitAll("game_network_change", i.type)
				}.bind(this))
			}
		}(),
		function(e, t) {
			e.Crypt = function() {
				function e() {
					this.hexcase = 0, this.b64pad = "", this.chrsz = 8
				}
				return e.prototype.hex_md5 = function(e) {
					return this.bin2hex(this.core_md5(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.b64_md5 = function(e) {
					return this.bin2b64(this.core_md5(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.str_md5 = function(e) {
					return this.bin2str(this.core_md5(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.hex_hmac_md5 = function(e, t) {
					return this.bin2hex(this.core_hmac_md5(e, t))
				}, e.prototype.b64_hmac_md5 = function(e, t) {
					return this.bin2b64(this.core_hmac_md5(e, t))
				}, e.prototype.str_hmac_md5 = function(e, t) {
					return this.bin2str(this.core_hmac_md5(e, t))
				}, e.prototype.md5_vm_test = function() {
					return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc")
				}, e.prototype.core_md5 = function(e, t) {
					e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
					for (var i = 1732584193, r = -271733879, n = -1732584194, o = 271733878, a = 0; a < e.length; a += 16) {
						var s = i,
							h = r,
							l = n,
							u = o;
						i = this.md5_ff(i, r, n, o, e[a + 0], 7, -680876936), o = this.md5_ff(o, i, r, n, e[a + 1], 12, -389564586), n = this.md5_ff(n, o, i, r, e[a + 2], 17, 606105819), r = this.md5_ff(r, n, o, i, e[a + 3], 22, -1044525330), i = this.md5_ff(i, r, n, o, e[a + 4], 7, -176418897), o = this.md5_ff(o, i, r, n, e[a + 5], 12, 1200080426), n = this.md5_ff(n, o, i, r, e[a + 6], 17, -1473231341), r = this.md5_ff(r, n, o, i, e[a + 7], 22, -45705983), i = this.md5_ff(i, r, n, o, e[a + 8], 7, 1770035416), o = this.md5_ff(o, i, r, n, e[a + 9], 12, -1958414417), n = this.md5_ff(n, o, i, r, e[a + 10], 17, -42063), r = this.md5_ff(r, n, o, i, e[a + 11], 22, -1990404162), i = this.md5_ff(i, r, n, o, e[a + 12], 7, 1804603682), o = this.md5_ff(o, i, r, n, e[a + 13], 12, -40341101), n = this.md5_ff(n, o, i, r, e[a + 14], 17, -1502002290), r = this.md5_ff(r, n, o, i, e[a + 15], 22, 1236535329), i = this.md5_gg(i, r, n, o, e[a + 1], 5, -165796510), o = this.md5_gg(o, i, r, n, e[a + 6], 9, -1069501632), n = this.md5_gg(n, o, i, r, e[a + 11], 14, 643717713), r = this.md5_gg(r, n, o, i, e[a + 0], 20, -373897302), i = this.md5_gg(i, r, n, o, e[a + 5], 5, -701558691), o = this.md5_gg(o, i, r, n, e[a + 10], 9, 38016083), n = this.md5_gg(n, o, i, r, e[a + 15], 14, -660478335), r = this.md5_gg(r, n, o, i, e[a + 4], 20, -405537848), i = this.md5_gg(i, r, n, o, e[a + 9], 5, 568446438), o = this.md5_gg(o, i, r, n, e[a + 14], 9, -1019803690), n = this.md5_gg(n, o, i, r, e[a + 3], 14, -187363961), r = this.md5_gg(r, n, o, i, e[a + 8], 20, 1163531501), i = this.md5_gg(i, r, n, o, e[a + 13], 5, -1444681467), o = this.md5_gg(o, i, r, n, e[a + 2], 9, -51403784), n = this.md5_gg(n, o, i, r, e[a + 7], 14, 1735328473), r = this.md5_gg(r, n, o, i, e[a + 12], 20, -1926607734), i = this.md5_hh(i, r, n, o, e[a + 5], 4, -378558), o = this.md5_hh(o, i, r, n, e[a + 8], 11, -2022574463), n = this.md5_hh(n, o, i, r, e[a + 11], 16, 1839030562), r = this.md5_hh(r, n, o, i, e[a + 14], 23, -35309556), i = this.md5_hh(i, r, n, o, e[a + 1], 4, -1530992060), o = this.md5_hh(o, i, r, n, e[a + 4], 11, 1272893353), n = this.md5_hh(n, o, i, r, e[a + 7], 16, -155497632), r = this.md5_hh(r, n, o, i, e[a + 10], 23, -1094730640), i = this.md5_hh(i, r, n, o, e[a + 13], 4, 681279174), o = this.md5_hh(o, i, r, n, e[a + 0], 11, -358537222), n = this.md5_hh(n, o, i, r, e[a + 3], 16, -722521979), r = this.md5_hh(r, n, o, i, e[a + 6], 23, 76029189), i = this.md5_hh(i, r, n, o, e[a + 9], 4, -640364487), o = this.md5_hh(o, i, r, n, e[a + 12], 11, -421815835), n = this.md5_hh(n, o, i, r, e[a + 15], 16, 530742520), r = this.md5_hh(r, n, o, i, e[a + 2], 23, -995338651), i = this.md5_ii(i, r, n, o, e[a + 0], 6, -198630844), o = this.md5_ii(o, i, r, n, e[a + 7], 10, 1126891415), n = this.md5_ii(n, o, i, r, e[a + 14], 15, -1416354905), r = this.md5_ii(r, n, o, i, e[a + 5], 21, -57434055), i = this.md5_ii(i, r, n, o, e[a + 12], 6, 1700485571), o = this.md5_ii(o, i, r, n, e[a + 3], 10, -1894986606), n = this.md5_ii(n, o, i, r, e[a + 10], 15, -1051523), r = this.md5_ii(r, n, o, i, e[a + 1], 21, -2054922799), i = this.md5_ii(i, r, n, o, e[a + 8], 6, 1873313359), o = this.md5_ii(o, i, r, n, e[a + 15], 10, -30611744), n = this.md5_ii(n, o, i, r, e[a + 6], 15, -1560198380), r = this.md5_ii(r, n, o, i, e[a + 13], 21, 1309151649), i = this.md5_ii(i, r, n, o, e[a + 4], 6, -145523070), o = this.md5_ii(o, i, r, n, e[a + 11], 10, -1120210379), n = this.md5_ii(n, o, i, r, e[a + 2], 15, 718787259), r = this.md5_ii(r, n, o, i, e[a + 9], 21, -343485551), i = this.safe_add(i, s), r = this.safe_add(r, h), n = this.safe_add(n, l), o = this.safe_add(o, u)
					}
					return Array(i, r, n, o)
				}, e.prototype.md5_cmn = function(e, t, i, r, n, o) {
					return this.safe_add(this.rol(this.safe_add(this.safe_add(t, e), this.safe_add(r, o)), n), i)
				}, e.prototype.md5_ff = function(e, t, i, r, n, o, a) {
					return this.md5_cmn(t & i | ~t & r, e, t, n, o, a)
				}, e.prototype.md5_gg = function(e, t, i, r, n, o, a) {
					return this.md5_cmn(t & r | i & ~r, e, t, n, o, a)
				}, e.prototype.md5_hh = function(e, t, i, r, n, o, a) {
					return this.md5_cmn(t ^ i ^ r, e, t, n, o, a)
				}, e.prototype.md5_ii = function(e, t, i, r, n, o, a) {
					return this.md5_cmn(i ^ (t | ~r), e, t, n, o, a)
				}, e.prototype.core_hmac_md5 = function(e, t) {
					var i = this.str2bin(e);
					i.length > 16 && (i = this.core_md5(i, e.length * this.chrsz));
					for (var r = Array(16), n = Array(16), o = 0; o < 16; o++) r[o] = 909522486 ^ i[o], n[o] = 1549556828 ^ i[o];
					var a = this.core_md5(r.concat(this.str2bin(t)), 512 + t.length * this.chrsz);
					return this.core_md5(n.concat(a), 640)
				}, e.prototype.hex_sha1 = function(e) {
					return this.bin2hex(this.core_sha1(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.b64_sha1 = function(e) {
					return this.bin2b64(this.core_sha1(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.str_sha1 = function(e) {
					return this.bin2str(this.core_sha1(this.str2bin(e), e.length * this.chrsz))
				}, e.prototype.hex_hmac_sha1 = function(e, t) {
					return this.bin2hex(this.core_hmac_sha1(e, t))
				}, e.prototype.b64_hmac_sha1 = function(e, t) {
					return this.bin2b64(this.core_hmac_sha1(e, t))
				}, e.prototype.str_hmac_sha1 = function(e, t) {
					return this.bin2str(this.core_hmac_sha1(e, t))
				}, e.prototype.sha1_vm_test = function() {
					return "a9993e364706816aba3e25717850c26c9cd0d89d" == this.hex_sha1("abc")
				}, e.prototype.core_sha1 = function(e, t) {
					e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
					for (var i = Array(80), r = 1732584193, n = -271733879, o = -1732584194, a = 271733878, s = -1009589776, h = 0; h < e.length; h += 16) {
						for (var l = r, u = n, d = o, c = a, f = s, _ = 0; _ < 80; _++) {
							i[_] = _ < 16 ? e[h + _] : this.rol(i[_ - 3] ^ i[_ - 8] ^ i[_ - 14] ^ i[_ - 16], 1);
							var g = this.safe_add(this.safe_add(this.rol(r, 5), this.sha1_ft(_, n, o, a)), this.safe_add(this.safe_add(s, i[_]), this.sha1_kt(_)));
							s = a, a = o, o = this.rol(n, 30), n = r, r = g
						}
						r = this.safe_add(r, l), n = this.safe_add(n, u), o = this.safe_add(o, d), a = this.safe_add(a, c), s = this.safe_add(s, f)
					}
					return Array(r, n, o, a, s)
				}, e.prototype.sha1_ft = function(e, t, i, r) {
					return e < 20 ? t & i | ~t & r : e < 40 ? t ^ i ^ r : e < 60 ? t & i | t & r | i & r : t ^ i ^ r
				}, e.prototype.sha1_kt = function(e) {
					return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
				}, e.prototype.core_hmac_sha1 = function(e, t) {
					var i = this.str2bin(e);
					i.length > 16 && (i = this.core_sha1(i, e.length * this.chrsz));
					for (var r = Array(16), n = Array(16), o = 0; o < 16; o++) r[o] = 909522486 ^ i[o], n[o] = 1549556828 ^ i[o];
					var a = this.core_sha1(r.concat(this.str2bin(t)), 512 + t.length * this.chrsz);
					return this.core_sha1(n.concat(a), 672)
				}, e.prototype.safe_add = function(e, t) {
					var i = (65535 & e) + (65535 & t);
					return (e >> 16) + (t >> 16) + (i >> 16) << 16 | 65535 & i
				}, e.prototype.rol = function(e, t) {
					return e << t | e >>> 32 - t
				}, e.prototype.str2bin = function(e) {
					for (var t = Array(), i = (1 << this.chrsz) - 1, r = 0; r < e.length * this.chrsz; r += this.chrsz) t[r >> 5] |= (e.charCodeAt(r / this.chrsz) & i) << 24 - r % 32;
					return t
				}, e.prototype.bin2str = function(e) {
					for (var t = "", i = (1 << this.chrsz) - 1, r = 0; r < 32 * e.length; r += this.chrsz) t += String.fromCharCode(e[r >> 5] >>> 24 - r % 32 & i);
					return t
				}, e.prototype.bin2hex = function(e) {
					for (var t = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", i = "", r = 0; r < 4 * e.length; r++) i += t.charAt(e[r >> 2] >> 8 * (3 - r % 4) + 4 & 15) + t.charAt(e[r >> 2] >> 8 * (3 - r % 4) & 15);
					return i
				}, e.prototype.bin2b64 = function(e) {
					for (var t = "", i = 0; i < 4 * e.length; i += 3)
						for (var r = (e[i >> 2] >> 8 * (3 - i % 4) & 255) << 16 | (e[i + 1 >> 2] >> 8 * (3 - (i + 1) % 4) & 255) << 8 | e[i + 2 >> 2] >> 8 * (3 - (i + 2) % 4) & 255, n = 0; n < 4; n++) 8 * i + 6 * n > 32 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 6 * (3 - n) & 63);
					return t
				}, new e
			}()
		}(BK),
		function(e, t) {
			e.FileUtil.upload = function() {
				function e(e, t, i) {
					function r(e, t) {
						i(t, _ + c)
					}
					for (var n = e.length > 1024 ? 1024 : e.length, o = new Uint8Array(n), a = 0; a < n; a++) o[a] = e.readUint8Buffer();
					e.rewind();
					var s = new Date,
						h = s.getFullYear() + (s.getMonth() + 1 < 10 ? 0 + (s.getMonth() + 1) : s.getMonth() + 1) + s.getDate(),
						l = t.signTime,
						u = t.tmpSecretId,
						d = t.sessionToken,
						c = "/" + GameStatusInfo.gameId + "_" + BK.Crypt.bin2hex(BK.Crypt.core_md5(o, n)) + GameStatusInfo.gameId + "_" + h + ".png",
						f = t.upLoadPrefUrl.replace(new RegExp("http://", "gm"), ""),
						_ = t.downloadUrl,
						g = t.signature,
						m = "put\n" + c + "\n\nhost=" + f + "&x-cos-storage-class=nearline\n",
						p = "sha1\n" + l + "\n" + BK.Crypt.hex_sha1(m) + "\n",
						S = "q-sign-algorithm=sha1&q-ak=" + u + "&q-sign-time=" + l + "&q-key-time=" + l + "&q-header-list=host;x-cos-storage-class&q-url-param-list=&q-signature=" + BK.Crypt.hex_hmac_sha1(g, p),
						v = new BK.HttpUtil("https://" + f + c);
					v.setHttpMethod("put"), v.setHttpHeader("host", f), v.setHttpHeader("x-cos-storage-class", "nearline"), v.setHttpHeader("x-cos-security-token", d), v.setHttpHeader("authorization", S), v.setBodyCompatible(!1), v.setHttpRawBody(e), v.requestAsync(r)
				}
				return BK.FileUtil.uploadFromFile = function(e, t) {
					var i = BK.FileUtil.readFile(e);
					i && i.length > 0 ? BK.FileUtil.uploadFromBuff(i, t) : (BK.Script.log(1, 1, "uploadFromFile failed.file is empty!"), t(-1, ""))
				}, BK.FileUtil.uploadFromBuff = function(t, i) {
					BK.QQ.queryCloudSignature(function(r, n) {
						e(t, n, i)
					})
				}, BK.FileUtil.uploadFromNode = function(t, i) {
					var r = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
					BK.Render.renderToTexture(t, r), r.writeToDiskWithXY("GameSandBox://temp.png", t.position.x, t.position.y, t.contentSize.width, t.contentSize.height);
					var n = BK.FileUtil.readFile("GameSandBox://temp.png");
					BK.QQ.queryCloudSignature(function(t, r) {
						e(n, r, i)
					})
				}, BK.FileUtil.uploadNode = function(t, i, r, n, o, a) {
					var s = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
					BK.Render.renderToTexture(t, s), s.writeToDiskWithXY("GameSandBox://temp.png", i, r, n, o);
					var h = BK.FileUtil.readFile("GameSandBox://temp.png");
					BK.QQ.queryCloudSignature(function(t, i) {
						e(h, i, a)
					})
				}, e
			}()
		}(BK), BK.QQ.shareToArkFromFile = function(e, t, i, r) {
			BK.FileUtil.uploadFromFile(r, function(r, n) {
				BK.QQ.shareToArk(e, t, n, !0, i)
			})
		}, BK.QQ.shareToArkFromBuff = function(e, t, i, r) {
			BK.FileUtil.uploadFromBuff(r, function(r, n) {
				200 == r && BK.QQ.shareToArk(e, t, n, !0, i)
			})
		}, BK.QQ.shareToArkFromNode = function(e, t, i, r) {
			BK.FileUtil.uploadFromNode(r, function(r, n) {
				200 == r && BK.QQ.shareToArk(e, t, n, !0, i)
			})
		},
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.UIEventHandler = t())
		}(this, function() {
			function e() {
				this.eveFuncTb = [], this._eventMap = {
					1: [],
					2: [],
					3: []
				}, this.rootNode = BK.Director.root, this.nodeTreeHittest = function(e, t) {
					if (1 == e.canUserInteract && 0 == e.hidden) {
						if (e.children)
							for (var i = e.children, r = i.length - 1; r >= 0; r--) {
								var n = i[r],
									o = this.nodeTreeHittest(n, t);
								if (void 0 != o) return o
							}
						return 1 == e.hittest(t) ? e : void 0
					}
				}, this.treeHittest = function(e) {
					return this.nodeTreeHittest(this.rootNode, e)
				}, this.setRootNode = function(e) {
					this.rootNode = e
				}, this.addNodeEvent = function(e, t, i) {
					var r = {};
					r.obj = e, r.func = i;
					for (var n = !1, o = 0; o < this._eventMap[t].length; o++) this._eventMap[t][o].obj == e && (n = !0);
					0 == n ? this._eventMap[t].push(r) : BK.Script.log(1, 0, "Add Same Node Event has added Event Before.")
				}, this.removeNodeEvent = function(e, t) {
					for (var i = -1, r = 0; r < this._eventMap[t].length; r++) this._eventMap[t][r].obj == e && (i = r);
					i >= 0 && (this._eventMap[t].splice(i, 1), BK.Script.log(1, 0, "Remove Node Event Succeed!"))
				}, this.triggerEvent = function(e, t, i, r) {
					for (var n = 0; n < this._eventMap[t].length; n++) {
						var o = this._eventMap[t][n];
						if (e && o.obj == e) {
							var a = o.func;
							a && a(e, t, i, r)
						}
					}
				}, this.triggerAllNodeEvent = function(e) {
					for (var t = 0; t < this._eventMap[e].length; t++) {
						var i = this._eventMap[e][t],
							r = i.func,
							n = i.obj;
						r && r(n, e)
					}
				}, this.isFirstTouchDown = -1, this.currentNode = void 0, this.touchUpdate = function(e) {
					if (void 0 != e)
						for (var n = 0; n < e.length; n++)
							for (var o = e[n], a = 0; a < o.length; a++) {
								var s = o[a].x,
									h = o[a].y;
								if (2 == o[a].status)
									if (-1 == this.isFirstTouchDown) {
										this.isFirstTouchDown = o[a].id;
										var l = this.treeHittest({
											x: s,
											y: h
										});
										l ? (this.currentNode = l, this.triggerEvent(this.currentNode, t, s, h)) : this.currentNode = void 0
									} else BK.Script.log(0, 0, "detectGesture begin not first id:" + o[a].id + " x:" + s + " y:" + h);
								else 3 == o[a].status ? -1 != this.isFirstTouchDown && o[a].id == this.isFirstTouchDown ? this.currentNode && this.triggerEvent(this.currentNode, i, s, h) : BK.Script.log(0, 0, "detectGesture moved! Failed touchArr[i].id = " + o[a].id) : 1 == o[a].status && (-1 != this.isFirstTouchDown && o[a].id == this.isFirstTouchDown ? (this.isFirstTouchDown = -1, this.currentNode && (this.triggerEvent(this.currentNode, r, s, h), this.currentNode = void 0)) : BK.Script.log(0, 0, "detectGesture end!!!Failed!!! touchArr[i].id= " + o[a].id + " this.isFirstTouchDown:" + this.isFirstTouchDown))
							}
				}, this.detectGesture = function() {
					var e = BK.TouchEvent.getAllTouchEvent();
					this.touchUpdate(e), BK.TouchEvent.updateTouchStatus()
				}, "function" == typeof BK.TouchEventDispatch ? BK.TouchEventDispatch.listenAllTouch(this, this.touchUpdate.bind(this)) : BK.Director.ticker.add(function(e, t) {
					this && this.detectGesture()
				}.bind(this))
			}
			var t = 1,
				i = 2,
				r = 3;
			return new e
		}),
		function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Button = t())
		}(BK, function() {
			function e(e, t, i, r) {
				this.touchStatus = 0, this.normalTexture = void 0, this.pressTexture = void 0, this.disableTexture = void 0, this.normalTextureOffset = {
					frame: {
						x: 0,
						y: 0,
						w: 0,
						h: 0
					},
					rotated: !1
				}, this.pressTextureOffset = {
					frame: {
						x: 0,
						y: 0,
						w: 0,
						h: 0
					},
					rotated: !1
				}, this.disableTextureOffset = {
					frame: {
						x: 0,
						y: 0,
						w: 0,
						h: 0
					},
					rotated: !1
				}, this.touchInsideCallback = void 0, i ? (this.normalTexture = new BK.Texture(i), this.normalTexture && (this.normalTextureOffset.frame.x = 0, this.normalTextureOffset.frame.y = 0, this.normalTextureOffset.frame.w = this.normalTexture.size.width, this.normalTextureOffset.frame.h = this.normalTexture.size.height, this.normalTextureOffset.rotated = !1)) : this.normalTexture = {}, r && (this.touchInsideCallback = r), this.__nativeObj = new BK.SpriteNode(e, t, this.normalTexture, 0, 1, 1, 1), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
					var t = e;
					Object.defineProperty(this, t, {
						get: function() {
							return this.__nativeObj[t]
						},
						set: function(e) {
							this.__nativeObj[t] = e
						}
					})
				}, this), this.enable = !0, Object.defineProperty(this, "disable", {
					get: function() {
						return !this.enable
					},
					set: function(e) {
						1 == e ? this.updateTexture(2) : this.updateTexture(0), this.enable = !e
					}
				}), this.updateTexture = function(e) {
					if (0 == e) {
						if (this.normalTexture) {
							this.__nativeObj.setTexture(this.normalTexture);
							t = this.normalTextureOffset;
							this.__nativeObj.adjustTexturePosition(t.frame.x, t.frame.y, t.frame.w, t.frame.h, t.rotated)
						}
					} else if (1 == e) {
						if (this.pressTexture) {
							this.__nativeObj.setTexture(this.pressTexture);
							t = this.pressTextureOffset;
							this.__nativeObj.adjustTexturePosition(t.frame.x, t.frame.y, t.frame.w, t.frame.h, t.rotated)
						}
					} else if (2 == e && this.disableTexture) {
						this.__nativeObj.setTexture(this.disableTexture);
						var t = this.disableTextureOffset;
						this.__nativeObj.adjustTexturePosition(t.frame.x, t.frame.y, t.frame.w, t.frame.h, t.rotated)
					}
				}, this.changeStatus = function(e) {
					this.touchStatus = e, this.updateTexture(this.touchStatus)
				}, this.updateStatus = function() {
					this.updateTexture(this.touchStatus)
				}, this.changeStatus(0), this.isCancelClick = void 0, UIEventHandler.addNodeEvent(this, 1, function(e, t, i, r) {
					e.isCancelClick = !1, e.enable ? e.changeStatus(1) : e.changeStatus(2)
				}), UIEventHandler.addNodeEvent(this, 2, function(e, t, i, r) {
					var n = {
						x: i,
						y: r
					};
					0 == e.hittest(n) && (e.isCancelClick = !0)
				}), UIEventHandler.addNodeEvent(this, 3, function(e, t, i, r) {
					e.enable ? e.changeStatus(0) : e.changeStatus(2), 0 == e.isCancelClick && e.touchInsideCallback && e.touchInsideCallback(e)
				}), this.canUserInteract = !0
			}
			return e.prototype.setTouchInsideCallback = function(e) {
				this.touchInsideCallback = e
			}, e.prototype.setNormalTexturePath = function(e) {
				var t = new BK.Texture(e);
				t && this.setNormalTexture(t)
			}, e.prototype.setPressTexturePath = function(e) {
				var t = new BK.Texture(e);
				t && this.setPressTexture(t)
			}, e.prototype.setDisableTexturePath = function(e) {
				var t = new BK.Texture(e);
				t && this.setDisableTexture(t)
			}, e.prototype.setNormalTexture = function(e) {
				this.normalTexture = e, this.normalTexture && (this.normalTextureOffset.frame.x = 0, this.normalTextureOffset.frame.y = 0, this.normalTextureOffset.frame.w = this.normalTexture.size.width, this.normalTextureOffset.frame.h = this.normalTexture.size.height, this.normalTextureOffset.rotated = !1), this.updateStatus()
			}, e.prototype.setPressTexture = function(e) {
				this.pressTexture = e, this.pressTexture && (this.pressTextureOffset.frame.x = 0, this.pressTextureOffset.frame.y = 0, this.pressTextureOffset.frame.w = this.pressTexture.size.width, this.pressTextureOffset.frame.h = this.pressTexture.size.height, this.pressTextureOffset.rotated = !1), this.updateStatus()
			}, e.prototype.setDisableTexture = function(e) {
				this.disableTexture = e, this.disableTexture && (this.disableTextureOffset.frame.x = 0, this.disableTextureOffset.frame.y = 0, this.disableTextureOffset.frame.w = this.disableTexture.size.width, this.disableTextureOffset.frame.h = this.disableTexture.size.height, this.disableTextureOffset.rotated = !1), this.updateStatus()
			}, e.prototype.setNormalTextureFromSheetInfo = function(e) {
				if (e) {
					var t = new BK.Texture(e.texturePath);
					t ? (this.normalTexture = t, this.normalTextureOffset = e.frameInfo, this.updateStatus()) : BK.Script.log(0, 0, "setNormalTextureFromSheetInfo error! Create texture failed.")
				} else BK.Script.log(0, 0, "setNormalTextureFromSheetInfo error! textureFrameInfo is null or undefined")
			}, e.prototype.setPressTextureFromSheetInfo = function(e) {
				if (e) {
					var t = new BK.Texture(e.texturePath);
					t ? (this.pressTexture = t, this.pressTextureOffset = e.frameInfo, this.updateStatus()) : BK.Script.log(0, 0, "setPressTextureFromSheetInfo error! Create texture failed.")
				} else BK.Script.log(0, 0, "setPressTextureFromSheetInfo error! textureFrameInfo is null or undefined")
			}, e.prototype.setDisableTextureFromSheetInfo = function(e) {
				if (e) {
					var t = new BK.Texture(e.texturePath);
					t ? (this.disableTexture = t, this.disableTextureOffset = e.frameInfo, this.updateStatus()) : BK.Script.log(0, 0, "setDisableTextureFromSheetInfo error! Create texture failed.")
				} else BK.Script.log(0, 0, "setDisableTextureFromSheetInfo error! textureFrameInfo is null or undefined")
			}, e.prototype.hittest = function(e) {
				return this.__nativeObj.hittest(e)
			}, e.prototype.addChild = function(e) {
				this.__nativeObj.addChild(e)
			}, e.prototype.attach = function(e) {
				this.__nativeObj.attach(e)
			}, e.prototype.dispose = function() {
				this.__nativeObj.dispose()
			}, e.prototype.setTexture = function(e) {
				this.__nativeObj.setTexture(e)
			}, e.prototype.removeFromParent = function() {
				this.__nativeObj.removeFromParent()
			}, e.prototype.setNormalTextureFromUrl = function(e, t) {
				this.normalUrl = e, new BK.HttpUtil(this.normalUrl).requestAsync(function(e, i) {
					if (200 == i) {
						var r = "GameSandBox://btntmp/" + this.normalUrl;
						BK.FileUtil.writeBufferToFile(r, e);
						var n = new BK.Texture(r);
						this.setNormalTexture(n)
					} else BK.Script.log(1, 1, "Fetch advertisemSent image failed.");
					t && t(this, i)
				}.bind(this))
			}, e.prototype.setPressTextureFromUrl = function(e, t) {
				this.pressUrl = e, new BK.HttpUtil(this.pressUrl).requestAsync(function(e, i) {
					if (200 == i) {
						var r = "GameSandBox://btntmp/" + this.pressUrl;
						BK.FileUtil.writeBufferToFile(r, e);
						var n = new BK.Texture(r);
						this.setPressTexture(n)
					} else BK.Script.log(1, 1, "Fetch advertisement image failed.");
					t && t(this, i)
				}.bind(this))
			}, e.prototype.setDisableTextureFromUrl = function(e, t) {
				this.disableUrl = e, new BK.HttpUtil(this.disableUrl).requestAsync(function(e, i) {
					if (200 == i) {
						var r = "GameSandBox://btntmp/" + this.disableUrl;
						BK.FileUtil.writeBufferToFile(r, e);
						var n = new BK.Texture(r);
						this.setDisableTexture(n)
					} else BK.Script.log(1, 1, "Fetch advertisement image failed.");
					t && t(this, i)
				}.bind(this))
			}, e
		}),
		function(e, t) {
			if ("object" == typeof e) {
				var i = function() {
					function e(e) {
						return .01745329251994 * e
					}
					return {
						Matrix: function() {
							function t() {
								for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
								if (this.data = new Float32Array(16), arguments.length) {
									if (1 == arguments.length) {
										if (arguments[0] instanceof t == 1)
											for (var r = 0; r < 16; r++) this.data[r] = arguments[0].data[r]
									} else if (16 == arguments.length)
										for (var n = 0; n < 16; n++) this.data[n] = arguments[n]
								} else this.data[0] = 1, this.data[5] = 1, this.data[10] = 1, this.data[15] = 1
							}
							return t.prototype.clone = function() {
								return new t(this)
							}, t.prototype.mul = function(e) {
								var t = this.data[0],
									i = this.data[1],
									r = this.data[2],
									n = this.data[3],
									o = this.data[4],
									a = this.data[5],
									s = this.data[6],
									h = this.data[7],
									l = this.data[8],
									u = this.data[9],
									d = this.data[10],
									c = this.data[11],
									f = this.data[12],
									_ = this.data[13],
									g = this.data[14],
									m = this.data[15],
									p = e.data[0],
									S = e.data[1],
									v = e.data[2],
									b = e.data[3],
									B = e.data[4],
									x = e.data[5],
									C = e.data[6],
									T = e.data[7],
									E = e.data[8],
									R = e.data[9],
									M = e.data[10],
									A = e.data[11],
									y = e.data[12],
									I = e.data[13],
									O = e.data[14],
									L = e.data[15];
								return this.data[0] = t * p + o * S + l * v + f * b, this.data[1] = i * p + a * S + u * v + _ * b, this.data[2] = r * p + s * S + d * v + g * b, this.data[3] = n * p + h * S + c * v + m * b, this.data[4] = t * B + o * x + l * C + f * T, this.data[5] = i * B + a * x + u * C + _ * T, this.data[6] = r * B + s * x + d * C + g * T, this.data[7] = n * B + h * x + c * C + m * T, this.data[8] = t * E + o * R + l * M + f * A, this.data[9] = i * E + a * R + u * M + _ * A, this.data[10] = r * E + s * R + d * M + g * A, this.data[11] = n * E + h * R + c * M + m * A, this.data[12] = t * y + o * I + l * O + f * L, this.data[13] = i * y + a * I + u * O + _ * L, this.data[14] = r * y + s * I + d * O + g * L, this.data[15] = n * y + h * I + c * O + m * L, this
							}, t.prototype.mulPoint = function(e) {
								var t = this.data[0],
									i = this.data[1],
									r = this.data[2],
									n = this.data[3],
									o = this.data[4],
									a = this.data[5],
									s = this.data[6],
									h = this.data[7],
									l = this.data[8],
									u = this.data[9],
									d = this.data[10],
									c = this.data[11],
									f = this.data[12],
									_ = this.data[13],
									g = this.data[14],
									m = this.data[15];
								void 0 === e.z && (e.z = 0);
								var p = {
									x: 0,
									y: 0,
									z: 0
								};
								p.x = t * e.x + o * e.y + l * e.z + f, p.y = i * e.x + a * e.y + u * e.z + _, p.z = r * e.x + s * e.y + d * e.z + g;
								e.x, e.y, e.z;
								return p
							}, t.prototype.inverse = function() {
								var e = this.data[10] * this.data[15] - this.data[14] * this.data[11],
									t = this.data[6] * this.data[15] - this.data[14] * this.data[7],
									i = this.data[6] * this.data[11] - this.data[10] * this.data[7],
									r = this.data[2] * this.data[15] - this.data[14] * this.data[3],
									n = this.data[2] * this.data[11] - this.data[10] * this.data[3],
									o = this.data[2] * this.data[7] - this.data[6] * this.data[3],
									a = this.data[9] * this.data[15] - this.data[13] * this.data[11],
									s = this.data[5] * this.data[15] - this.data[13] * this.data[7],
									h = this.data[5] * this.data[11] - this.data[9] * this.data[7],
									l = this.data[1] * this.data[15] - this.data[13] * this.data[3],
									u = this.data[1] * this.data[11] - this.data[9] * this.data[3],
									d = this.data[1] * this.data[7] - this.data[5] * this.data[3],
									c = this.data[9] * this.data[14] - this.data[13] * this.data[10],
									f = this.data[5] * this.data[14] - this.data[13] * this.data[6],
									_ = this.data[5] * this.data[10] - this.data[9] * this.data[6],
									g = this.data[1] * this.data[14] - this.data[13] * this.data[2],
									m = this.data[1] * this.data[10] - this.data[9] * this.data[2],
									p = this.data[1] * this.data[6] - this.data[5] * this.data[2],
									S = this.data[5] * e - this.data[9] * t + this.data[13] * i,
									v = this.data[9] * r - this.data[1] * e - this.data[13] * n,
									b = this.data[1] * t - this.data[5] * r + this.data[13] * o,
									B = this.data[5] * n - this.data[1] * i - this.data[9] * o,
									x = this.data[8] * t - this.data[4] * e - this.data[12] * i,
									C = this.data[0] * e - this.data[8] * r + this.data[12] * n,
									T = this.data[4] * r - this.data[0] * t - this.data[12] * o,
									E = this.data[0] * i - this.data[4] * n + this.data[8] * o,
									R = this.data[4] * a - this.data[8] * s + this.data[12] * h,
									M = this.data[8] * l - this.data[0] * a - this.data[12] * u,
									A = this.data[0] * s - this.data[4] * l + this.data[12] * d,
									y = this.data[4] * u - this.data[0] * h - this.data[8] * d,
									I = this.data[8] * f - this.data[4] * c - this.data[12] * _,
									O = this.data[0] * c - this.data[8] * g + this.data[12] * m,
									L = this.data[4] * g - this.data[0] * f - this.data[12] * p,
									D = this.data[0] * _ - this.data[4] * m + this.data[8] * p,
									K = this.data[0] * S + this.data[1] * x + this.data[2] * R + this.data[3] * I;
								return 0 != K && (this.data[0] = S / K, this.data[4] = x / K, this.data[8] = R / K, this.data[12] = I / K, this.data[1] = v / K, this.data[5] = C / K, this.data[9] = M / K, this.data[13] = O / K, this.data[2] = b / K, this.data[6] = T / K, this.data[10] = A / K, this.data[14] = L / K, this.data[3] = B / K, this.data[7] = E / K, this.data[11] = y / K, this.data[15] = D / K), this
							}, t.prototype.scale = function(e, i, r) {
								var n = t.fromScale(e, i, r);
								return this.mul(n)
							}, t.prototype.rotate = function(e, i, r) {
								var n = t.fromEulerAngle(e, i, r);
								return this.mul(n)
							}, t.prototype.translate = function(e, i, r) {
								var n = t.fromTranslate(e, i, r);
								return this.mul(n)
							}, t.prototype.transform = function(e, t, i) {
								return {
									x: e * this.data[0] + t * this.data[4] + i * this.data[8] + 1 * this.data[12],
									y: e * this.data[1] + t * this.data[5] + i * this.data[9] + 1 * this.data[13],
									z: e * this.data[2] + t * this.data[6] + i * this.data[10] + 1 * this.data[14]
								}
							}, t.prototype.toEulerAngle = function() {
								var e = 0,
									t = 0,
									i = 0,
									r = this.data[0],
									n = this.data[4],
									o = this.data[8],
									a = this.data[5],
									s = this.data[2],
									h = this.data[6],
									l = this.data[10],
									u = -h;
								t = u <= -1 ? -1.570796 : u >= 1 ? 1.570796 : Math.asin(u), Math.abs(u) > .9999 ? (i = 0, e = Math.atan2(-o, r)) : (e = Math.atan2(s, l), i = Math.atan2(n, a));
								var d = new Float32Array(3);
								return d[0] = t, d[1] = e, d[2] = i, d
							}, t.fromScale = function(e, i, r) {
								var n = new t;
								return n.data[0] = e, n.data[5] = i, n.data[10] = r, n
							}, t.fromTranslate = function(e, i, r) {
								var n = new t;
								return n.data[12] = e, n.data[13] = i, n.data[14] = r, n
							}, t.fromEulerAngle = function(i, r, n) {
								var o = -e(i),
									a = -e(r),
									s = -e(n),
									h = Math.cos(o),
									l = Math.sin(o),
									u = Math.cos(a),
									d = Math.sin(a),
									c = Math.cos(s),
									f = Math.sin(s);
								return new t(h * c + l * d * f, -h * f + l * d * c, l * u, 0, f * u, c * u, -d, 0, -l * c + h * d * f, f * l + h * d * c, h * u, 0, 0, 0, 0, 1)
							}, t.fromViewport = function(e, i, r, n, o, a) {
								var s = new t;
								return s.data[0] = (i - e) / 2, s.data[5] = (n - r) / 2, s.data[10] = (a - o) / 2, s.data[12] = (e + i) / 2, s.data[13] = (n + r) / 2, s.data[14] = (o + a) / 2, s.data[15] = 1, s
							}, t.fromOrthographic = function(e, i, r, n, o, a) {
								var s = new t;
								return s.data[0] = 2 / (i - e), s.data[5] = 2 / (n - r), s.data[10] = 2 / (o - a), s.data[12] = (e + i) / (e - i), s.data[13] = (n + r) / (r - n), s.data[14] = (o + a) / (o - a), s.data[15] = 1, s
							}, t
						}()
					}
				}();
				e.JSMatrix = i.Matrix
			}
		}(BK),
		function(e, t) {
			"object" == typeof e && (e.JSTransform = function() {
				return function() {
					function e(t) {
						if (void 0 == t) this.transform = new Float32Array(19), this.transform[2] = 1, this.transform[3] = 1, this.transform[4] = 1, this._localAnchorOrPivot = void 0, this._parentAnchorOrPivot = void 0, this._needUpdate = !0;
						else {
							if (t instanceof e != 1) throw new Error("BK.Transform.constructor!paramater error");
							this.transform = new Float32Array(19), this._localAnchorOrPivot = t._localAnchorOrPivot, this._parentAnchorOrPivot = t._parentAnchorOrPivot, this._needUpdate = t._needUpdate;
							for (var i = 0; i < 19; i++) this.transform[i] = t.transform[i]
						}
						this.matrix = {
							get: function() {
								return null
							},
							set: function(e, t, i, r, n, o) {
								this._needUpdate = !0, this.transform[2] = e, this.transform[3] = r, this.transform[4] = 1, this.transform[5] = i, this.transform[6] = t, this.transform[7] = 0, this.transform[8] = n, this.transform[9] = o, this.transform[10] = 0
							}
						}
					}
					return Object.defineProperty(e.prototype, "needUpdate", {
						get: function() {
							return this._needUpdate
						},
						set: function(e) {
							this._needUpdate = e
						},
						enumerable: !0,
						configurable: !0
					}), e.prototype.getNeedUpdate = function() {
						return this._needUpdate
					}, e.prototype.setNeedUpdate = function(e) {
						this._needUpdate = e
					}, Object.defineProperty(e.prototype, "scale", {
						get: function() {
							return {
								x: this.transform[2],
								y: this.transform[3],
								z: this.transform[4]
							}
						},
						set: function(e) {
							this.transform[2] == e.x && this.transform[3] == e.y && this.transform[4] == e.z || (this._needUpdate = !0, this.transform[2] = void 0 == e.x ? 1 : e.x, this.transform[3] = void 0 == e.y ? 1 : e.y, this.transform[4] = void 0 == e.z ? 1 : e.z)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "rotation", {
						get: function() {
							return {
								x: this.transform[5],
								y: this.transform[6],
								z: this.transform[7]
							}
						},
						set: function(e) {
							this.transform[5] == e.x && this.transform[6] == e.y && this.transform[7] == e.z || (this._needUpdate = !0, this.transform[5] = void 0 == e.x ? 0 : e.x, this.transform[6] = void 0 == e.y ? 0 : e.y, this.transform[7] = void 0 == e.z ? 0 : e.z)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "position", {
						get: function() {
							return {
								x: this.transform[8],
								y: this.transform[9],
								z: this.transform[10]
							}
						},
						set: function(e) {
							this.transform[8] == e.x && this.transform[9] == e.y && this.transform[10] == e.z || (this._needUpdate = !0, this.transform[8] = void 0 == e.x ? 0 : e.x, this.transform[9] = void 0 == e.y ? 0 : e.y, this.transform[10] = void 0 == e.z ? 0 : e.z)
						},
						enumerable: !0,
						configurable: !0
					}), e.prototype.getPosition = function() {
						return {
							x: this.transform[8],
							y: this.transform[9],
							z: this.transform[10]
						}
					}, e.prototype.setPosition = function(e, t, i) {
						this.transform[8] == e && this.transform[9] == t && this.transform[10] == i || (this._needUpdate = !0, this.transform[8] = void 0 == e ? 0 : e, this.transform[9] = void 0 == t ? 0 : t, this.transform[10] = void 0 == i ? 0 : i)
					}, Object.defineProperty(e.prototype, "localPivot", {
						get: function() {
							if (void 0 != this._localAnchorOrPivot && 0 != this._localAnchorOrPivot) throw new Error("BK.Transform.localPivot!current mode is localAnchor!!");
							return this._localAnchorOrPivot = 0, {
								x: this.transform[11],
								y: this.transform[12]
							}
						},
						set: function(e) {
							0 == this._localAnchorOrPivot && this.transform[11] == e.x && this.transform[12] == e.y || (this._needUpdate = !0, this._localAnchorOrPivot = 0, this.transform[11] = void 0 == e.x ? 0 : e.x, this.transform[12] = void 0 == e.y ? 0 : e.y)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "localAnchor", {
						get: function() {
							if (void 0 != this._localAnchorOrPivot && 1 != this._localAnchorOrPivot) throw new Error("BK.Transform.localAnchor!current mode is localPivot!!");
							return this._localAnchorOrPivot = 1, {
								x: this.transform[13],
								y: this.transform[14]
							}
						},
						set: function(e) {
							1 == this._localAnchorOrPivot && this.transform[13] == e.x && this.transform[14] == e.y || (this._needUpdate = !0, this._localAnchorOrPivot = 1, this.transform[13] = void 0 == e.x ? 0 : e.x, this.transform[14] = void 0 == e.y ? 0 : e.y)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "pivotParent", {
						get: function() {
							if (void 0 != this._parentAnchorOrPivot && 0 != this._parentAnchorOrPivot) throw new Error("BK.Transform.pivotParent!current mode is anchorParent!!");
							return this._parentAnchorOrPivot = 0, {
								x: this.transform[15],
								y: this.transform[16]
							}
						},
						set: function(e) {
							0 == this._parentAnchorOrPivot && this.transform[15] == e.x && this.transform[16] == e.y || (this._needUpdate = !0, this._parentAnchorOrPivot = 0, this.transform[15] = void 0 == e.x ? 0 : e.x, this.transform[16] = void 0 == e.y ? 0 : e.y)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "anchorParent", {
						get: function() {
							if (void 0 != this._parentAnchorOrPivot && 1 != this._parentAnchorOrPivot) throw new Error("BK.Transform.anchorParent!current mode is pivotParent!!");
							return this._parentAnchorOrPivot = 1, {
								x: this.transform[17],
								y: this.transform[18]
							}
						},
						set: function(e) {
							1 == this._parentAnchorOrPivot && this.transform[17] == e.x && this.transform[18] == e.y || (this._needUpdate = !0, this._parentAnchorOrPivot = 1, this.transform[17] = void 0 == e.x ? 0 : e.x, this.transform[18] = void 0 == e.y ? 0 : e.y)
						},
						enumerable: !0,
						configurable: !0
					}), Object.defineProperty(e.prototype, "contentSize", {
						get: function() {
							return {
								width: this.transform[0],
								height: this.transform[1]
							}
						},
						set: function(e) {
							this.transform[0] == e.width && this.transform[1] == e.height || (this._needUpdate = !0, this.transform[0] = void 0 == e.width ? 0 : e.width, this.transform[1] = void 0 == e.height ? 0 : e.height)
						},
						enumerable: !0,
						configurable: !0
					}), e.prototype.getContentSize = function() {
						return {
							width: this.transform[0],
							height: this.transform[1]
						}
					}, e.prototype.setContentSize = function(e, t) {
						this.transform[0] == e && this.transform[1] == t || (this._needUpdate = !0, this.transform[0] = void 0 == e ? 0 : e, this.transform[1] = void 0 == t ? 0 : t)
					}, e.prototype.update = function(e, t) {
						return 1 == this._needUpdate && (1 == this._localAnchorOrPivot && (this.transform[11] = this.transform[13] * this.transform[0], this.transform[12] = this.transform[14] * this.transform[1]), 1 == this._parentAnchorOrPivot && (this.transform[15] = this.transform[17] * e, this.transform[16] = this.transform[18] * t), this._needUpdate = !1), this.transform
					}, e
				}()
			}())
		}(BK);
	var __extends = this && this.__extends || function() {
		var e = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array && function(e, t) {
			e.__proto__ = t
		} || function(e, t) {
			for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
		};
		return function(t, i) {
			function r() {
				this.constructor = t
			}
			e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
		}
	}();
	! function(e, t) {
		if ("object" == typeof e) {
			var i = function() {
				var e = function() {
					function e() {
						this.getTypeSize = function(e) {
							return this._gl.BYTE == e ? 1 : this._gl.UNSIGNED_BYTE == e ? 1 : this._gl.SHORT == e ? 2 : this._gl.UNSIGNED_SHORT == e ? 2 : this._gl.INT == e ? 4 : this._gl.UNSIGNED_INT == e ? 4 : this._gl.FLOAT == e ? 4 : void 0
						}, this._ibo = 0, this._vbo = 0, this._program = 0, this._hasLoadShader = !1, this._gl = bkWebGLGetInstance()
					}
					return e.__hookGlCommit = function() {
						var e = bkWebGLGetInstance();
						BK.GLRenderContext.__updataCallback(e), e.oldGlCommit()
					}, e.hookGLCommit = function(e) {
						this.__updataCallback = e, this.__gl = bkWebGLGetInstance(), this.__oldGlCommit = this.__gl.glCommit, this.__gl.glCommit = this.__hookGlCommit, this.__gl.oldGlCommit = this.__oldGlCommit, this.__hookGlCommit.bind(this.__gl)
					}, e.exit = function() {
						this.__gl = bkWebGLGetInstance(), this.__oldGlCommit && (this.__gl.glCommit = this.__oldGlCommit)
					}, Object.defineProperty(e.prototype, "gl", {
						get: function() {
							return this._gl
						},
						enumerable: !0,
						configurable: !0
					}), e.prototype.__loadShader = function(e, t) {
						var i, r = e || "uniform mat4 worldMat; uniform mat4 projMat; attribute vec2 pos; attribute vec2 inUVs; varying lowp vec2 outUVs;                       void main() { gl_Position = projMat * worldMat * vec4(pos, 0, 1); outUVs = inUVs; }",
							n = t || "varying lowp vec2 outUVs; uniform sampler2D uSampler; void main() { gl_FragColor = texture2D(uSampler, outUVs); }",
							o = this._gl.createShader(this._gl.VERTEX_SHADER);
						e && (this._gl.enable(this._gl.BLEND), this._gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)), 0 != o && (this._gl.shaderSource(o, r), this._gl.compileShader(o));
						var a = this._gl.createShader(this._gl.FRAGMENT_SHADER);
						0 != a && (this._gl.shaderSource(a, n), this._gl.compileShader(a));
						var s = this._gl.createProgram();
						return this._gl.attachShader(s, o), this._gl.attachShader(s, a), this._gl.linkProgram(s), this._gl.deleteShader(o), this._gl.deleteShader(a), this._gl.getError() == this._gl.NO_ERROR ? (this._program = s, this._gl.useProgram(this._program)) : (i = this._gl.getProgramInfoLog(s), BK.Script.log(1, -1, "link program fail, err = " + i)), this.calculateProjection(), this._program
					}, e.prototype.getProgram = function() {
						return this._program
					}, e.prototype.__loadArrayBuffer = function() {
						var e = this._gl.getAttribLocation(this._program, "pos"),
							t = this._gl.getAttribLocation(this._program, "inUVs");
						0 == this._vbo && (this._vbo = this._gl.createBuffer()), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo), this._gl.enableVertexAttribArray(e), this._gl.enableVertexAttribArray(t), this._gl.glVertexAttribPointer(e, 2, this._gl.FLOAT, !1, 16, 0, !0), this._gl.glVertexAttribPointer(t, 2, this._gl.FLOAT, !1, 16, 8, !0), 0 == this._ibo && (this._ibo = this._gl.createBuffer())
					}, e.prototype.dispose = function() {
						0 != this._vbo && this._gl.deleteBuffer(this._vbo), 0 != this._ibo && this._gl.deleteBuffer(this._ibo), 0 != this._program && this._gl.deleteProgram(this._program), this._gl = null
					}, e.prototype.save = function() {
						this._prevVP = this._gl.glGetParameterInt(this._gl.VIEWPORT, 4), this._prevVBO = this._gl.glGetParameterInt(this._gl.ARRAY_BUFFER_BINDING, 1), this._prevIBO = this._gl.glGetParameterInt(this._gl.ELEMENT_ARRAY_BUFFER_BINDING, 1), this._prevProgram = this._gl.glGetParameterInt(this._gl.CURRENT_PROGRAM, 1), this._prevTextureID = this._gl.glGetParameterInt(this._gl.TEXTURE_BINDING_2D, 1), this._prevTextureUnit = this._gl.glGetParameterInt(this._gl.ACTIVE_TEXTURE, 1), this._prevFrameBuffer = this._gl.glGetParameterInt(this._gl.FRAMEBUFFER_BINDING, 1), this._prevRenderBuffer = this._gl.glGetParameterInt(this._gl.RENDERBUFFER_BINDING, 1), this._activeAttribusInfo = [];
						for (var e = this._gl.glGetProgramParameter(this._prevProgram, gl.ACTIVE_ATTRIBUTES), t = 0; t < e; ++t) {
							var i = this._gl.getActiveAttrib(this._prevProgram, t),
								r = i.name,
								n = this._gl.getAttribLocation(this._prevProgram, r),
								o = this._gl.getVertexAttrib(r, this._gl.VERTEX_ATTRIB_ARRAY_SIZE),
								a = this._gl.getVertexAttrib(r, this._gl.VERTEX_ATTRIB_ARRAY_TYPE),
								s = this._gl.getVertexAttrib(r, this._gl.VERTEX_ATTRIB_ARRAY_NORMALIZED),
								h = this._gl.getVertexAttrib(r, this._gl.VERTEX_ATTRIB_ARRAY_STRIDE),
								l = this._gl.getVertexAttribOffset(n, gl.VERTEX_ATTRIB_ARRAY_POINTER);
							if (i.name = r, i.index = n, i.size = o, i.type = a, i.normalized = s, i.stride = h, i.offset = l, void 0 !== this._gl.recordVertexAttribPointer)
								for (var u = 0; u < this._gl.recordVertexAttribPointer.length; u++) {
									var d = this._gl.recordVertexAttribPointer[u];
									if (i.index == d.index && i.type == d.type && i.stride == d.stride && i.offset == d.offset) {
										i.index = d.index, i.size = d.size, i.type = d.type, i.normalized = d.normalized, i.stride = d.stride, i.offset = d.offset;
										break
									}
								}
							this.debugLog("save name:" + i.name + " index:" + i.index + " size:" + i.size + " type:" + i.type + " normalized:" + i.normalized + " stride:" + i.stride + " offset:" + i.offset), this._activeAttribusInfo.push(i)
						}
					}, e.prototype.restore = function() {
						if (this._gl.viewport(this._prevVP[0], this._prevVP[1], this._prevVP[2], this._prevVP[3]), this._gl.useProgram(this._prevProgram), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._prevVBO), this._activeAttribusInfo.length > 0) {
							this._activeAttribusInfo[0].stride;
							for (var e = 0; e < this._activeAttribusInfo.length; e++) {
								var t = this._activeAttribusInfo[e],
									i = (t.name, t.index),
									r = t.size,
									n = t.type,
									o = t.normalized,
									a = t.offset,
									s = t.stride,
									h = 0 != o;
								this.debugLog("restore name:" + t.name + " index:" + i + " size:" + r + " type:" + n + " normalized:" + o + " stride:" + s + " offset:" + a), this._gl.vertexAttribPointer(i, r, n, h, s, a, !0)
							}
						}
						this._activeAttribusInfo = [], this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._prevIBO), this._gl.activeTexture(this._prevTextureUnit), this._gl.bindTexture(this._gl.TEXTURE_2D, this._prevTextureID), this._gl.glBindFramebuffer(this._gl.FRAMEBUFFER, this._prevFrameBuffer), this._gl.glBindRenderbuffer(this._gl.RENDERBUFFER, this._prevRenderBuffer)
					}, e.prototype.setViewport = function(e, t, i, r) {
						this._gl.viewport(e, t, i, r)
					}, e.prototype.setProjection = function(e) {
						this._projMat = e
					}, e.prototype.calculateProjection = function() {
						var e = this._projMat.data;
						this._gl.useProgram(this._program);
						var t = this._gl.getUniformLocation(this._program, "projMat");
						this._gl.uniformMatrix4fv(t, !1, e);
						var i = this._gl.getUniformLocation(this._program, "uSampler");
						this._gl.uniform1i(i, 0);
						this._gl.getError()
					}, e.prototype.debugLog = function(e) {}, e.prototype.getProjection = function() {
						return this._projMat
					}, e.prototype.drawMesh = function(e, t, i, r, n) {
						this._program = n, this._gl.useProgram(this._program), this.__loadArrayBuffer();
						var o = this._gl.getUniformLocation(this._program, "worldMat");
						this._gl.uniformMatrix4fv(o, !1, i.data), this._gl.activeTexture(this._gl.TEXTURE0), this._gl.bindTexture(this._gl.TEXTURE_2D, r), this._gl.bindBuffer(this._gl.ARRAY_BUFFER, this._vbo), this._gl.bufferData(this._gl.ARRAY_BUFFER, e, this._gl.STATIC_DRAW), this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, this._ibo), this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, t, this._gl.STATIC_DRAW), this._gl.drawElements(this._gl.TRIANGLES, t.length, this._gl.UNSIGNED_SHORT, 0)
					}, e
				}();
				return {
					GLRenderNode: function() {
						function e(e, t) {
							this._context = e, this._parent = null, this._childrens = new Array, this._textureID = 0, this._localMatrix = new BK.JSMatrix, this._worldMatrix = new BK.JSMatrix, this._localTransform = new BK.JSTransform, this._zOrder = 0, this._needSort = !1, this._needUpdate = !0, this._needUpdateWorldMatrix = !0, this.canUserInteract = !1, this.hidden = !1, this._hasDispose = !1, this.program = void 0, this._vs = t && t.vs ? t.vs : null, this._fs = t && t.fs ? t.fs : null
						}
						return Object.defineProperty(e.prototype, "path", {
							set: function(e) {
								this._path != e && (this._path = e, 0 != this._textureID && (this._context.gl.deleteTexture(this._textureID), this._textureID = 0))
							},
							enumerable: !0,
							configurable: !0
						}), e.prototype.setUrlPath = function(e, t) {
							new BK.HttpUtil(e).requestAsync(function(i, r) {
								if (1 != this._hasDispose) {
									if (200 == r) {
										var n = "GameSandBox://ad/" + e;
										BK.FileUtil.writeBufferToFile(n, i), this.path = n
									} else BK.Script.log(1, 1, "Fetch advertisement Sent image failed.");
									t && t(this, r)
								} else BK.Script.log(1, 1, "node hasn been disposed.response ignore")
							}.bind(this))
						}, Object.defineProperty(e.prototype, "parent", {
							get: function() {
								return this._parent
							},
							set: function(e) {
								this._parent = e
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "zOrder", {
							get: function() {
								return this._zOrder
							},
							set: function(e) {
								this._zOrder != e && (this._needSort = !0, this._zOrder = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "scale", {
							get: function() {
								return this._localTransform.scale
							},
							set: function(e) {
								var t = this._localTransform.scale;
								t.x == e.x && t.y == e.y && t.z == e.z || (this._needUpdate = !0, this._localTransform.scale = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "rotation", {
							get: function() {
								return this._localTransform.rotation
							},
							set: function(e) {
								var t = this._localTransform.rotation;
								t.x == e.x && t.y == e.y && t.z == e.z || (this._localTransform.rotation = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "position", {
							get: function() {
								return this._localTransform.position
							},
							set: function(e) {
								var t = this._localTransform.position;
								t.x == e.x && t.y == e.y && t.z == e.z || (this._localTransform.position = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "contentSize", {
							get: function() {
								return this._localTransform.getContentSize()
							},
							set: function(e) {
								var t = this._localTransform.contentSize;
								t.width == e.width && t.height == e.height || (this._needUpdate = !0, this._localTransform.contentSize = e)
							},
							enumerable: !0,
							configurable: !0
						}), e.prototype.getContentSize = function() {
							return this._localTransform.getContentSize()
						}, e.prototype.setContentSize = function(e, t) {
							this._localTransform.setContentSize(e, t)
						}, Object.defineProperty(e.prototype, "localPivot", {
							get: function() {
								return this._localTransform.localPivot
							},
							set: function(e) {
								var t = this._localTransform.localPivot;
								t.x == e.x && t.y == e.y || (this._localTransform.localPivot = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "localAnchor", {
							get: function() {
								return this._localTransform.localAnchor
							},
							set: function(e) {
								var t = this._localTransform.localAnchor;
								t.x == e.x && t.y == e.y || (this._localTransform.localAnchor = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "pivotParent", {
							get: function() {
								return this._localTransform.pivotParent
							},
							set: function(e) {
								var t = this._localTransform.pivotParent;
								t.x == e.x && t.y == e.y || (this._localTransform.pivotParent = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "anchorParent", {
							get: function() {
								return this._localTransform.anchorParent
							},
							set: function(e) {
								var t = this._localTransform.anchorParent;
								t.x == e.x && t.y == e.y || (this._localTransform.anchorParent = e)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(e.prototype, "worldMatrix", {
							get: function() {
								if (0 == this.__needUpdateTransform()) return this._worldMatrix.clone();
								var e = this.matrixFromLocal(),
									t = null != this._parent ? this._parent.worldMatrix : new BK.JSMatrix;
								return this.__updateWorldMatrix(t.mul(e)), this._worldMatrix.clone()
							},
							enumerable: !0,
							configurable: !0
						}), e.prototype.dispose = function() {
							if (this.children)
								for (var e = 0; e < this.children.length; e++) this.children[e].dispose();
							this._context.gl.deleteTexture(this._textureID), this._hasDispose = !0
						}, e.prototype.addChild = function(e) {
							for (var t = 0; t < this._childrens.length; t++)
								if (this._childrens[t] == e || null != e.parent) return BK.Script.log(0, 0, "BK.Node.addChild!node has been in node tree"), !1;
							return e.parent = this, this._needSort = !0, this._childrens.push(e), !0
						}, Object.defineProperty(e.prototype, "children", {
							get: function() {
								return this._childrens
							},
							enumerable: !0,
							configurable: !0
						}), e.prototype.__needUpdateTransform = function() {
							return 1 == this._needUpdateWorldMatrix || 1 == this._localTransform.getNeedUpdate() || null != this._parent && (this._needUpdateWorldMatrix = this._parent.__needUpdateTransform(), this._needUpdateWorldMatrix)
						}, e.prototype.__updateWorldMatrix = function(e) {
							this._worldMatrix = e, this._needUpdateWorldMatrix = !1, this._childrens.forEach(function(e) {
								e._needUpdateWorldMatrix = !0
							})
						}, e.prototype.matrixFromLocal = function() {
							if (0 == this._localTransform.getNeedUpdate()) return this._localMatrix.clone();
							var e;
							e = null != this._parent ? this._localTransform.update(this._parent._localTransform.transform[0], this._parent._localTransform.transform[1]) : this._localTransform.update(0, 0);
							var t = new BK.JSMatrix;
							t.translate(e[8], e[9], e[10]), t.rotate(e[5], e[6], e[7]), t.scale(e[2], e[3], e[4]);
							var i = new BK.JSMatrix;
							if (i.data[12] = -e[11], i.data[13] = -e[12], this._localMatrix = t.mul(i), null != this._parent) {
								var r = new BK.JSMatrix;
								r.data[12] = e[15], r.data[13] = e[16], this._localMatrix = r.mul(t)
							}
							return this._localMatrix.clone()
						}, e.prototype.loadTexture = function() {
							if (0 == this._textureID) {
								if (this._path) {
									var e = BK.Image.loadImage(this._path);
									if (!e) return 0;
									var t = this._context.gl;
									this._textureID = t.createTexture(), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this._textureID), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.glTexParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.glTexParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e)
								}
								return 1
							}
							return this._textureID
						}, e.prototype.render = function() {
							if (1 != this.hidden) {
								1 == this._needSort && (this._needSort = !1, this._childrens.sort(function(e, t) {
									return e._zOrder < t._zOrder ? 1 : 0
								}));
								var e = this._localTransform.transform[0],
									t = this._localTransform.transform[1],
									i = new Uint16Array([0, 1, 2, 0, 2, 3]),
									r = new Float32Array([0, 0, 0, 1, e, 0, 1, 1, e, t, 1, 0, 0, t, 0, 0]),
									n = this.loadTexture();
								0 != n && (this.program || (this.program = this._context.__loadShader(this._vs, this._fs)), this._context.drawMesh(r, i, this.worldMatrix, n, this.program));
								for (var o = 0; o < this._childrens.length; o++) this._childrens[o].render()
							}
						}, e.prototype.__log = function(e) {
							BK.Script.log(1, 1, "GLRenderNode:" + e)
						}, e.prototype.hittest = function(e) {
							this._context.getProjection();
							var t = this.worldMatrix,
								i = {
									x: 0,
									y: 0
								},
								r = {
									x: i.x + this.contentSize.width,
									y: i.y + this.contentSize.height
								},
								n = t.mulPoint(i),
								o = t.mulPoint(r);
							return e.x >= n.x && e.x <= o.x && e.y >= n.y && e.y <= o.y
						}, e
					}(),
					GLRenderContext: e
				}
			}();
			e.GLRenderNode = i.GLRenderNode, e.GLRenderContext = i.GLRenderContext
		}
	}(BK),
	function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.GLRenderButton = t())
	}(BK, function() {
		return function(e) {
			function t(t, i, r) {
				var n = e.call(this, t) || this;
				return n.updateTexture = function(e) {}, n.__nativeObj = new BK.GLRenderNode(t), n.contentSize = {
					width: i,
					height: r
				}, n.isCancelClick = void 0, n.touchStatus = 0, n.canUserInteract = !0, n.enable = !0, n.canClick = !0, n.addTouchListener(), n
			}
			return __extends(t, e), t.prototype.addTouchListener = function() {
				"undefined" != typeof UIEventHandler ? (UIEventHandler.addNodeEvent(this, 1, function(e, t, i, r) {
					e.isCancelClick = !1, e.enable ? e.changeStatus(1) : e.changeStatus(2)
				}.bind(this)), UIEventHandler.addNodeEvent(this, 2, function(e, t, i, r) {
					var n = {
						x: i,
						y: r
					};
					0 == e.hittest(n) && (e.isCancelClick = !0)
				}.bind(this)), UIEventHandler.addNodeEvent(this, 3, function(e, t, i, r) {
					e.enable ? e.changeStatus(0) : e.changeStatus(2), 0 == e.isCancelClick && e.touchInsideCallback && 1 == this.canClick && e.touchInsideCallback(e)
				}.bind(this))) : BK.Script.log(1, 1, "UIEventHandler is undefined")
			}, t.prototype.dispose = function() {
				UIEventHandler.removeNodeEvent(this, 1), UIEventHandler.removeNodeEvent(this, 2), UIEventHandler.removeNodeEvent(this, 3), e.prototype.dispose.call(this)
			}, t.prototype.changeStatus = function(e) {
				this.touchStatus = e, this.updateTexture(e)
			}, t.prototype.setTouchInsideCallback = function(e) {
				this.touchInsideCallback = e
			}, t
		}(BK.GLRenderNode)
	}),
	function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.PlusTips = t())
	}(BK, function() {
		return function() {
			function e(e) {
				if (this.useWebGl = !0, 1 == arguments.length && (this.useWebGl = e), this.screenWidth = BK.Director.screenPixelSize.width, this.screenHeight = BK.Director.screenPixelSize.height, this.screenMode = 0, this.createNum = 0, this.node = new Array(3), this.maskUrl = "https://i.hudongcdn.com/plusRes/mask.png", this.tipsUrl_v = "https://i.hudongcdn.com/plusRes/plusTips_v.png", this.tipsUrl_h = "https://i.hudongcdn.com/plusRes/plusTips_h.png", this.sureBtnUrl = "https://i.hudongcdn.com/plusRes/button.png", this.screenWidth > this.screenHeight) {
					this.screenMode = 1, this.scale_x = this.screenWidth / 1334, this.scale_y = this.screenHeight / 750;
					t = this.scale_x > this.scale_y ? this.scale_y : this.scale_x;
					this.tipsWidth = 700 * t / BK.Director.root.scale.x, this.tipsHeight = 524 * t / BK.Director.root.scale.y, this.tips_x = (this.screenWidth / BK.Director.root.scale.x - this.tipsWidth) / 2, this.tips_y = 162 * this.scale_y / BK.Director.root.scale.y, this.buttonWidth = 260 * t / BK.Director.root.scale.x, this.buttonHeight = 81 * t / BK.Director.root.scale.y, this.button_x = (this.screenWidth / BK.Director.root.scale.x - this.buttonWidth) / 2, this.button_y = 41 * this.scale_x / BK.Director.root.scale.y
				} else {
					this.scale_x = this.screenWidth / 750, this.scale_y = this.screenHeight / 1334;
					var t = this.scale_x > this.scale_y ? this.scale_y : this.scale_x;
					this.tipsWidth = 452 * t / BK.Director.root.scale.x, this.tipsHeight = 820 * t / BK.Director.root.scale.y, this.tips_x = (this.screenWidth / BK.Director.root.scale.x - this.tipsWidth) / 2, this.tips_y = 362 * this.scale_y / BK.Director.root.scale.y, this.buttonWidth = 260 * t / BK.Director.root.scale.x, this.buttonHeight = 79 * t / BK.Director.root.scale.y, this.button_x = (this.screenWidth / BK.Director.root.scale.x - this.buttonWidth) / 2, this.button_y = 197 * this.scale_y / BK.Director.root.scale.y
				}
				this.tipsUrl = 1 == this.screenMode ? this.tipsUrl_h : this.tipsUrl_v, this.screenWidth = this.screenWidth / BK.Director.root.scale.x, this.screenHeight = this.screenHeight / BK.Director.root.scale.y
			}
			return e.prototype.showTips = function(e) {
				this.useWebGl ? this.showTipsWebGL(e) : this.showTipsBK(e)
			}, e.prototype.showTipsWebGL = function(e) {
				this.context = new BK.GLRenderContext;
				var t = BK.JSMatrix.fromOrthographic(0, BK.Director.screenPixelSize.width, 0, BK.Director.screenPixelSize.height, -1, 1);
				this.context.setProjection(t), this.node[0] = new BK.GLRenderNode(this.context, {
					vs: "uniform mat4 worldMat;                         uniform mat4 projMat;                         attribute vec2 pos;                         attribute vec2 inUVs;                         varying lowp vec2 outUVs;                         void main() {                             gl_Position = projMat * worldMat * vec4(pos, 0, 1);                             outUVs = inUVs;                          }",
					fs: "precision mediump float;                         uniform sampler2D uSampler;                        void main() {                             gl_FragColor = texture2D(uSampler,vec2(0,0));                             gl_FragColor.a = 0.8;                         }"
				}), this.node[0].setUrlPath(this.maskUrl), this.node[0].contentSize = {
					width: this.screenWidth,
					height: this.screenHeight
				}, this.node[0].position = {
					x: 0,
					y: 0
				}, this.node[0].canUserInteract = !0, this.node[1] = new BK.GLRenderNode(this.context), this.node[1].setUrlPath(this.tipsUrl), this.node[1].path = 1 == this.screenMode ? "GameRes://resource/plusTips_h.png" : "GameRes://resource/plusTips_v.png", this.node[1].contentSize = {
					width: this.tipsWidth,
					height: this.tipsHeight
				}, this.node[1].position = {
					x: this.tips_x,
					y: this.tips_y
				}, this.node[0].addChild(this.node[1]), this.node[2] = new BK.GLRenderButton(this.context, this.buttonWidth, this.buttonHeight), this.node[2].setUrlPath(this.sureBtnUrl), this.node[2].position = {
					x: this.button_x,
					y: this.button_y
				}, this.node[2].canUserInteract = !0, this.node[2].setTouchInsideCallback(e), this.node[0].addChild(this.node[2]), UIEventHandler && UIEventHandler.setRootNode(this.node[0]);
				var i = this;
				BK.GLRenderContext.hookGLCommit(function() {
					i.context.save(), gl.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height), i.context.gl.useProgram(i.context.getProgram()), i.node[0].render(), i.context.restore()
				})
			}, e.prototype.showTipsBK = function(e) {
				this.callback = e;
				var t = {
						x: 0,
						y: 0
					},
					i = {
						r: 0,
						g: 0,
						b: 0,
						a: .8
					};
				this.bkCreateSprite(0, this.maskUrl, this.screenWidth, this.screenHeight, t, i);
				var r = {
						x: this.tips_x,
						y: this.tips_y
					},
					n = {
						r: 1,
						g: 1,
						b: 1,
						a: 1.25
					};
				this.bkCreateSprite(1, this.tipsUrl, this.tipsWidth, this.tipsHeight, r, n);
				var o = {
						x: this.button_x,
						y: this.button_y
					},
					a = {
						r: 1,
						g: 1,
						b: 1,
						a: 1.25
					};
				this.bkCreateSprite(2, this.sureBtnUrl, this.buttonWidth, this.buttonHeight, o, a), BK.Script.getTouchModeAll = 1, BK.Director.ticker.add(function(e, t) {
					BK.TouchEvent.getAllTouchEvent();
					BK.TouchEvent.updateTouchStatus()
				}.bind(this))
			}, e.prototype.bkCreateSprite = function(e, t, i, r, n, o) {
				var a = this;
				new BK.HttpUtil(t).requestAsync(function(s, h) {
					if (200 == h) {
						var l = t.split("/"),
							u = l[l.length - 1],
							d = "GameSandBox://plusRes/" + u;
						if (BK.Script.log(0, 0, "  picName = " + u + " path == " + d), BK.FileUtil.writeBufferToFile(d, s), e < 2) {
							var c = new BK.Texture(d);
							a.node[e] = new BK.Sprite(i, r, c, 0, 1, 1, 1)
						} else a.node[e] = new BK.Button(i, r, d, a.callback);
						a.node[e].zOrder = 0, a.node[e].position = n, a.node[e].canUserInteract = !0, a.node[e].color = o, 3 == ++a.createNum && (BK.Director.root.addChild(a.node[0]), a.node[0].addChild(a.node[1]), a.node[0].addChild(a.node[2]))
					} else a.callback()
				})
			}, e
		}()
	}),
	function(e, t) {
		if ("object" == typeof e) {
			var i = function() {
				var e = "attribute vec3 Position;    attribute vec2 TexCoordIn;    attribute vec4 SourceColor;    uniform mat4 ModelView;    uniform mat4 Projection;    varying vec4 DestColor;    varying vec2 TexCoordOut;    void main()    {        mat4 gWVP = Projection * ModelView;        gl_Position = gWVP * vec4(Position, 1);        DestColor = SourceColor;        TexCoordOut = TexCoordIn;    }",
					t = "varying lowp vec2 TexCoordOut;    uniform int formatYUV;    uniform sampler2D samplerY;    uniform sampler2D samplerU;    uniform sampler2D samplerV;    uniform sampler2D samplerUV;    const lowp vec3 defyuv = vec3(-0.0/255.0, -128.0/255.0, -128.0/255.0);    void main(void)    {        lowp vec3 yuv = vec3(0.0);        if (formatYUV == 0) {            yuv.x = texture2D(samplerY, TexCoordOut).r;            yuv.y = texture2D(samplerU, TexCoordOut).r;            yuv.z = texture2D(samplerV, TexCoordOut).r;            yuv += defyuv;        } else if (formatYUV == 1) {            yuv.x = texture2D(samplerY, TexCoordOut).r;            yuv.y = texture2D(samplerUV, TexCoordOut).a;            yuv.z = texture2D(samplerUV, TexCoordOut).r;            yuv += defyuv;        } else if (formatYUV == 3) {            yuv.x = texture2D(samplerY, TexCoordOut).r;            yuv.y = texture2D(samplerUV, TexCoordOut).r;            yuv.z = texture2D(samplerUV, TexCoordOut).a;            yuv += defyuv;        }        lowp vec3 rgb = mat3(1.0, 1.0, 1.0,                            0.0, -.34414, 1.772,                            1.402, -.71414, 0.0) * yuv;        gl_FragColor = vec4(rgb, 1.0);    }",
					i = (function() {
						function e() {}
					}(), function() {
						function e() {}
					}(), function() {
						function e() {
							this.videoViews = new Array, void 0 !== BK.Director.setQAVDelegate && BK.Director.setQAVDelegate(this)
						}
						return e.prototype.addView = function(e) {
							var t = this.videoViews.filter(function(t) {
								return e == t
							});
							return t.length || this.videoViews.push(e), 0 == t.length
						}, e.prototype.delView = function(e) {
							var t = this.videoViews.length;
							return this.videoViews = this.videoViews.filter(function(t) {
								return e != t
							}), t != this.videoViews.length
						}, e.prototype.onRemoveVideoPreview = function(e) {
							this.videoViews.forEach(function(t) {
								t.identifier == e.identifier && t.render(e)
							})
						}, e.prototype.onLocalVideoPreview = function(e) {
							this.videoViews.forEach(function(t) {
								if (t.identifier == e.identifier) {
									var i = e,
										r = t;
									r.onPrePreview && (i = r.onPrePreview.call(r, e)), t.render(i)
								}
							})
						}, e.prototype.onLocalVideoPreProcess = function(e) {
							this.videoViews.forEach(function(t) {
								if (t.identifier == e.identifier) {
									var i = t;
									i.onPreProcess && i.onPreProcess.call(i, e)
								}
							})
						}, e.Instance = new e, e
					}()),
					r = function() {
						function r(e, t, r, n, o, a, s) {
							this.identifier = e, this.__nativeObj = new BK.Sprite(t, r, null, 0, 0, 1, 1), this._innerBindMethods4NativeObj(), null != n && void 0 != n || (n = !0), a && (this.position = a), o ? o.addChild(this) : BK.Director.root.addChild(this), s && (this.zOrder = s), 1 == n && i.Instance.addView(this)
						}
						return r.prototype._innerBindMethods4NativeObj = function(e) {
							var t = this;
							Object.getOwnPropertyNames(this.__nativeObj).forEach(function(i, r, n) {
								var o = i;
								e && -1 != e.indexOf(o) || Object.defineProperty(t, o, {
									get: function() {
										return this.__nativeObj[o]
									},
									set: function(e) {
										this.__nativeObj[o] = e
									},
									enumerable: !0,
									configurable: !0
								})
							})
						}, r.prototype.addChild = function(e) {
							this.__nativeObj && this.__nativeObj.addChild(e)
						}, r.prototype._restartRenderTimer = function() {
							this.__renderTimeoutCallback && this.__renderTimeoutThreshold > 0 && (BK.Director.ticker.removeTimeout(this), BK.Director.ticker.setTimeout(function(e, t, i) {
								this.__renderTimeoutCallback && this.__renderTimeoutCallback.call(this)
							}, this.__renderTimeoutThreshold, this))
						}, r.prototype._innerUseRGBA = function(e, t) {
							if (this.__bitmap) {
								var i = this.__bitmap.size;
								i.width == e && i.height == t || (BK.Script.log(0, 0, "BK.QAVView.useRGBA!size change, ow = " + i.width + ", oh = " + i.height + ", nw = " + e + ", nh = " + t), this.__bitmap = BK.Texture.createBitmapTexture(e, t), this.__nativeObj.setTexture(this.__bitmap))
							} else this.__bitmap = BK.Texture.createBitmapTexture(e, t), this.__nativeObj.setTexture(this.__bitmap)
						}, r.prototype._innerUseYUVMaterial_I420 = function(i, r) {
							if (this.__yuvMaterial || (this.__yuvMaterial = new BK.Render.Material(e, t, !0), this.__nativeObj.attachComponent(this.__yuvMaterial), this.__yuvMaterial.uniforms.samplerY = 0, this.__yuvMaterial.uniforms.samplerU = 1, this.__yuvMaterial.uniforms.samplerV = 2, this.__yuvMaterial.uniforms.samplerUV = 3), this.__bitmapY) {
								var n = this.__bitmapY.size;
								n.width == i && n.height == r || (BK.Script.log(0, 0, "BK.QAVView.useYUVMaterial_I420!Y size change, ow = " + n.width + ", oh = " + n.height + ", nw = " + i + ", nh = " + r), this.__bitmapY = BK.Texture.createBitmapTexture(i, r, 7), this.__yuvMaterial.setTexture(0, this.__bitmapY))
							} else this.__bitmapY = BK.Texture.createBitmapTexture(i, r, 7), this.__yuvMaterial.setTexture(0, this.__bitmapY);
							if (this.__bitmapU) {
								var o = this.__bitmapU.size;
								o.width == i / 2 && o.height == r / 2 || (BK.Script.log(0, 0, "BK.QAVView.useYUVMaterial_I420!U size change, ow = " + o.width + ", oh = " + o.height + ", nw = " + i + ", nh = " + r), this.__bitmapU = BK.Texture.createBitmapTexture(i / 2, r / 2, 7), this.__yuvMaterial.setTexture(1, this.__bitmapU))
							} else this.__bitmapU = BK.Texture.createBitmapTexture(i / 2, r / 2, 7), this.__yuvMaterial.setTexture(1, this.__bitmapU);
							if (this.__bitmapV) {
								var a = this.__bitmapV.size;
								a.width == i / 2 && a.height == r / 2 || (BK.Script.log(0, 0, "BK.QAVView.useYUVMaterial_I420!V size change, ow = " + a.width + ", oh = " + a.height + ", nw = " + i + ", nh = " + r), this.__bitmapV = BK.Texture.createBitmapTexture(i / 2, r / 2, 7), this.__yuvMaterial.setTexture(2, this.__bitmapV))
							} else this.__bitmapV = BK.Texture.createBitmapTexture(i / 2, r / 2, 7), this.__yuvMaterial.setTexture(2, this.__bitmapV)
						}, r.prototype._innerUseYUVMaterial_NVxx = function(i, r) {
							if (this.__yuvMaterial || (this.__yuvMaterial = new BK.Render.Material(e, t, !0), this.__nativeObj.attachComponent(this.__yuvMaterial), this.__yuvMaterial.uniforms.samplerY = 0, this.__yuvMaterial.uniforms.samplerU = 1, this.__yuvMaterial.uniforms.samplerV = 2, this.__yuvMaterial.uniforms.samplerUV = 3), this.__bitmapY) {
								var n = this.__bitmapY.size;
								n.width == i && n.height == r || (BK.Script.log(0, 0, "BK.QAVView.useYUVMaterial_NVxx!Y size change, ow = " + n.width + ", oh = " + n.height + ", nw = " + i + ", nh = " + r), this.__bitmapY = BK.Texture.createBitmapTexture(i, r, 7), this.__yuvMaterial.setTexture(0, this.__bitmapY))
							} else this.__bitmapY = BK.Texture.createBitmapTexture(i, r, 7), this.__yuvMaterial.setTexture(0, this.__bitmapY);
							if (this.__bitmapUV) {
								var o = this.__bitmapUV.size;
								o.width == i / 2 && o.height == r / 2 || (BK.Script.log(0, 0, "BK.QAVView.useYUVMaterial_NVxx!UV size change, ow = " + o.width + ", oh = " + o.height + ", nw = " + i + ", nh = " + r), this.__bitmapUV = BK.Texture.createBitmapTexture(i / 2, r / 2, 2), this.__yuvMaterial.setTexture(3, this.__bitmapUV))
							} else this.__bitmapUV = BK.Texture.createBitmapTexture(i / 2, r / 2, 2), this.__yuvMaterial.setTexture(3, this.__bitmapUV)
						}, r.prototype.render = function(e) {
							var t = e.frameDesc.width,
								i = e.frameDesc.height;
							if (this.__nativeObj) {
								switch (this._restartRenderTimer(), e.frameDesc.rotate) {
									case 0:
										this.cameraPos && 1 == this.cameraPos ? this.__nativeObj.setUVFlip(1, 0) : this.__nativeObj.setUVFlip(1, 1);
										break;
									case 1:
									case 2:
										this.cameraPos && 1 == this.cameraPos ? (this.__nativeObj.setUVFlip(0, 1), this.__nativeObj.setUVRotate(1)) : (this.__nativeObj.setUVFlip(0, 0), this.__nativeObj.setUVRotate(1));
										break;
									case 3:
										this.cameraPos && 1 == this.cameraPos ? (this.__nativeObj.setUVFlip(0, 1), this.__nativeObj.setUVRotate(3)) : (this.__nativeObj.setUVFlip(0, 0), this.__nativeObj.setUVRotate(3))
								}
								switch (e.frameDesc.colorFormat) {
									case 10:
										this._innerUseRGBA(t, i), this.__bitmap.uploadSubData(0, 0, t, i, e.extraData.buffer);
										break;
									case 0:
										this._innerUseYUVMaterial_I420(t, i), this.__yuvMaterial.uniforms.formatYUV = e.frameDesc.colorFormat, this.__bitmapY.uploadSubData(0, 0, t, i, e.extraData.Y), this.__bitmapU.uploadSubData(0, 0, t / 2, i / 2, e.extraData.U), this.__bitmapV.uploadSubData(0, 0, t / 2, i / 2, e.extraData.V);
										break;
									case 3:
									case 1:
										this._innerUseYUVMaterial_NVxx(t, i), this.__yuvMaterial.uniforms.formatYUV = e.frameDesc.colorFormat, this.__bitmapY.uploadSubData(0, 0, t, i, e.extraData.Y), this.__bitmapUV.uploadSubData(0, 0, t / 2, i / 2, e.extraData.UV);
										break;
									default:
										BK.Script.log(1, -1, "BK.QAVView.render!unknown format = " + e.frameDesc.colorFormat)
								}
							}
						}, r.prototype.renderAsCache = function(e, t, i, r, n, o, a, s) {
							switch (o) {
								case 0:
									this._innerUseYUVMaterial_I420(e, t), this.__yuvMaterial.uniforms.formatYUV = o, this.__bitmapY.uploadSubData(0, 0, e, t, s.Y), this.__bitmapU.uploadSubData(0, 0, e / 2, t / 2, s.U), this.__bitmapV.uploadSubData(0, 0, e / 2, t / 2, s.V);
									break;
								case 3:
								case 1:
									this._innerUseYUVMaterial_NVxx(e, t), this.__yuvMaterial.uniforms.formatYUV = o, this.__bitmapY.uploadSubData(0, 0, e, t, s.Y), this.__bitmapUV.uploadSubData(0, 0, e / 2, t / 2, s.UV);
									break;
								default:
									return BK.Script.log(1, -1, "BK.QAVView.renderAsCache!unknown format = " + o), null
							}
							if (this.__graphic || (this.__graphic = new BK.Graphics), this.__cacheTexture) {
								var h = this.__cacheTexture.size;
								h.width == i && h.height == r || (BK.Script.log(0, 0, "BK.QAVView.renderAsCache!cache tex size change, ow = " + h.width + ", oh = " + h.height + ", nw = " + i + ", nh = " + r), this.__cacheTexture = new BK.RenderTexture(i, r, a))
							} else this.__cacheTexture = new BK.RenderTexture(i, r, a);
							if (this.__cacheSprite) {
								var l = this.__cacheSprite.size;
								l.width == i && l.height == r || (this.__cacheSprite.size = {
									width: i,
									height: r
								})
							} else this.__cacheSprite = new BK.Sprite(i, r, null, 0, 0, 1, 1), this.__cacheSprite.attachComponent(this.__yuvMaterial);
							switch (n) {
								case 0:
									this.__cacheSprite.setUVFlip(1, 0), this.__cacheSprite.setUVRotate(0);
									break;
								case 1:
									this.__cacheSprite.setUVFlip(1, 0), this.__cacheSprite.setUVRotate(1);
									break;
								case 2:
									this.__cacheSprite.setUVFlip(0, 1), this.__cacheSprite.setUVRotate(0);
									break;
								case 3:
									this.__cacheSprite.setUVFlip(1, 0), this.__cacheSprite.setUVRotate(4)
							}
							var u = this;
							return this.__graphic.drawRenderTexture(this.__cacheTexture, function() {
								this.drawSprite(u.__cacheSprite)
							}), this.__cacheTexture.readPixels(0, 0, i, r, a)
						}, r.prototype.renderAsTexture = function() {
							var e = new BK.RenderTexture(this.__nativeObj.size.width, this.__nativeObj.size.height, 6);
							return BK.Render.renderToTexture(this.__nativeObj, e), e
						}, r.prototype.hittest = function(e) {
							return this.__nativeObj.hittest(e)
						}, r.prototype.removeFromParent = function() {
							this.__nativeObj && this.__nativeObj.removeFromParent()
						}, r.prototype.setRenderTimeout = function(e, t) {
							this.__renderTimeoutCallback = t, this.__renderTimeoutThreshold = e, this.__renderTimeoutThreshold > 0 && this._restartRenderTimer()
						}, r
					}(),
					n = function() {
						function e() {
							this.skipNum = -1
						}
						return e.prototype.start = function(e) {
							function t(e, t, i) {
								if (BK.Script.log(0, 0, "BK.Camera.switchCameraEvent222!data = " + JSON.stringify(i)), 0 == e) {
									BK.Script.log(0, 0, "BK.Camera.switchCameraEvent!data = " + JSON.stringify(i));
									var r = this;
									BK.Director.ticker.removeTimeout(this), BK.Director.ticker.setTimeout(function(e, t, n) {
										r.view.cameraPos = i.cameraPos, r = null
									}, 160, this)
								}
							}
							var n = e.identifier ? e.identifier : "";
							if (e.width && e.height) {
								BK.Script.log(1, 0, "BK.Camera!options = " + JSON.stringify(e)), this.options = e, this.identifier = n, this.view = new r(n, e.width, e.height, !1, e.parent, e.position), i.Instance.addView(this), this.options.needFaceTracker && (this.detector = new BK.AI.FaceDetector(!0, !0));
								return BK.MQQ.SsoRequest.addListener("cs.audioRoom_camera_switch.local", this, t.bind(this)), this.isStart = !1, this
							}
						}, e.prototype.configCamera = function(e) {
							if (e && (BK.Script.log(0, 0, "configCamera"), BK.Script.log(0, 0, "configCamera BK.Room ok1"), e.beauty && (BK.Script.log(0, 0, "configCamera BK.Room audioRoomSetBeauty1"), this.setBeauty(e.beauty)), e.cameraPos)) {
								BK.Script.log(0, 0, "configCamera BK.Room cameraPos");
								e.onSwitchCamera && e.onSwitchCamera.bind(this);
								this.switchCamera(e.cameraPos, function(e, t, i) {
									BK.Script.log(0, 0, "configCamera BK.Room cameraPos errCode:" + e + " cmd:" + t + " data:" + i), this.options.onSwitchCamera && this.options.onSwitchCamera(e, t, i)
								})
							}
						}, e.prototype.switchCamera = function(e, t) {
							var i = {
									cameraPos: e
								},
								r = "cs.audioRoom_cameraswitch.local";
							BK.MQQ.SsoRequest.addListener(r, this, t.bind(this)), BK.MQQ.SsoRequest.send(i, r)
						}, e.prototype.setBeauty = function(e) {
							var t = {
								beauty: e
							};
							BK.MQQ.SsoRequest.send(t, "cs.audioRoom_set_beauty.local")
						}, e.prototype.setSpeaker = function(e) {
							var t = {
								speaker: e
							};
							BK.MQQ.SsoRequest.send(t, "cs.audioRoom_set_speaker.local")
						}, e.prototype.close = function() {}, e.prototype._innerConvertRGBA = function(e) {
							var t = this.options.scaleSample ? this.options.scaleSample : 1,
								i = e.frameDesc.width,
								r = e.frameDesc.height,
								n = function(e, t, i) {
									var r = {
										width: e,
										height: t
									};
									switch (i) {
										case 1:
										case 3:
											r.width = t, r.height = e
									}
									return r
								}(e.frameDesc.width, e.frameDesc.height, e.frameDesc.rotate),
								o = {};
							return o.frameDesc = {}, o.extraData = {}, o.frameDesc.width = n.width * t, o.frameDesc.height = n.height * t, o.frameDesc.rotate = 0, o.frameDesc.colorFormat = 10, o.frameDesc.videoSrcType = e.frameDesc.videoSrcType, o.extraData.buffer = this.view.renderAsCache(i, r, n.width * t, n.height * t, e.frameDesc.rotate, e.frameDesc.colorFormat, 6, e.extraData), o
						}, e.prototype.onPrePreview = function(e) {
							if (this.options.onPrePreview) {
								var t = e;
								if (this.detector) {
									t = this._innerConvertRGBA(e);
									var i = this._innerExtractBitmap(t);
									(this.hasFace || -1 == this.skipNum) && (this.skipNum = 0, t.faceFeatures = this.detector.detectForBitmapSync(i)), void 0 == t.faceFeatures || t.faceFeatures.length <= 0 ? (this.hasFace = !1, this.skipNum = this.skipNum + 1, (this.skipNum > this.options.skipFaceTrackerNum || this.skipNum == this.options.skipFaceTrackerNum) && (t.faceFeatures = this.detector.detectForBitmapSync(i), this.skipNum = 0, t.faceFeatures && (this.hasFace = !0))) : this.hasFace = !0
								}
								this.options.onPrePreview.call(this, t)
							}
							return 0 == this.isStart && (this.configCamera(this.options), this.isStart = !0), e
						}, e.prototype.onPreProcess = function(e) {
							return this.options.onPreProcess ? this.options.onPreProcess.call(this, e) : e
						}, e.prototype.render = function(e) {
							this.view && this.view.render(e)
						}, e.prototype.renderAsTexture = function() {
							return this.view ? this.view.renderAsTexture() : null
						}, e.prototype._innerExtractBitmap = function(e) {
							var t = {};
							switch (t.width = e.frameDesc.width, t.height = e.frameDesc.height, t.format = e.frameDesc.colorFormat, e.frameDesc.colorFormat) {
								case 7:
									t.format = 3;
									break;
								case 10:
									t.buffer = e.extraData.buffer, t.format = 6;
									break;
								default:
									BK.Script.log(1, -1, "BK.QAVCamera.extractBitmap!unknown format = " + e.frameDesc.colorFormat)
							}
							switch (e.frameDesc.rotate) {
								case 0:
									t.oreintation = 0;
									break;
								case 1:
									t.oreintation = 1;
									break;
								case 2:
									t.oreintation = 5;
									break;
								case 3:
									t.oreintation = 6
							}
							return t
						}, e.Instance = new e, e
					}();
				return {
					QAVView: r,
					QAVCamera: new n
				}
			}();
			e.QAVView = i.QAVView, e.AVCamera = i.QAVCamera
		}
	}(BK),
	function(e, t) {
		"object" == typeof e && (BK.QQAVManager = function() {
			return new(function() {
				function e() {
					this._hasInitFlag = !1, this._hasSuccEnter = !1, this._iosHasInitFlag = !1, this._isFrontCamera = !1, this._hasStartQAVRoomFlag = !1, this._callbackQueue = [], BK.MQQ.SsoRequest.addListener("cs.audioRoom_disconnect.local", this, this.__handleRoomDisconnect.bind(this)), BK.MQQ.SsoRequest.addListener("cs.audioRoom_update_userinfo.local", this, this.__handleUserUpdate.bind(this))
				}
				return e.prototype.log = function(e) {
					BK.Script.log(0, 0, "QQAVManager:" + e)
				}, e.prototype.errorLog = function(e) {
					BK.Script.log(1, 1, "QQAVManager Error:" + e)
				}, e.prototype.setQAVCfg = function(e) {
					this.qavCfg = e
				}, e.prototype.setUpdateUserInfoCallback = function(e) {
					var t = "cs.audioRoom_update_userinfo.local";
					BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)
				}, e.prototype.setEventCallbackConfig = function(e) {
					this.eventCallbackConfig = e
				}, e.prototype.initQAV = function(e, t) {
					this.setQAVCfg(e), this.__startQAVRoom(t)
				}, e.prototype.setMic = function(e, t) {
					this.__enterQAVRoomIfNeed(function(i) {
						if (0 == i) {
							var r = {
									switch: e
								},
								n = "cs.audioRoom_set_mic.local";
							BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, t), BK.MQQ.SsoRequest.send(r, n)
						} else this.errorLog("setMic failed!start qav room failed")
					}.bind(this))
				}, e.prototype.setSpeaker = function(e, t) {
					this.__enterQAVRoomIfNeed(function(i) {
						if (0 == i) {
							var r = {
									switch: e
								},
								n = "cs.audioRoom_set_speaker.local";
							BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, t), BK.MQQ.SsoRequest.send(r, n)
						} else this.errorLog("setSpeaker failed!start qav room failed")
					}.bind(this))
				}, e.prototype.switchCamera = function(e, t) {
					this.__enterQAVRoomIfNeed(function(i) {
						if (0 == i) {
							var r = {
									cameraPos: e
								},
								n = "cs.audioRoom_camera_switch.local";
							BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, function(i, r, n) {
								0 == i && (this._isFrontCamera = 0 == e), t(i, r, n)
							}.bind(this)), BK.MQQ.SsoRequest.send(r, n)
						} else this.errorLog("switchCamera failed!start qav room failed")
					}.bind(this))
				}, e.prototype.enableCamera = function(e, t) {
					this.__enterQAVRoomIfNeed(function(i) {
						if (0 == i) {
							var r = {
									switch: e
								},
								n = "cs.audioRoom_camera_enable.local";
							this._isFrontCamera = !0, BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, t), BK.MQQ.SsoRequest.send(r, n)
						} else this.errorLog("enableCamera failed!start qav room failed")
					}.bind(this))
				}, e.prototype.setBeauty = function(e) {
					this.__enterQAVRoomIfNeed(function(t) {
						if (0 == t) {
							var i = {
								beauty: e
							};
							BK.MQQ.SsoRequest.send(i, "cs.audioRoom_set_beauty.local")
						} else this.errorLog("setBeauty failed!start qav room failed")
					}.bind(this))
				}, e.prototype.setLocalVideo = function(e) {
					this.__enterQAVRoomIfNeed(function(t) {
						if (0 == t) {
							var i = {
								switch: e
							};
							BK.MQQ.SsoRequest.send(i, "cs.audioRoom_set_local_video.local")
						} else this.errorLog("setLocalVideo failed!start qav room failed")
					}.bind(this))
				}, e.prototype.watchRemoteVideo = function(e) {
					this.__enterQAVRoomIfNeed(function(t) {
						if (0 == t) {
							this.log("watchRemoteVideo ok1");
							var i = {
								openIdList: e
							};
							BK.MQQ.SsoRequest.send(i, "cs.audioRoom_watch_remote_video.local"), this.log("watchRemoteVideo ok2")
						} else this.errorLog("watchRemoteVideo failed!start qav room failed")
					}.bind(this))
				}, e.prototype.setRemoteVideo = function(e) {
					this.__enterQAVRoomIfNeed(function(t) {
						if (0 == t) {
							var i = {
								switch: e
							};
							BK.MQQ.SsoRequest.send(i, "cs.audioRoom_set_remote_video.local")
						} else this.errorLog("setMic failed!start qav room failed")
					}.bind(this))
				}, e.prototype.exitRoom = function(e) {
					this._hasInitFlag = !1, this.__exitQAVRoom(function(t, i, r) {
						this.log("exit qav room errCode:" + t), e(t, i, r)
					}.bind(this))
				}, e.prototype.getEndpointList = function(e) {
					var t = {},
						i = "cs.audioRoom_get_endpointList.local";
					e && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, e)), BK.MQQ.SsoRequest.send(t, i)
				}, e.prototype.isFrontCamera = function() {
					return this._isFrontCamera
				}, e.prototype.getFluidCtrlCfg = function(e, t) {
					var i = "cs.audioRoom_get_fluid_ctrl_cfg.local";
					t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(e, i)
				}, e.prototype.changeAudioCategory = function(e, t) {
					var i = "cs.audioRoom_change_audio_category.local",
						r = {
							category: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(r, i)
				}, e.prototype.changeQAVRole = function(e, t) {
					var i = "cs.audioRoom_change_qav_role.local",
						r = {
							role: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(r, i)
				}, e.prototype.__enterQAVRoomIfNeed = function(e) {
					this._hasSuccEnter ? e(0) : (this.log("__enterQAVRoomIfNeed entering qav room."), this._callbackQueue.push(e), 0 == this._hasStartQAVRoomFlag && (this._hasStartQAVRoomFlag = !0, this.__startQAVRoom(function(e, t, i) {
						for (var r = 0; r < this._callbackQueue.length; r++)(0, this._callbackQueue[r])(e);
						this._callbackQueue.splice(0, this._callbackQueue.length)
					}.bind(this))))
				}, e.prototype.initQAVRoom = function(e, t) {
					var i = "cs.audioRoom_init.local";
					if ("ios" == GameStatusInfo.platform && 1 == this._iosHasInitFlag) return this.log("ios init once "), void t(0, i, this._initData);
					1 != this._hasInitFlag ? (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, function(e, i, r) {
						this.log("cmd:" + i + " errCode:" + e + " data:" + JSON.stringify(r)), 0 == e && (this._hasInitFlag = !0, this._initData = r, "ios" == GameStatusInfo.platform && (this._iosHasInitFlag = !0, this.log("_iosHasInitFlag"))), t(e, i, r)
					}.bind(this)), BK.MQQ.SsoRequest.send(e, i)) : this.log("AVRoom has been init .can't init Room twice !!")
				}, e.prototype.enterQAVRoom = function(e, t) {
					var i = e.gameRoomId,
						r = e.avRoomId,
						n = e.avRoleName,
						o = {
							avRoomId: r,
							gameRoomId: i,
							avRoleName: n,
							avKey: e.avKey
						};
					this.avRoomId = r, this.gameRoomId = i, this.avRoleName = n;
					var a = "cs.audioRoom_enter.local";
					BK.MQQ.SsoRequest.removeListener(a, this), BK.MQQ.SsoRequest.addListener(a, this, function(e, i, r) {
						this.log("cmd:" + i + " errCode:" + e + " data:" + JSON.stringify(r)), t(e, i, r)
					}.bind(this)), BK.MQQ.SsoRequest.send(o, a), BK.MQQ.SsoRequest.removeListener("cs.close_room.local", this), BK.MQQ.SsoRequest.addListener("cs.close_room.local", this, function(e, t, i) {
						this.log("BK.QAVManager.closeGame!exitQAVRoom, avRoomId = " + this.avRoomId), this.__exitQAVRoom()
					}.bind(this)), BK.MQQ.SsoRequest.removeListener("cs.audioRoom_req_audio_session.local", this), BK.MQQ.SsoRequest.addListener("cs.audioRoom_req_audio_session.local", this, function(e, t, i) {
						this.log("BK.QAVManager.reqAudioSession!result = " + JSON.stringify(i))
					}.bind(this))
				}, e.prototype.__exitQAVRoom = function(e) {
					var t = {
							avRoomId: this.avRoomId
						},
						i = "cs.audioRoom_exit.local";
					BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, e), BK.MQQ.SsoRequest.send(t, i)
				}, e.prototype.__checkGameStatusInfoParam = function() {
					return GameStatusInfo.avAppId ? GameStatusInfo.avAccountType ? GameStatusInfo.avRoomId ? GameStatusInfo.roomId ? {
						sdkAppId: GameStatusInfo.avAppId,
						accountType: GameStatusInfo.avAccountType,
						avRoomId: GameStatusInfo.avRoomId,
						gameRoomId: GameStatusInfo.roomId
					} : (this.log("GameStatusInfo.roomId is null"), null) : (this.log("GameStatusInfo.avRoomId is null"), null) : (this.log("GameStatusInfo.avAccountType is null"), null) : (this.log("GameStatusInfo.avAppId is null"), null)
				}, e.prototype.__addQAVCfg = function(e) {
					if (this.qavCfg)
						for (var t in this.qavCfg)
							if (this.qavCfg.hasOwnProperty(t)) {
								var i = this.qavCfg[t];
								e[t] = i
							}
					return e
				}, e.prototype.__startQAVRoom = function(e) {
					if (GameStatusInfo.devPlatform) {
						var t = {
							sdkAppId: 1400035750,
							accountType: 14181,
							avRoomId: 122333,
							gameRoomId: 54321,
							selfOpenId: GameStatusInfo.openId
						};
						t = this.__addQAVCfg(t), this.initAndEnterRoom(t, e)
					} else(t = this.__checkGameStatusInfoParam()) ? (t = this.__addQAVCfg(t), this.initAndEnterRoom(t, function(t, i, r) {
						e(t, i, r)
					}.bind(this))) : BK.QQ.addSSOJoinRoomCallBack(function(t, i, r) {
						r.gameRoomId && r.avRoomId && r.sdkAppId && r.accountType ? (r = this.__addQAVCfg(r), this.initAndEnterRoom(r, e)) : BK.Script.log(0, 0, "addSSOJoinRoomCallBack data is incorrect.")
					}.bind(this))
				}, e.prototype.initAndEnterRoom = function(e, t) {
					void 0 != e.sdkAppId ? void 0 != e.accountType ? void 0 != e.avRoomId ? void 0 != e.gameRoomId ? (this.setQAVCfg(e), this.log("initAndEnterRoom step1 initRoom cfg:" + JSON.stringify(e)), this.initQAVRoom(e, function(i, r, n) {
						0 == i ? (this.log("initAndEnterRoom step2 enterRoom"), this.enterQAVRoom(e, function(e, i, r) {
							0 == e ? (this.log("initAndEnterRoom step2 enterRoom succ!"), this._hasSuccEnter = !0) : this._hasStartQAVRoomFlag = !1, t(e, i, r)
						}.bind(this))) : (this.log("initAndEnterRoom failed cmd:" + r + " errCode:" + i + " data:" + JSON.stringify(n)), this._hasStartQAVRoomFlag = !1, t(i, r, n))
					}.bind(this))) : this.log("initAndEnterRoom gameRoomId is null;") : this.log("initAndEnterRoom avRoomId is null;") : this.log("initAndEnterRoom accountType is null;") : this.log("initAndEnterRoom sdkAppId is null;")
				}, e.prototype.__handleUserUpdate = function(e, t, i) {
					i && (this.log("handleUserUpdate data:" + JSON.stringify(i)), 1 == i.eventId ? (this.log("进入房间事件:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventEnterCallback && this.eventCallbackConfig.eventEnterCallback(i.eventId, i)) : 2 == i.eventId ? (this.log("退出房间事件:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventExitCallback && this.eventCallbackConfig.eventExitCallback(i.eventId, i)) : 3 == i.eventId ? (this.log("有发摄像头视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventHasCameraVideoCallback && this.eventCallbackConfig.eventHasCameraVideoCallback(i.eventId, i)) : 4 == i.eventId ? (this.log("无发摄像头视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventNoCameraVideoCallback && this.eventCallbackConfig.eventNoCameraVideoCallback(i.eventId, i)) : 5 == i.eventId ? (this.log("有发语音事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventHasAudioCallback && this.eventCallbackConfig.eventHasAudioCallback(i.eventId, i)) : 6 == i.eventId ? (this.log("无发语音事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventNoAudioCallback && this.eventCallbackConfig.eventNoAudioCallback(i.eventId, i)) : 7 == i.eventId ? (this.log("有发屏幕视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventHasScreenVideoCallback && this.eventCallbackConfig.eventHasScreenVideoCallback(i.eventId, i)) : 8 == i.eventId ? (this.log("无发屏幕视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventNoScreenVideoCallback && this.eventCallbackConfig.eventNoScreenVideoCallback(i.eventId, i)) : 9 == i.eventId ? (this.log("有发文件视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventHasMediaFileCallback && this.eventCallbackConfig.eventHasMediaFileCallback(i.eventId, i)) : 10 == i.eventId ? (this.log("无发文件视频事件。:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventNoMediaFileCallback && this.eventCallbackConfig.eventNoMediaFileCallback(i.eventId, i)) : 42 == i.eventId ? (this.log("新成员说话:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventNewSpeakCallback && this.eventCallbackConfig.eventNewSpeakCallback(i.eventId, i)) : 43 == i.eventId && (this.log("旧成员停止说话:" + JSON.stringify(i.userInfo)), this.eventCallbackConfig && this.eventCallbackConfig.eventOldStopSpeakCallback && this.eventCallbackConfig.eventOldStopSpeakCallback(i.eventId, i)))
				}, e.prototype.__handleRoomDisconnect = function(e, t, i) {
					this.eventCallbackConfig && this.eventCallbackConfig.eventRoomDisconnectCallback && this.eventCallbackConfig.eventRoomDisconnectCallback(i)
				}, e
			}())
		}())
	}(BK),
	function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.QRCode = t())
	}(BK, function() {
		function e(e) {
			this.mode = s.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
			for (var t = 0, i = this.data.length; t < i; t++) {
				var r = [],
					n = this.data.charCodeAt(t);
				n > 65536 ? (r[0] = 240 | (1835008 & n) >>> 18, r[1] = 128 | (258048 & n) >>> 12, r[2] = 128 | (4032 & n) >>> 6, r[3] = 128 | 63 & n) : n > 2048 ? (r[0] = 224 | (61440 & n) >>> 12, r[1] = 128 | (4032 & n) >>> 6, r[2] = 128 | 63 & n) : n > 128 ? (r[0] = 192 | (1984 & n) >>> 6, r[1] = 128 | 63 & n) : r[0] = n, this.parsedData.push(r)
			}
			this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239))
		}

		function t(e, t) {
			this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
		}

		function i(e, t) {
			if (void 0 == e.length) throw new Error(e.length + "/" + t);
			for (var i = 0; i < e.length && 0 == e[i];) i++;
			this.num = new Array(e.length - i + t);
			for (var r = 0; r < e.length - i; r++) this.num[r] = e[r + i]
		}

		function r(e, t) {
			this.totalCount = e, this.dataCount = t
		}

		function n() {
			this.buffer = [], this.length = 0
		}

		function o(e, t) {
			for (var i = 1, r = a(e), n = 0, o = f.length; n <= o; n++) {
				var s = 0;
				switch (t) {
					case h.L:
						s = f[n][0];
						break;
					case h.M:
						s = f[n][1];
						break;
					case h.Q:
						s = f[n][2];
						break;
					case h.H:
						s = f[n][3]
				}
				if (r <= s) break;
				i++
			}
			if (i > f.length) throw new Error("Too long data");
			return i
		}

		function a(e) {
			var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
			return t.length + (t.length != e ? 3 : 0)
		}
		e.prototype = {
			getLength: function(e) {
				return this.parsedData.length
			},
			write: function(e) {
				for (var t = 0, i = this.parsedData.length; t < i; t++) e.put(this.parsedData[t], 8)
			}
		}, t.prototype = {
			addData: function(t) {
				var i = new e(t);
				this.dataList.push(i), this.dataCache = null
			},
			isDark: function(e, t) {
				if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
				return this.modules[e][t]
			},
			getModuleCount: function() {
				return this.moduleCount
			},
			make: function() {
				this.makeImpl(!1, this.getBestMaskPattern())
			},
			makeImpl: function(e, i) {
				this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
				for (var r = 0; r < this.moduleCount; r++) {
					this.modules[r] = new Array(this.moduleCount);
					for (var n = 0; n < this.moduleCount; n++) this.modules[r][n] = null
				}
				this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, i), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, i)
			},
			setupPositionProbePattern: function(e, t) {
				for (var i = -1; i <= 7; i++)
					if (!(e + i <= -1 || this.moduleCount <= e + i))
						for (var r = -1; r <= 7; r++) t + r <= -1 || this.moduleCount <= t + r || (this.modules[e + i][t + r] = 0 <= i && i <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= r && r <= 4)
			},
			getBestMaskPattern: function() {
				for (var e = 0, t = 0, i = 0; i < 8; i++) {
					this.makeImpl(!0, i);
					var r = u.getLostPoint(this);
					(0 == i || e > r) && (e = r, t = i)
				}
				return t
			},
			createMovieClip: function(e, t, i) {
				var r = e.createEmptyMovieClip(t, i);
				this.make();
				for (var n = 0; n < this.modules.length; n++)
					for (var o = 1 * n, a = 0; a < this.modules[n].length; a++) {
						var s = 1 * a;
						this.modules[n][a] && (r.beginFill(0, 100), r.moveTo(s, o), r.lineTo(s + 1, o), r.lineTo(s + 1, o + 1), r.lineTo(s, o + 1), r.endFill())
					}
				return r
			},
			setupTimingPattern: function() {
				for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
				for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
			},
			setupPositionAdjustPattern: function() {
				for (var e = u.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
					for (var i = 0; i < e.length; i++) {
						var r = e[t],
							n = e[i];
						if (null == this.modules[r][n])
							for (var o = -2; o <= 2; o++)
								for (var a = -2; a <= 2; a++) this.modules[r + o][n + a] = -2 == o || 2 == o || -2 == a || 2 == a || 0 == o && 0 == a
					}
			},
			setupTypeNumber: function(e) {
				for (var t = u.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
					r = !e && 1 == (t >> i & 1);
					this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = r
				}
				for (i = 0; i < 18; i++) {
					var r = !e && 1 == (t >> i & 1);
					this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = r
				}
			},
			setupTypeInfo: function(e, t) {
				for (var i = this.errorCorrectLevel << 3 | t, r = u.getBCHTypeInfo(i), n = 0; n < 15; n++) {
					o = !e && 1 == (r >> n & 1);
					n < 6 ? this.modules[n][8] = o : n < 8 ? this.modules[n + 1][8] = o : this.modules[this.moduleCount - 15 + n][8] = o
				}
				for (n = 0; n < 15; n++) {
					var o = !e && 1 == (r >> n & 1);
					n < 8 ? this.modules[8][this.moduleCount - n - 1] = o : n < 9 ? this.modules[8][15 - n - 1 + 1] = o : this.modules[8][15 - n - 1] = o
				}
				this.modules[this.moduleCount - 8][8] = !e
			},
			mapData: function(e, t) {
				for (var i = -1, r = this.moduleCount - 1, n = 7, o = 0, a = this.moduleCount - 1; a > 0; a -= 2)
					for (6 == a && a--;;) {
						for (var s = 0; s < 2; s++)
							if (null == this.modules[r][a - s]) {
								var h = !1;
								o < e.length && (h = 1 == (e[o] >>> n & 1)), u.getMask(t, r, a - s) && (h = !h), this.modules[r][a - s] = h, -1 == --n && (o++, n = 7)
							}
						if ((r += i) < 0 || this.moduleCount <= r) {
							r -= i, i = -i;
							break
						}
					}
			}
		}, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(e, i, o) {
			for (var a = r.getRSBlocks(e, i), s = new n, h = 0; h < o.length; h++) {
				var l = o[h];
				s.put(l.mode, 4), s.put(l.getLength(), u.getLengthInBits(l.mode, e)), l.write(s)
			}
			for (var d = 0, h = 0; h < a.length; h++) d += a[h].dataCount;
			if (s.getLengthInBits() > 8 * d) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * d + ")");
			for (s.getLengthInBits() + 4 <= 8 * d && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
			for (;;) {
				if (s.getLengthInBits() >= 8 * d) break;
				if (s.put(t.PAD0, 8), s.getLengthInBits() >= 8 * d) break;
				s.put(t.PAD1, 8)
			}
			return t.createBytes(s, a)
		}, t.createBytes = function(e, t) {
			for (var r = 0, n = 0, o = 0, a = new Array(t.length), s = new Array(t.length), h = 0; h < t.length; h++) {
				var l = t[h].dataCount,
					d = t[h].totalCount - l;
				n = Math.max(n, l), o = Math.max(o, d), a[h] = new Array(l);
				for (m = 0; m < a[h].length; m++) a[h][m] = 255 & e.buffer[m + r];
				r += l;
				var c = u.getErrorCorrectPolynomial(d),
					f = new i(a[h], c.getLength() - 1).mod(c);
				s[h] = new Array(c.getLength() - 1);
				for (m = 0; m < s[h].length; m++) {
					var _ = m + f.getLength() - s[h].length;
					s[h][m] = _ >= 0 ? f.get(_) : 0
				}
			}
			for (var g = 0, m = 0; m < t.length; m++) g += t[m].totalCount;
			for (var p = new Array(g), S = 0, m = 0; m < n; m++)
				for (h = 0; h < t.length; h++) m < a[h].length && (p[S++] = a[h][m]);
			for (m = 0; m < o; m++)
				for (h = 0; h < t.length; h++) m < s[h].length && (p[S++] = s[h][m]);
			return p
		};
		for (var s = {
				MODE_NUMBER: 1,
				MODE_ALPHA_NUM: 2,
				MODE_8BIT_BYTE: 4,
				MODE_KANJI: 8
			}, h = {
				L: 1,
				M: 0,
				Q: 3,
				H: 2
			}, l = {
				PATTERN000: 0,
				PATTERN001: 1,
				PATTERN010: 2,
				PATTERN011: 3,
				PATTERN100: 4,
				PATTERN101: 5,
				PATTERN110: 6,
				PATTERN111: 7
			}, u = {
				PATTERN_POSITION_TABLE: [
					[],
					[6, 18],
					[6, 22],
					[6, 26],
					[6, 30],
					[6, 34],
					[6, 22, 38],
					[6, 24, 42],
					[6, 26, 46],
					[6, 28, 50],
					[6, 30, 54],
					[6, 32, 58],
					[6, 34, 62],
					[6, 26, 46, 66],
					[6, 26, 48, 70],
					[6, 26, 50, 74],
					[6, 30, 54, 78],
					[6, 30, 56, 82],
					[6, 30, 58, 86],
					[6, 34, 62, 90],
					[6, 28, 50, 72, 94],
					[6, 26, 50, 74, 98],
					[6, 30, 54, 78, 102],
					[6, 28, 54, 80, 106],
					[6, 32, 58, 84, 110],
					[6, 30, 58, 86, 114],
					[6, 34, 62, 90, 118],
					[6, 26, 50, 74, 98, 122],
					[6, 30, 54, 78, 102, 126],
					[6, 26, 52, 78, 104, 130],
					[6, 30, 56, 82, 108, 134],
					[6, 34, 60, 86, 112, 138],
					[6, 30, 58, 86, 114, 142],
					[6, 34, 62, 90, 118, 146],
					[6, 30, 54, 78, 102, 126, 150],
					[6, 24, 50, 76, 102, 128, 154],
					[6, 28, 54, 80, 106, 132, 158],
					[6, 32, 58, 84, 110, 136, 162],
					[6, 26, 54, 82, 110, 138, 166],
					[6, 30, 58, 86, 114, 142, 170]
				],
				G15: 1335,
				G18: 7973,
				G15_MASK: 21522,
				getBCHTypeInfo: function(e) {
					for (var t = e << 10; u.getBCHDigit(t) - u.getBCHDigit(u.G15) >= 0;) t ^= u.G15 << u.getBCHDigit(t) - u.getBCHDigit(u.G15);
					return (e << 10 | t) ^ u.G15_MASK
				},
				getBCHTypeNumber: function(e) {
					for (var t = e << 12; u.getBCHDigit(t) - u.getBCHDigit(u.G18) >= 0;) t ^= u.G18 << u.getBCHDigit(t) - u.getBCHDigit(u.G18);
					return e << 12 | t
				},
				getBCHDigit: function(e) {
					for (var t = 0; 0 != e;) t++, e >>>= 1;
					return t
				},
				getPatternPosition: function(e) {
					return u.PATTERN_POSITION_TABLE[e - 1]
				},
				getMask: function(e, t, i) {
					switch (e) {
						case l.PATTERN000:
							return (t + i) % 2 == 0;
						case l.PATTERN001:
							return t % 2 == 0;
						case l.PATTERN010:
							return i % 3 == 0;
						case l.PATTERN011:
							return (t + i) % 3 == 0;
						case l.PATTERN100:
							return (Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0;
						case l.PATTERN101:
							return t * i % 2 + t * i % 3 == 0;
						case l.PATTERN110:
							return (t * i % 2 + t * i % 3) % 2 == 0;
						case l.PATTERN111:
							return (t * i % 3 + (t + i) % 2) % 2 == 0;
						default:
							throw new Error("bad maskPattern:" + e)
					}
				},
				getErrorCorrectPolynomial: function(e) {
					for (var t = new i([1], 0), r = 0; r < e; r++) t = t.multiply(new i([1, d.gexp(r)], 0));
					return t
				},
				getLengthInBits: function(e, t) {
					if (1 <= t && t < 10) switch (e) {
						case s.MODE_NUMBER:
							return 10;
						case s.MODE_ALPHA_NUM:
							return 9;
						case s.MODE_8BIT_BYTE:
						case s.MODE_KANJI:
							return 8;
						default:
							throw new Error("mode:" + e)
					} else if (t < 27) switch (e) {
						case s.MODE_NUMBER:
							return 12;
						case s.MODE_ALPHA_NUM:
							return 11;
						case s.MODE_8BIT_BYTE:
							return 16;
						case s.MODE_KANJI:
							return 10;
						default:
							throw new Error("mode:" + e)
					} else {
						if (!(t < 41)) throw new Error("type:" + t);
						switch (e) {
							case s.MODE_NUMBER:
								return 14;
							case s.MODE_ALPHA_NUM:
								return 13;
							case s.MODE_8BIT_BYTE:
								return 16;
							case s.MODE_KANJI:
								return 12;
							default:
								throw new Error("mode:" + e)
						}
					}
				},
				getLostPoint: function(e) {
					for (var t = e.getModuleCount(), i = 0, r = 0; r < t; r++)
						for (u = 0; u < t; u++) {
							for (var n = 0, o = e.isDark(r, u), a = -1; a <= 1; a++)
								if (!(r + a < 0 || t <= r + a))
									for (var s = -1; s <= 1; s++) u + s < 0 || t <= u + s || 0 == a && 0 == s || o == e.isDark(r + a, u + s) && n++;
							n > 5 && (i += 3 + n - 5)
						}
					for (r = 0; r < t - 1; r++)
						for (u = 0; u < t - 1; u++) {
							var h = 0;
							e.isDark(r, u) && h++, e.isDark(r + 1, u) && h++, e.isDark(r, u + 1) && h++, e.isDark(r + 1, u + 1) && h++, 0 != h && 4 != h || (i += 3)
						}
					for (r = 0; r < t; r++)
						for (u = 0; u < t - 6; u++) e.isDark(r, u) && !e.isDark(r, u + 1) && e.isDark(r, u + 2) && e.isDark(r, u + 3) && e.isDark(r, u + 4) && !e.isDark(r, u + 5) && e.isDark(r, u + 6) && (i += 40);
					for (u = 0; u < t; u++)
						for (r = 0; r < t - 6; r++) e.isDark(r, u) && !e.isDark(r + 1, u) && e.isDark(r + 2, u) && e.isDark(r + 3, u) && e.isDark(r + 4, u) && !e.isDark(r + 5, u) && e.isDark(r + 6, u) && (i += 40);
					for (var l = 0, u = 0; u < t; u++)
						for (r = 0; r < t; r++) e.isDark(r, u) && l++;
					return i += 10 * (Math.abs(100 * l / t / t - 50) / 5)
				}
			}, d = {
				glog: function(e) {
					if (e < 1) throw new Error("glog(" + e + ")");
					return d.LOG_TABLE[e]
				},
				gexp: function(e) {
					for (; e < 0;) e += 255;
					for (; e >= 256;) e -= 255;
					return d.EXP_TABLE[e]
				},
				EXP_TABLE: new Array(256),
				LOG_TABLE: new Array(256)
			}, c = 0; c < 8; c++) d.EXP_TABLE[c] = 1 << c;
		for (c = 8; c < 256; c++) d.EXP_TABLE[c] = d.EXP_TABLE[c - 4] ^ d.EXP_TABLE[c - 5] ^ d.EXP_TABLE[c - 6] ^ d.EXP_TABLE[c - 8];
		for (c = 0; c < 255; c++) d.LOG_TABLE[d.EXP_TABLE[c]] = c;
		i.prototype = {
			get: function(e) {
				return this.num[e]
			},
			getLength: function() {
				return this.num.length
			},
			multiply: function(e) {
				for (var t = new Array(this.getLength() + e.getLength() - 1), r = 0; r < this.getLength(); r++)
					for (var n = 0; n < e.getLength(); n++) t[r + n] ^= d.gexp(d.glog(this.get(r)) + d.glog(e.get(n)));
				return new i(t, 0)
			},
			mod: function(e) {
				if (this.getLength() - e.getLength() < 0) return this;
				for (var t = d.glog(this.get(0)) - d.glog(e.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++) r[n] = this.get(n);
				for (n = 0; n < e.getLength(); n++) r[n] ^= d.gexp(d.glog(e.get(n)) + t);
				return new i(r, 0).mod(e)
			}
		}, r.RS_BLOCK_TABLE = [
			[1, 26, 19],
			[1, 26, 16],
			[1, 26, 13],
			[1, 26, 9],
			[1, 44, 34],
			[1, 44, 28],
			[1, 44, 22],
			[1, 44, 16],
			[1, 70, 55],
			[1, 70, 44],
			[2, 35, 17],
			[2, 35, 13],
			[1, 100, 80],
			[2, 50, 32],
			[2, 50, 24],
			[4, 25, 9],
			[1, 134, 108],
			[2, 67, 43],
			[2, 33, 15, 2, 34, 16],
			[2, 33, 11, 2, 34, 12],
			[2, 86, 68],
			[4, 43, 27],
			[4, 43, 19],
			[4, 43, 15],
			[2, 98, 78],
			[4, 49, 31],
			[2, 32, 14, 4, 33, 15],
			[4, 39, 13, 1, 40, 14],
			[2, 121, 97],
			[2, 60, 38, 2, 61, 39],
			[4, 40, 18, 2, 41, 19],
			[4, 40, 14, 2, 41, 15],
			[2, 146, 116],
			[3, 58, 36, 2, 59, 37],
			[4, 36, 16, 4, 37, 17],
			[4, 36, 12, 4, 37, 13],
			[2, 86, 68, 2, 87, 69],
			[4, 69, 43, 1, 70, 44],
			[6, 43, 19, 2, 44, 20],
			[6, 43, 15, 2, 44, 16],
			[4, 101, 81],
			[1, 80, 50, 4, 81, 51],
			[4, 50, 22, 4, 51, 23],
			[3, 36, 12, 8, 37, 13],
			[2, 116, 92, 2, 117, 93],
			[6, 58, 36, 2, 59, 37],
			[4, 46, 20, 6, 47, 21],
			[7, 42, 14, 4, 43, 15],
			[4, 133, 107],
			[8, 59, 37, 1, 60, 38],
			[8, 44, 20, 4, 45, 21],
			[12, 33, 11, 4, 34, 12],
			[3, 145, 115, 1, 146, 116],
			[4, 64, 40, 5, 65, 41],
			[11, 36, 16, 5, 37, 17],
			[11, 36, 12, 5, 37, 13],
			[5, 109, 87, 1, 110, 88],
			[5, 65, 41, 5, 66, 42],
			[5, 54, 24, 7, 55, 25],
			[11, 36, 12],
			[5, 122, 98, 1, 123, 99],
			[7, 73, 45, 3, 74, 46],
			[15, 43, 19, 2, 44, 20],
			[3, 45, 15, 13, 46, 16],
			[1, 135, 107, 5, 136, 108],
			[10, 74, 46, 1, 75, 47],
			[1, 50, 22, 15, 51, 23],
			[2, 42, 14, 17, 43, 15],
			[5, 150, 120, 1, 151, 121],
			[9, 69, 43, 4, 70, 44],
			[17, 50, 22, 1, 51, 23],
			[2, 42, 14, 19, 43, 15],
			[3, 141, 113, 4, 142, 114],
			[3, 70, 44, 11, 71, 45],
			[17, 47, 21, 4, 48, 22],
			[9, 39, 13, 16, 40, 14],
			[3, 135, 107, 5, 136, 108],
			[3, 67, 41, 13, 68, 42],
			[15, 54, 24, 5, 55, 25],
			[15, 43, 15, 10, 44, 16],
			[4, 144, 116, 4, 145, 117],
			[17, 68, 42],
			[17, 50, 22, 6, 51, 23],
			[19, 46, 16, 6, 47, 17],
			[2, 139, 111, 7, 140, 112],
			[17, 74, 46],
			[7, 54, 24, 16, 55, 25],
			[34, 37, 13],
			[4, 151, 121, 5, 152, 122],
			[4, 75, 47, 14, 76, 48],
			[11, 54, 24, 14, 55, 25],
			[16, 45, 15, 14, 46, 16],
			[6, 147, 117, 4, 148, 118],
			[6, 73, 45, 14, 74, 46],
			[11, 54, 24, 16, 55, 25],
			[30, 46, 16, 2, 47, 17],
			[8, 132, 106, 4, 133, 107],
			[8, 75, 47, 13, 76, 48],
			[7, 54, 24, 22, 55, 25],
			[22, 45, 15, 13, 46, 16],
			[10, 142, 114, 2, 143, 115],
			[19, 74, 46, 4, 75, 47],
			[28, 50, 22, 6, 51, 23],
			[33, 46, 16, 4, 47, 17],
			[8, 152, 122, 4, 153, 123],
			[22, 73, 45, 3, 74, 46],
			[8, 53, 23, 26, 54, 24],
			[12, 45, 15, 28, 46, 16],
			[3, 147, 117, 10, 148, 118],
			[3, 73, 45, 23, 74, 46],
			[4, 54, 24, 31, 55, 25],
			[11, 45, 15, 31, 46, 16],
			[7, 146, 116, 7, 147, 117],
			[21, 73, 45, 7, 74, 46],
			[1, 53, 23, 37, 54, 24],
			[19, 45, 15, 26, 46, 16],
			[5, 145, 115, 10, 146, 116],
			[19, 75, 47, 10, 76, 48],
			[15, 54, 24, 25, 55, 25],
			[23, 45, 15, 25, 46, 16],
			[13, 145, 115, 3, 146, 116],
			[2, 74, 46, 29, 75, 47],
			[42, 54, 24, 1, 55, 25],
			[23, 45, 15, 28, 46, 16],
			[17, 145, 115],
			[10, 74, 46, 23, 75, 47],
			[10, 54, 24, 35, 55, 25],
			[19, 45, 15, 35, 46, 16],
			[17, 145, 115, 1, 146, 116],
			[14, 74, 46, 21, 75, 47],
			[29, 54, 24, 19, 55, 25],
			[11, 45, 15, 46, 46, 16],
			[13, 145, 115, 6, 146, 116],
			[14, 74, 46, 23, 75, 47],
			[44, 54, 24, 7, 55, 25],
			[59, 46, 16, 1, 47, 17],
			[12, 151, 121, 7, 152, 122],
			[12, 75, 47, 26, 76, 48],
			[39, 54, 24, 14, 55, 25],
			[22, 45, 15, 41, 46, 16],
			[6, 151, 121, 14, 152, 122],
			[6, 75, 47, 34, 76, 48],
			[46, 54, 24, 10, 55, 25],
			[2, 45, 15, 64, 46, 16],
			[17, 152, 122, 4, 153, 123],
			[29, 74, 46, 14, 75, 47],
			[49, 54, 24, 10, 55, 25],
			[24, 45, 15, 46, 46, 16],
			[4, 152, 122, 18, 153, 123],
			[13, 74, 46, 32, 75, 47],
			[48, 54, 24, 14, 55, 25],
			[42, 45, 15, 32, 46, 16],
			[20, 147, 117, 4, 148, 118],
			[40, 75, 47, 7, 76, 48],
			[43, 54, 24, 22, 55, 25],
			[10, 45, 15, 67, 46, 16],
			[19, 148, 118, 6, 149, 119],
			[18, 75, 47, 31, 76, 48],
			[34, 54, 24, 34, 55, 25],
			[20, 45, 15, 61, 46, 16]
		], r.getRSBlocks = function(e, t) {
			var i = r.getRsBlockTable(e, t);
			if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
			for (var n = i.length / 3, o = [], a = 0; a < n; a++)
				for (var s = i[3 * a + 0], h = i[3 * a + 1], l = i[3 * a + 2], u = 0; u < s; u++) o.push(new r(h, l));
			return o
		}, r.getRsBlockTable = function(e, t) {
			switch (t) {
				case h.L:
					return r.RS_BLOCK_TABLE[4 * (e - 1) + 0];
				case h.M:
					return r.RS_BLOCK_TABLE[4 * (e - 1) + 1];
				case h.Q:
					return r.RS_BLOCK_TABLE[4 * (e - 1) + 2];
				case h.H:
					return r.RS_BLOCK_TABLE[4 * (e - 1) + 3];
				default:
					return
			}
		}, n.prototype = {
			get: function(e) {
				var t = Math.floor(e / 8);
				return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
			},
			put: function(e, t) {
				for (var i = 0; i < t; i++) this.putBit(1 == (e >>> t - i - 1 & 1))
			},
			getLengthInBits: function() {
				return this.length
			},
			putBit: function(e) {
				var t = Math.floor(this.length / 8);
				this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
			}
		};
		var f = [
				[17, 14, 11, 7],
				[32, 26, 20, 14],
				[53, 42, 32, 24],
				[78, 62, 46, 34],
				[106, 84, 60, 44],
				[134, 106, 74, 58],
				[154, 122, 86, 64],
				[192, 152, 108, 84],
				[230, 180, 130, 98],
				[271, 213, 151, 119],
				[321, 251, 177, 137],
				[367, 287, 203, 155],
				[425, 331, 241, 177],
				[458, 362, 258, 194],
				[520, 412, 292, 220],
				[586, 450, 322, 250],
				[644, 504, 364, 280],
				[718, 560, 394, 310],
				[792, 624, 442, 338],
				[858, 666, 482, 382],
				[929, 711, 509, 403],
				[1003, 779, 565, 439],
				[1091, 857, 611, 461],
				[1171, 911, 661, 511],
				[1273, 997, 715, 535],
				[1367, 1059, 751, 593],
				[1465, 1125, 805, 625],
				[1528, 1190, 868, 658],
				[1628, 1264, 908, 698],
				[1732, 1370, 982, 742],
				[1840, 1452, 1030, 790],
				[1952, 1538, 1112, 842],
				[2068, 1628, 1168, 898],
				[2188, 1722, 1228, 958],
				[2303, 1809, 1283, 983],
				[2431, 1911, 1351, 1051],
				[2563, 1989, 1423, 1093],
				[2699, 2099, 1499, 1139],
				[2809, 2213, 1579, 1219],
				[2953, 2331, 1663, 1273]
			],
			_ = function() {};
		return _.createQRModel = function(e, i) {
			var r, n = new t(o(e, (r = void 0 === i ? {
				width: 256,
				height: 256,
				colorDark: {
					r: 0,
					g: 0,
					b: 0,
					a: 1
				},
				colorLight: {
					r: 1,
					g: 1,
					b: 1,
					a: 1
				},
				correctLevel: 2
			} : i).correctLevel), r.correctLevel);
			return n.addData(e), n.make(), n
		}, _.createQRCodeNode = function(e, t) {
			var i;
			i = void 0 === t ? {
				width: 256,
				height: 256,
				colorDark: {
					r: 0,
					g: 0,
					b: 0,
					a: 1
				},
				colorLight: {
					r: 1,
					g: 1,
					b: 1,
					a: 1
				},
				correctLevel: 2
			} : t;
			for (var r = new BK.Canvas(i.width, i.height), n = _.createQRModel(e, t), o = n.getModuleCount(), a = i.width / o, s = i.height / o, h = Math.round(a), l = Math.round(s), u = 0; u < o; u++)
				for (var d = 0; d < o; d++) {
					var c = n.isDark(u, d),
						f = d * a,
						g = u * s;
					r.lineWidth = 1, r.fillColor = c ? i.colorDark : i.colorLight, r.drawStyle = 0, r.fillRect(f, g, a, s), r.strokeColor = c ? i.colorDark : i.colorLight, r.strokeRect(Math.ceil(f) - .5, Math.ceil(g) - .5, h, l), r.strokeRect(Math.ceil(f) + .5, Math.ceil(g) + .5, h, l)
				}
			return r
		}, _.createQRCodeToFile = function(e, t, i) {
			return _.createQRCodeNode(t, i).saveTo(e), !0
		}, _.compose = function(e, t, i, r) {
			var n = BK.Director.screenPixelSize.width,
				o = BK.Director.screenPixelSize.height,
				a = new BK.Canvas(n, o);
			a.drawImage(e, 0, 0), a.drawImage(t, 0, 0), a.saveTo("GameSandBox://compose.png"), a.dispose()
		}, _
	}),
	function(e, t) {
		var i = function() {
			function e(e, t) {
				this.loadJsonAtlasArray(e, function(e, i) {
					for (var r = 0; r < i.length; r++) {
						var n = i[r],
							o = n.jsonInfo,
							a = n.atlasInfo,
							s = o.data,
							h = a.data,
							l = o.path,
							u = a.path;
						this.loadAccessory(s, l, h, u)
					}
					t(e, i)
				}.bind(this))
			}

			function t(e, t) {
				var i = [e];
				this.loadJsonAtlasArray(i, function(i, r) {
					if (0 == i) {
						var n = r[0],
							o = n.jsonInfo,
							a = n.atlasInfo,
							s = o.data,
							h = a.data,
							l = o.path,
							u = a.path,
							d = this.load(s, l, h, u);
						t(d, e)
					} else t(-1, null)
				}.bind(this))
			}

			function i(e, t, i) {
				BK.FileManager.Instance.readFile({
					file: [{
						path: e
					}, {
						path: t
					}]
				}, function(e) {
					BK.Script.log(1, 0, "res = " + JSON.stringify(e));
					for (var t, r, n = 0; n < e.length; n++) {
						var o = e[n],
							a = o.path,
							s = a.substring(a.lastIndexOf("."));
						".json" == s ? t = o : ".atlas" == s && (r = o)
					}
					i(0, t, r)
				}.bind(this))
			}

			function r(e, t) {
				for (var i = [], r = 0; r < e.length; r++) {
					var n = e[r],
						o = {
							path: n.json
						},
						a = {
							path: n.atlas
						};
					i.push(o), i.push(a)
				}
				BK.FileManager.Instance.readFile({
					file: i
				}, function(i) {
					BK.Script.log(1, 0, "res = " + JSON.stringify(i));
					for (var r = 0; r < i.length; r++) {
						var n = i[r],
							o = n.path,
							a = o.substring(o.lastIndexOf(".")),
							s = !1;
						".json" == a ? s = !0 : ".atlas" == a && (s = !1);
						for (var h = 0; h < e.length; h++) {
							var l = e[h],
								u = null;
							if (s) {
								d = (u = l.json).substring(u.indexOf("://") + 3, u.length);
								o.indexOf(d) > 0 && (e[h].jsonInfo = n)
							} else {
								var d = (u = l.atlas).substring(u.indexOf("://") + 3, u.length);
								o.indexOf(d) > 0 && (e[h].atlasInfo = n)
							}
						}
					}
					t(0, e)
				}.bind(this))
			}

			function n(e, t, i) {
				var r = [e];
				this.loadJsonAtlasArray(r, function(r, n) {
					if (0 == r) {
						var o = n[0],
							a = o.jsonInfo,
							s = o.atlasInfo,
							h = a.data,
							l = s.data,
							u = a.path,
							d = s.path,
							c = this.loadAccessoryAnimation(h, u, l, d, t);
						i(c, t, e)
					} else i(-1, t, null)
				}.bind(this))
			}
			return {
				setAccessoryAsync: e,
				loadJsonAtlas: i,
				loadSkeletonAsync: t,
				setAccessoryAnimationAsync: n,
				loadJsonAtlasArray: r
			}
		}();
		e.SkeletonAnimation.__proto__.setAccessoryAsync = i.setAccessoryAsync, e.SkeletonAnimation.__proto__.loadJsonAtlas = i.loadJsonAtlas, e.SkeletonAnimation.__proto__.loadSkeletonAsync = i.loadSkeletonAsync, e.SkeletonAnimation.__proto__.setAccessoryAnimationAsync = i.setAccessoryAnimationAsync, e.SkeletonAnimation.__proto__.loadJsonAtlasArray = i.loadJsonAtlasArray
	}(BK)
}
var __extends = this && this.__extends || function() {
	var e = Object.setPrototypeOf || {
		__proto__: []
	}
	instanceof Array && function(e, t) {
		e.__proto__ = t
	} || function(e, t) {
		for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
	};
	return function(t, i) {
		function r() {
			this.constructor = t
		}
		e(t, i), t.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
	}
}();
if (function(e, t) {
		"object" == typeof e && (e.AdVideoHandler = t().AdVideoHandler, e.AdVideoHandlerNative = t().AdVideoHandlerNative)
	}(BK, function() {
		var e = function() {
			function e(e, t, i, r) {
				this._onStartPlay = function(e) {
					this.event && this.event.onStartPlay ? this.event.onStartPlay(e.code, e.msg) : this.log("lack of onStartPlay callback"), this.log("_onStartPlay")
				}, this.videoType = e;
				var n = "";
				i.display_info && i.display_info.button_info && i.display_info.button_info.length > 0 && (n = i.display_info.button_info[0].txt);
				i.display_info.advertiser_info.corporation_name, i.display_info.advertiser_info.corporate_image_name, i.display_info.advertiser_info.corporate_logo;
				var o = 0;
				if (i.display_info.button_info.length > 0)
					for (var a = i.display_info.button_info, s = 0; s < a.length; s++) {
						var h = a[s];
						if (void 0 != typeof h.pos) {
							o = h.pos;
							break
						}
					}
				this.adVideoInfo = {
					pos_id: t,
					tencent_video_id: i.display_info.video_info.tencent_video_id,
					creative_size: i.display_info.creative_size,
					dest_info: i.dest_info,
					buttonInfo_txt: n,
					buttonInfo_pos: o,
					corporation_name: i.display_info.advertiser_info.corporation_name,
					corporate_image_name: i.display_info.advertiser_info.corporate_image_name,
					corporate_logo: i.display_info.advertiser_info.corporate_logo,
					base_info: i.display_info.basic_info.txt,
					product_type: i.product_type,
					exposure_url: i.report_info.exposure_url,
					click_url: i.report_info.click_url,
					video_preview_url: i.display_info.basic_info.img,
					pkg_download_schema: i.app_info.pkg_download_schema
				}, this.adVideoInfo.dksjs = Math.random().toString(), this.gameOrientation = r
			}
			return e.prototype._onEnterForeground = function() {
				this.log("_onEnterForeground"), void 0 !== this.envType ? this._resumeAllMusic() : BK.Audio.switch = !1
			}, e.prototype._removeListener = function() {
				BK.MQQ.SsoRequest.removeListener("sc.game_enter_foreground.local", this), BK.MQQ.SsoRequest.removeListener("sc.apolloGameWebMessage.local", this)
			}, e.prototype._addListener = function() {
				BK.MQQ.SsoRequest.addListener("sc.game_enter_foreground.local", this, this._onEnterForeground.bind(this))
			}, e.prototype.jump = function() {
				this._addListener(), BK.Advertisement.videoCMReport(this.videoType, 3), this._pauseAllMusic();
				var e = this.gameOrientation,
					t = this.adVideoInfo,
					i = "https://cmshow.qq.com/apollo/html/game-platform/game-ad.html?_wv=4099&_bid=3143&_fv=0&";
				i = (i = (i = i + "gameOrientation=" + (void 0 === e ? 1 : e) + "&") + "gameId=" + GameStatusInfo.gameId + "&") + "adInfo=" + encodeURI(JSON.stringify(t));
				var r = {
					gameOrientation: e,
					transparent: 1,
					businessType: 2,
					openId: GameStatusInfo.openId,
					url: i
				};
				BK.MQQ.SsoRequest.addListener("sc.apolloGameWebMessage.local", this, function(e, t, i) {
					0 == e && i.op && ("apolloGamePlatform.endAdVideo" == i.op ? i.data ? this._onEndAdVideo(i.data) : (this._onEndAdVideo(null), BK.Script.log(1, 1, "video ad end failed. data.data is null")) : "apolloGamePlatform.closeGame" == i.op ? i.data ? this._onCloseGame(i.data) : (this._onCloseGame(null), BK.Script.log(1, 1, "video ad close failed. data.data is null")) : "apolloGamePlatform.miniGame" == i.op ? "number" == typeof i.ggspd && (BK.Advertisement.ggspd = i.ggspd) : "apolloGamePlatform.closeWv" == i.op ? (this._onCloseWebView(i.data), this.log("closeWv:" + JSON.stringify(i))) : "apolloGamePlatform.startAdVideo" == i.op && (this._onStartPlay(i.data), this.log("startAdVideo:" + JSON.stringify(i))))
				}.bind(this)), BK.MQQ.SsoRequest.send(r, "cs.openWebViewWithoutUrl.local")
			}, e.prototype._onCloseWebView = function(e) {
				var t = 0;
				void 0 !== e.type && (0 == (t = e.type) ? (this._resumeAllMusic(), this._removeListener()) : 1 == t && (this.envType = 1), this.log("_onCloseWebView " + t)), this.event && this.event.onCloseVideo ? this.event.onCloseVideo(e.code, e.msg) : this.log("lack of onCloseWebView callback"), this.event.onCloseVideo = null
			}, e.prototype._onMini = function() {}, e.prototype._onCloseGame = function(e) {
				e ? this.event && this.event.onCloseGame ? e && e.code ? this.event.onCloseGame(e.code, e.msg) : this.event.onCloseGame(0, "") : this.log("lack of onClose callback") : this.event.onCloseGame(-1, "_onCloseGame failed data is null"), BK.QQ.notifyCloseGame(), this.event.onCloseGame = null
			}, e.prototype._onEndAdVideo = function(e) {
				e ? this.event && this.event.onEndVideo ? e.dksjs == this.adVideoInfo.dksjs ? this.event.onEndVideo(e.code, e.msg) : (BK.Script.log(1, 1, "data.dksjs:" + e.dksjs + " this.adInfo[dksjs]:" + this.adVideoInfo.dksjs), this.event.onEndVideo(-1, "end video failed! illegal end viedo")) : this.log("lack of onEnd callback") : this.event.onEndVideo(-1, "_onEndAdVideo failed.data is null"), this.event.onEndVideo = void 0
			}, e.prototype._pauseAllMusic = function() {
				void 0 === BK.isBrowser && (this.formerSwitch = BK.Audio.switch, BK.Audio.pauseAllBackground(), BK.Audio.switch = !1, this.log("pauseAllMusic formerSwitch:" + this.formerSwitch))
			}, e.prototype._resumeAllMusic = function() {
				void 0 === BK.isBrowser && (BK.Audio.switch = this.formerSwitch, BK.Audio.resumeAllBackground(), this.log("resumeAllMusic formerSwitch:" + this.formerSwitch))
			}, e.prototype.setEventCallack = function(e, t, i, r) {
				void 0 === this.event ? this.event = {
					onCloseGame: e,
					onEndVideo: t,
					onCloseVideo: i,
					onStartPlay: r
				} : (this.event.onCloseGame = e, this.event.onEndVideo = t, this.event.onCloseVideo = i, this.event.onStartPlay = r)
			}, e.prototype.log = function(e) {
				BK.Script.log(1, 1, "AdVideoHandler:" + e)
			}, e.prototype.debugLog = function(e) {
				BK.Script.log(0, 0, "AdVideoHandler Debug:" + e)
			}, e.prototype.errorLog = function(e) {
				BK.Script.log(1, 1, "AdVideoHandler Error:" + e)
			}, e
		}();
		return {
			AdVideoHandler: e,
			AdVideoHandlerNative: function(e) {
				function t(t, i, r, n) {
					var o = e.call(this, t, i, r, n) || this;
					return o.CMSHOW_SC_CMD_AD_VIDEO_START = "sc.game_ad_video_start.local", o.CMSHOW_SC_CMD_AD_VIDEO_END = "sc.game_ad_video_end.local", o.CMSHOW_SC_CMD_AD_VIDEO_CLOSE = "sc.game_ad_video_view_close.local", o.CMSHOW_SC_CMD_SHELL_CLOSE = "sc.game_shell_close.local", o.CMSHOW_CS_CMD_AD_VIDEO_JUMP = "cs.game_ad_video_jump.local", o.CMSHOW_CS_CMD_AD_VIDEO_CLOSE = "cs.game_ad_video_close.local", o.posid = i, o.adInfo = r, o
				}
				return __extends(t, e), t.prototype.jump = function() {
					this.addNativeListener(), BK.Advertisement.videoCMReport(this.videoType, 3), this._pauseAllMusic(), BK.MQQ.SsoRequest.send(this.adInfo, this.CMSHOW_CS_CMD_AD_VIDEO_JUMP)
				}, t.prototype.close = function() {
					BK.MQQ.SsoRequest.send({}, this.CMSHOW_CS_CMD_AD_VIDEO_CLOSE)
				}, t.prototype.setEventCallack = function(e, t, i, r) {
					void 0 === this.event ? this.event = {
						onCloseGame: e,
						onEndVideo: t,
						onCloseVideo: i,
						onStartPlay: r
					} : (this.event.onCloseGame = e, this.event.onEndVideo = t, this.event.onCloseVideo = i, this.event.onStartPlay = r)
				}, t.prototype._startVideo = function(e, t, i) {
					this.event && this.event.onStartPlay ? this.event.onStartPlay(e, "") : this.log("lack of onStartPlay callback"), this.log("_onStartPlay")
				}, t.prototype._endVideo = function(e, t, i) {
					this.event && this.event.onEndVideo ? this.event.onEndVideo(e, "") : this.log("lack of onEnd callback"), this.log("_endVideo")
				}, t.prototype._closeVideo = function(e, t, i) {
					this._resumeAllMusic(), this.event && this.event.onCloseVideo ? this.event.onCloseVideo(e, "") : this.log("lack of onEnd callback"), this.log("_closeVideo"), this.removeNativeListener()
				}, t.prototype._closeGame = function(e, t, i) {
					this.event && this.event.onCloseGame ? this.event.onCloseGame(e, "") : this.log("lack of onClose callback"), this.event.onCloseGame = null
				}, t.prototype.removeNativeListener = function() {
					BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_AD_VIDEO_START, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_AD_VIDEO_END, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_AD_VIDEO_CLOSE, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this)
				}, t.prototype.addNativeListener = function() {
					BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_AD_VIDEO_START, this, this._startVideo.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_AD_VIDEO_END, this, this._endVideo.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_AD_VIDEO_CLOSE, this, this._closeVideo.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this, this._closeGame.bind(this))
				}, t
			}(e)
		}
	}), function(e, t) {
		"object" == typeof e && (e.Advertisement = t().Advertisement, e.AdBannerHandler = t().AdBannerHandler)
	}(BK, function() {
		var e = function() {
			function e(e, t) {
				this.closeUrl = "https://i.hudongcdn.com/game_cdn/ad_close.png", this.adIconUrl = "https://i.hudongcdn.com/game_cdn/ad_icon.png", this.pos_id = e, this.event = {}, this.adInfo = t, this.sizeW = .78 * BK.Director.screenPixelSize.width;
				var i = BK.Director.screenPixelSize.width;
				i > BK.Director.screenPixelSize.height && (this.sizeW = .44 * i), this.sizeH = 166 * this.sizeW / 582, this.closeBtnW = 46 * this.sizeW / 582, this.clsoeBtnH = 46 * this.sizeH / 166, this.btnSpace = 14 * this.sizeH / 166, BK.Script.log(1, 1, " constructor: " + this.btnSpace), this.adIconW = 74 * this.sizeW / 582, this.adIconH = 46 * this.sizeH / 166
			}
			return e.prototype.isUseWebGL = function() {
				return void 0 !== gl
			}, e.prototype.onClickContent = function(e) {
				this.event.onClickContent = e
			}, e.prototype.onClickClose = function(e) {
				this.event.onClickClose = e
			}, e.prototype.show = function(e) {
				this.isUseWebGL() ? this.showWebGLNode(e) : this.showBKNode(e)
			}, e.prototype._onLoadBackgroundCallback = function(e, t, i) {
				200 == t ? (this.exposeureReport(), i(0, "OK", this)) : (i(-1, "load image failed!", this), this.close())
			}, e.prototype._onClickContentBtn = function() {
				this.event.onClickContent && this.event.onClickContent(), BK.MQQ.Webview.open(this.adInfo.report_info.click_url)
			}, e.prototype._onClickCloseBtn = function() {
				this.event.onClickClose && this.event.onClickClose(), this.closeReport(), this.close()
			}, e.prototype.showBKNode = function(e) {
				this.rootNode = new BK.Node, this.rootNode.canUserInteract = !0, this.backgound = new BK.Button(this.sizeW, this.sizeH), this.backgound.setNormalTextureFromUrl(this.adInfo.display_info.basic_info.img, function(t, i) {
					this._onLoadBackgroundCallback(t, i, e)
				}.bind(this)), this.rootNode.addChild(this.backgound), this.closeBtn = new BK.Button(this.closeBtnW, this.clsoeBtnH), this.closeBtn.position = {
					x: this.sizeW - this.closeBtnW - this.btnSpace,
					y: this.sizeH - this.clsoeBtnH - this.btnSpace
				}, this.closeBtn.setNormalTextureFromUrl(this.closeUrl, function(e, t) {}.bind(this)), this.rootNode.addChild(this.closeBtn), this.adIconBtn = new BK.Button(this.adIconW, this.adIconH), this.adIconBtn.position = {
					x: this.btnSpace,
					y: this.btnSpace
				}, this.adIconBtn.setNormalTextureFromUrl(this.adIconUrl, function(e, t) {
					200 != t && BK.Script.log(1, 1, "")
				}.bind(this)), this.rootNode.addChild(this.adIconBtn), this.backgound.setTouchInsideCallback(function(e) {
					this._onClickContentBtn()
				}.bind(this)), this.closeBtn.setTouchInsideCallback(function(e) {
					this._onClickCloseBtn()
				}.bind(this)), this.renderBKNode()
			}, e.prototype.renderBKNode = function() {
				var e = BK.Director.screenPixelSize.width / BK.Director.root.scale.x,
					t = this.sizeW * (1 / BK.Director.root.scale.x);
				this.rootNode.position = {
					x: (e - t) / 2,
					y: 0
				}, this.rootNode.scale = {
					x: 1 / BK.Director.root.scale.x,
					y: 1 / BK.Director.root.scale.y
				}, BK.Director.root.addChild(this.rootNode)
			}, e.prototype.closeBKNode = function() {
				this.rootNode.removeFromParent()
			}, e.prototype.showWebGLNode = function(e) {
				this.context = new BK.GLRenderContext;
				var t = BK.JSMatrix.fromOrthographic(0, BK.Director.screenPixelSize.width, 0, BK.Director.screenPixelSize.height, -1, 1);
				this.context.setProjection(t);
				var i = BK.Director.screenPixelSize.width;
				BK.Director.screenPixelSize.height;
				this.glRootNode = new BK.GLRenderButton(this.context, this.sizeW, this.sizeH), this.glRootNode.canUserInteract = !0, this.glRootNode.canClick = !1, this.glRootNode.setUrlPath(this.adInfo.display_info.basic_info.img, function(t, i) {
					this.glRootNode.canClick = !0, this._onLoadBackgroundCallback(t, i, e)
				}.bind(this)), this.glRootNode.position = {
					x: (i - this.sizeW) / 2,
					y: 0
				}, this.glCloseBtn = new BK.GLRenderButton(this.context, this.closeBtnW, this.clsoeBtnH), this.glCloseBtn.setUrlPath(this.closeUrl), this.glCloseBtn.position = {
					x: this.sizeW - this.closeBtnW - this.btnSpace,
					y: this.sizeH - this.clsoeBtnH - this.btnSpace
				}, this.glRootNode.addChild(this.glCloseBtn), this.glAdIconBtn = new BK.GLRenderButton(this.context, this.adIconW, this.adIconH), this.glAdIconBtn.setUrlPath(this.adIconUrl), this.glAdIconBtn.position = {
					x: this.btnSpace,
					y: this.btnSpace
				}, this.glRootNode.addChild(this.glAdIconBtn), this.glRootNode.setTouchInsideCallback(function(e) {
					this._onClickContentBtn()
				}.bind(this)), this.glCloseBtn.setTouchInsideCallback(function(e) {
					this._onClickCloseBtn()
				}.bind(this)), this.renderWebGLNode()
			}, e.prototype.renderWebGLNode = function() {
				UIEventHandler.setRootNode(this.glRootNode), BK.GLRenderContext.hookGLCommit(function(e) {
					if (this.context && this.glRootNode) {
						if (0 == e.methodWorking) return;
						this.context.save(), e.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height), e.disable(e.DEPTH_TEST), e.useProgram(this.context.getProgram()), this.glRootNode.render(), this.context.restore()
					}
				}.bind(this))
			}, e.prototype.closeWebGLNode = function() {
				this.glRootNode && this.glRootNode.dispose(), this.context && this.context.dispose(), this.glRootNode = null, this.context = null, BK.GLRenderContext.exit()
			}, e.prototype.close = function() {
				this.isUseWebGL() ? this.closeWebGLNode() : this.closeBKNode()
			}, e.prototype.exposeureReport = function() {
				if (this.adInfo.report_info && this.adInfo.report_info.exposure_url) {
					var e = this.adInfo.report_info.exposure_url;
					new BK.HttpUtil(e).requestAsync(function(e, t) {
						200 == t ? BK.Script.log(1, 1, "exposeureReport succ.") : BK.Script.log(1, 1, "exposeureReport failed.statuscode:" + t)
					}.bind(this)), this.cmshowReport(0)
				}
			}, e.prototype.closeReport = function() {
				if (this.adInfo.report_info && this.adInfo.report_info.negative_feedback_url) {
					var e = this.adInfo.report_info.negative_feedback_url;
					e = e.replace("__ACT_TYPE__", "2001"), new BK.HttpUtil(e).requestAsync(function(e, t) {
						200 == t ? BK.Script.log(1, 1, "negative_feedback succ.") : BK.Script.log(1, 1, "negative_feedback failed.statuscode:" + t)
					}.bind(this)), this.cmshowReport(3)
				} else BK.Script.log(1, 1, "closeReport failed.can not find the negative_feedback_url")
			}, e.prototype.cmshowReport = function(e) {
				var t = this.pos_id,
					i = e.toString();
				BK.QQ.uploadData("banner_SPA", t, i, "", "", "")
			}, e.prototype.reportParamToString = function() {
				var e = this.adInfo.report_info.trace_info,
					t = "";
				if ("object" == typeof e) {
					for (var i in e) t = t + i + "=" + e[i] + "&";
					t = t.substring(0, t.length - 1)
				}
				return t
			}, e
		}();
		return {
			Advertisement: function() {
				function t() {}
				return t.fetch = function(e, t) {
					if (GameStatusInfo.devPlatform) {
						var i = this.getDebugRetData();
						this.parseQQAdGetRsp(i, t)
					} else {
						var r = "apollo_router_game.game_ad_linkcmd_get_ad";
						BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, function(e, i, r) {
							0 == e ? this.parseQQAdGetRsp(r, t) : t(e, "sso respose not 0.", null)
						}.bind(this));
						var n = {
							game_id: GameStatusInfo.gameId,
							posid: e
						};
						BK.isBrowser ? BK.MQQ.SsoRequest.sendSSO(n, r) : BK.MQQ.SsoRequest.send(n, r)
					}
				}, t.videoCMReport = function(e, t) {
					var i = e.toString(),
						r = t.toString(),
						n = GameStatusInfo.openId;
					BK.QQ.uploadData("enter_SPA", i, r, n, "", "")
				}, t.parseQQAdGetRsp = function(e, t) {
					if (0 == e.ret)
						if (e.pos_ads_info.length > 0) {
							var i = e.pos_ads_info[0];
							if (0 == i.ret) {
								BK.Script.log(1, 1, "fetch ad 广告位id:" + i.pos_id);
								var r = i.ads_info;
								if (r.length > 0) {
									var n = r[0];
									14 == n.display_info.pattern_type ? BK.Script.log(1, 1, "成功拉取Banner广告") : 3 == n.display_info.pattern_type && BK.Script.log(1, 1, "成功拉取视频广告"), t(0, "OK", n)
								}
							} else BK.Script.log(1, 1, "广告位信息返回失败为空 ret:" + i.ret + " msg:" + i.msg), t(-1, "posAdInfo.ret not succeed 0. Detail:" + JSON.stringify(e), null)
						} else BK.Script.log(1, 1, "fetch ad 广告信息为空"), t(-1, "pos_ads_info.length is 0.Detail:" + JSON.stringify(e), null);
					else BK.Script.log(1, 1, "fetch ad failed.ret:" + e.ret + " msg:" + e.msg), t(-1, "fetch ad failed. Detail:" + JSON.stringify(e), null)
				}, t.canReqBanner = function() {
					var e = !0;
					return void 0 == this.lastBannerReqTs ? (this.lastBannerReqTs = BK.Time.timestamp, e) : (BK.Time.timestamp - this.lastBannerReqTs > 10 ? (e = !0, this.lastBannerReqTs = BK.Time.timestamp) : e = !1, e)
				}, t.fetchBannerAd = function(t) {
					if (0 != this.canReqBanner()) {
						var i = "6030739316978191";
						this.fetch(i, function(r, n, o) {
							if (0 == r) {
								var a = new e(i, o);
								t(r, n, a)
							} else t(r, n, null)
						}.bind(this))
					} else t(-1, "frequency is limited", null)
				}, t.fetchVideoAd = function(e, t) {
					var i;
					switch (e) {
						case 0:
							i = "2070535377286161";
							break;
						case 1:
							i = "7050835357984103";
							break;
						case 2:
							i = "4010139256618321";
							break;
						case 3:
							i = "5030538286214342"
					}
					this.videoCMReport(e, 4), this.fetch(i, function(r, n, o) {
						if (o) {
							var a = 1;
							o && o.display_info && o.display_info.creative_size ? 185 == o.display_info.creative_size ? a = 3 : 585 == o.display_info.creative_size && (a = 1) : BK.Script.log(1, 1, "fetch ad has problem.lack of display_info.creative_size property.");
							var s = 1,
								h = this.getGameConfig();
							h && void 0 !== h.viewMode && (s = h.viewMode);
							var l = !0,
								u = "";
							if (o.display_info && o.display_info.video_info && o.display_info.video_info.tencent_video_id && "string" == typeof o.display_info.video_info.tencent_video_id && o.display_info.video_info.tencent_video_id.length > 0 ? l = !0 : (l = !1, u = "can not find video id"), 1 == BK.Misc.qqVerLessthan(GameStatusInfo.QQVer, "7.7.0") && (3 != s && 2 != s || 1 != a || (l = !1, u = "device oriation compare failed.device :" + s.toString() + " ad:" + a.toString())), 1 == l)
								if (0 == r) {
									this.videoCMReport(e, 5);
									var d = void 0;
									d = 1 == BK.Misc.qqVerLessthan(GameStatusInfo.QQVer, "7.7.0") ? new BK.AdVideoHandler(e, i, o, s) : new BK.AdVideoHandlerNative(e, i, o, s), t(r, n, d)
								} else t(r, n, null);
							else t(-1, "no ads found." + u, null)
						} else t(-1, "ad data is undefined or null", null)
					}.bind(this))
				}, t.getGameConfig = function() {
					if (!BK.isBrowser) {
						var e = BK.FileUtil.readFile("GameRes://gameConfig.json");
						if (e && e.length > 0) {
							var t = e.readAsString();
							return JSON.parse(t)
						}
					}
				}, t.getDebugRetData = function() {
					return {
						ret: 0,
						msg: "s",
						pos_ads_info: [{
							ret: 0,
							msg: "string",
							pos_id: "string",
							ads_info: [{
								product_type: 1,
								display_info: {
									pattern_type: 1,
									creative_size: 1,
									animation_effect: 1,
									basic_info: {
										img: "http://mat1.gtimg.com/ipad/qq_time/imgs/20180505_lixia_base.jpg",
										img_s: "http://mat1.gtimg.com/ipad/images/time/timelogo.jpg",
										txt: "广告素材的标题",
										desc: "广告的详细描述"
									},
									button_info: [{
										txt: "按钮",
										url: "http://www.qq.com",
										pos: 1
									}],
									muti_pic_text_info: {
										txt: ["txt1", "txt2"],
										image: ["http://txt2.png", "http://txt2.png"],
										url: ["http://txt2.png", "http://txt2.png"]
									},
									advertiser_info: {
										corporation_name: "string",
										corporate_image_name: "string",
										corporate_logo: "string"
									},
									video_info: {
										video_url: "string",
										media_duration: 30
									}
								},
								report_info: void 0,
								dest_info: {
									dest_url_display_type: 1,
									landing_page: "https://www.qq.com",
									canvas_json: "string",
									dest_type: 1
								},
								app_info: void 0
							}]
						}],
						gdt_cookie: "string",
						busi_cookie: "string"
					}
				}, t.openAdVideo = function(e, t) {
					var i = "https://cmshow.qq.com/apollo/html/game-platform/game-ad.html";
					i = (i = (i = i + "?gameOrientation=" + (void 0 === t ? 1 : t) + "&") + "gameId=" + GameStatusInfo.gameId + "&") + "adInfo=" + JSON.stringify(e);
					var r = {
						gameOrientation: t,
						transparent: 1,
						businessType: 2,
						openId: GameStatusInfo.openId,
						url: i
					};
					BK.MQQ.SsoRequest.send(r, "cs.openWebViewWithoutUrl.local")
				}, t.lastBannerReqTs = void 0, t
			}(),
			AdBannerHandler: e
		}
	}), isBrowser) {
	var __browserMsgHdl = {};
	BK.MQQ.SsoRequest.listenerInfos = [], BK.MQQ.SsoRequest.addListener = function(e, t, i) {
		var r = {
			cmd: e,
			target: t,
			callback: i
		};
		BK.MQQ.SsoRequest.listenerInfos.forEach(function(r) {
			r.cmd == e && r.target == t && (r.callback = i)
		}, this), BK.MQQ.SsoRequest.listenerInfos.push(r)
	}, BK.MQQ.SsoRequest.removeListener = function(e, t) {
		for (var i = BK.MQQ.SsoRequest.listenerInfos.length, r = -1, n = 0; n < i; n++) {
			var o = BK.MQQ.SsoRequest.listenerInfos[n];
			o.cmd == e && o.target == t && (r = n)
		} - 1 != r && BK.MQQ.SsoRequest.listenerInfos.splice(r, 1)
	}, __browserMsgHdl.listenerInfos = [], __browserMsgHdl.addListener = function(e, t, i) {
		var r = {
				cmd: e,
				target: t,
				callback: i
			},
			n = !1;
		__browserMsgHdl.listenerInfos.forEach(function(r) {
			r.cmd == e && r.target == t && (r.callback = i, n = !0)
		}, this), 0 == n && __browserMsgHdl.listenerInfos.push(r)
	}, __browserMsgHdl.removeListener = function(e, t) {
		for (var i = __browserMsgHdl.listenerInfos.length, r = -1, n = 0; n < i; n++) {
			var o = __browserMsgHdl.listenerInfos[n];
			o.cmd == e && o.target == t && (r = n)
		} - 1 != r && __browserMsgHdl.listenerInfos.splice(r, 1)
	}
}! function(e, t) {
	"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Game = t())
}(1 == isBrowser ? window : BK, function() {
	var e;
	! function(e) {
		e[e.load = 0] = "load", e[e.min = 1] = "min", e[e.max = 2] = "max", e[e.share = 3] = "share", e[e.enterBackground = 4] = "enterBackground", e[e.enterForeground = 5] = "enterForeground"
	}(e || (e = {}));
	var t;
	return function(e) {
			e[e.native = 0] = "native", e[e.browser = 1] = "browser"
		}(t || (t = {})),
		function() {
			function e(e) {
				this.CMSHOW_CS_CMD_CLOSE_WND = "cs.close_room.local", this.CMSHOW_CS_CMD_SHARE_INFO = "cs.game_shell_share_callback.local", this.CMSHOW_SC_CMD_SHELL_PACK_UP = "sc.game_shell_pack_up.local", this.CMSHOW_SC_CMD_SHELL_SHARE = "sc.game_shell_share.local", this.CMSHOW_SC_CMD_SHELL_SHARE_COMPLETE = "sc.share_game_to_friend_result.local", this.CMSHOW_SC_CMD_SHELL_CLOSE = "sc.game_shell_close.local", this.CMD_CMSHOW_GAME_ENTER_BACKGROUND = "sc.game_enter_background.local", this.CMD_CMSHOW_GAME_ENTER_FORGROUND = "sc.game_enter_foreground.local", this.CMD_CMSHOW_GAME_MAXIMIZE = "sc.game_maximize.local", this.CMD_CMSHOW_GAME_MINIMIZE = "sc.game_minimize.local", this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR = "sc.init_global_var.local", this.CMD_CMSHOW_GAME_NETWORK_CHANGE = "sc.network_change.local", this.CMD_CMSHOW_GAME_WEBMESSAGE_HANDLE = "sc.web_callback_game.local", this.cfg = e, this.addAllListener(), this.cfg.onLoad && (!isBrowser || isBrowser && "undefined" != typeof GameStatusInfo) && this.cfg.onLoad(this)
			}
			return e.prototype.log = function(e) {
				BK.Script.log(0, 0, "Game:" + e)
			}, e.prototype.errorMessage = function() {
				return this.err.message
			}, e.prototype.errorStacktrace = function() {
				return this.err.stacktrace
			}, e.prototype.__isBrowser = function() {
				return isBrowser
			}, e.prototype.platform = function() {
				return this.__isBrowser() ? t.browser : t.native
			}, e.prototype.addAllListener = function() {
				this.platform() == t.native ? (BK.Script.setErrorObserver(function(e, t) {
					this.cfg.onException && (this.err = {
						message: e,
						stacktrace: t
					}, this.cfg.onException(this))
				}.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, this._onEnterBackground.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this, this._onEnterForeground.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this, this._onMax.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_MINIMIZE, this, this._onMin.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this, this._onShare.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE_COMPLETE, this, this._onShareComplete.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this, this._onClose.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_NETWORK_CHANGE, this, this._onNetworkChange.bind(this))) : (__browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, this._onEnterBackground.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this, this._onEnterForeground.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_MINIMIZE, this, this._onMin.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this, this._onMax.bind(this)), __browserMsgHdl.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this, this._onShare.bind(this)), __browserMsgHdl.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE_COMPLETE, this, this._onShareComplete.bind(this)), __browserMsgHdl.addListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this, this._onClose.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR, this, this._onInitGlobalVar.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_NETWORK_CHANGE, this, this._onNetworkChange.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_WEBMESSAGE_HANDLE, this, this._onWebMessageHandle.bind(this)))
			}, e.prototype.removeAllListener = function() {
				this.platform() == t.native ? (BK.Script.setErrorObserver(void 0), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_PACK_UP, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_NETWORK_CHANGE, this)) : (__browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_PACK_UP, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_NETWORK_CHANGE, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_WEBMESSAGE_HANDLE, this))
			}, e.prototype._onEnterBackground = function() {
				this.cfg.onEnterBackground && this.cfg.onEnterBackground(this)
			}, e.prototype._onEnterForeground = function() {
				this.cfg.onEnterForeground && this.cfg.onEnterForeground(this)
			}, e.prototype._onMax = function() {
				this.cfg.onMaximize && this.cfg.onMaximize(this)
			}, e.prototype._onMin = function() {
				this.cfg.onMinimize && this.cfg.onMinimize(this)
			}, e.prototype._generateDefaultQRCode = function() {
				var e = {
						width: 256,
						height: 256,
						colorDark: {
							r: 0,
							g: 0,
							b: 0,
							a: 1
						},
						colorLight: {
							r: 1,
							g: 1,
							b: 1,
							a: 1
						},
						correctLevel: 2
					},
					t = "http://cmshow.qq.com/apollo/html/game-platform/scan-game.html?gameId=" + GameStatusInfo.gameId.toString() + "&src=203";
				return BK.QRCode.createQRCodeToFile("GameSandBox://qrcode.png", t, e), "GameSandBox://qrcode.png"
			}, e.prototype._onShare = function() {
				var e = void 0;
				this.cfg.onShare && (e = this.cfg.onShare(this)), e || (e = {}), this.confirmShare(e)
			}, e.prototype._onShareComplete = function(e, t, i) {
				if (this.cfg.onShareComplete && 0 == i.reqCode) {
					var r = i.ret,
						n = 0 == i.isFirstTimeShare,
						o = i.shareTo;
					this.cfg.onShareComplete(this, r, o, n)
				}
			}, e.prototype._onClose = function() {
				this.cfg.onClose && this.cfg.onClose(this), this._confirmClose()
			}, e.prototype._confirmClose = function() {
				this.platform() == t.native ? BK.MQQ.SsoRequest.send({}, this.CMSHOW_CS_CMD_CLOSE_WND) : BK.MQQ.SsoRequest.sendTo({}, this.CMSHOW_CS_CMD_CLOSE_WND)
			}, e.prototype.confirmShare = function(e) {
				var i = e || {};
				i.reqCode = 0, this.platform() == t.native ? BK.MQQ.SsoRequest.send(i, this.CMSHOW_CS_CMD_SHARE_INFO) : BK.MQQ.SsoRequest.sendTo(i, this.CMSHOW_CS_CMD_SHARE_INFO)
			}, e.prototype._onInitGlobalVar = function(e, t, i) {
				void 0 !== i.uin && delete i.uin, GameStatusInfo = i, this.cfg.onLoad && this.cfg.onLoad(this)
			}, e.prototype._onNetworkChange = function(e, t, i) {
				this.cfg.onNetworkChange && (void 0 === i.type ? BK.Script.log(1, 1, "net work change .data is worng!") : this.cfg.onNetworkChange(this, i.type))
			}, e.prototype._onWebMessageHandle = function(e, t, i) {
				this.cfg.onWebMessageHandle && (void 0 === t || void 0 === i ? BK.Script.log(1, 1, "WebMessageHandle data is worng!") : this.cfg.onWebMessageHandle(this, t, i))
			}, e
		}()
});