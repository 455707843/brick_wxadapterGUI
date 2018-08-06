var qqPlayCoreBuildInfo = {
	buildPath: '/trunk/master',
	version: '3769',
	creator: 'wesleyxiao',
	buildTime: 'Mon May 14 2018 17:39:47 GMT+0800 (CST)'
};

function clone_(e) {
	var t, r, i;
	if ("object" != typeof e || null === e) return e;
	if (e instanceof Array)
		for (t = [], r = 0, i = e.length; r < i; r++) "object" == typeof e[r] && null != e[r] ? t[r] = arguments.callee(e[r]) : t[r] = e[r];
	else {
		t = {};
		for (r in e) "object" == typeof e[r] && null != e[r] ? t[r] = arguments.callee(e[r]) : t[r] = e[r]
	}
	return t
}

function skeletonAnimationAsync(e, t, r, i, n, a) {
	var o = e + ".png",
		s = e + ".atlas",
		f = e + ".json",
		u = 0;
	fileManager.readFile(o, function(e) {
		if (BK.Script.log(0, 0, "skeletonAnimationAsync Done"), 3 == ++u) {
			var o = BK.Script.pathForResource(f),
				d = BK.Script.pathForResource(s),
				h = new BK.SkeletonAnimation(d, o, t, r, i, n);
			a(h)
		}
	}), fileManager.readFile(s, function(e) {
		if (BK.Script.log(0, 0, "skeletonAnimationAsync Done"), 3 == ++u) {
			var o = BK.Script.pathForResource(f),
				d = BK.Script.pathForResource(s),
				h = new BK.SkeletonAnimation(d, o, t, r, i, n);
			a(h)
		}
	}), fileManager.readFile(f, function(e) {
		if (BK.Script.log(0, 0, "skeletonAnimationAsync Done"), 3 == ++u) {
			var o = BK.Script.pathForResource(f),
				d = BK.Script.pathForResource(s),
				h = new BK.SkeletonAnimation(d, o, t, r, i, n);
			a(h)
		}
	})
}

function setAccessoryAsync(e, t, r) {
	var i = t + ".png",
		n = t + ".atlas",
		a = t + ".json",
		o = 0;
	fileManager.readFile(i, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAsync Done"), 3 == ++o) {
			var i = BK.Script.pathForResource(a),
				s = BK.Script.pathForResource(n);
			e.setAccessory(i, s), r()
		}
	}), fileManager.readFile(n, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAsync Done"), 3 == ++o) {
			var i = BK.Script.pathForResource(a),
				s = BK.Script.pathForResource(n);
			e.setAccessory(i, s), r()
		}
	}), fileManager.readFile(a, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAsync Done"), 3 == ++o) {
			var i = BK.Script.pathForResource(a),
				s = BK.Script.pathForResource(n);
			e.setAccessory(i, s), r()
		}
	})
}

function setAccessoryWithInfoAsync(e, t, r, i) {
	var n = t + ".png",
		a = t + ".atlas",
		o = t + ".json",
		s = 0;
	fileManager.readFile(n, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryWithInfo Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryWithInfo(n, f, r), i()
		}
	}), fileManager.readFile(a, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryWithInfo Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryWithInfo(n, f, r), i()
		}
	}), fileManager.readFile(o, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryWithInfo Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryWithInfo(n, f, r), i()
		}
	})
}

function setAccessoryAnimationAsync(e, t, r, i) {
	var n = t + ".png",
		a = t + ".atlas",
		o = t + ".json",
		s = 0;
	fileManager.readFile(n, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAnimationAsync Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryAnimation(n, f, r), i()
		}
	}), fileManager.readFile(a, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAnimationAsync Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryAnimation(n, f, r), i()
		}
	}), fileManager.readFile(o, function(t) {
		if (BK.Script.log(0, 0, "setAccessoryAnimationAsync Done"), 3 == ++s) {
			var n = BK.Script.pathForResource(o),
				f = BK.Script.pathForResource(a);
			e.setAccessoryAnimation(n, f, r), i()
		}
	})
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
	}, this._shadowRadius = 0, this._textBaseLine = 0, this._textAlign = 0, this._useH5Mode = 0, 2 == e && (this.__nativeObj = new BK.CanvasNode(arguments[0], arguments[1]), this.setFlipXY(0, 1), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
		var t = e;
		"scale" != t && "contentSize" != t && "size" != t && Object.defineProperty(this, t, {
			get: function() {
				return this.__nativeObj[t]
			},
			set: function(e) {
				this.__nativeObj[t] = e
			}
		})
	}, this), Object.defineProperty(Canvas.prototype, "contentSize", {
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
	return gl || (gl = new BK.WebGL, attatchConst(), attachMethod(), gl.OpenOptMode = OpenOptMode, gl.viewport(0, 0, BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height)), Object.prototype.hasOwnProperty.call(this, "renderTicker") && renderTicker.setTickerCallBack(function(e, t) {}), gl
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
		if (e instanceof Int8Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeInt8Buffer(e[r]);
			return t
		}
		if (e instanceof Uint8Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeUint8Buffer(e[r]);
			return t
		}
		if (e instanceof Int16Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeInt16Buffer(e[r]);
			return t
		}
		if (e instanceof Uint16Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeUint16Buffer(e[r]);
			return t
		}
		if (e instanceof Int32Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeInt32Buffer(e[r]);
			return t
		}
		if (e instanceof Uint32Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeUint32Buffer(e[r]);
			return t
		}
		if (e instanceof Float32Array == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), r = 0; r < e.length; r++) t.writeFloatBuffer(e[r]);
			return t
		}
		if (e instanceof ArrayBuffer == 1) {
			for (var t = new BK.Buffer(e.byteLength, !1), i = new DataView(e), r = 0; r < e.byteLength; r++) t.writeUint8Buffer(i.getUint8(r));
			return t
		}
	}
	return e
}

function checkFirstFrames() {
	0 == firstFrameUpload && (BK.MQQ.SsoRequest.send({}, "cs.first_frame_drawn.local"), firstFrameUpload = !0)
}

function activeTexture(e) {
	gl.glActiveTexture(e)
}

function attachShader(e, t) {
	gl.glAttachShader(e, t)
}

function bindAttribLocation(e, t, r) {
	gl.glBindAttribLocation(e, t, r)
}

function bindBuffer(e, t) {
	gl.glBindBuffer(e, t)
}

function bindFramebuffer(e, t) {
	gl.glBindFramebuffer(e, t)
}

function bindRenderbuffer(e, t) {
	gl.glBindRenderbuffer(e, t)
}

function bindTexture(e, t) {
	gl.glBindTexture(e, t)
}

function blendColor(e, t, r, i) {
	gl.glBlendColor(e, t, r, i)
}

function blendEquation(e) {
	gl.glBlendEquation(e)
}

function blendEquationSeparate(e, t) {
	gl.glBlendEquationSeparate(e, t)
}

function blendFunc(e, t) {
	gl.glBlendFunc(e, t)
}

function blendFuncSeparate(e, t, r, i) {
	gl.glBlendFuncSeparate(e, t, r, i)
}

function bufferData(e, t, r) {
	gl.glBufferData(e, t, r)
}

function bufferData(e, t, r) {
	gl.glBufferData(e, __TypedArrayGetData(t), r)
}

function bufferSubData(e, t, r) {
	gl.glBufferSubData(e, t, __TypedArrayGetData(r))
}

function checkFramebufferStatus(e) {
	return gl.glCheckFramebufferStatus(e)
}

function clear(e) {
	gl.glClear(e)
}

function clearColor(e, t, r, i) {
	gl.glClearColor(e, t, r, i)
}

function clearDepth(e) {
	gl.glClearDepth(e)
}

function clearStencil(e) {
	gl.glClearStencil(e)
}

function colorMask(e, t, r, i) {
	gl.glColorMask(e, t, r, i)
}

function compileShader(e) {
	gl.glCompileShader(e)
}

function compressedTexImage2D(e, t, r, i, n, a, o) {
	gl.glCompressedTexImage2D(e, t, r, i, n, a, o)
}

function compressedTexSubImage2D(e, t, r, i, n, a, o, s) {
	gl.glCompressedTexSubImage2D(e, t, r, i, n, a, o, s)
}

function copyTexImage2D(e, t, r, i, n, a, o, s) {
	gl.glCopyTexImage2D(e, t, r, i, n, a, o, s)
}

function copyTexSubImage2D(e, t, r, i, n, a, o, s) {
	gl.glCopyTexSubImage2D(e, t, r, i, n, a, o, s)
}

function createBuffer() {
	return gl.glCreateBuffer()
}

function createFramebuffer() {
	return gl.glCreateFramebuffer()
}

function createProgram() {
	return gl.glCreateProgram()
}

function createRenderbuffer() {
	return gl.glCreateRenderbuffer()
}

function createShader(e) {
	return gl.glCreateShader(e)
}

function createTexture() {
	return gl.glCreateTexture()
}

function cullFace(e) {
	gl.glCullFace(e)
}

function deleteBuffer(e) {
	gl.glDeleteBuffer(e)
}

function deleteFramebuffer(e) {
	gl.glDeleteFramebuffer(e)
}

function deleteProgram(e) {
	gl.glDeleteProgram(e)
}

function deleteRenderbuffer(e) {
	gl.glDeleteRenderbuffer(e)
}

function deleteShader(e) {
	gl.glDeleteShader(e)
}

function deleteTexture(e) {
	gl.glDeleteTexture(e)
}

function depthFunc(e) {
	gl.glDepthFunc(e)
}

function depthMask(e) {
	gl.glDepthMask(e)
}

function depthRange(e, t) {
	gl.glDepthRange(e, t)
}

function detachShader(e, t) {
	gl.glDetachShader(e, t)
}

function disable(e) {
	gl.glDisable(e)
}

function disableVertexAttribArray(e) {
	gl.glDisableVertexAttribArray(e)
}

function drawArrays(e, t, r) {
	gl.glDrawArrays(e, t, r), r > 0 && checkFirstFrames()
}

function drawElements(e, t, r, i) {
	gl.glDrawElements(e, t, r, i), t > 0 && checkFirstFrames()
}

function enable(e) {
	gl.glEnable(e)
}

function enableVertexAttribArray(e) {
	gl.glEnableVertexAttribArray(e)
}

function finish() {
	gl.glFinish()
}

function flush() {
	gl.glFlush()
}

function framebufferRenderbuffer(e, t, r, i) {
	gl.glFramebufferRenderbuffer(e, t, r, i)
}

function framebufferTexture2D(e, t, r, i, n) {
	gl.glFramebufferTexture2D(e, t, r, i, n)
}

function frontFace(e) {
	gl.glFrontFace(e)
}

function generateMipmap(e) {
	gl.glGenerateMipmap(e)
}

function getAttribLocation(e, t) {
	return gl.glGetAttribLocation(e, t)
}

function getError() {
	return gl.glGetError()
}

function getShaderPrecisionFormat(e, t) {
	return gl.glGetShaderPrecisionFormat(e, t)
}

function getProgramInfoLog(e) {
	return gl.glGetProgramInfoLog(e)
}

function getShaderInfoLog(e) {
	return gl.glGetShaderInfoLog(e)
}

function getShaderSource(e) {
	return gl.glGetShaderSource(e)
}

function getUniformLocation(e, t) {
	return gl.glGetUniformLocation(e, t)
}

function getVertexAttribOffset(e, t) {
	return gl.glGetVertexAttribOffset(e, t)
}

function hint(e, t) {
	gl.glHint(e, t)
}

function isBuffer(e) {
	return gl.glIsBuffer(e)
}

function isEnabled(e) {
	return gl.glIsEnabled(e)
}

function isFramebuffer(e) {
	return gl.glIsFramebuffer(e)
}

function isProgram(e) {
	return gl.glIsProgram(e)
}

function isRenderbuffer(e) {
	return gl.glIsRenderbuffer(e)
}

function isShader(e) {
	return gl.glIsShader(e)
}

function isTexture(e) {
	return gl.glIsTexture(e)
}

function lineWidth(e) {
	gl.glLineWidth(e)
}

function linkProgram(e) {
	gl.glLinkProgram(e)
}

function pixelStorei(e, t) {
	gl.glPixelStorei(e, t)
}

function polygonOffset(e, t) {
	gl.glPolygonOffset(e, t)
}

function readPixels(e, t, r, i, n, a, o) {
	gl.glReadPixels(e, t, r, i, n, a, o)
}

function renderbufferStorage(e, t, r, i) {
	gl.glRenderbufferStorage(e, t, r, i)
}

function sampleCoverage(e, t) {
	gl.glSampleCoverage(e, t)
}

function scissor(e, t, r, i) {
	gl.glScissor(e, t, r, i)
}

function shaderSource(e, t) {
	gl.glShaderSource(e, t)
}

function stencilFunc(e, t, r) {
	gl.glStencilFunc(e, t, r)
}

function stencilFuncSeparate(e, t, r, i) {
	gl.glStencilFuncSeparate(e, t, r, i)
}

function stencilMask(e) {
	gl.glStencilMask(e)
}

function stencilMaskSeparate(e, t) {
	gl.glStencilMaskSeparate(e, t)
}

function stencilOp(e, t, r) {
	gl.glStencilOp(e, t, r)
}

function stencilOpSeparate(e, t, r, i) {
	gl.glStencilOpSeparate(e, t, r, i)
}

function texImage2D(e, t, r) {
	switch (arguments.length) {
		case 6:
			var i = arguments[3],
				n = arguments[4],
				a = arguments[5];
			Object.prototype.hasOwnProperty.call(a, "__nativeObj") ? gl.glTexImage2D(e, t, r, i, n, a.__nativeObj) : a.bkImage ? gl.glTexImage2D(e, t, r, i, n, a.bkImage) : gl.glTexImage2D(e, t, r, i, n, a);
			break;
		case 9:
			var o = arguments[3],
				s = arguments[4],
				f = arguments[5],
				i = arguments[6],
				n = arguments[7],
				u = arguments[8];
			gl.glTexImage2D(e, t, r, o, s, f, i, n, u)
	}
}

function texParameterf(e, t, r) {
	gl.glTexParameterf(e, t, r)
}

function texParameteri(e, t, r) {
	gl.glTexParameteri(e, t, r)
}

function texSubImage2D(e, t, r, i) {
	switch (arguments.length) {
		case 7:
			var n = arguments[4],
				a = arguments[5],
				o = arguments[6];
			Object.prototype.hasOwnProperty.call(o, "__nativeObj") ? gl.glTexSubImage2D(e, t, r, i, n, a, o.__nativeObj) : gl.glTexSubImage2D(e, t, r, i, n, a, o);
			break;
		case 9:
			var s = arguments[4],
				f = arguments[5],
				n = arguments[6],
				a = arguments[7],
				u = arguments[8];
			gl.glTexSubImage2D(e, t, r, i, s, f, n, a, u)
	}
}

function uniform1f(e, t) {
	gl.glUniform1f(e, t)
}

function uniform2f(e, t, r) {
	gl.glUniform2f(e, t, r)
}

function uniform3f(e, t, r, i) {
	gl.glUniform3f(e, t, r, i)
}

function uniform4f(e, t, r, i, n) {
	gl.glUniform4f(e, t, r, i, n)
}

function uniform1i(e, t) {
	gl.glUniform1i(e, t)
}

function uniform2i(e, t, r) {
	gl.glUniform2i(e, t, r)
}

function uniform3i(e, t, r, i) {
	gl.glUniform3i(e, t, r, i)
}

function uniform4i(e, t, r, i, n) {
	gl.glUniform4i(e, t, r, i, n)
}

function uniform1fv(e, t) {
	gl.glUniform1fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform2fv(e, t) {
	gl.glUniform2fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform3fv(e, t) {
	gl.glUniform3fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform4fv(e, t) {
	gl.glUniform4fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function uniform1iv(e, t) {
	gl.glUniform1iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform2iv(e, t) {
	gl.glUniform2iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform3iv(e, t) {
	gl.glUniform3iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniform4iv(e, t) {
	gl.glUniform4iv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Int32Array(t) : t))
}

function uniformMatrix2fv(e, t, r) {
	gl.glUniformMatrix2fv(e, t, __TypedArrayGetData(r instanceof Array == 1 ? new Float32Array(r) : r))
}

function uniformMatrix3fv(e, t, r) {
	gl.glUniformMatrix3fv(e, t, __TypedArrayGetData(r instanceof Array == 1 ? new Float32Array(r) : r))
}

function uniformMatrix4fv(e, t, r) {
	gl.glUniformMatrix4fv(e, t, __TypedArrayGetData(r instanceof Array == 1 ? new Float32Array(r) : r))
}

function useProgram(e) {
	gl.glUseProgram(e)
}

function validateProgram(e) {
	gl.glValidateProgram(e)
}

function vertexAttrib1f(e, t) {
	gl.glVertexAttrib1f(e, t)
}

function vertexAttrib2f(e, t, r) {
	gl.glVertexAttrib2f(e, t, r)
}

function vertexAttrib3f(e, t, r, i) {
	gl.glVertexAttrib3f(e, t, r, i)
}

function vertexAttrib4f(e, t, r, i, n) {
	gl.glVertexAttrib4f(e, t, r, i, n)
}

function vertexAttrib1fv(e, t) {
	gl.glVertexAttrib1fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib2fv(e, t) {
	gl.glVertexAttrib2fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib3fv(e, t) {
	gl.glVertexAttrib3fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttrib4fv(e, t) {
	gl.glVertexAttrib4fv(e, __TypedArrayGetData(t instanceof Array == 1 ? new Float32Array(t) : t))
}

function vertexAttribPointer(e, t, r, i, n, a) {
	gl.glVertexAttribPointer(e, t, r, i, n, a)
}

function viewport(e, t, r, i) {
	gl.glViewport(e, t, r, i)
}

function getActiveAttrib(e, t) {
	return gl.glGetActiveAttrib(e, t)
}

function getActiveUniform(e, t) {
	return gl.glGetActiveUniform(e, t)
}

function getAttachedShaders(e) {
	return gl.glGetAttachedShaders(e)
}

function getBufferParameter(e, t) {
	return gl.glGetBufferParameter(e, t)
}

function getFramebufferAttachmentParameter(e, t, r) {
	return gl.glGetFramebufferAttachmentParameter(e, t, r)
}

function getProgramParameter(e, t) {
	return gl.glGetProgramParameter(e, t)
}

function getRenderbufferParameter(e, t) {
	return gl.glGetRenderbufferParameter(e, t)
}

function getShaderParameter(e, t) {
	return gl.glGetShaderParameter(e, t)
}

function getTexParameter(e, t) {
	return gl.glGetTexParameter(e, t)
}

function getVertexAttrib(e, t) {
	return gl.glGetVertexAttrib(e, t)
}

function getUniform(e, t) {
	return gl.glGetUniform(e, t)
}

function getParameter(e) {
	switch (e) {
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

function voidFunc(e, t, r, i, n, a, o, s, f, u) {}

function attchVoidMethod() {
	gl.activeTexture = voidFunc, gl.attachShader = voidFunc, gl.bindAttribLocation = voidFunc, gl.bindBuffer = voidFunc, gl.bindFramebuffer = voidFunc, gl.bindRenderbuffer = voidFunc, gl.bindTexture = voidFunc, gl.blendColor = voidFunc, gl.blendEquation = voidFunc, gl.blendEquationSeparate = voidFunc, gl.blendFunc = voidFunc, gl.blendFuncSeparate = voidFunc, gl.bufferData = voidFunc, gl.bufferData = voidFunc, gl.bufferSubData = voidFunc, gl.checkFramebufferStatus = voidFunc, gl.clear = voidFunc, gl.clearColor = voidFunc, gl.clearDepth = voidFunc, gl.clearStencil = voidFunc, gl.colorMask = voidFunc, gl.compileShader = voidFunc, gl.compressedTexImage2D = voidFunc, gl.compressedTexSubImage2D = voidFunc, gl.copyTexImage2D = voidFunc, gl.copyTexSubImage2D = voidFunc, gl.createBuffer = voidFunc, gl.createFramebuffer = voidFunc, gl.createProgram = voidFunc, gl.createRenderbuffer = voidFunc, gl.createShader = voidFunc, gl.createTexture = voidFunc, gl.cullFace = voidFunc, gl.deleteBuffer = voidFunc, gl.deleteFramebuffer = voidFunc, gl.deleteProgram = voidFunc, gl.deleteRenderbuffer = voidFunc, gl.deleteShader = voidFunc, gl.deleteTexture = voidFunc, gl.depthFunc = voidFunc, gl.depthMask = voidFunc, gl.depthRange = voidFunc, gl.detachShader = voidFunc, gl.disable = voidFunc, gl.disableVertexAttribArray = voidFunc, gl.drawArrays = voidFunc, gl.drawElements = voidFunc, gl.enable = voidFunc, gl.enableVertexAttribArray = voidFunc, gl.finish = voidFunc, gl.flush = voidFunc, gl.framebufferRenderbuffer = voidFunc, gl.framebufferTexture2D = voidFunc, gl.frontFace = voidFunc, gl.generateMipmap = voidFunc, gl.getAttribLocation = voidFunc, gl.getError = voidFunc, gl.getProgramInfoLog = voidFunc, gl.getShaderInfoLog = voidFunc, gl.getShaderSource = voidFunc, gl.getUniformLocation = voidFunc, gl.getVertexAttribOffset = voidFunc, gl.hint = voidFunc, gl.isBuffer = voidFunc, gl.isEnabled = voidFunc, gl.isFramebuffer = voidFunc, gl.isProgram = voidFunc, gl.isRenderbuffer = voidFunc, gl.isShader = voidFunc, gl.isTexture = voidFunc, gl.lineWidth = voidFunc, gl.linkProgram = voidFunc, gl.pixelStorei = voidFunc, gl.polygonOffset = voidFunc, gl.readPixels = voidFunc, gl.renderbufferStorage = voidFunc, gl.sampleCoverage = voidFunc, gl.scissor = voidFunc, gl.shaderSource = voidFunc, gl.stencilFunc = voidFunc, gl.stencilFuncSeparate = voidFunc, gl.stencilMask = voidFunc, gl.stencilMaskSeparate = voidFunc, gl.stencilOp = voidFunc, gl.stencilOpSeparate = voidFunc, gl.texImage2D = voidFunc, gl.texSubImage2D = voidFunc, gl.texParameterf = voidFunc, gl.texParameteri = voidFunc, gl.uniform1f = voidFunc, gl.uniform2f = voidFunc, gl.uniform3f = voidFunc, gl.uniform4f = voidFunc, gl.uniform1i = voidFunc, gl.uniform2i = voidFunc, gl.uniform3i = voidFunc, gl.uniform4i = voidFunc, gl.uniform1fv = voidFunc, gl.uniform2fv = voidFunc, gl.uniform3fv = voidFunc, gl.uniform4fv = voidFunc, gl.uniform1iv = voidFunc, gl.uniform2iv = voidFunc, gl.uniform3iv = voidFunc, gl.uniform4iv = voidFunc, gl.uniformMatrix2fv = voidFunc, gl.uniformMatrix3fv = voidFunc, gl.uniformMatrix4fv = voidFunc, gl.useProgram = voidFunc, gl.validateProgram = voidFunc, gl.vertexAttrib1f = voidFunc, gl.vertexAttrib2f = voidFunc, gl.vertexAttrib3f = voidFunc, gl.vertexAttrib4f = voidFunc, gl.vertexAttrib1fv = voidFunc, gl.vertexAttrib2fv = voidFunc, gl.vertexAttrib3fv = voidFunc, gl.vertexAttrib4fv = voidFunc, gl.vertexAttribPointer = voidFunc, gl.viewport = voidFunc, gl.getActiveAttrib = voidFunc, gl.getActiveUniform = voidFunc, gl.getAttachedShaders = voidFunc, gl.getBufferParameter = voidFunc, gl.getFramebufferAttachmentParameter = voidFunc, gl.getProgramParameter = voidFunc, gl.getRenderbufferParameter = voidFunc, gl.getShaderParameter = voidFunc, gl.getTexParameter = voidFunc, gl.getVertexAttrib = voidFunc, gl.getParameter = voidFunc, gl.getUniform = voidFunc, gl.getShaderPrecisionFormat = voidFunc
}

function attachMethod() {
	gl.activeTexture = activeTexture, gl.attachShader = attachShader, gl.bindAttribLocation = bindAttribLocation, gl.bindBuffer = bindBuffer, gl.bindFramebuffer = bindFramebuffer, gl.bindRenderbuffer = bindRenderbuffer, gl.bindTexture = bindTexture, gl.blendColor = blendColor, gl.blendEquation = blendEquation, gl.blendEquationSeparate = blendEquationSeparate, gl.blendFunc = blendFunc, gl.blendFuncSeparate = blendFuncSeparate, gl.bufferData = bufferData, gl.bufferData = bufferData, gl.bufferSubData = bufferSubData, gl.checkFramebufferStatus = checkFramebufferStatus, gl.clear = clear, gl.clearColor = clearColor, gl.clearDepth = clearDepth, gl.clearStencil = clearStencil, gl.colorMask = colorMask, gl.compileShader = compileShader, gl.compressedTexImage2D = compressedTexImage2D, gl.compressedTexSubImage2D = compressedTexSubImage2D, gl.copyTexImage2D = copyTexImage2D, gl.copyTexSubImage2D = copyTexSubImage2D, gl.createBuffer = createBuffer, gl.createFramebuffer = createFramebuffer, gl.createProgram = createProgram, gl.createRenderbuffer = createRenderbuffer, gl.createShader = createShader, gl.createTexture = createTexture, gl.cullFace = cullFace, gl.deleteBuffer = deleteBuffer, gl.deleteFramebuffer = deleteFramebuffer, gl.deleteProgram = deleteProgram, gl.deleteRenderbuffer = deleteRenderbuffer, gl.deleteShader = deleteShader, gl.deleteTexture = deleteTexture, gl.depthFunc = depthFunc, gl.depthMask = depthMask, gl.depthRange = depthRange, gl.detachShader = detachShader, gl.disable = disable, gl.disableVertexAttribArray = disableVertexAttribArray, gl.drawArrays = drawArrays, gl.drawElements = drawElements, gl.enable = enable, gl.enableVertexAttribArray = enableVertexAttribArray, gl.finish = finish, gl.flush = flush, gl.framebufferRenderbuffer = framebufferRenderbuffer, gl.framebufferTexture2D = framebufferTexture2D, gl.frontFace = frontFace, gl.generateMipmap = generateMipmap, gl.getAttribLocation = getAttribLocation, gl.getError = getError, gl.getProgramInfoLog = getProgramInfoLog, gl.getShaderInfoLog = getShaderInfoLog, gl.getShaderSource = getShaderSource, gl.getUniformLocation = getUniformLocation, gl.getVertexAttribOffset = getVertexAttribOffset, gl.hint = hint, gl.isBuffer = isBuffer, gl.isEnabled = isEnabled, gl.isFramebuffer = isFramebuffer, gl.isProgram = isProgram, gl.isRenderbuffer = isRenderbuffer, gl.isShader = isShader, gl.isTexture = isTexture, gl.lineWidth = lineWidth, gl.linkProgram = linkProgram, gl.pixelStorei = pixelStorei, gl.polygonOffset = polygonOffset, gl.readPixels = readPixels, gl.renderbufferStorage = renderbufferStorage, gl.sampleCoverage = sampleCoverage, gl.scissor = scissor, gl.shaderSource = shaderSource, gl.stencilFunc = stencilFunc, gl.stencilFuncSeparate = stencilFuncSeparate, gl.stencilMask = stencilMask, gl.stencilMaskSeparate = stencilMaskSeparate, gl.stencilOp = stencilOp, gl.stencilOpSeparate = stencilOpSeparate, gl.texImage2D = texImage2D, gl.texSubImage2D = texSubImage2D, gl.texParameterf = texParameterf, gl.texParameteri = texParameteri, gl.uniform1f = uniform1f, gl.uniform2f = uniform2f, gl.uniform3f = uniform3f, gl.uniform4f = uniform4f, gl.uniform1i = uniform1i, gl.uniform2i = uniform2i, gl.uniform3i = uniform3i, gl.uniform4i = uniform4i, gl.uniform1fv = uniform1fv, gl.uniform2fv = uniform2fv, gl.uniform3fv = uniform3fv, gl.uniform4fv = uniform4fv, gl.uniform1iv = uniform1iv, gl.uniform2iv = uniform2iv, gl.uniform3iv = uniform3iv, gl.uniform4iv = uniform4iv, gl.uniformMatrix2fv = uniformMatrix2fv, gl.uniformMatrix3fv = uniformMatrix3fv, gl.uniformMatrix4fv = uniformMatrix4fv, gl.useProgram = useProgram, gl.validateProgram = validateProgram, gl.vertexAttrib1f = vertexAttrib1f, gl.vertexAttrib2f = vertexAttrib2f, gl.vertexAttrib3f = vertexAttrib3f, gl.vertexAttrib4f = vertexAttrib4f, gl.vertexAttrib1fv = vertexAttrib1fv, gl.vertexAttrib2fv = vertexAttrib2fv, gl.vertexAttrib3fv = vertexAttrib3fv, gl.vertexAttrib4fv = vertexAttrib4fv, gl.vertexAttribPointer = vertexAttribPointer, gl.viewport = viewport, gl.getActiveAttrib = getActiveAttrib, gl.getActiveUniform = getActiveUniform, gl.getAttachedShaders = getAttachedShaders, gl.getBufferParameter = getBufferParameter, gl.getFramebufferAttachmentParameter = getFramebufferAttachmentParameter, gl.getProgramParameter = getProgramParameter, gl.getRenderbufferParameter = getRenderbufferParameter, gl.getShaderParameter = getShaderParameter, gl.getTexParameter = getTexParameter, gl.getVertexAttrib = getVertexAttrib, gl.getParameter = getParameter, gl.getUniform = getUniform, gl.getShaderPrecisionFormat = getShaderPrecisionFormat
}

function attatchConst() {
	gl.DEPTH_BUFFER_BIT = 256, gl.STENCIL_BUFFER_BIT = 1024, gl.COLOR_BUFFER_BIT = 16384, gl.POINTS = 0, gl.LINES = 1, gl.LINE_LOOP = 2, gl.LINE_STRIP = 3, gl.TRIANGLES = 4, gl.TRIANGLE_STRIP = 5, gl.TRIANGLE_FAN = 6, gl.ZERO = 0, gl.ONE = 1, gl.SRC_COLOR = 768, gl.ONE_MINUS_SRC_COLOR = 769, gl.SRC_ALPHA = 770, gl.ONE_MINUS_SRC_ALPHA = 771, gl.DST_ALPHA = 772, gl.ONE_MINUS_DST_ALPHA = 773, gl.DST_COLOR = 774, gl.ONE_MINUS_DST_COLOR = 775, gl.SRC_ALPHA_SATURATE = 776, gl.FUNC_ADD = 32774, gl.BLEND_EQUATION = 32777, gl.BLEND_EQUATION_RGB = 32777, gl.BLEND_EQUATION_ALPHA = 34877, gl.FUNC_SUBTRACT = 32778, gl.FUNC_REVERSE_SUBTRACT = 32779, gl.BLEND_DST_RGB = 32968, gl.BLEND_SRC_RGB = 32969, gl.BLEND_DST_ALPHA = 32970, gl.BLEND_SRC_ALPHA = 32971, gl.CONSTANT_COLOR = 32769, gl.ONE_MINUS_CONSTANT_COLOR = 32770, gl.CONSTANT_ALPHA = 32771, gl.ONE_MINUS_CONSTANT_ALPHA = 32772, gl.BLEND_COLOR = 32773, gl.ARRAY_BUFFER = 34962, gl.ELEMENT_ARRAY_BUFFER = 34963, gl.ARRAY_BUFFER_BINDING = 34964, gl.ELEMENT_ARRAY_BUFFER_BINDING = 34965, gl.STREAM_DRAW = 35040, gl.STATIC_DRAW = 35044, gl.DYNAMIC_DRAW = 35048, gl.BUFFER_SIZE = 34660, gl.BUFFER_USAGE = 34661, gl.CURRENT_VERTEX_ATTRIB = 34342, gl.FRONT = 1028, gl.BACK = 1029, gl.FRONT_AND_BACK = 1032, gl.CULL_FACE = 2884, gl.BLEND = 3042, gl.DITHER = 3024, gl.STENCIL_TEST = 2960, gl.DEPTH_TEST = 2929, gl.SCISSOR_TEST = 3089, gl.POLYGON_OFFSET_FILL = 32823, gl.SAMPLE_ALPHA_TO_COVERAGE = 32926, gl.SAMPLE_COVERAGE = 32928, gl.NO_ERROR = 0, gl.INVALID_ENUM = 1280, gl.INVALID_VALUE = 1281, gl.INVALID_OPERATION = 1282, gl.OUT_OF_MEMORY = 1285, gl.CW = 2304, gl.CCW = 2305, gl.LINE_WIDTH = 2849, gl.ALIASED_POINT_SIZE_RANGE = 33901, gl.ALIASED_LINE_WIDTH_RANGE = 33902, gl.CULL_FACE_MODE = 2885, gl.FRONT_FACE = 2886, gl.DEPTH_RANGE = 2928, gl.DEPTH_WRITEMASK = 2930, gl.DEPTH_CLEAR_VALUE = 2931, gl.DEPTH_FUNC = 2932, gl.STENCIL_CLEAR_VALUE = 2961, gl.STENCIL_FUNC = 2962, gl.STENCIL_FAIL = 2964, gl.STENCIL_PASS_DEPTH_FAIL = 2965, gl.STENCIL_PASS_DEPTH_PASS = 2966, gl.STENCIL_REF = 2967, gl.STENCIL_VALUE_MASK = 2963, gl.STENCIL_WRITEMASK = 2968, gl.STENCIL_BACK_FUNC = 34816, gl.STENCIL_BACK_FAIL = 34817, gl.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, gl.STENCIL_BACK_PASS_DEPTH_PASS = 34819, gl.STENCIL_BACK_REF = 36003, gl.STENCIL_BACK_VALUE_MASK = 36004, gl.STENCIL_BACK_WRITEMASK = 36005, gl.VIEWPORT = 2978, gl.SCISSOR_BOX = 3088, gl.COLOR_CLEAR_VALUE = 3106, gl.COLOR_WRITEMASK = 3107, gl.UNPACK_ALIGNMENT = 3317, gl.PACK_ALIGNMENT = 3333, gl.MAX_TEXTURE_SIZE = 3379, gl.MAX_VIEWPORT_DIMS = 3386, gl.SUBPIXEL_BITS = 3408, gl.RED_BITS = 3410, gl.GREEN_BITS = 3411, gl.BLUE_BITS = 3412, gl.ALPHA_BITS = 3413, gl.DEPTH_BITS = 3414, gl.STENCIL_BITS = 3415, gl.POLYGON_OFFSET_UNITS = 10752, gl.POLYGON_OFFSET_FACTOR = 32824, gl.TEXTURE_BINDING_2D = 32873, gl.SAMPLE_BUFFERS = 32936, gl.SAMPLES = 32937, gl.SAMPLE_COVERAGE_VALUE = 32938, gl.SAMPLE_COVERAGE_INVERT = 32939, gl.COMPRESSED_TEXTURE_FORMATS = 34467, gl.DONT_CARE = 4352, gl.FASTEST = 4353, gl.NICEST = 4354, gl.GENERATE_MIPMAP_HINT = 33170, gl.BYTE = 5120, gl.UNSIGNED_BYTE = 5121, gl.SHORT = 5122, gl.UNSIGNED_SHORT = 5123, gl.INT = 5124, gl.UNSIGNED_INT = 5125, gl.FLOAT = 5126, gl.DEPTH_COMPONENT = 6402, gl.ALPHA = 6406, gl.RGB = 6407, gl.RGBA = 6408, gl.LUMINANCE = 6409, gl.LUMINANCE_ALPHA = 6410, gl.UNSIGNED_SHORT_4_4_4_4 = 32819, gl.UNSIGNED_SHORT_5_5_5_1 = 32820, gl.UNSIGNED_SHORT_5_6_5 = 33635, gl.FRAGMENT_SHADER = 35632, gl.VERTEX_SHADER = 35633, gl.MAX_VERTEX_ATTRIBS = 34921, gl.MAX_VERTEX_UNIFORM_VECTORS = 36347, gl.MAX_VARYING_VECTORS = 36348, gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660, gl.MAX_TEXTURE_IMAGE_UNITS = 34930, gl.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, gl.SHADER_TYPE = 35663, gl.DELETE_STATUS = 35712, gl.LINK_STATUS = 35714, gl.VALIDATE_STATUS = 35715, gl.ATTACHED_SHADERS = 35717, gl.ACTIVE_UNIFORMS = 35718, gl.ACTIVE_ATTRIBUTES = 35721, gl.SHADING_LANGUAGE_VERSION = 35724, gl.CURRENT_PROGRAM = 35725, gl.NEVER = 512, gl.LESS = 513, gl.EQUAL = 514, gl.LEQUAL = 515, gl.GREATER = 516, gl.NOTEQUAL = 517, gl.GEQUAL = 518, gl.ALWAYS = 519, gl.KEEP = 7680, gl.REPLACE = 7681, gl.INCR = 7682, gl.DECR = 7683, gl.INVERT = 5386, gl.INCR_WRAP = 34055, gl.DECR_WRAP = 34056, gl.VENDOR = 7936, gl.RENDERER = 7937, gl.VERSION = 7938, gl.NEAREST = 9728, gl.LINEAR = 9729, gl.NEAREST_MIPMAP_NEAREST = 9984, gl.LINEAR_MIPMAP_NEAREST = 9985, gl.NEAREST_MIPMAP_LINEAR = 9986, gl.LINEAR_MIPMAP_LINEAR = 9987, gl.TEXTURE_MAG_FILTER = 10240, gl.TEXTURE_MIN_FILTER = 10241, gl.TEXTURE_WRAP_S = 10242, gl.TEXTURE_WRAP_T = 10243, gl.TEXTURE_2D = 3553, gl.TEXTURE = 5890, gl.TEXTURE_CUBE_MAP = 34067, gl.TEXTURE_BINDING_CUBE_MAP = 34068, gl.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, gl.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070, gl.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, gl.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, gl.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073, gl.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, gl.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, gl.TEXTURE0 = 33984, gl.TEXTURE1 = 33985, gl.TEXTURE2 = 33986, gl.TEXTURE3 = 33987, gl.TEXTURE4 = 33988, gl.TEXTURE5 = 33989, gl.TEXTURE6 = 33990, gl.TEXTURE7 = 33991, gl.TEXTURE8 = 33992, gl.TEXTURE9 = 33993, gl.TEXTURE10 = 33994, gl.TEXTURE11 = 33995, gl.TEXTURE12 = 33996, gl.TEXTURE13 = 33997, gl.TEXTURE14 = 33998, gl.TEXTURE15 = 33999, gl.TEXTURE16 = 34e3, gl.TEXTURE17 = 34001, gl.TEXTURE18 = 34002, gl.TEXTURE19 = 34003, gl.TEXTURE20 = 34004, gl.TEXTURE21 = 34005, gl.TEXTURE22 = 34006, gl.TEXTURE23 = 34007, gl.TEXTURE24 = 34008, gl.TEXTURE25 = 34009, gl.TEXTURE26 = 34010, gl.TEXTURE27 = 34011, gl.TEXTURE28 = 34012, gl.TEXTURE29 = 34013, gl.TEXTURE30 = 34014, gl.TEXTURE31 = 34015, gl.ACTIVE_TEXTURE = 34016, gl.REPEAT = 10497, gl.CLAMP_TO_EDGE = 33071, gl.MIRRORED_REPEAT = 33648, gl.FLOAT_VEC2 = 35664, gl.FLOAT_VEC3 = 35665, gl.FLOAT_VEC4 = 35666, gl.INT_VEC2 = 35667, gl.INT_VEC3 = 35668, gl.INT_VEC4 = 35669, gl.BOOL = 35670, gl.BOOL_VEC2 = 35671, gl.BOOL_VEC3 = 35672, gl.BOOL_VEC4 = 35673, gl.FLOAT_MAT2 = 35674, gl.FLOAT_MAT3 = 35675, gl.FLOAT_MAT4 = 35676, gl.SAMPLER_2D = 35678, gl.SAMPLER_CUBE = 35680, gl.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, gl.VERTEX_ATTRIB_ARRAY_SIZE = 34339, gl.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, gl.VERTEX_ATTRIB_ARRAY_TYPE = 34341, gl.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922, gl.VERTEX_ATTRIB_ARRAY_POINTER = 34373, gl.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975, gl.IMPLEMENTATION_COLOR_READ_TYPE = 35738, gl.IMPLEMENTATION_COLOR_READ_FORMAT = 35739, gl.COMPILE_STATUS = 35713, gl.LOW_FLOAT = 36336, gl.MEDIUM_FLOAT = 36337, gl.HIGH_FLOAT = 36338, gl.LOW_INT = 36339, gl.MEDIUM_INT = 36340, gl.HIGH_INT = 36341, gl.FRAMEBUFFER = 36160, gl.RENDERBUFFER = 36161, gl.RGBA4 = 32854, gl.RGB5_A1 = 32855, gl.RGB565 = 36194, gl.DEPTH_COMPONENT16 = 33189, gl.STENCIL_INDEX8 = 36168, gl.DEPTH_STENCIL = 34041, gl.RENDERBUFFER_WIDTH = 36162, gl.RENDERBUFFER_HEIGHT = 36163, gl.RENDERBUFFER_INTERNAL_FORMAT = 36164, gl.RENDERBUFFER_RED_SIZE = 36176, gl.RENDERBUFFER_GREEN_SIZE = 36177, gl.RENDERBUFFER_BLUE_SIZE = 36178, gl.RENDERBUFFER_ALPHA_SIZE = 36179, gl.RENDERBUFFER_DEPTH_SIZE = 36180, gl.RENDERBUFFER_STENCIL_SIZE = 36181, gl.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048, gl.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050, gl.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, gl.COLOR_ATTACHMENT0 = 36064, gl.DEPTH_ATTACHMENT = 36096, gl.STENCIL_ATTACHMENT = 36128, gl.DEPTH_STENCIL_ATTACHMENT = 33306, gl.NONE = 0, gl.FRAMEBUFFER_COMPLETE = 36053, gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054, gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057, gl.FRAMEBUFFER_UNSUPPORTED = 36061, gl.FRAMEBUFFER_BINDING = 36006, gl.RENDERBUFFER_BINDING = 36007, gl.MAX_RENDERBUFFER_SIZE = 34024, gl.INVALID_FRAMEBUFFER_OPERATION = 1286, gl.UNPACK_FLIP_Y_WEBGL = 37440, gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, gl.CONTEXT_LOST_WEBGL = 37442, gl.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443, gl.BROWSER_DEFAULT_WEBGL = 37444, gl.SHADER_BINARY_FORMATS = 36344, gl.NUM_SHADER_BINARY_FORMATS = 36345, gl.NUM_COMPRESSED_TEXTURE_FORMATS = 34466
}

function OpenOptMode() {
	gl.flushCommand && isSupportTypeArray() && attachMethodOpt(), buffer_data = new Float32Array(total_size)
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

function bindAttribLocationOpt(e, t, r) {
	flushCommand(), bindAttribLocation(e, t, r)
}

function bindBufferOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function bindFramebufferOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_FRAME_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function bindRenderbufferOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_RENDER_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function bindTextureOpt(e, t) {
	next_index + 3 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BIND_TEXTURE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function blendColorOpt(e, t, r, i) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_COLOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
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

function blendFuncSeparateOpt(e, t, r, i) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_BLEND_FUNC_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function bufferDataOpt(e, t, r) {
	flushCommand(), bufferData(e, t, r)
}

function bufferSubDataOpt(e, t, r) {
	flushCommand(), bufferSubData(e, t, r)
}

function checkFramebufferStatusOpt(e) {
	flushCommand(), checkFramebufferStatus(e)
}

function clearOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR, buffer_data[next_index + 1] = e, next_index += 2
}

function clearColorOpt(e, t, r, i) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_COLOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function clearDepthOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_DEPTH, buffer_data[next_index + 1] = e, next_index += 2
}

function clearStencilOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_CLEAR_STENCIL, buffer_data[next_index + 1] = e, next_index += 2
}

function colorMaskOpt(e, t, r, i) {
	next_index + 5 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COLOR_MASK, buffer_data[next_index + 1] = e ? 1 : 0, buffer_data[next_index + 2] = t ? 1 : 0, buffer_data[next_index + 3] = r ? 1 : 0, buffer_data[next_index + 4] = i ? 1 : 0, next_index += 5
}

function compileShaderOpt(e) {
	next_index + 2 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COMPILE_SHADER, buffer_data[next_index + 1] = e, next_index += 2
}

function compressedTexImage2DOpt(e, t, r, i, n, a, o) {
	flushCommand(), compressedTexImage2D(e, t, r, i, n, a, o)
}

function compressedTexSubImage2DOpt(e, t, r, i, n, a, o, s) {
	flushCommand(), compressedTexSubImage2D(e, t, r, i, n, a, o, s)
}

function copyTexImage2DOpt(e, t, r, i, n, a, o, s) {
	next_index + 9 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COPY_TEX_IMAGE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = a, buffer_data[next_index + 7] = o, buffer_data[next_index + 8] = s, next_index += 9
}

function copyTexSubImage2DOpt(e, t, r, i, n, a, o, s) {
	next_index + 9 > total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_COPY_TEX_SUB_IMAGE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = a, buffer_data[next_index + 7] = o, buffer_data[next_index + 8] = s, next_index += 9
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

function drawArraysOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DRAW_ARRAYS, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4, r > 0 && checkFirstFrames()
}

function drawElementsOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_DRAW_ELEMENTS, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5, t > 0 && checkFirstFrames()
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

function framebufferRenderbufferOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_RENDER_BUFFER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function framebufferTexture2DOpt(e, t, r, i, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_FRAME_BUFFER_TEXTURE_2D, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, next_index += 6
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

function getFramebufferAttachmentParameterOpt(e, t, r) {
	return flushCommand(), getFramebufferAttachmentParameter(e, t, r)
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
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_PIXEL_STOREI, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function polygonOffsetOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_POLYGON_OFFSET, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function readPixelsOpt(e, t, r, i, n, a, o) {
	flushCommand(), readPixels(e, t, r, i, n, a, o)
}

function renderbufferStorageOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_RENDER_BUFFER_STORAGE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = internalFormat, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function sampleCoverageOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_SAMPLE_COVERAGE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t ? 1 : 0, next_index += 3
}

function scissorOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_SCISSOR, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function shaderSourceOpt(e, t) {
	flushCommand(), shaderSource(e, t)
}

function stencilFuncOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function stencilFuncSeparateOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_FUNC_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function stencilMaskOpt(e) {
	next_index + 2 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_MASK, buffer_data[next_index + 1] = e, next_index += 2
}

function stencilMaskSeparateOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_MASK_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function stencilOpOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_OP, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function stencilOpSeparateOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_STENCIL_OP_SEPARATE, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function texImage2DOpt(e, t, r) {
	switch (flushCommand(), arguments.length) {
		case 6:
			var i = arguments[3],
				n = arguments[4],
				a = arguments[5];
			Object.prototype.hasOwnProperty.call(a, "__nativeObj") ? gl.glTexImage2D(e, t, r, i, n, a.__nativeObj) : a.bkImage ? gl.glTexImage2D(e, t, r, i, n, a.bkImage) : gl.glTexImage2D(e, t, r, i, n, a);
			break;
		case 9:
			var o = arguments[3],
				s = arguments[4],
				f = arguments[5],
				i = arguments[6],
				n = arguments[7],
				u = arguments[8];
			gl.glTexImage2D(e, t, r, o, s, f, i, n, u)
	}
}

function texParameterfOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function texParameteriOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_TEX_PARAMETER_I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function texSubImage2DOpt(e, t, r, i, n, a, o, s, f) {
	flushCommand(), texSubImage2D(e, t, r, i, n, a, o, s, f)
}

function texSubImage2DOpt(e, t, r, i, n, a, o) {
	flushCommand(), texSubImage2D(e, t, r, i, n, a, o)
}

function uniform1fOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function uniform2fOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function uniform3fOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function uniform4fOpt(e, t, r, i, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, next_index += 6
}

function uniform1iOpt(e, t) {
	next_index + 3 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_1I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, next_index += 3
}

function uniform2iOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_2I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function uniform3iOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_3I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function uniform4iOpt(e, t, r, i, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_4I, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, next_index += 6
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

function uniformMatrix2fvOpt(e, t, r) {
	next_index + 4 + r.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_2FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r.length, buffer_data.set(r, next_index + 4), next_index += 4 + r.length
}

function uniformMatrix3fvOpt(e, t, r) {
	next_index + 4 + r.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_3FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r.length, buffer_data.set(r, next_index + 4), next_index += 4 + r.length
}

function uniformMatrix4fvOpt(e, t, r) {
	next_index + 4 + r.length >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_UNIFORM_MATRIX_4FV, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r.length, buffer_data.set(r, next_index + 4), next_index += 4 + r.length
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

function vertexAttrib2fOpt(e, t, r) {
	next_index + 4 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_2F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, next_index += 4
}

function vertexAttrib3fOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_3F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
}

function vertexAttrib4fOpt(e, t, r, i, n) {
	next_index + 6 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_4F, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, buffer_data[next_index + 5] = n, next_index += 6
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

function vertexAttribPointerOpt(e, t, r, i, n, a) {
	next_index + 7 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VERTEX_ATTRIB_POINTER, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i ? 1 : 0, buffer_data[next_index + 5] = n, buffer_data[next_index + 6] = a, next_index += 7
}

function viewportOpt(e, t, r, i) {
	next_index + 5 >= total_size && flushCommand(), buffer_data[next_index] = GL_COMMAND_VIEW_PORT, buffer_data[next_index + 1] = e, buffer_data[next_index + 2] = t, buffer_data[next_index + 3] = r, buffer_data[next_index + 4] = i, next_index += 5
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

function __dispatchEvent(e, t, r) {
	BK.Script.log(0, 0, "__dispatchEvent err:" + e + " cmd:" + t + " data:" + r), __browserMsgHdl.listenerInfos.forEach(function(i) {
		i.cmd == t && (0, i.callback)(e, t, JSON.parse(r))
	}, this), BK.MQQ.SsoRequest.listenerInfos.forEach(function(i) {
		i.cmd == t && (0, i.callback)(e, t, JSON.parse(r))
	}, this)
}
var hasWindowObj = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
	isThirdEngine = !("undefined" == typeof cc && "undefined" == typeof laya && "undefined" == typeof egret),
	isBrowser = 1 == hasWindowObj && 0 == isThirdEngine;
if (isBrowser) "undefined" != typeof BK == 0 && (BK = {}),
	function(e, t) {
		"object" == typeof e && (void 0 === e.MQQ && (e.MQQ = {
			Webview: t().Webview,
			SsoRequest: t().SsoRequest,
			Account: t().Account
		}), void 0 === e.QQ && (e.Script = t().Script), void 0 === e.QQ && (e.QQ = t().QQ))
	}(BK, function() {
		var e = function() {
				function e() {}
				return e.open = function(e) {
					__browserMsg.send(JSON.stringify({
						url: e
					}), "cs.openWebView.local")
				}, e.openTransparent = function(e, t) {
					void 0 === t && (t = 1), __browserMsg.send(JSON.stringify({
						url: e
					}), "cs.openWebViewWithoutUrl.local")
				}, e.onMessageHandle = function(e) {}, e
			}(),
			t = function() {
				function e() {}
				return e.ssoRequestCallBack = function(e, t, r) {
					BK.Script.log(0, 0, "ssoRequestCallBack cmd:" + t + " errCode:" + e + " data:" + JSON.stringify(r)), __dispatchEvent(e, r.cmd, JSON.stringify(r.data))
				}, e.send = function(e, t) {
					__browserMsgHdl.addListener("cs.ssoMessage.local", this, this.ssoRequestCallBack), __browserMsg.send(JSON.stringify({
						cmd: t,
						data: JSON.stringify(e)
					}), "cs.ssoMessage.local")
				}, e.addListener = function(e, t, r) {
					__browserMsgHdl.addListener(e, t, r)
				}, e.removeListener = function(e, t) {
					__browserMsgHdl.removeListener(e, t)
				}, e
			}(),
			r = function() {
				function e() {}
				return e.accountCallBack = function(t, r, i) {
					var n = "0";
					1 === i.nickname ? n = "1" : 1 === i.avatar && (n = "2");
					var a = r + "_" + n;
					e.accountCallBackArr[a] && (0, e.accountCallBackArr[a])(i.openId, i.data)
				}, e.getNick = function(t, r) {
					e.accountCallBackArr["cs.get_userInfo.local_1"] = r, __browserMsgHdl.addListener("cs.get_userInfo.local", this, this.accountCallBack), __browserMsg.send(JSON.stringify({
						openId: t,
						nickname: 1
					}), "cs.get_userInfo.local")
				}, e.getHead = function(t, r) {
					e.accountCallBackArr["cs.get_userInfo.local_2"] = r, __browserMsgHdl.addListener("cs.get_userInfo.local", this, this.accountCallBack), __browserMsg.send(JSON.stringify({
						openId: t,
						avatar: 1
					}), "cs.get_userInfo.local")
				}, e
			}();
		r.accountCallBackArr = [];
		var i = function() {
				function e() {}
				return e.log = function(e, t, r) {
					__browserMsg.log(e, t, "webGame_log", r, "")
				}, e
			}(),
			n = function() {
				function e() {}
				return e.shareToMQQ = function(e, t, r, i) {
					var n = "cs.share_game_result.local",
						a = {
							cmd: n,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							gameVersion: GameStatusInfo.gameVersion,
							roomId: GameStatusInfo.roomId,
							title: e,
							summary: t,
							detailUrl: r,
							picUrl: i
						};
					__browserMsg.send(JSON.stringify(a), n)
				}, e.getRankList = function(t, r) {
					var i = {
						cmd: this.CMSHOW_SRV_GET_RANK_LIST,
						from: "default",
						objType: 1,
						objId: 0,
						busType: 3,
						busId: GameStatusInfo.gameId.toString()
					};
					r && (r.objType && (i.objType = r.objType), r.objId && (i.objId = r.objId), r.from && (i.from = r.from)), BK.Script.log(1, 1, "BK.QQ.reqGetRankList! " + JSON.stringify(i)), void 0 != i ? (e._getRankListCallBack = t, __browserMsgHdl.removeListener(this.CMSHOW_SRV_GET_RANK_LIST, this), __browserMsgHdl.addListener(this.CMSHOW_SRV_GET_RANK_LIST, this, this._event4GetRankList), BK.MQQ.SsoRequest.send(i, this.CMSHOW_SRV_GET_RANK_LIST)) : BK.Script.log(0, 0, "reqGetRankList data undefined!")
				}, e
			}();
		return n.CMSHOW_SRV_GET_RANK_LIST = "apollo_router_game.game_rank_linkcmd_get_fri_rank_for_engine", n.shareToArk = function(e, t, r, i, n, a) {
			"boolean" == typeof i && (i = 1 == i ? 1 : 0);
			var o = "cs.share_game_in_ark.local",
				s = "sc.share_game_to_friend_result.local",
				f = {
					cmd: o,
					summary: t,
					picUrl: r,
					gameId: GameStatusInfo.gameId,
					roomId: e,
					gameMode: GameStatusInfo.gameMode,
					isSelectFriend: i,
					extendInfo: n
				};
			BK.Script.log(0, 0, "ShareToArk summary=" + f.summary + " roomId=" + f.roomId + "  gameMode=" + f.gameMode + "picUrl=" + f.picUrl + "  gameId=" + f.gameId), a && (BK.MQQ.SsoRequest.removeListener(s, this), BK.MQQ.SsoRequest.addListener(s, this, a)), __browserMsg.send(JSON.stringify(f), o)
		}, n.fetchOpenKey = function(e) {
			var t = "cs.on_get_open_key.local",
				r = {
					gameId: GameStatusInfo.gameId
				};
			e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), __browserMsg.send(JSON.stringify(r), t)
		}, n.scoreUpload = function(e, t, r) {
			var i = "apollo_aio_game.report_user_score_3rd",
				n = {
					cmd: i,
					from: GameStatusInfo.platform,
					gameId: GameStatusInfo.gameId,
					openId: GameStatusInfo.openId,
					version: GameStatusInfo.gameVersion,
					roomId: GameStatusInfo.roomId,
					gData: e
				};
			r && (n.arkData = r), t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(n, i)
		}, n._getRankListCallBack = void 0, n._event4GetRankList = function(e, t, r) {
			BK.Script.log(1, 1, "BK.QQ.reqGetRankList! callback cmd:" + t + " errCode:" + e + "  data:" + JSON.stringify(r)), void 0 != n._getRankListCallBack && n._getRankListCallBack(e, t, r), __browserMsgHdl.removeListener(this.CMSHOW_SRV_GET_RANK_LIST, this)
		}, {
			Webview: e,
			SsoRequest: t,
			Account: r,
			Script: i,
			QQ: n
		}
	});
else {
	! function() {
		BK.Misc.BKBufferToArrayBuffer = function(e) {
			e.rewind();
			for (var t = new ArrayBuffer(e.length), r = new DataView(t); !e.eof;) r.setUint8(e.pointer, e.readUint8Buffer());
			return t
		}, BK.Misc.arrayBufferToBKBuffer = function(e) {
			for (var t = new BK.Buffer(e.byteLength), r = new DataView(e), i = 0; i < e.byteLength; i++) t.writeUint8Buffer(r.getUint8(i));
			BK.Time.clock;
			return t
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
	NETWORK_ENVIRONMENT_QQ_RELEASE = 0, NETWORK_ENVIRONMENT_QQ_DEBUG = 1, NETWORK_ENVIRONMENT_DEMO_DEV = 2, CMSHOW_SRV_CMD_JOIN_ROOM = "apollo_aio_game.join_room", CMSHOW_SRV_CMD_QUIT_GAME = "apollo_aio_game.quit_room", CMSHOW_SRV_CMD_START_GAME = "apollo_aio_game.start_game", CMSHOW_SRV_CMD_CANCEL_GAME = "apollo_aio_game.cancel_game_room", CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC = "apollo_game_openapi.custom_game_logic", CMSHOW_SRV_GET_RANK_LIST = "apollo_router_game.game_rank_linkcmd_get_fri_rank_for_engine", CMSHOW_SC_CMD_STOP_GAME = "sc.force_stop_game.local", CMSHOW_CS_CMD_MINI_WND = "cs.make_room_min.local", CMSHOW_CS_CMD_CLOSE_WND = "cs.close_room.local", CMSHOW_CS_CMD_CREATE_ROOM = "cs.create_room.local", CMSHOW_CS_CMD_JOIN_ROOM = "cs.join_room.local", CMSHOW_CS_CMD_SEND_GAME_MSG = "cs.send_game_msg.local", CMSHOW_CS_CMD_GAME_TIPS = "cs.game_tips.local", CMSHOW_CS_CMD_GET_PLAYER_DRESS = "cs.get_dress_path.local", CMSHOW_CS_CMD_GAME_READY = "cs.game_ready.local", CMSHOW_CS_CMD_GAME_START = "cs.game_start.local", CMSHOW_CS_CMD_SAVE_RECOMM_VIP = "cs.save_recommend_ip.local", CMSHOW_CS_CMD_GET_SRV_IP_PORT = "cs.get_server_ip_port.local", CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE = "cs.check_pubAccount_state.local", CMSHOW_CS_CMD_ENTER_PUBACCOUNT_CARD = "cs.enter_pubAccount_card.local", CMSHOW_CS_CMD_SHARE_PIC = "cs.share_pic.local", CMSHOW_CS_CMD_SHARE_IN_ARK = "cs.share_game_in_ark.local", CMSHOW_AIO_PAUSE = "sc.aio_pause.local", CMSHOW_AIO_RESUME = "sc.aio_resume.local", CMD_CMSHOW_GAME_ENTER_BACKGROUND = "sc.game_enter_background.local", CMD_CMSHOW_GAME_ENTER_FORGROUND = "sc.game_enter_foreground.local", CMD_CMSHOW_GAME_MAXIMIZE = "sc.game_maximize.local", CMD_CMSHOW_GAME_MINIMIZE = "sc.game_minimize.local", CMSHOW_CS_CMD_AUDIOROOM_ENTERN = "cs.audioRoom_enter.local", CMSHOW_CS_CMD_AUDIOROOM_EXIT = "cs.audioRoom_exit.local", CMSHOW_CS_CMD_AUDIOROOM_UPDATEUSERINFO = "cs.audioRoom_update_userinfo.local", CMSHOW_CS_CMD_AUDIOROOM_SET_MIC = "cs.audioRoom_set_mic.local", CMSHOW_CS_CMD_AUDIOROOM_SET_SPEAKER = "cs.audioRoom_set_speaker.local", CMSHOW_CS_CMD_AUDIOROOM_INIT = "cs.audioRoom_init.local", CMSHOW_CS_CMD_AUDIOROOM_DISCONNECT = "cs.audioRoom_disconnect.local", CMSHOW_CS_CMD_AUDIOROOM_CAMERASWITCH = "cs.audioRoom_cameraswitch.local", CMSHOW_CS_CMD_AUDIOROOM_SET_BEAUTY = "cs.audioRoom_set_beauty.local", CMSHOW_CS_CMD_AUDIOROOM_REQ_AUDIO_SESSION = "cs.audioRoom_req_audio_session.local";
	var currentRenderMode;
	checkRenderMode = function() {
			0 == currentRenderMode && (BK.Script.renderMode = 1, currentRenderMode = 1)
		}, BK.QQ = function() {
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
					1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (BK.Script.renderMode = 0, renderTicker.paused = !0, currentRenderMode = 0, gl && attchVoidMethod())
				}), BK.MQQ.SsoRequest.addListener(CMD_CMSHOW_GAME_MAXIMIZE, this, function() {
					1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (BK.Script.renderMode = 1, renderTicker.paused = !1, currentRenderMode = 1, gl && attachMethod())
				}), this.qGetRankBoard = function(e, t, r, i) {
					var n = {
						gameOrientation: e,
						openId: GameStatusInfo.openId,
						transparent: 1,
						businessType: 2,
						url: "http://cmshow.qq.com/apollo/html/game-platform/general-chart.html?gameId=" + GameStatusInfo.gameId + "&_wwv=2&gameOrientation=" + e
					};
					BK.MQQ.SsoRequest.send(n, "cs.openWebViewWithoutUrl.local")
				}, this.qPayPurchase = function(e, t, r, i) {
					var n = 1;
					n = 1 == t ? 1 : 0;
					var a = {
						gameOrientation: e,
						openId: GameStatusInfo.openId,
						transparent: n,
						businessType: 1,
						itemList: r
					};
					if (i) {
						var o = "sc.apolloGameWebMessage.local";
						BK.MQQ.SsoRequest.removeListener(o, this), BK.MQQ.SsoRequest.addListener(o, this, function(e, t, r) {
							0 == e && r.op && "apolloGamePlatform.buyProps" == r.op && i(r.data.code, r.data)
						}.bind(this))
					}
					BK.MQQ.SsoRequest.send(a, "cs.openWebViewWithoutUrl.local")
				}, this.consumeItems = function(e, t) {
					var r = "apollo_game_item.consume_game_items",
						i = {
							cmd: r,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							items: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, function(e, r, i) {
						var n = [],
							a = [];
						0 == e && (n = i.data.succList, a = i.data.failList), t(e, n, a)
					}.bind(this))), BK.MQQ.SsoRequest.send(i, r)
				}, this.rollbackGameItems = function(e, t) {
					var r = "apollo_game_item.rollback_game_items",
						i = {
							cmd: r,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							items: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, function(e, r, i) {
						var n = [],
							a = [];
						0 == e && (n = i.data.succList, a = i.data.failList), t(e, n, a)
					}.bind(this))), BK.MQQ.SsoRequest.send(i, r)
				}, this.shareToMQQ = function(e, t, r, i) {
					var n = "cs.share_game_result.local",
						a = {
							cmd: n,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							gameVersion: GameStatusInfo.gameVersion,
							roomId: GameStatusInfo.roomId,
							title: e,
							summary: t,
							detailUrl: r,
							picUrl: i
						};
					BK.MQQ.SsoRequest.send(a, n)
				}, this.scoreUpload = function(e, t, r) {
					var i = "apollo_aio_game.report_user_score_3rd",
						n = {
							cmd: i,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							version: GameStatusInfo.gameVersion,
							roomId: GameStatusInfo.roomId,
							gData: e
						};
					r && (n.arkData = r), t && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, t)), BK.MQQ.SsoRequest.send(n, i)
				}, this.getRoomUserScoreInfo = function(e, t) {
					var r = "apollo_aio_game.get_room_info_3rd",
						i = {
							cmd: r,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							version: GameStatusInfo.gameVersion,
							roomId: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.send(i, r)
				}, this.getUserGameinfo = function(e, t, r) {
					var i = "apollo_aio_game.get_user_gameinfo_3rd",
						n = {
							cmd: i,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							version: GameStatusInfo.gameVersion,
							roomId: GameStatusInfo.roomId,
							toOpenId: e,
							cycleNum: t
						};
					r && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, r)), BK.MQQ.SsoRequest.send(n, i)
				}, this.getUserCurrencyInfo = function(e, t) {
					var r = "apollo_aio_game.get_user_curreInfo",
						i = {
							cmd: r,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							version: GameStatusInfo.gameVersion,
							mask: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.send(i, r)
				}, this.getCmshowDressInfo = function(e, t) {
					var r = "cs.get_dress_path.local";
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t));
					var i = {
						openId: e
					};
					BK.MQQ.SsoRequest.send(i, "cs.get_dress_path.local")
				}, this.getGameItemList = function(e) {
					var t = "apollo_aio_game.get_game_itemList",
						r = {
							cmd: t,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId
						};
					e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(r, t)
				}, this.getUserGameItems = function(e) {
					var t = "apollo_aio_game.get_user_game_items",
						r = {
							cmd: t,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId
						};
					e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(r, t)
				}, this.buyGameItems = function(e, t, r) {
					var i = "apollo_aio_game.buy_game_items",
						n = {
							cmd: i,
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							curreType: e,
							itemIdList: t
						};
					r && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, r)), BK.MQQ.SsoRequest.send(n, i)
				}, this.notifyNewRoom = function(e, t) {
					var r = {
						gameId: this.gameCfg.gameId,
						roomId: e,
						retcode: t
					};
					this.gameCfg.roomId || (this.gameCfg.roomId = e), BK.Script.log(0, 0, "BK.QQ.notifyNewRoom!gameId = " + r.gameId + ", roomId = " + r.roomId + ", retCode = " + t), BK.MQQ.SsoRequest.send(r, CMSHOW_CS_CMD_CREATE_ROOM)
				}, this.notifyHideGame = function() {
					var e = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId)
					};
					BK.Script.log(0, 0, "BK.QQ.notifyHideGame!gameId = " + e.gameId + ", roomId = " + e.roomId + ", sessionId = " + e.sessionId), 1 == ("android" == GameStatusInfo.platform ? 1 : 2) && (BK.Script.renderMode = 0, currentRenderMode = 0), BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_MINI_WND)
				}, this.notifyCloseGame = function() {
					this._closeRoom();
					var e = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId)
					};
					BK.Script.log(0, 0, "BK.QQ.notifyCloseGame!gameId = " + e.gameId + ", roomId = " + e.roomId + ", sessioinId = " + e.sessionId), BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_CLOSE_WND)
				}, this.notifyReadyGame = function() {
					var e = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId)
					};
					BK.MQQ.SsoRequest.send(e, CMSHOW_CS_CMD_GAME_READY)
				}, this.notifyGameTips = function(e) {
					var t = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId),
						tips: e
					};
					BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_GAME_TIPS)
				}, this.notifyGameTipsWaiting = function() {
					this.notifyGameTips("ç­‰å¾…çŽ©å®¶åŠ å…¥")
				}, this.notifyGameTipsSomeOneJoinRoom = function(e) {
					this.notifyGameTips(e + "åŠ å…¥æˆ¿é—´")
				}, this.notifyGameTipsSomeOneLeaveRoom = function(e) {
					this.notifyGameTips(e + "ç¦»å¼€æˆ¿é—´")
				}, this.notifyGameTipsReady = function() {
					this.notifyGameTips("æ¸¸æˆå³å°†å¼€å§‹")
				}, this.notifyGameTipsPlaying = function() {
					this.notifyGameTips("æ¸¸æˆè¿›è¡Œä¸­")
				}, this.notifyGameTipsGameOver = function() {
					this.notifyGameTips("æ¸¸æˆå·²ç»“æŸ")
				}, this.inviteFriend = function(e, t) {
					var r = "cs.invite_friends.local",
						i = {
							cmd: r,
							wording: e,
							gameId: this.gameCfg.gameId,
							gameMode: 8,
							extendInfo: {}
						};
					t && (i.roomId = t), BK.MQQ.SsoRequest.send(i, r)
				}, this.uploadData = function(e, t, r, i, n, a) {
					var o = "cs.report_data_2_compass.local",
						s = this.gameCfg.gameId;
					"ios" == this.gameCfg.platform && (e = e.toString(), r = r.toString());
					var f = {
						cmd: o,
						actionName: e,
						enter: t,
						result: r,
						r2: s.toString(),
						r3: i,
						r4: n,
						r5: a
					};
					BK.MQQ.SsoRequest.send(f, o)
				}, this.sharePic = function(e) {
					var t = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId),
						path: e
					};
					BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_SHARE_PIC)
				}, this.addSSOJoinRoomCallBack = function(e) {
					this.ssoJoinRoomCallbackPublic = e
				}, this.checkPubAccountState = function(e, t) {
					t && (BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE, this, t));
					var r = CMSHOW_CS_CMD_CHECK_PUBACCOUNT_STATE,
						i = {
							cmd: r,
							puin: e
						};
					BK.MQQ.SsoRequest.send(i, r)
				}, this.enterPubAccountCard = function(e) {
					var t = CMSHOW_CS_CMD_ENTER_PUBACCOUNT_CARD,
						r = {
							cmd: t,
							puin: e
						};
					BK.MQQ.SsoRequest.send(r, t)
				}, this.fetchOpenKey = function(e) {
					var t = "cs.on_get_open_key.local",
						r = {
							gameId: GameStatusInfo.gameId
						};
					e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(r, t)
				}, this.listenGameEventEnterBackground = function(e, t) {
					var r = "sc.game_enter_background.local";
					t && (BK.MQQ.SsoRequest.removeListener(r, e), BK.MQQ.SsoRequest.addListener(r, e, t))
				}, this.listenGameEventEnterForeground = function(e, t) {
					var r = "sc.game_enter_foreground.local";
					t && (BK.MQQ.SsoRequest.removeListener(r, e), BK.MQQ.SsoRequest.addListener(r, e, t))
				}, this.listenGameEventMaximize = function(e, t) {
					var r = "sc.game_maximize.local";
					t && (BK.MQQ.SsoRequest.removeListener(r, e), BK.MQQ.SsoRequest.addListener(r, e, t))
				}, this.listenGameEventMinimize = function(e, t) {
					var r = "sc.game_minimize.local";
					t && (BK.MQQ.SsoRequest.removeListener(r, e), BK.MQQ.SsoRequest.addListener(r, e, t))
				}, this._event4GetVIPInfo = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4GetVIPInfo!errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this.delegate.onGetVIPInfoEvent && this.delegate.onGetVIPInfoEvent(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this)
				}, this.notifyGetVIPInfo = function() {
					BK.MQQ.SsoRequest.send({}, CMSHOW_CS_CMD_GET_SRV_IP_PORT), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_GET_SRV_IP_PORT, this, this._event4GetVIPInfo.bind(this))
				}, this.notifySaveRecommVIP = function(e, t) {
					BK.Script.log(0, 0, "BK.QQ.notifySaveRecommVIP!ip = " + e + ", port = " + t);
					var r = {
						gameId: this.gameCfg.gameId,
						roomId: this.game.roomId,
						sessionId: Number(this.gameCfg.sessionId),
						ip: e,
						port: t
					};
					BK.MQQ.SsoRequest.send(r, CMSHOW_CS_CMD_SAVE_RECOMM_VIP)
				}, this._event4GetPlayerDress = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4GetPlayerDress!errCode = " + e + ", cmd = " + t + ", data = " + JSON.stringify(r)), this.delegate.onGetPlayerDressEvent && this.delegate.onGetPlayerDressEvent(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this)
				}, this.notifyGetPlayerDress = function(e) {
					var t = {
						openId: e
					};
					BK.MQQ.SsoRequest.removeListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this), BK.MQQ.SsoRequest.addListener(CMSHOW_CS_CMD_GET_PLAYER_DRESS, this, this._event4GetPlayerDress.bind(this)), BK.MQQ.SsoRequest.send(t, CMSHOW_CS_CMD_GET_PLAYER_DRESS)
				}, this._startGameLocal = function(e, t) {
					var r = {
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId,
						sessionId: Number(this.gameCfg.sessionId),
						resp: t,
						retcode: e,
						gameMode: this.gameCfg.gameMode
					};
					BK.MQQ.SsoRequest.send(r, CMSHOW_CS_CMD_GAME_START)
				}, this.notifyJoinRoom = function(e, t, r) {
					e && e.length > 0 ? e.forEach(function(e) {
						var i = e.openId == currentPlayerOpenId;
						BK.Script.log(1, 1, "player.openid=" + e.openId + " currentPlayerOpenId=" + currentPlayerOpenId);
						var n = 0;
						t && t.data && t.data.avRoomId && (n = t.data.avRoomId);
						var a = 0;
						t && t.data && t.data.sdkAppId && (a = t.data.sdkAppId);
						var o = 0;
						t && t.data && t.data.accountType && (o = t.data.accountType);
						var s = {
							gameId: this.gameCfg.gameId,
							openId: e.openId,
							isCreator: this.gameCfg.isCreator && e.openId == currentPlayerOpenId ? 1 : 0,
							roomId: this.gameCfg.roomId,
							resp: t,
							retcode: r,
							gameMode: this.gameCfg.gameMode,
							avRoomId: n,
							sdkAppId: a,
							accountType: o,
							isMine: i,
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
				}, this.shareToArk = function(e, t, r, i, n, a) {
					"boolean" == typeof i && (i = 1 == i ? 1 : 0);
					var o = {
						summary: t,
						picUrl: r,
						gameId: this.gameCfg.gameId,
						roomId: e,
						gameMode: this.gameCfg.gameMode,
						isSelectFriend: i,
						extendInfo: n
					};
					if (a) {
						var s = "sc.share_game_to_friend_result.local";
						BK.MQQ.SsoRequest.removeListener(s, this), BK.MQQ.SsoRequest.addListener(s, this, function(e, t, r) {
							a(e, t, r), BK.MQQ.SsoRequest.removeListener(t, this)
						})
					}
					BK.Script.log(0, 0, "ShareToArk summary=" + o.summary + " roomId=" + o.roomId + "  gameMode=" + o.gameMode + "picUrl=" + o.picUrl + "  gameId=" + o.gameId), BK.MQQ.SsoRequest.send(o, CMSHOW_CS_CMD_SHARE_IN_ARK)
				}, this._event4QuitGame = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4QuitGame errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this.delegate.onQuitGameEvent && this.delegate.onQuitGameEvent(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_QUIT_GAME, this)
				}, this._event4CancelGame = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4CancelGame errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this.delegate.onCancelGameEvent && this.delegate.onCancelGameEvent(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CANCEL_GAME, this)
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
				}, this._event4StartGame = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4StartGame! errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this.hasStartGameSucc = 0 == e, this._startGameLocal(e, r), this.delegate.onStartGameEvent && this.delegate.onStartGameEvent(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_START_GAME, this)
				}, this.notifyStartGameSrv = function() {
					var e = {
						cmd: CMSHOW_SRV_CMD_START_GAME,
						from: this.gameCfg.platform,
						gameId: this.gameCfg.gameId,
						roomId: this.gameCfg.roomId
					};
					BK.Script.log(0, 0, "BK.QQ.notifyStartGameSrv!, cmd = " + e.cmd + ", from = " + e.from + ", gameId = " + e.gameId + ", roomId = " + e.roomId), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_START_GAME, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_START_GAME, this, this._event4StartGame.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_START_GAME)
				}, this._event4JoinRoom = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4JoinRoom errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this.hasJoinRoomSucc = 0 == e, this.delegate.onJoinRoomEvent && this.delegate.onJoinRoomEvent(e, t, r), BK.QQ.notifyJoinRoom(this.newJoinPlayers, r, e), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_JOIN_ROOM, this), this.ssoJoinRoomCallback && this.ssoJoinRoomCallback(e, t, r), this.ssoJoinRoomCallbackPublic && (r.gameId = this.gameCfg.gameId, r.gameRoomId = this.gameCfg.roomId, r.avRoomId = r.data.avRoomId ? r.data.avRoomId : 0, r.sdkAppId = r.data.sdkAppId ? r.data.sdkAppId : 0, r.accountType = r.data.accountType ? r.data.accountType : 0, this.ssoJoinRoomCallbackPublic(e, t, r))
				}, this.notifyNewOrJoinRoomSrv = function(e, t, r) {
					var i = {
						cmd: CMSHOW_SRV_CMD_JOIN_ROOM,
						from: this.gameCfg.platform,
						aioType: this.gameCfg.aioType,
						sessionId: Number(this.gameCfg.sessionId),
						gameId: this.gameCfg.gameId,
						version: this.gameCfg.gameVersion,
						roomId: t,
						opType: r,
						gameMode: this.gameCfg.gameMode,
						roomVol: this.roomVol,
						arkData: this.arkData
					};
					BK.Script.log(1, 1, "BK.QQ.notifyNewOrJoinRoomSrv!, cmd = " + i.cmd + ", from = " + i.from + ", aioType = " + i.aioType + ", sessionId = " + i.sessionId + ", gameId = " + i.gameId + ", version = " + i.version + ", roomId = " + i.roomId + ", opType = " + i.opType), this.newJoinPlayers = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_JOIN_ROOM, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_JOIN_ROOM, this, this._event4JoinRoom.bind(this)), BK.MQQ.SsoRequest.send(i, CMSHOW_SRV_CMD_JOIN_ROOM)
				}, this._customGameLogicCallBack = void 0, this._event4CustomLogic = function(e, t, r) {
					void 0 != this._customGameLogicCallBack && this._customGameLogicCallBack(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this)
				}, this.reqCustomLogic = function(e, t) {
					void 0 != e ? (this._customGameLogicCallBack = t, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC, this, this._event4CustomLogic.bind(this)), BK.MQQ.SsoRequest.send(e, CMSHOW_SRV_CMD_CUSTOM_GAME_LOGIC)) : BK.Script.log(0, 0, "reqCustomLogic data undefined!")
				}, this._getRankListLogicCallBack = void 0, this._event4GetRankList = function(e, t, r) {
					BK.Script.log(1, 1, "BK.QQ.reqGetRankList! callback cmd" + t + " errCode:" + e + "  data:" + JSON.stringify(r)), void 0 != this._getRankListLogicCallBack && this._getRankListLogicCallBack(e, t, r), BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_GET_RANK_LIST, this)
				}, this.getRankList = function(e, t) {
					var r = {
						cmd: CMSHOW_SRV_GET_RANK_LIST,
						from: "default",
						objType: 1,
						objId: 0,
						busType: 3,
						busId: this.gameCfg.gameId.toString()
					};
					t && (t.objType && (r.objType = t.objType), t.objId && (r.objId = t.objId), t.from && (r.from = t.from)), BK.Script.log(1, 1, "BK.QQ.reqGetRankList! " + JSON.stringify(r)), void 0 != r ? (this._getRankListLogicCallBack = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_GET_RANK_LIST, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_GET_RANK_LIST, this, this._event4GetRankList.bind(this)), BK.MQQ.SsoRequest.send(r, CMSHOW_SRV_GET_RANK_LIST)) : BK.Script.log(0, 0, "reqGetRankList data undefined!")
				}, this._pushPublicMsgCallBack = void 0, this._event4PushPublicMsg = function(e, t, r) {
					BK.Script.log(1, 1, "BK.QQ.pushPublicMsg! callback cmd" + t + " errCode:" + e + "  data:" + JSON.stringify(r)), void 0 != this._pushPublicMsgCallBack && this._pushPublicMsgCallBack(e, t, r)
				}, this.pushPublicMsg = function(e, t) {
					var r = {
						gameid: this.gameCfg.gameId,
						templateid: t.templateid,
						report_ts: t.report_ts,
						tmpl_param: t.tmpl_param
					};
					BK.Script.log(1, 1, "BK.QQ.pushPublicMsg! " + JSON.stringify(r)), void 0 != r ? (this._pushPublicMsgCallBack = e, BK.MQQ.SsoRequest.removeListener(CMSHOW_SRV_PUSH_PUBLIC_MSG, this), BK.MQQ.SsoRequest.addListener(CMSHOW_SRV_PUSH_PUBLIC_MSG, this, this._event4PushPublicMsg.bind(this)), BK.MQQ.SsoRequest.send(r, CMSHOW_SRV_PUSH_PUBLIC_MSG)) : BK.Script.log(0, 0, "pushPublicMsg data undefined!")
				}, this.hasJoinRoom = function() {
					return this.hasJoinRoomSucc
				}, this.hasStartGame = function() {
					return this.hasStartGameSucc
				}, this._event4StopGame = function(e, t, r) {
					BK.Script.log(0, 0, "BK.QQ._event4StopGame!errCode = " + e + " cmd = " + t + " data = " + JSON.stringify(r)), this._closeRoom(), this.delegate.onStopGameEvent && this.delegate.onStopGameEvent(e, t, r)
				}, this._closeRoom = function(e) {
					BK.QQ.isNeedSSOServer = void 0 == e || null == e || e, 1 == Boolean(BK.QQ.isNeedSSOServer) && (this.hasStartGameSucc || this.gameCfg.roomId && 0 != this.gameCfg.roomId && (this.gameCfg.isCreator ? this.notifyCancelGameSrv() : this.notifyQuitGameSrv()))
				}, this.uploadScoreWithoutRoom = function(e, t, r) {
					var i = "apollo_report_result.single_user_result",
						n = Math.floor((new Date).getTime() / 1e3),
						a = {
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
					r && (BK.MQQ.SsoRequest.removeListener(i, this), BK.MQQ.SsoRequest.addListener(i, this, r)), BK.MQQ.SsoRequest.send(a, i)
				}, this.getRankListWithoutRoom = function(e, t, r, i) {
					var n = "apollo_router_game.apollo_user_rankinglist_linkcmd_custom_ranking",
						a = Math.floor((new Date).getTime() / 1e3),
						o = {
							from: GameStatusInfo.platform,
							gameId: GameStatusInfo.gameId,
							openId: GameStatusInfo.openId,
							version: GameStatusInfo.gameVersion,
							ts: a.toString(),
							attr: void 0 !== e ? e : "score",
							order: void 0 !== t ? t : 1,
							rankType: void 0 !== r ? r : 0
						};
					i && (BK.MQQ.SsoRequest.removeListener(n, this), BK.MQQ.SsoRequest.addListener(n, this, i)), BK.MQQ.SsoRequest.send(o, n)
				}, this.saveGameData = function(e, t) {
					var r = "apollo_private_data.set_user_data",
						i = Math.floor((new Date).getTime() / 1e3),
						n = {
							openId: GameStatusInfo.openId,
							gameId: GameStatusInfo.gameId,
							version: GameStatusInfo.gameVersion,
							from: GameStatusInfo.platform,
							ts: i.toString(),
							data: e
						};
					t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.send(n, r)
				}, this.loadGameData = function(e) {
					var t = "apollo_private_data.get_user_data",
						r = Math.floor((new Date).getTime() / 1e3),
						i = {
							openId: GameStatusInfo.openId,
							gameId: GameStatusInfo.gameId,
							version: GameStatusInfo.gameVersion,
							from: GameStatusInfo.platform,
							ts: r.toString()
						};
					e && (BK.MQQ.SsoRequest.removeListener(t, this), BK.MQQ.SsoRequest.addListener(t, this, e)), BK.MQQ.SsoRequest.send(i, t)
				}, this.reportGameResult = function(e, t) {
					var r = "apollo_router_game.apollo_reportcm_linkcmd_game_result";
					e.gameId = GameStatusInfo.gameId, t && (BK.MQQ.SsoRequest.removeListener(r, this), BK.MQQ.SsoRequest.addListener(r, this, t)), BK.MQQ.SsoRequest.send(e, r)
				}, BK.MQQ.SsoRequest.addListener(CMSHOW_SC_CMD_STOP_GAME, this, this._event4StopGame.bind(this))
			}
		}(), BK.Room = function() {
			this.roomId, this.gameId, this.mId, this.ownerId, this.createTs, this.status, this.playerNum, this.ip0, this.ip1, this.msgSeq = 1, this.ackSeq, this.lastFrame = 0, this.startGameTs = 0, this.createRoomCallBack, this.queryRoomInfoCallBack, this.joinRoomCallBack, this.leaveRoomCallBack, this.startGameCallBack, this.broadcastDataCallBack, this.sensitiveWordCallBack, this.setUserDataCallBack, this.getUserDataCallBack, this.sendSyncOptCallBack, this.forceStopGameCallBack, this.frameSyncListener, this.queryFrameDataCallBack, this.matchGameCallBack, this.queryMatchGameCallBack, this.quitMatchGameCallBack, this.disconnectNetCallBack, this.reJoinRoomCallBack, this.socket = new BK.Socket, this.reqArray = new Array, this.newJoinPlayers = [], this.currentPlayers = [], this.isCreator = 1 == GameStatusInfo.isMaster, this.gameStatusInfo = GameStatusInfo, this.serverConnected, this._environment = GameStatusInfo.isWhiteUser, this.headerVersion = 769, this.recommandRoomSvrHost = NormalRecommandRoomSvrHost, this.recommandRoomSvrPort = NormalRecommandRoomSvrPort, this.netTimeOutTs = 0, this.options = null, this.setArkData = function(e) {
				BK.QQ.setArkData(e)
			}, this.setRoomVol = function(e) {
				BK.QQ.roomVol = e
			}, this.read32BytesToString = function(e) {
				for (var t = "", r = 0; r < 32; r++) {
					var i = e.readUint8Buffer();
					t += String.fromCharCode(i)
				}
				return t
			}, this.writeOpenIdIntoBuffer = function(e, t) {
				var r = new BK.Buffer(32);
				if (32 == t.length)
					for (n = 0; n < 32; n++) {
						var i = t.charCodeAt(n);
						r.writeUint8Buffer(i)
					} else {
						for (var n = 0; n < 32; n++) r.writeUint8Buffer(0);
						BK.Script.log(0, 0, "writeOpenIdIntoBuffer.length is not 32 bytes,Write empty data")
					}
				e.writeBuffer(r)
			}, this.addHeader = function(e, t, r) {
				e.writeUint16Buffer(4660), e.writeUint16Buffer(this.headerVersion), e.writeUint16Buffer(0), e.writeUint16Buffer(r), e.writeUint32Buffer(t)
			}, this.addFixedHeader = function(e, t, r, i, n, a, o, s, f) {
				void 0 == a && (a = ""), void 0 == o && (o = 0), void 0 == s && (s = 0), void 0 == f && (f = 0), e.writeUint16Buffer(72), e.writeUint16Buffer(t), e.writeUint32Buffer(0), e.writeUint64Buffer(1111), e.writeUint64Buffer(r), e.writeUint64Buffer(i), this.writeOpenIdIntoBuffer(e, n), this.writeOpenIdIntoBuffer(e, a), e.writeUint64Buffer(o), e.writeUint64Buffer(s), e.writeUint64Buffer(f)
			}, this.getHeader = function(e) {
				var t = e.readUint16Buffer(),
					r = e.readUint16Buffer(),
					i = e.readUint16Buffer(),
					n = e.readUint16Buffer(),
					a = e.readUint32Buffer(),
					o = new Object;
				return o.magic = t, o.ver = r, o.stlen = n, o.bodyLen = a, o.seq = i, o
			}, this.getFixedHeader = function(e) {
				var t = e.readUint16Buffer(),
					r = e.readUint16Buffer(),
					i = e.readUint32Buffer(),
					n = e.readUint64Buffer(),
					a = e.readUint64Buffer(),
					o = e.readUint64Buffer(),
					s = "",
					f = "";
				s = this.read32BytesToString(e), f = this.read32BytesToString(e);
				var u = e.readUint64Buffer(),
					d = e.readUint64Buffer(),
					h = e.readUint64Buffer(),
					c = new Object;
				return c.fixLen = t, c.cmd = r, c.ret = i, c.date = n, c.gameId = a, c.roomId = o, c.fromId = s, c.toId = f, c.token = u, c.appId = d, c.accessToken = h, c
			}, this.matchGame = function(e, t, r) {
				this.mId = t, this.gameId = parseInt(e), BK.QQ.gameCfg.gameMode = 6, GameStatusInfo.gameMode = 6;
				var i = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
				BK.Script.log(0, 0, "socket con =" + i), -1 == i ? BK.Script.log(0, 0, "socket connect failed! " + i) : this.serverConnected = 1, this.matchGameCallBack = r;
				var n = new Object;
				n.cmd = 36, n.arg0 = e, n.arg1 = t, this.reqArray.push(n), BK.Script.log(0, 0, "createRoom ")
			}, this.requestMatch = function(e, t) {
				BK.Script.log(0, 0, "match game request in");
				var r = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(r, 36, e, 0, t);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), BK.Script.log(0, 0, "match game request buffer : " + a.bufferLength() + " body len:" + r.bufferLength()), a
			}, this.queryMatchGame = function(e, t, r) {
				BK.Script.log(0, 0, "queryMatchGame in "), this.mId = t, this.gameId = parseInt(e), this.queryMatchGameCallBack = r;
				var i = new Object;
				i.cmd = 38, i.arg0 = e, i.arg1 = t, this.reqArray.push(i)
			}, this.requestQueryMatch = function(e, t) {
				BK.Script.log(0, 0, "query match game request in");
				var r = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(r, 38, e, 0, t);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), BK.Script.log(0, 0, "query match game request buffer : " + a.bufferLength() + " body len:" + r.bufferLength()), a
			}, this.quitMatchGame = function(e, t, r) {
				BK.Script.log(0, 0, "quitMatchGame in "), this.mId = t, this.gameId = parseInt(e), this.quitMatchGameCallBack = r;
				var i = new Object;
				i.cmd = 40, i.arg0 = e, i.arg1 = t, this.reqArray.push(i)
			}, this.requestQuitMatch = function(e, t) {
				BK.Script.log(0, 0, "quit match game request in");
				var r = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(r, 40, e, 0, t);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), BK.Script.log(0, 0, "quit match game request buffer : " + a.bufferLength() + " body len:" + r.bufferLength()), a
			}, this.createRoom = function(e, t, r) {
				if (this.mId = t, this.gameId = parseInt(e), 1 != this.serverConnected) {
					var i = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
					BK.Script.log(0, 0, "socket con =" + i), -1 == i ? BK.Script.log(0, 0, "socket connect failed! " + i) : this.serverConnected = 1
				}
				this.createRoomCallBack = r;
				var n = new Object;
				n.cmd = 6, n.arg0 = e, n.arg1 = t, this.reqArray.push(n), BK.Script.log(0, 0, "createRoom ")
			}, this.requestCreateRoom = function(e, t) {
				BK.Script.log(0, 0, "create room request in");
				var r = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(r, 6, e, 0, t);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), BK.Script.log(0, 0, "create room request buffer : " + a.bufferLength() + " body len:" + r.bufferLength()), a
			}, this.requestQueryRoom = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 10, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var r = t.bufferLength(),
					i = new BK.Buffer(HeaderLen + e.bufferLength() + r, 1);
				return this.addHeader(i, e.bufferLength(), r), i.writeBuffer(t), i.writeBuffer(e), i
			}, this.queryRoom = function(e, t, r, i) {
				this.mId = r, this.roomId = parseFloat(t), this.gameId = parseInt(e), this.queryRoomInfoCallBack = i;
				var n = new Object;
				n.cmd = 10, this.reqArray.push(n), BK.Script.log(0, 0, "queryRoom push")
			}, this.joinRoom = function(e, t, r, i) {
				this.joinRoomCallBack = t, BK.QQ.isNeedSSOServer = void 0 == i || null == i || i, BK.Script.log(0, 0, "BK.QQ.notifyJoinroom isDisableSendMsg   isAuto: " + r + ",isAutoSendJoin:  " + BK.QQ.isAutoSendJoinRoomNotify);
				var n = new Object;
				n.cmd = 2, n.arg0 = e, this.reqArray.push(n)
			}, this.requestJoinRoom = function(e) {
				BK.Script.log(0, 0, "join room request");
				var t = new BK.Buffer(fixedHeaderLen + 5, 1);
				this.addFixedHeader(t, 2, this.gameId, this.roomId, this.mId);
				var r = new BK.TLV(5);
				r.bkJSTLVWriteUInt8(e, TLVType.Uint8, 201), t.writeBuffer(r.bkJSTLVGetBuffer());
				var i = BK.Security.getST();
				BK.Security.encrypt(t);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + t.bufferLength() + n, 1);
				return this.addHeader(a, t.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(t), a
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
				var r = new Object;
				r.cmd = 4, r.arg0 = t, this.reqArray.push(r), this.leaveRoomCallBack = e, BK.Script.log(0, 0, "leaveRoom push")
			}, this.setLeaveRoomCallback = function(e) {
				this.leaveRoomCallBack = e
			}, this.requestLeaveRoom = function(e) {
				var t = new BK.TLV(44),
					r = new BK.Buffer(40, 1);
				this.writeOpenIdIntoBuffer(r, this.mId), r.writeUint64Buffer(e), t.bkJSTLVWriteBuffer(r, TLVType.Byte, 201);
				var i = new BK.Buffer(fixedHeaderLen + t.bkJSTLVGetLength(), 1);
				this.addFixedHeader(i, 4, this.gameId, this.roomId, this.mId), i.writeBuffer(t.bkJSTLVGetBuffer());
				var n = BK.Security.getST(),
					a = n.bufferLength();
				return BK.Security.encrypt(i), buff = new BK.Buffer(HeaderLen + i.bufferLength() + a, 1), this.addHeader(buff, i.bufferLength(), a), buff.writeBuffer(n), buff.writeBuffer(i), BK.Script.log(0, 0, "leave room buffer : " + buff.bufferLength() + " body len:" + i.bufferLength()), buff
			}, this._startGame = function(e) {
				this.startGameCallBack = e;
				var t = new Object;
				t.cmd = 8, this.reqArray.push(t), BK.Script.log(0, 0, "startGame push")
			}, this.startGame = function(e) {
				GameStatusInfo.devPlatform ? (BK.Script.log(0, 0, "startGame dev:"), this._startGame(e)) : 1 == BK.QQ.hasJoinRoomSucc ? (BK.Script.log(0, 0, "startGame qq:cmsrv confirm joinRoom response"), this._startGame(e)) : (BK.Script.log(0, 0, "startGame qq:waiting cmsvr joiroom response"), BK.QQ.delegate.onJoinRoomEvent = function(t, r, i) {
					BK.Script.log(0, 0, "startGame qq:wait finish.start Game"), this._startGame(e)
				}.bind(this))
			}, this.setStartGameCallback = function(e) {
				this.startGameCallBack = e
			}, this.requestStartGame = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 8, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var r = t.bufferLength(),
					i = new BK.Buffer(HeaderLen + e.bufferLength() + r, 1);
				return this.addHeader(i, e.bufferLength(), r), i.writeBuffer(t), i.writeBuffer(e), i
			}, this.setBroadcastDataCallBack = function(e) {
				this.broadcastDataCallBack = e
			}, this.sendBroadcastData = function(e) {
				var t = new Object;
				t.cmd = 1, t.arg0 = e, this.reqArray.push(t)
			}, this.requestsendBroadcastData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					r = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(r, 1, this.gameId, this.roomId, this.mId), r.writeBuffer(e);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), a
			}, this.setSensitiveWordCallBack = function(e) {
				this.sensitiveWordCallBack = e
			}, this.sendSensitiveWordData = function(e) {
				var t = new Object;
				t.cmd = 50, t.arg0 = e, this.reqArray.push(t)
			}, this.requestSendSendSensitiveWordData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					r = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(r, 50, this.gameId, this.roomId, this.mId), r.writeBuffer(e);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), a
			}, this.setUserData = function(e, t) {
				BK.Script.log(0, 0, "setUserData call"), this.setUserDataCallBack = t;
				var r = new Object;
				r.cmd = 32, r.arg0 = e, this.reqArray.push(r), BK.Script.log(0, 0, "setUserData push")
			}, this.requestSetUserData = function(e) {
				var t = e.capacity ? e.capacity : e.bufferLength(),
					r = new BK.Buffer(fixedHeaderLen + t, 1);
				this.addFixedHeader(r, 32, this.gameId, this.roomId, this.mId), r.writeBuffer(e);
				var i = BK.Security.getST();
				BK.Security.encrypt(r);
				var n = i.bufferLength(),
					a = new BK.Buffer(HeaderLen + r.bufferLength() + n, 1);
				return this.addHeader(a, r.bufferLength(), n), a.writeBuffer(i), a.writeBuffer(r), a
			}, this.getUserData = function(e, t) {
				void 0 == e && (e = 0), this.getUserDataCallBack = t;
				var r = new Object;
				r.cmd = 34, r.arg0 = e, this.reqArray.push(r), BK.Script.log(0, 0, "getUserData push roomId = " + e)
			}, this.requestGetUserData = function(e) {
				var t = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(t, 34, this.gameId, this.roomId, this.mId);
				var r = BK.Security.getST();
				BK.Security.encrypt(t);
				var i = r.bufferLength(),
					n = new BK.Buffer(HeaderLen + t.bufferLength() + i, 1);
				return this.addHeader(n, t.bufferLength(), i), n.writeBuffer(r), n.writeBuffer(t), n
			}, this.syncOpt = function(e, t, r, i, n) {
				this.sendSyncOptCallBack = n;
				var a = new Object;
				a.cmd = 14, a.arg0 = e, a.arg1 = t, a.arg2 = r, a.arg3 = i, this.reqArray.push(a)
			}, this.sendSyncOpt = function(e, t) {
				var r = new BK.Buffer(1, 1);
				r.writeUint8Buffer(0);
				var i = new BK.Buffer(1, 1);
				i.writeUint8Buffer(0), this.syncOpt(r, e, i, void 0, t)
			}, this.requestSyncOpt = function(e, t, r, i) {
				var n = 20 + (e.capacity ? e.capacity : e.bufferLength()) + 4 + (t.capacity ? t.capacity : t.bufferLength()) + 4 + (r.capacity ? r.capacity : r.bufferLength());
				if (i) {
					var a = i.capacity ? i.capacity : i.bufferLength();
					n = n + 4 + a, BK.Script.log(0, 0, "requestSyncOpt with item len" + a)
				}
				var o = new BK.TLV(n);
				o.bkJSTLVWriteUInt32(this.msgSeq, TLVType.Uint32, 201), o.bkJSTLVWriteUInt32(this.lastFrame, TLVType.Uint32, 202), o.bkJSTLVWriteBuffer(e, TLVType.Byte, 203), o.bkJSTLVWriteBuffer(t, TLVType.Byte, 204), o.bkJSTLVWriteBuffer(r, TLVType.Byte, 205), i && o.bkJSTLVWriteBuffer(i, TLVType.Byte, 206), BK.Script.log(0, 0, "requestSyncOpt this.msgSeq:" + this.msgSeq + " this.lastFrame:" + this.lastFrame);
				o.bkJSParseTLV();
				BK.Script.log(0, 0, "requestSyncOpt tlv len:" + o.bkJSTLVGetLength() + " fix header:" + fixedHeaderLen);
				var s = new BK.Buffer(fixedHeaderLen + o.bkJSTLVGetLength(), 1);
				this.addFixedHeader(s, 14, this.gameId, this.roomId, this.mId), s.writeBuffer(o.bkJSTLVGetBuffer());
				var f = BK.Security.getST();
				BK.Security.encrypt(s);
				var u = f.bufferLength(),
					d = new BK.Buffer(HeaderLen + s.bufferLength() + u, 1);
				return this.addHeader(d, s.bufferLength(), u), d.writeBuffer(f), d.writeBuffer(s), this.msgSeq += 1, d
			}, this.setFrameSyncListener = function(e) {
				this.frameSyncListener = e
			}, this.queryFrameData = function(e, t, r) {
				this.queryFrameDataCallBack = r;
				var i = new Object;
				i.cmd = 18, i.arg0 = e, i.arg1 = t, this.reqArray.push(i)
			}, this.requestQueryFrameData = function(e, t) {
				var r = new BK.TLV(22);
				r.bkJSTLVWriteUInt32(this.lastFrame, TLVType.Uint32, 201), r.bkJSTLVWriteUInt32(e, TLVType.Uint32, 202), r.bkJSTLVWriteUInt16(t, TLVType.Uint16, 203);
				var i = new BK.Buffer(fixedHeaderLen + r.bkJSTLVGetLength(), 1);
				this.addFixedHeader(i, 18, this.gameId, this.roomId, this.mId), i.writeBuffer(r.bkJSTLVGetBuffer());
				var n = BK.Security.getST();
				BK.Security.encrypt(i);
				var a = n.bufferLength(),
					o = new BK.Buffer(HeaderLen + i.bufferLength() + a, 1);
				return this.addHeader(o, i.bufferLength(), a), o.writeBuffer(n), o.writeBuffer(i), o
			}, this.sendControlCommand = function(e, t, r, i) {
				var n = new Object;
				n.cmd = 48, n.arg0 = e, n.arg1 = t, n.arg2 = r, this.reqArray.push(n), this.controlCommandCallback = i
			}, this.requestControlCommand = function(e, t, r) {
				var i = new BK.TLV(14 + t.bufferLength() + r.bufferLength());
				i.bkJSTLVWriteBuffer(t, TLVType.Byte, 201), i.bkJSTLVWriteUInt16(e, TLVType.Uint16, 202), i.bkJSTLVWriteBuffer(r, TLVType.Byte, 203);
				var n = new BK.Buffer(fixedHeaderLen + i.bkJSTLVGetLength(), 1);
				this.addFixedHeader(n, 48, this.gameId, this.roomId, this.mId), n.writeBuffer(i.bkJSTLVGetBuffer()), BK.Security.encrypt(n);
				var a = BK.Security.getST(),
					o = a.bufferLength(),
					s = new BK.Buffer(HeaderLen + n.bufferLength() + o, 1);
				return this.addHeader(s, n.bufferLength(), o), s.writeBuffer(a), s.writeBuffer(n), s
			}, this.sendKeepAlive = function() {
				var e = new Object;
				e.cmd = 12, this.reqArray.push(e), 0 != this.netTimeOutTs && BK.Time.timestamp - this.netTimeOutTs > 5 && this.disconnectNetCallBack && this.disconnectNetCallBack()
			}, this.requestSendKeepAlive = function() {
				var e = new BK.Buffer(fixedHeaderLen, 1);
				this.addFixedHeader(e, 12, this.gameId, this.roomId, this.mId);
				var t = BK.Security.getST();
				BK.Security.encrypt(e);
				var r = t.bufferLength(),
					i = new BK.Buffer(HeaderLen + e.bufferLength() + r, 1);
				return this.addHeader(i, e.bufferLength(), r), i.writeBuffer(t), i.writeBuffer(e), i
			}, this.recvCreateRoom = function(e, t) {
				BK.Script.log(0, 0, "recvCreateRoom bodyLen=" + t);
				var r = e.readBuffer(t),
					i = new BK.TLV(r).bkJSParseTLV();
				if (i) {
					var n = i.tag202,
						a = n.readUint8Buffer(),
						o = n.readUint8Buffer(),
						s = n.readUint16Buffer();
					n.readUint64Buffer(), n.readUint32Buffer();
					var f = n.readUint8Buffer(),
						u = n.readUint8Buffer(),
						d = n.readUint8Buffer(),
						h = n.readUint8Buffer(),
						c = i.tag201,
						_ = c.readUint8Buffer(),
						l = c.readUint8Buffer(),
						g = c.readUint16Buffer();
					c.readUint64Buffer(), c.readUint32Buffer();
					var m = c.readUint8Buffer(),
						p = c.readUint8Buffer(),
						S = c.readUint8Buffer(),
						b = c.readUint8Buffer(),
						x = new Object;
					return x.ipType_1 = a, x.resServe_1 = o, x.ipType_2 = _, x.resServe_2 = l, x.port_1 = s, x.ip_1 = f + "." + u + "." + d + "." + h, x.port_2 = g, x.ip_2 = m + "." + p + "." + S + "." + b, this.ip0 = x.ip_1, this.ip1 = x.ip_2, x
				}
				return void BK.Script.log(0, 0, "recvCreateRoom parse failed.")
			}, this.recvQueryRoom = function(e, t) {
				BK.Script.log(0, 0, "recvQueryRoom bodyLen:" + t);
				var r = e.readBuffer(t),
					i = new BK.TLV(r).bkJSParseTLV();
				if (i) {
					var n = i.tag202,
						a = n.readUint8Buffer(),
						o = n.readUint8Buffer(),
						s = n.readUint16Buffer();
					n.readUint64Buffer(), n.readUint32Buffer();
					var f = n.readUint8Buffer(),
						u = n.readUint8Buffer(),
						d = n.readUint8Buffer(),
						h = n.readUint8Buffer(),
						c = i.tag201,
						_ = c.readUint8Buffer(),
						l = c.readUint8Buffer(),
						g = c.readUint16Buffer();
					c.readUint64Buffer(), c.readUint32Buffer();
					var m = c.readUint8Buffer(),
						p = c.readUint8Buffer(),
						S = c.readUint8Buffer(),
						b = c.readUint8Buffer(),
						x = i.tag203,
						v = this.read32BytesToString(x),
						C = x.readUint64Buffer(),
						B = x.readUint8Buffer(),
						T = x.readUint8Buffer(),
						E = i.tag205;
					void 0 == E && (E = 0);
					for (var O = [], M = 0; M < T; M++) {
						var R = {};
						R.uid = this.read32BytesToString(x), R.status = x.readUint8Buffer(), O.push(R)
					}
					var A = new Object;
					return A.ipType_1 = a, A.resServe_1 = o, A.ipType_2 = _, A.resServe_2 = l, A.port_1 = s, A.ip_1 = f + "." + u + "." + d + "." + h, A.port_2 = g, A.ip_2 = m + "." + p + "." + S + "." + b, A.ownerId = v, A.createTs = C, A.status = B, A.playerNum = T, A.ext_num = E, this.ip0 = A.ip_1, this.ip1 = A.ip_2, this.ownerId = v, this.createTs = C, this.status = B, this.playerNum = T, this.players = O, A
				}
				return void BK.Script.log(0, 0, "recvQueryRoom parse failed.bodyLen is 0")
			}, this.recvJoinRoom = function(e, t) {
				for (var r = e.readBuffer(t), i = new BK.TLV(r).bkJSParseTLV().tag201, n = this.read32BytesToString(i), a = i.readUint64Buffer(), o = i.readUint8Buffer(), s = i.readUint8Buffer(), f = [], u = 0; u < s; u++) {
					var d = {},
						h = this.read32BytesToString(i),
						c = i.readUint64Buffer(),
						o = i.readUint8Buffer();
					d.openId = h, d.status = o, d.joinTs = c, f.push(d)
				}
				if (this.ownerId = n, this.createTs = a, this.status = o, this.playerNum = s, 0 == this.currentPlayers.length) f.forEach(function(e) {
					this.newJoinPlayers.push(e)
				}, this);
				else {
					var _ = [];
					BK.Script.log(0, 0, "recvJoinRoom!curPlayers = " + JSON.stringify(this.currentPlayers)), BK.Script.log(0, 0, "recvJoinRoom!joinPlayers = " + JSON.stringify(f));
					for (u = 0; u < f.length; u++) {
						for (var d = f[u], l = !1, g = 0; g < this.currentPlayers.length; g++)
							if (this.currentPlayers[g].openId == d.openId) {
								l = !0;
								break
							}
						0 == l && _.push(d)
					}
					this.newJoinPlayers = _, BK.Script.log(0, 0, "recvJoinRoom!newPlayers = " + JSON.stringify(this.newJoinPlayers))
				}
				this.currentPlayers = f, BK.Script.log(0, 0, "recvJoinRoom ownerId=" + n + ",createTs =" + a + ",playerNum:" + s)
			}, this.recvLeaveRoom = function(e, t) {
				var r = e.readBuffer(t),
					i = new BK.TLV(r).bkJSParseTLV();
				if (i) {
					var n = i.tag201,
						a = this.read32BytesToString(n),
						o = e.readUint64Buffer(),
						s = new Object;
					return BK.Script.log(0, 0, "recvLeaveRoom!ret = " + o), s.reason = o, s.logOutId = a, this.currentPlayers.splice(this.currentPlayers.indexOf(a)), s
				}
				return void BK.Script.log(0, 0, "recvLeaveRoom parse failed.bodylen is " + t)
			}, this.recvStartGame = function(e, t) {
				this.startGameTs = BK.Time.timestamp, BK.Script.log(0, 0, "recvStartGame")
			}, this.recvPushFrameSync = function(e, t) {
				for (var r = e.readBuffer(t), i = new BK.TLV(r).bkJSParseTLV(), n = (i.tag201, i.tag202, i.tag203), a = new Array, o = 0; o < n.length; o++) {
					var s = n[o].readUint32Buffer();
					this.lastFrame = s;
					var f = n[o].bufferLength() - 4;
					BK.Script.log(0, 0, "sync recv len= " + n[o].bufferLength() + " frameData.length=" + n.length);
					for (var u = new Array; f > 0;) {
						BK.Script.log(0, 0, "push frameNo=" + this.lastFrame);
						var d = n[o].readUint16Buffer();
						BK.Script.log(0, 0, "push databuf 2 datalen=" + d);
						var h = this.read32BytesToString(n[o]),
							c = n[o].readUint64Buffer(),
							_ = {
								openId: h,
								itemId: c,
								dataBuffer: n[o].readBuffer(d)
							};
						BK.Script.log(0, 0, "push databuf openid=" + h), BK.Script.log(0, 0, "push databuf itemid=" + c), u.push(_), f -= 42, f -= d
					}
					u.frameSeq = s, a.push(u)
				}
				this.frameSyncListener(a)
			}, this.recvQueryFrameSync = function(e, t) {
				var r = e.readBuffer(t),
					i = new BK.TLV(r).bkJSParseTLV();
				if (!i) return BK.Script.log(0, 0, "recvQueryFrameSync empty."), void this.queryFrameDataCallBack(0, void 0);
				for (var n = i.tag201, a = new Array, o = 0; o < n.length; o++) {
					n[o].readUint32Buffer();
					var s = n[o].bufferLength() - 4;
					BK.Script.log(0, 0, "sync query recv = " + n[o].bufferLength() + " frameData.length=" + n.length);
					for (var f = new Array; s > 0;) {
						BK.Script.log(0, 0, "push frameNo=" + this.lastFrame);
						var u = n[o].readUint16Buffer();
						BK.Script.log(0, 0, "push databuf 2 datalen=" + u);
						var d = this.read32BytesToString(n[o]),
							h = n[o].readUint64Buffer(),
							c = {
								openId: d,
								itemId: h,
								dataBuffer: n[o].readBuffer(u)
							};
						BK.Script.log(0, 0, "push databuf openid=" + d), BK.Script.log(0, 0, "push databuf itemid=" + h), f.push(c), s -= 42, s -= u
					}
					a.push(f)
				}
				BK.Script.log(0, 0, "query end"), this.queryFrameDataCallBack(0, a)
			}, this.recvControlCommand = function(e, t) {
				var r = e.readBuffer(t),
					i = new BK.TLV(r).bkJSParseTLV(),
					n = {};
				i.tag201 && (n = JSON.parse(i.tag201.readAsString())), this.controlCommandCallback && this.controlCommandCallback(0, n)
			}, this.recvSSOJoinRoom = function(e, t, r) {
				if (BK.Script.log(1, 1, "recvSSOJoinRoom = true data=" + JSON.stringify(r)), 0 == e) {
					var i = r.data.avRoomId,
						n = r.data.sdkAppId,
						a = r.data.accountType;
					GameStatusInfo.avAppId = n, GameStatusInfo.avAccountType = a, GameStatusInfo.avRoomId = i, GameStatusInfo.roomId = this.roomId
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
				var r = e.readBuffer(t.bodyLen);
				BK.Security.decrypt(r);
				var i = this.getFixedHeader(r);
				if (this.netTimeOutTs = 0, 0 == i.ret) switch (BK.Script.log(0, 0, "handleRecv = " + i.cmd + ",bodyLen=" + t.bodyLen + ",bodyreal=" + r.bufferLength()), i.cmd) {
					case 7:
						this.roomId = i.roomId;
						var n = this.recvCreateRoom(r, r.bufferLength() - fixedHeaderLen);
						BK.Script.log(0, 0, "magic = " + t.magic + ",stlen = " + t.stlen + ",bodyLen=" + t.bodyLen + ",cmd=" + i.cmd + ",roomId=" + i.roomId), this.createRoomCallBack(i.ret, n, i.roomId), BK.QQ.notifyNewRoom(this.roomId, i.ret);
						break;
					case 11:
						var a = this.recvQueryRoom(r, r.bufferLength() - fixedHeaderLen);
						this.queryRoomInfoCallBack(i.ret, a), BK.Script.log(0, 0, "magic = " + t.magic + ",stlen = " + t.stlen + ",bodyLen=" + t.bodyLen + ",cmd=" + i.cmd + ",roomId=" + i.roomId);
						break;
					case 3:
						if (this.recvJoinRoom(r, r.bufferLength() - fixedHeaderLen), this.joinRoomCallBack(i.ret, this), 1 == Boolean(BK.QQ.isNeedSSOServer))
							for (var o = 0; o < this.newJoinPlayers.length; o++)
								if (this.newJoinPlayers[o].openId == currentPlayerOpenId) return BK.QQ.ssoJoinRoomCallback = this.recvSSOJoinRoom.bind(this), void BK.QQ.notifyNewOrJoinRoomSrv(this.newJoinPlayers, this.roomId, this.ownerId == GameStatusInfo.openId ? 1 : 2);
						BK.QQ.notifyJoinRoom(this.newJoinPlayers, {}, i.ret);
						break;
					case 5:
						var s = this.recvLeaveRoom(r, r.bufferLength() - fixedHeaderLen);
						this.leaveRoomCallBack && this.leaveRoomCallBack(i.ret, s);
						break;
					case 9:
						this.recvStartGame(r, r.bufferLength() - fixedHeaderLen), this.startGameCallBack(i.ret), 1 == Boolean(BK.QQ.isNeedSSOServer) && BK.QQ.notifyStartGameSrv(), 0 == i.ret && (BK.QQ.hasJoinRoomSucc = !1);
						break;
					case 1:
						f = r.readBuffer(r.bufferLength() - fixedHeaderLen);
						this.broadcastDataCallBack(i.fromId, f, i.toId);
						break;
					case 51:
						f = r.readBuffer(r.bufferLength() - fixedHeaderLen);
						this.sensitiveWordCallBack(i.ret, i.fromId, f, i.toId);
						break;
					case 33:
						f = r.readBuffer(r.bufferLength() - fixedHeaderLen);
						this.setUserDataCallBack(i.ret);
						break;
					case 35:
						var f = r.readBuffer(r.bufferLength() - fixedHeaderLen);
						this.getUserDataCallBack(i.ret, f);
						break;
					case 15:
						var u = r.readUint32Buffer();
						this.ackSeq = u, this.sendSyncOptCallBack(i.ret, u);
						break;
					case 16:
						this.recvPushFrameSync(r, r.bufferLength() - fixedHeaderLen);
						break;
					case 19:
						this.recvQueryFrameSync(r, r.bufferLength() - fixedHeaderLen);
						break;
					case 37:
						this.matchGameCallBack(i.ret);
						break;
					case 39:
						this.roomId = i.roomId, this.queryMatchGameCallBack(i.ret);
						break;
					case 41:
						this.roomId = i.roomId, this.quitMatchGameCallBack(i.ret);
						break;
					case 49:
						this.recvControlCommand(r, r.bufferLength() - fixedHeaderLen)
				} else this.handleServerError(i)
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
						var r = new BK.Buffer,
							i = new BK.Buffer;
						r.writeAsString(e.arg1), i.writeAsString(e.arg2), t = this.requestControlCommand(e.arg0, r, i)
				}
				void 0 != t && (BK.Script.log(0, 0, "requestSocket = " + e.cmd), this.socket.send(t))
			}, this.seperatePackHandle = function() {
				for (;;) {
					var e = this.socket.receiveNotRemove(),
						t = e.bufferLength(),
						r = this.getHeader(e),
						i = r.stlen + r.bodyLen + HeaderLen;
					if (BK.Script.log(0, 0, "this.socket.receive():totalLen = " + t + "  onePackLen=" + i), t == i) {
						BK.Script.log(0, 0, "  this.socket.receive():onePackLen=" + i), void 0 != (n = this.socket.receive(i)) && this.handleRecv(n);
						break
					}
					if (t < i) {
						BK.Script.log(0, 0, "  this.socket.receive():part of onePackLen=" + i);
						break
					}
					if (t > i) {
						BK.Script.log(0, 0, "  this.socket.receive():Multipacks onePackLen=" + i);
						var n = this.socket.receive(i);
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
			}, this.createAndJoinRoom = function(e, t, r, i, n) {
				this.createRoom(e, t, function(e, t, a) {
					0 == e ? (BK.Script.log(0, 0, "åˆ›å»ºæ¸¸æˆ statusCode:" + e + " roomId:" + a), this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
						BK.Script.log(0, 0, "åŠ å…¥æˆ¿é—´ statusCode:" + e + " roomid is " + t.roomId), 0 == e && (GameStatusInfo.roomId = t.roomId, BK.QQ.gameCfg.roomId = t.roomId), r(e, this)
					}, i, n)) : r(e, this)
				})
			}, this.queryAndJoinRoom = function(e, t, r, i, n, a) {
				1 != this.serverConnected && (this.socket.close(), this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort)), this.queryRoom(e, t, r, function(e, t) {
					0 == e ? (this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
						BK.Script.log(0, 0, "åŠ å…¥æˆ¿é—´ statusCode:" + e + " roomid is " + t.roomId), i(e, this)
					}, n, a)) : i(e, void 0)
				})
			}, this.forceLeaveRoom = function(e, t) {
				var r = new Object;
				r.cmd = 4, r.arg0 = t, this.leaveRoomCallBack = e;
				var i = this.requestLeaveRoom(r.arg0),
					n = this.socket.update();
				3 == n || 2 == n ? (this.socket.send(i), BK.Script.log(0, 0, "forceLeaveRoom push")) : BK.Script.log(0, 0, "forceLeaveRoom push Failed. Socket not allow Send.")
			}, this._event4StopGame = function(e, t, r) {
				BK.Script.log(0, 0, "BK.Room._event4StopGame!errCode = " + e + ", cmd = " + t + ", data = " + JSON.stringify(r)), 0 == e && this.forceLeaveRoom(function(e, t) {
					BK.Script.log(0, 0, "forceLeaveRoom callback")
				}, 0)
			}, BK.MQQ.SsoRequest.addListener(CMSHOW_SC_CMD_STOP_GAME, this, this._event4StopGame.bind(this)), this.addDebugFunctions = function() {
				this.createFixedRoom = function(e, t, r, i) {
					this.roomId = r, this.mId = t, this.gameId = e;
					var n = this.socket.connect(this.recommandRoomSvrHost, this.recommandRoomSvrPort);
					BK.Script.log(0, 0, "socket con =" + n), -1 != n && BK.Script.log(0, 0, "socket connect failed! " + n), this.createRoomCallBack = i;
					var a = new Object;
					a.cmd = 6, a.arg0 = e, a.arg1 = t, this.reqArray.push(a), BK.Script.log(0, 0, "create Fixed Room ")
				}, this.createAndJoinFixedRoom = function(e, t, r, i, n) {
					this.createFixedRoom(e, t, r, function(e, t, r) {
						0 == e ? (BK.Script.log(0, 0, "åˆ›å»ºå›ºå®šæˆ¿é—´å· æ¸¸æˆ statusCode:" + e + " roomId:" + r), this.gameSvrIp = t.ip_2, this.gameSvrPort = t.port_2, this.roomSvrIp = t.ip_1, this.roomSvrPort = t.port_1, this.socket.close(), this.socket.connect(this.gameSvrIp, this.gameSvrPort), this.joinRoom(0, function(e, t) {
							BK.Script.log(0, 0, "åŠ å…¥æˆ¿é—´ statusCode:" + e + " roomid is " + t.roomId), i(e, this)
						}, n)) : i(e, this)
					})
				}, this.requestCreateRoom = function(e, t) {
					var r = this.roomId;
					r || (r = 0), BK.Script.log(0, 0, "create fixed room request in fixedRoomId:" + r);
					var i = new BK.Buffer(fixedHeaderLen, 1);
					this.addFixedHeader(i, 6, e, r, t);
					var n = BK.Security.getST();
					BK.Security.encrypt(i);
					var a = n.bufferLength(),
						o = new BK.Buffer(HeaderLen + i.bufferLength() + a, 1);
					return this.addHeader(o, i.bufferLength(), a), o.writeBuffer(n), o.writeBuffer(i), BK.Script.log(0, 0, "create room request buffer : " + o.bufferLength() + " body len:" + i.bufferLength()), o
				}
			}, Object.defineProperty(this, "environment", {
				get: function() {
					return this._environment
				},
				set: function(e) {
					BK.Script.log(0, 0, "Set Environment failed!Can't set the environment!!!")
				}
			}), GameStatusInfo.devPlatform ? (this._environment = NETWORK_ENVIRONMENT_DEMO_DEV, BK.Script.log(1, 1, "å½“å‰çŽ¯å¢ƒä¸º---å¼€å‘çŽ¯å¢ƒ")) : 1 == GameStatusInfo.isWhiteUser ? (this._environment = NETWORK_ENVIRONMENT_QQ_DEBUG, BK.Script.log(1, 1, "å½“å‰çŽ¯å¢ƒä¸º---æ‰‹Qå¼€å‘çŽ¯å¢ƒ")) : (this._environment = NETWORK_ENVIRONMENT_QQ_RELEASE, BK.Script.log(1, 1, "å½“å‰çŽ¯å¢ƒä¸º---æ­£å¼çŽ¯å¢ƒ")), this._environment == NETWORK_ENVIRONMENT_QQ_DEBUG ? (this.headerVersion = 769, this.recommandRoomSvrHost = DebugRecommandRoomSvrHost, this.recommandRoomSvrPort = DebugRecommandRoomSvrPort) : this._environment == NETWORK_ENVIRONMENT_DEMO_DEV && (this.addDebugFunctions(), this.headerVersion = 257, this.recommandRoomSvrHost = DebugRecommandRoomSvrHost, this.recommandRoomSvrPort = DebugRecommandRoomSvrPort)
		}, BK.Script.log(0, 0, "protocol.js Load Succeed!"),
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
			}, BK.Script.log(1, 1, "load device.js success"), new e
		}), BK.Script.log(0, 0, "filemanage.js is loaded"), BK.FileManager = function() {
			this.fileArray = [], this.readFile = function(e, t) {
				var r = new BK.FileUtil(e);
				r.openFile();
				var i = new Object;
				return i.path = e, i.status = 0, i.readCallBack = t, i.file = r, this.fileArray.push(i), i
			}, this.update = function() {
				for (var e = 0; e < this.fileArray.length; e++)
					if (1 != this.fileArray[e].status) {
						var t = this.fileArray[e].file.update();
						if (1 == t || 3 == t) {
							var r = this.fileArray[e].file.readFileAsync();
							r && (this.fileArray[e].readCallBack(r), this.fileArray[e].data = r, this.fileArray[e].status = 1, this.fileArray[e].file.close())
						}
					}
			}, this.getFileData = function(e) {
				for (var t = 0; t < this.fileArray.length; t++)
					if (this.fileArray[t].path == e && 1 == this.fileArray[t].status) return this.fileArray[t].data
			}, this.closeFile = function(e) {
				for (var t = his.fileArray.length; t > 0; t--) this.fileArray[t].path == file.path && this.fileArray.splice(t, 1);
				e.file.removeFromCache()
			}
		}, BK.Script.log(1, 1, "skeletonAnimationAsync js done");
	var fileManager = new BK.FileManager;
	BK.Director.ticker.add(function(e, t) {
			fileManager.update()
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
				for (var r = 0; r < this.records.length; r++)
					if (this.records[r].af === t && this.records[r].hostname === e) return this.records[r];
				return null
			}, e.prototype.update = function(e, t, r, i) {
				for (var n = 0; n < this.records.length; n++)
					if (this.records[n].af === r && this.records[n].hostname === e) return void this.records[n].callbacks.push(t);
				this.records.push({
					af: r,
					timeout: i,
					hostname: e,
					callbacks: [t]
				})
			}, e.prototype.delete = function(e) {
				for (var t = 0; t < this.records.length; t++)
					if (this.records[t].hostname === e) {
						this.records.splice(t);
						break
					}
			}, e.prototype.start = function() {
				if (!this.running) {
					this.running = !0;
					var e = this;
					BK.Director.ticker.add(function(t, r) {
						e.records.length && BK.Misc.handleDNSQueryResult()
					})
				}
			}, e.prototype.queryIPAddress = function(e, t, r, i) {
				var n = !this.exists(e);
				if (void 0 == r && (r = 2), void 0 == i && (i = 0), this.update(e, t, r, i), n) {
					var a = this;
					a.start(), BK.Misc.queryIPAddress(e, function(t, r, i) {
						var n = a.query(e, r);
						if (n)
							for (var o = n.callbacks, s = 0; s < o.length; s++) o[s].call(a, t, r, i);
						a.delete(e)
					}, r, i)
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
				r = /^([!#$%'*+\-.^_`|~0-9A-Za-z]+):[\t ]*((?:[\x21-\x7E](?:[\t ]+[\x21-\x7E])*)*)[\t ]*$/,
				i = /^[\t ]+(.*)$/;
			return e.prototype.reinitialize = function(t) {
				this.execute = this._executeHeader, this.type = t, t === e.RESPONSE && (this._state = 1), this._err = void 0, this._flags = 0, this._contentLen = void 0, this._nbytes = 0, this._nhdrbytes = 0, this._nhdrpairs = 0, this._buf = "", this._seenCR = !1, this.headers = {}, this.httpMajor = 1, this.httpMinor = void 0, this.maxHeaderPairs = 2e3, this.method = void 0, this.url = void 0, this.statusCode = void 0, this.statusText = void 0
			}, e.prototype._processHdrLine = function(e) {
				switch (this._state) {
					case 2:
						if (0 === e.length) return void this._headersEnd();
						BK.Script.log(0,0,"Response "+e)
						
						if (null === (d = r.exec(e))) {
							if (null === (d = i.exec(e))) return this.execute = this._executeError, this._err = new Error("Malformed header line"), this.execute(this._err), this._err;
							var n = d[1];
							n.length > 0 && BK.Script.log(1, 0, "processHdrLine!extra = " + n)
						} else {
							var a = d[1],
								o = d[2];
							switch (a.toLowerCase()) {
								case "connection":
									"close" === (s = o.toLowerCase()).substring(0, 5) ? this._flags |= 4 : "keep-alive" === s.substring(0, 10) ? this._flags |= 2 : "upgrade" === s.substring(0, 7) && (this._flags |= 8);
									break;
								case "transfer-encoding":
									var s = o.toLowerCase();
									"chunked" === s.substring(0, 7) && (this._flags |= 1);
									break;
								case "upgrade":
									this._flags |= 32;
									break;
								case "content-length":
									var f = parseInt(o, 10);
									if (isNaN(f) || f > 524288) return this.execute = this._executeError, this._err = new Error("Bad Content-Length: " + inspect(f)), this.execute(this._err), this._err;
									this._contentLen = f
							}
							var u = this.maxHeaderPairs;
							(u <= 0 || ++this._nhdrpairs < u) && (this.headers[a.toLowerCase()] = o)
						}
						break;
					case 1:
						if (0 === e.length) return !0;
						var d = t.exec(e);
						if (null === d) return this.execute = this._executeError, this._err = new Error("Malformed status line"), this.execute(this._err), this._err;
						this.httpMinor = parseInt(d[1], 10), this.statusCode = parseInt(d[2], 10), this.statusText = d[3] || "", this._state = 2;
						break;
					default:
						return this.execute = this._executeError, this._err = new Error("Unexpected HTTP parser state: " + this._state), this.execute(this._err), this._err
				}
			}, e.prototype._headersEnd = function() {
				var e = this._flags,
					t = this.method && this.method.toLowerCase(),
					r = 40 == (40 & e) || "connect" === t,
					i = 0 == (4 & e),
					n = this._contentLen;
				if (this._buf = "", this._seenCR = !1, this._nbytes = 0, (0 === this.httpMajor && 9 === this.httpMinor || 0 === this.httpMinor && 0 == (2 & e)) && (i = !1), (16 & e) > 0) return this.onComplete && this.onComplete(), void this.reinitialize(this.type);
				if (this.onHeaders) {
					var a = this.headers;
					!0 === this.onHeaders(this.httpMajor, this.httpMinor, a, this.method, this.url, this.statusCode, this.statusText, r, i) && (e = this._flags |= 64)
				}
				r ? (this.onComplete && this.onComplete(), this._state = 3) : (0 === n || (64 & e) > 0 || 0 == (1 & e) && void 0 === n && !this._needsEOF()) && (this.onComplete && this.onComplete(), this.reinitialize(this.type))
			}, e.prototype._executeHeader = function(e) {
				for (var t, r, i, n = 0, a = e.length, o = this._seenCR, s = this._buf, f = this._nhdrbytes; n < a;) {
					if (o)
						if (o = !1, 10 === e.charCodeAt(n)) {
							if (++n, r = this._processHdrLine(s), s = "", "object" == typeof r) return this._err = r, this.execute(this._err), r;
							if (void 0 === r && 2 !== (d = this._state)) return d < 3 && n < a ? (r = this.execute(e.slice(n)), "number" != typeof r ? (this._err = r, this.execute(this._err), r) : n + r) : (3 === d && this.reinitialize(this.type), n)
						} else if (s += "\r", ++f > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
					if (!((t = e.indexOf("\r\n", n)) > -1)) {
						var u;
						if (13 === e.charCodeAt(a - 1) ? (o = !0, u = a - 1) : u = a, (f += u - n) > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
						s += e.substring(n, u);
						break
					}
					if ((i = t - n) > 0) {
						if ((f += i) > 81920) return this.execute = this._executeError, this._err = new Error("Header size limit exceeded (81920)"), this.execute(this._err), this._err;
						s += e.substring(n, t)
					}
					if (n = t + 2, r = this._processHdrLine(s), s = "", "object" == typeof r) return this._err = r, this.execute(this._err), r;
					if (void 0 === r) {
						var d = this._state;
						if (2 !== d) return d < 3 && n < a ? (r = this.execute(e.slice(n)), "number" != typeof r ? (this._err = r, this.execute(this._err), r) : n + r) : (3 === d && this.reinitialize(this.type), n)
					}
				}
				return this._buf = s, this._seenCR = o, this._nhdrbytes = f, a
			}, e.prototype._executeError = function(e) {
				return BK.Script.log(1, 0, "_executeError!err = " + e.message), this._err
			}, e.prototype.execute = e.prototype._executeHeader, e.prototype._needsEOF = function() {
				if (this.type === e.REQUEST) return !1;
				var t = this.statusCode,
					r = this._flags;
				return !(void 0 !== t && (204 === t || 304 === t || 1 === parseInt(t / 100, 1)) || 64 & r) && !((1 & r) > 0 || void 0 != this._contentLen)
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

				function r(e, t) {
					var r = e.charAt(0),
						i = t.split(r);
					return r === e ? i : (e = parseInt(e.substring(1), 10), i[e < 0 ? i.length + e : e - 1])
				}

				function i(e, r) {
					for (var i = e.charAt(0), n = r.split("&"), a = [], o = {}, s = [], f = e.substring(1), u = 0, d = n.length; u < d; u++)
						if ((a = n[u].match(/(.*?)=(.*)/)) || (a = [n[u], n[u], ""]), "" !== a[1].replace(/\s/g, "")) {
							if (a[2] = t(a[2] || ""), f === a[1]) return a[2];
							(s = a[1].match(/(.*)\[([0-9]+)\]/)) ? (o[s[1]] = o[s[1]] || [], o[s[1]][s[2]] = a[2]) : o[a[1]] = a[2]
						}
					return i === e ? o : o[f]
				}
				return function(t, n) {
					var a, o = {};
					if ("tld?" === t) return e();
					if (n = n || window.location.toString(), !t) return n;
					if (t = t.toString(), a = n.match(/^mailto:([^\/].+)/)) o.protocol = "mailto", o.email = a[1];
					else {
						if ((a = n.match(/(.*?)\/#\!(.*)/)) && (n = a[1] + a[2]), (a = n.match(/(.*?)#(.*)/)) && (o.hash = a[2], n = a[1]), o.hash && t.match(/^#/)) return i(t, o.hash);
						if ((a = n.match(/(.*?)\?(.*)/)) && (o.query = a[2], n = a[1]), o.query && t.match(/^\?/)) return i(t, o.query);
						if ((a = n.match(/(.*?)\:?\/\/(.*)/)) && (o.protocol = a[1].toLowerCase(), n = a[2]), (a = n.match(/(.*?)(\/.*)/)) && (o.path = a[2], n = a[1]), o.path = (o.path || "").replace(/^([^\/])/, "/$1"), t.match(/^[\-0-9]+$/) && (t = t.replace(/^([^\/])/, "/$1")), t.match(/^\//)) return r(t, o.path.substring(1));
						if ((a = r("/-1", o.path.substring(1))) && (a = a.match(/(.*?)\.(.*)/)) && (o.file = a[0], o.filename = a[1], o.fileext = a[2]), (a = n.match(/(.*)\:([0-9]+)$/)) && (o.port = a[2], n = a[1]), (a = n.match(/(.*?)@(.*)/)) && (o.auth = a[1], n = a[2]), o.auth && (a = o.auth.match(/(.*)\:(.*)/), o.user = a ? a[1] : o.auth, o.pass = a ? a[2] : void 0), o.hostname = n.toLowerCase(), "." === t.charAt(0)) return r(t, o.hostname);
						e() && (a = o.hostname.match(e())) && (o.tld = a[3], o.domain = a[2] ? a[2] + "." + a[3] : void 0, o.sub = a[1] || void 0), o.port || ("http" === o.protocol || "ws" === o.protocol ? o.port = "80" : "https" !== o.protocol && "wss" !== o.protocol || (o.port = "443"))
					}
					return t in o ? o[t] : "{}" === t ? o : void 0
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
			for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
		};
		return function(t, r) {
			function i() {
				this.constructor = t
			}
			e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
		}
	}();
	! function(e, t) {
		"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.WebSocket = t())
	}(BK, function() {
		var e = function() {
			function e() {
				this._wsArray = [], BK.Director.ticker.add(function(t, r) {
					e.Instance.dispatchEvent()
				})
			}
			return e.prototype.add = function(e) {
				this._wsArray.push(e), BK.Script.log(1, 0, "SocketEventMgr.add!so = " + e)
			}, e.prototype.del = function(e) {
				var t = this._wsArray.indexOf(e, 0);
				t >= 0 && (this._wsArray.splice(t, 1), BK.Script.log(1, 0, "SocketEventMgr.del!so = " + e))
			}, e.prototype.dispatchEvent = function() {
				this._wsArray.forEach(function(e, t, r) {
					e && e.update()
				})
			}, e
		}();
		e.Instance = new e;
		var t = function() {
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
									r = BK.Time.clock;
									return 1e3 * (i = BK.Time.diffTime(this.prevConnTs, r)) >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
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
									var r = BK.Time.clock,
										i = BK.Time.diffTime(this.prevConnTs, r);
									return 1e3 * i >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
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
									var r = BK.Time.clock;
									return 1e3 * BK.Time.diffTime(this.prevConnTs, r) >= this.curConnTimeout && (this.curConnRetrys = this.curConnRetrys + 1, this.curConnRetrys < this.options.ConnectRetryCount ? (this.close(), this.connect(), this.curConnTimeout = 2 * this.curConnTimeout) : (this.onTimeoutEvent(this), this.close())), e
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
					var r = this.__internalSend(e);
					return r < 0 && (this.onErrorEvent(this), t.prototype.close.call(this)), r
				}, t.prototype.recv = function(e) {
					return this.__internalRecv(e)
				}, t.prototype.canRecvLength = function() {
					return this.__internalCanReadLength()
				}, t.prototype.update = function() {
					return this.isEnableSSL() ? this.__internalUpdateSSL() : this.__internalUpdateNoSSL()
				}, t.prototype.connect = function() {
					var t = this.curNetState();
					if (0 == t || 3 == t) {
						var r = this.__internalConnect();
						return r || e.Instance.add(this), r
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
			r = function() {
				function e(e, t) {
					this.data = e, this.isBinary = t
				}
				return e
			}(),
			i = function(e) {
				function t(t, r, i, n, a) {
					var o = e.call(this, t, r) || this;
					return o.path = n || "/", o.host = i, o.query = a, o.httpVer = 1.1, o.httpParser = new HTTPParser(HTTPParser.RESPONSE), o.version = 13, o.protocols = new Array, o.extensions = new Array, o.delegate = {
						onOpen: null,
						onClose: null,
						onError: null,
						onMessage: null,
						onSendComplete: null
					}, o.options || (o.options = {}), o.options.DrainSegmentCount = 8, o.options.DefaultSegmentSize = 4096, o.options.PingPongInterval = 0, o.options.HandleShakeRequestTimeout = 1e4, o.options.HandleShakeResponseTimeout = 1e4, o.options.CloseAckTimeout = 2e3, o.options.PingPongTimeout = 3e3, o.clear(), o
				}
				return __extends(t, e), t.prototype.clear = function() {
					this.mask4 = new BK.Buffer(4, !1), this.txbuf = new BK.Buffer(128, !0), this.rxbuf = new BK.Buffer(128, !0), this.txbufQue = new Array, this.rxbufQue = new Array, this.udataQue = new Array, this.peerClosed = !1, this.txSegCount = 0, this.rxSegCount = 0, this.rxFrameType = -1, this.isFinalSeg = !1, this.inTxSegFrame = !1, this.inRxSegFrame = !1, this.inPartialTxbuf = !1, this.inPingFrame = !1, this.inPongFrame = !1, this.errcode = 65535, this.state = 0, this.parseState = 0, this.phaseTimeout = 0, this.pingpongTimer = 0, this.prevPhaseTickCount = 0, this.prevPingPongTickCount = 0
				}, t.prototype.getReadyState = function() {
					return this.state
				}, t.prototype.getErrorCode = function() {
					return this.errcode
				}, t.prototype.getErrorString = function() {
					return this.message
				}, t.prototype.randomN = function(e) {
					for (var t = new BK.Buffer(e, !1), r = 0; r < e; r++) {
						var i = Math.round(65535 * Math.random());
						t.writeUint8Buffer(i)
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
						var r = e.readUint8Buffer();
						t = t.concat("x" + this.toHex((240 & r) >> 4) + this.toHex(15 & r) + " ")
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
					t = t.concat("GET " + this.path + " HTTP/" + this.httpVer + "\r\n"), t = (t = (t = 80 == this.port || 443 == this.port ? t.concat("Host:" + this.host + "\r\n") : t.concat("Host:" + this.host + ":" + this.port + "\r\n")).concat("Upgrade:websocket\r\n")).concat("Connection:Upgrade\r\n").concat("Origin: http://easyswoole.com\r\n").concat("Referer: https://servicewechat.com/wxa6f2d43929fc4d00/devtools/page-frame.html\r\n").concat("Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits\r\n").concat("Accept-Encoding: gzip, deflate, br\r\n").concat("Accept-Language: zh-CN,zh;q=0.8\r\n").concat("User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 wechatdevtools/1.02.1803020 MicroMessenger/6.5.7 Language/zh_CN webview/20000 gameservice port/60818\r\n");
					var r = this.randomN(16),
						i = BK.Misc.encodeBase64FromBuffer(r);
					if (t = t.concat("Sec-WebSocket-Key:" + i + "\r\n"), t = t.concat("Sec-WebSocket-Version:" + this.version + "\r\n"), this.query)
						for (var n = this.query.split("&"), a = 0; a < n.length; a++) {
							var o = n[a].split("=");
							o.length > 0 && (t = t.concat(o[0] + ":" + o[1] + "\r\n"))
						}
					t = t.concat("\r\n");
					BK.Script.log(0,0,"Request "+JSON.stringify(t))
					var s = BK.Misc.sha1(i.concat("258EAFA5-E914-47DA-95CA-C5AB0DC85B11"));
					this.handshakeSig = BK.Misc.encodeBase64FromBuffer(s);
					var f = new BK.Buffer(t.length, !1);
					f.writeAsString(t, !1), 0 < e.prototype.send.call(this, f) && (this.state = 2, this.startPhaseTimeout(1))
				}, t.prototype.doSvrHandshakePhase1 = function(t) {
					var r = this;
					t && (this.httpParser.onComplete || (this.httpParser.onComplete = function() {
						for (var t in r.httpParser.headers);
						r.doSvrHandshakePhase2() ? (r.restartPingPongTimer(), r.startPhaseTimeout(6), r.delegate.onOpen && r.delegate.onOpen(r)) : (r.errcode = 4098, r.message = "handshake parse error", r.startPhaseTimeout(6), e.prototype.close.call(r), r.delegate.onError && r.delegate.onError(r))
					}), this.httpParser.execute(t), 2 == this.state && (this.state = 3, this.startPhaseTimeout(2)))
				}, t.prototype.doSvrHandshakePhase2 = function() {
					switch (this.httpParser.statusCode) {
						case 101:
							return void 0 == this.httpParser.headers.upgrade ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'upgrade' header"), !1) : void 0 == this.httpParser.headers.connection ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'connection' header"), !1) : "upgrade" != this.httpParser.headers.connection.toLowerCase() ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!error 'connection' header"), !1) : void 0 == this.httpParser.headers["sec-websocket-accept"] ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!missing 'sec-websocket-accept' header"), !1) : this.handshakeSig != this.httpParser.headers["sec-websocket-accept"] ? (this.state = -1, BK.Script.log(1, 0, "BK.WebSocket.doSvrHandshakePhase2!error 'sec-websocket-accept' header"), !1) : (this.state = 4, !0)
					}
					return !1
				}, t.prototype.doFrameDataPhase = function(e, r, i) {
					void 0 === i && (i = !1);
					var n = 6,
						a = e.length;
					this.extensions.length, n += a;
					var o = new BK.Buffer(n, !1),
						s = 0,
						f = !1;
					switch (this.version) {
						case 13:
							f = !0, s = 128
					}
					var u = !0;
					switch (r) {
						case 1:
						case 2:
							i ? this.inTxSegFrame ? (u = !1, r = 0) : (u = !1, this.inTxSegFrame = !0) : this.inTxSegFrame && (r = 0)
					}
					if (u ? o.writeUint8Buffer(128 | 15 & r) : o.writeUint8Buffer(15 & r), a < 126 ? o.writeUint8Buffer(s | 127 & e.length) : a < 65536 ? (o.writeUint8Buffer(126 | s), t.isLittleEndian ? (o.writeUint8Buffer((65280 & a) >> 8), o.writeUint8Buffer(255 & a)) : (o.writeUint8Buffer(255 & a), o.writeUint8Buffer((65280 & a) >> 8))) : BK.Script.log(1, 0, "BK.WebSocket.doFrameDataPhase!js don't support 64bit data type"), f) {
						var d = this.randomN(4);
						BK.Misc.encodeBufferXorMask4(e, d), o.writeBuffer(d)
					}
					return o.writeBuffer(e), o
				}, t.prototype.doSvrFrameDataPhase = function(e) {
					if (!e) return !0;
					for (; !e.eof;) {
						switch (this.parseState) {
							case 0:
								this.mask4.rewind(), this.rxbuf = new BK.Buffer(this.options.DefaultSegmentSize, !0), this.maskBit = 0, this.rxbuflen = 0, this.isFinalSeg = !1, this.parseState = 1;
							case 1:
								var r = e.readUint8Buffer();
								switch (this.isFinalSeg = !!(128 & r), this.opcode = 15 & r, this.version) {
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
								var i = e.readUint8Buffer();
								switch (this.maskBit = (128 & i) >> 7, 127 & i) {
									case 126:
										if (this.parseState = 3, e.eof) return !0;
										break;
									case 127:
										if (this.parseState = 5, e.eof) return !0;
										break;
									default:
										if (this.rxbuflen = 127 & i, 1 == this.maskBit ? this.parseState = 13 : this.parseState = 17, this.rxbuflen > 0 && e.eof) return !0
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
							var a = e.length - e.pointer;
							if (a <= this.rxbuflen - this.rxbuf.length ? this.rxbuf.writeBuffer(e.readBuffer(a)) : this.rxbuf.writeBuffer(e.readBuffer(this.rxbuflen - this.rxbuf.length)), this.rxbuf.length == this.rxbuflen)
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
								var r = this.udataQue.shift();
								this.delegate.onMessage(this, r)
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
					if (4 == this.state) {
						if (this.inPartialTxbuf) {
							if (!((u = e.prototype.send.call(this, this.txbuf)) > 0)) return BK.Script.log(1, u, "BK.WebSocket.sendFrameFromTxQ!partial send failed, data type = " + t), !1;
							if (this.restartPingPongTimer(), u < this.txbuf.length) {
								var r = this.txbuf.length - u,
									i = new BK.Buffer(r, !1);
								return this.txbuf.rewind(), this.txbuf.jumpBytes(u), i.writeBuffer(this.txbuf.readBuffer(r)), this.txbuf = i, !1
							}
							this.inPartialTxbuf = !1
						}
						for (var n = !0, a = Math.min(this.options.DrainSegmentCount, this.txbufQue.length); a > 0; a--) {
							var o = this.txbufQue.shift(),
								s = this.txbufQue.length > 0,
								f = this.doFrameDataPhase(o, t, s),
								u = e.prototype.send.call(this, f);
							if (!(u > 0)) {
								n = !1, BK.Script.log(1, u, "BK.WebSocket.sendFrameFromTxQ!send failed, data type = " + t);
								break
							}
							if (this.restartPingPongTimer(), u < f.length) {
								f.rewind(), f.jumpBytes(u), this.txbuf.rewind(), this.txbuf.writeBuffer(f.readBuffer(f.length - u)), this.inPartialTxbuf = !0, n = !1, BK.Script.log(1, 0, "BK.WebSocket.sendFrameFromTxQ!partial send, total size = " + f.length + ", tx size = " + u);
								break
							}
						}
						return n && !this.txbufQue.length && this.inTxSegFrame && (this.inTxSegFrame = !1), n
					}
				}, t.prototype.recvFrameFromRxQ = function(e) {
					for (var t = 2 == e, i = new BK.Buffer(128, !0); this.rxbufQue.length > 0;) {
						var n = this.rxbufQue.shift();
						i.writeBuffer(n)
					}
					0 == t && i.writeUint8Buffer(0), i.rewind(), this.udataQue.push(new r(i, t))
				}, t.prototype.__sendBinaryFrame = function(e, t) {
					var r = e.length,
						i = this.options.DefaultSegmentSize,
						n = 0;
					for (e.rewind(); r > i;) {
						a = new BK.Buffer(i, !1);
						e.rewind(), e.jumpBytes(n), a.writeBuffer(e.readBuffer(i)), a.rewind(), this.txbufQue.push(a), n += i, r -= i
					}
					if (r > 0) {
						var a = new BK.Buffer(r, !1);
						e.rewind(), e.jumpBytes(n), a.writeBuffer(e.readBuffer(r)), a.rewind(), this.txbufQue.push(a)
					}
					return this.txFrameType = t, this.sendFrameFromTxQ(t)
				}, t.prototype.sendTextFrame = function(e) {
					if (4 != this.state) return !1;
					var t = new BK.Buffer(128, !0);
					return t.writeAsString(e, !1), t.rewind(), this.__sendBinaryFrame(t, 1)
				}, t.prototype.sendBinaryFrame = function(e) {
					if (4 == this.state) return this.__sendBinaryFrame(e, 2)
				}, t.prototype.sendCloseFrame = function(r, i) {
					if (!this.isSendClose) {
						this.isSendClose = !0;
						var n = new BK.Buffer(i.length + 1, !1),
							a = new BK.Buffer(3 + i.length, !1);
						t.isLittleEndian ? (a.writeUint8Buffer((65280 & r) >> 8), a.writeUint8Buffer(255 & r)) : (a.writeUint8Buffer(255 & r), a.writeUint8Buffer((65280 & r) >> 8)), n.writeAsString(i, !0), a.writeBuffer(n);
						var o = this.doFrameDataPhase(a, 8);
						0 < e.prototype.send.call(this, o) && (this.state = 1, this.startPhaseTimeout(3), BK.Script.log(1, 0, "BK.WebSocket.sendCloseFrame!code = " + r + ", reason = " + i))
					}
				}, t.prototype.sendPingFrame = function(t) {
					if (!this.inPingFrame) {
						BK.Script.log(0, 0, "BK.WebSocket.sendPingFrame!ping data = " + this.bufferToHexString(t));
						var r = this.doFrameDataPhase(t, 9);
						0 < e.prototype.send.call(this, r) && (this.inPingFrame = !0, this.startPhaseTimeout(4))
					}
				}, t.prototype.sendPongFrame = function(t) {
					if (!this.inPongFrame) {
						var r = this.doFrameDataPhase(t, 10);
						0 < e.prototype.send.call(this, r) && (this.inPongFrame = !0)
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
				}, t.prototype.onUpdateEvent = function(t) {
					switch (e.prototype.onUpdateEvent.call(this, t), this.state) {
						case 2:
						case 3:
							if ((n = t.canRecvLength()) > 0) {
								var r = this.recv(n);
								void 0 != r && this.doSvrHandshakePhase1(r.readAsString(!0))
							}
							this.handlePhaseTimeout();
							break;
						case 4:
							if ((n = t.canRecvLength()) > 0) {
								var i = this.recv(n);
								if (void 0 != i)
									for (; !i.eof;)
										if (!this.doSvrFrameDataPhase(i)) {
											this.sendCloseFrame(this.errcode, this.message ? this.message : ""), this.delegate.onError && this.delegate.onError(this);
											break
										}
							}
							if (this.delegate.onMessage)
								for (; this.udataQue.length > 0;) {
									a = this.udataQue.shift();
									this.delegate.onMessage(this, a)
								}
							this.txbufQue.length > 0 ? this.sendFrameFromTxQ(this.txFrameType) : this.delegate.onSendComplete && this.delegate.onSendComplete(this), this.inPongFrame = !1, this.handlePhaseTimeout(), this.handlePingPongTimer();
							break;
						case 1:
							var n = t.canRecvLength();
							if (n > 0 && this.doSvrFrameDataPhase(this.recv(n)) && this.delegate.onMessage)
								for (; this.udataQue.length > 0;) {
									var a = this.udataQue.shift();
									this.delegate.onMessage(this, a)
								}
							this.handlePhaseTimeout()
					}
					return 0
				}, t
			}(t);
		i.isLittleEndian = BK.Misc.isLittleEndian();
		var n = function() {
			function e(e, t) {
				this.data = e, this.isBinary = t
			}
			return e
		}();
		return function() {
			function e(e) {
				var t = this;
				this.__url = e, this.options = null, this.inTrans = !1, this.isPendingConn = !0, this.txdataQ = new Array;
				var r = BK.URL("{}", e);
				this.scheme = r.protocol, this.port = r.port, this.path = r.path, this.query = r.query, this.host = r.hostname, BK.DNS.queryIPAddress(r.hostname, function(e, r, n) {
					switch (e) {
						case 0:
							BK.Script.log(1, 0, "BK.WebSocket.queryIPAddress!iplist = " + JSON.stringify(n)), t.iplist = n, t.__nativeObj = new i(n[0], t.port, t.host, t.path, t.query), "wss" == t.scheme && t.__nativeObj.enableSSL(!0), t.options && (t.setOptions(t.options), t.options = null), t.isPendingConn && (t.connect(), t.isPendingConn = !1), t.__nativeObj.delegate.onOpen = function(e) {
								t.txdataQ.length > 0 && t.send(t.txdataQ.shift()), t.onOpen ? t.onOpen(t) : t.onopen && t.onopen.call(t)
							}, t.__nativeObj.delegate.onClose = function(e) {
								var r = {};
								r.code = t.getErrorCode(), r.reason = t.getErrorString(), t.onClose ? t.onClose(t, r) : t.onclose && t.onclose.call(t, r)
							}, t.__nativeObj.delegate.onError = function(e) {
								var r = {};
								r.code = t.getErrorCode(), r.reason = t.getErrorString(), t.onError ? t.onError(t, r) : t.onerror && t.onerror.call(t, r)
							}, t.__nativeObj.delegate.onMessage = function(e, r) {
								if (t.onMessage) t.onMessage(t, r);
								else if (t.onmessage) {
									if (1 == r.isBinary) {
										var i = r.data;
										i.rewind();
										for (var n = new ArrayBuffer(i.length), a = new DataView(n); !i.eof;) a.setUint8(i.pointer, i.readUint8Buffer());
										r.data = n
									}
									t.onmessage.call(t, r)
								}
							}, t.__nativeObj.delegate.onSendComplete = function(e) {
								if (t.txdataQ.length > 0) {
									var r = t.txdataQ.shift();
									r.isBinary ? t.__sendBinaryFrame(r.data) : t.__nativeObj.sendTextFrame(r.data), t.inTrans = !0
								} else t.inTrans = !1
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
					for (var t = new BK.Buffer(e.byteLength), r = new DataView(e.buffer), i = 0; i < e.byteLength; i++) t.writeUint8Buffer(r.getUint8(i));
					return this.__nativeObj.sendBinaryFrame(t)
				}
				if (e instanceof ArrayBuffer == 1) {
					for (var t = new BK.Buffer(e.byteLength), r = new DataView(e), i = 0; i < e.byteLength; i++) t.writeUint8Buffer(r.getUint8(i));
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
					if (!this.inTrans && 4 == t) return this.inTrans = !0, this.__nativeObj.sendTextFrame(e);
					this.txdataQ.push(new n(e, !1))
				} else if ("object" == typeof e) {
					if (!this.inTrans && 4 == t) return this.inTrans = !0, this.__sendBinaryFrame(e);
					this.txdataQ.push(new n(e, !0))
				}
				return !1
			}, e.prototype.setOptions = function(e) {
				this.__nativeObj ? (e.DrainSegmentCount && (this.__nativeObj.options.DrainSegmentCount = e.DrainSegmentCount), e.DefaultSegmentSize && (this.__nativeObj.options.DefaultSegmentSize = e.DefaultSegmentSize), e.PingPongInterval && (this.__nativeObj.options.PingPongInterval = e.PingPongInterval), e.HandleShakeRequestTimeout && (this.__nativeObj.options.HandleShakeRequestTimeout = e.HandleShakeRequestTimeout), e.HandleShakeResponseTimeout && (this.__nativeObj.options.HandleShakeResponseTimeout = e.HandleShakeResponseTimeout), e.CloseAckTimeout && (this.__nativeObj.options.CloseAckTimeout = e.CloseAckTimeout), e.PingPongTimeout && (this.__nativeObj.options.PingPongTimeout = e.PingPongTimeout)) : this.options = e
			}, e
		}()
	});
	var SheetSprite = function() {
		function e(e, t, r, i, n, a, o) {
			this.size = {
				width: 0,
				height: 0
			}, this.flipU = 0, this.flipV = 1, this.stretchX = 1, this.stretchY = 1, i && (this.flipU = i), n && (this.flipV = n), a && (this.stretchX = a), o && (this.stretchY = o), t && (this.size.width = t), r && (this.size.height = r), this.textureInfo = e, this.onInit(this.size.width, this.size.height), this.adjustWithTextureInfo(e)
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
					this.__nativeObj.localAnchor = e, this.displayFrame(this.currDisplayIdx)
				}
			})
		}, e.prototype.updateSize = function(e) {
			if (1 == e.frameInfo.trimmed) {
				var t = e.frameInfo.spriteSourceSize.x,
					r = e.frameInfo.spriteSourceSize.y,
					i = e.frameInfo.spriteSourceSize.w,
					n = e.frameInfo.spriteSourceSize.h,
					a = e.frameInfo.sourceSize,
					o = this.__nativeObj.contentSize;
				t = o.width * t / a.w, r = o.height * r / a.h, i = o.width * i / a.w, n = o.height * n / a.h, this.contentSprite.position = {
					x: t,
					y: r
				}, this.contentSprite.contentSize = {
					width: i,
					height: n
				}
			} else this.contentSprite.contentSize = this.__nativeObj.contentSize
		}, e.prototype.adjustWithTextureInfo = function(e) {
			if (e) {
				this.textureInfo = e;
				var t = e.texture,
					r = e.frameInfo;
				this.updateSize(e), this.currTexturePath = e.texturePath;
				t = new BK.Texture(this.currTexturePath);
				this.contentSprite.setTexture(t), this.contentSprite.adjustTexturePosition(r.frame.x, r.frame.y, r.frame.w, r.frame.h, r.rotated)
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
						var r = this.jsonConfigs[t],
							i = (this.sheets[t], r.frames),
							n = r.meta;
						this.fullWidth = n.size.w, this.fullHeight = n.size.h;
						for (var a = 0; a < i.length; a++) {
							var o = i[a];
							if (e == o.filename) {
								var s = {
										x: 0,
										y: 1,
										w: 0,
										h: 0
									},
									f = o.rotated,
									u = o.trimmed,
									d = o.spriteSourceSize,
									h = o.sourceSize;
								return f ? (s.x = o.frame.x, s.y = this.fullHeight - o.frame.y - o.frame.w, s.w = o.frame.w, s.h = o.frame.h) : (s.x = o.frame.x, s.y = this.fullHeight - o.frame.y - o.frame.h, s.w = o.frame.w, s.h = o.frame.h), d.y = h.h - d.y - d.h, {
									filename: e,
									frame: s,
									rotated: f,
									trimmed: u,
									spriteSourceSize: d,
									sourceSize: h
								}
							}
						}
					}
				return null
			}, e.prototype.getTexturePathByFilename = function(e) {
				for (var t in this.jsonConfigs)
					if (this.jsonConfigs.hasOwnProperty(t))
						for (var r = this.jsonConfigs[t].frames, i = 0; i < r.length; i++)
							if (r[i].filename == e) return t;
				return null
			}, e.prototype.loadSheet = function(e, t, r, i, n, a, o) {
				var s = BK.FileUtil.readFile(e).readAsString();
				if (s) {
					var f = JSON.parse(s);
					void 0 === t && (t = e.replace(/.json$/, ".png")), this.jsonConfigs[t] = f, void 0 === r && (r = 4), r = 4, void 0 === i && (i = 1), void 0 === n && (n = 1), void 0 === a && (a = 1), void 0 === o && (o = 1);
					var u = new BK.Texture(t, r, i, n, a, o);
					this.sheets[t] = u
				} else BK.Script.log(0, 0, "loadSheet Failed.Please check path")
			}, e.prototype.removeSheet = function(e, t) {
				if (this.jsonConfigs[t])
					for (var r in this.jsonConfigs)
						if (this.jsonConfigs.hasOwnProperty(r)) {
							i = this.jsonConfigs[r];
							r == t && (delete this.jsonConfigs[t], BK.Script.log(0, 0, "Delete jsonConfigs key:" + r + " val:" + i))
						}
				if (this.sheets[t])
					for (var r in this.sheets)
						if (this.sheets.hasOwnProperty(r)) {
							var i = this.sheets[r];
							r == t && (delete this.sheets[t], BK.Script.log(0, 0, "Delete sheets key:" + r + " val:" + i))
						}
			}, e.prototype.getTextureByFilename = function(e) {
				var t = this.getFrameInfoByFilename(e),
					r = this.getTexturePathByFilename(e);
				return t && r ? new BK.Texture(r) : (BK.Script.log(0, 0, "getTexture Failed.Please check path"), null)
			}, e.prototype.getSprite = function(e, t, r) {
				var i = this.getTextureFrameInfoByFileName(e);
				if (i) {
					var n = i.frameInfo,
						a = i.texturePath,
						o = new BK.Texture(a);
					if (t || (t = n.frame.w), r || (r = n.frame.h), BK.Script.log(0, 0, "getSprite  texture:" + o + " width:" + t + " height:" + r), n.trimmed) return s = new BK.SheetSprite(i, t, r);
					var s = new BK.Sprite(t, r, o, 0, 1, 1, 1);
					return s.adjustTexturePosition(n.frame.x, n.frame.y, n.frame.w, n.frame.h, n.rotated), s
				}
				return null
			}, e.prototype.createSheetSprite = function(e, t, r) {
				var i = this.getTextureFrameInfoByFileName(e);
				if (i) {
					var n = i.frameInfo,
						a = i.texturePath,
						o = new BK.Texture(a);
					return t || (t = n.frame.w), r || (r = n.frame.h), BK.Script.log(0, 0, "SheetSprite  texture:" + o + " width:" + t + " height:" + r), new BK.SheetSprite(i, t, r)
				}
				return null
			}, e.prototype.getTextureFrameInfoByFileName = function(e) {
				var t = this.getFrameInfoByFilename(e),
					r = this.getTexturePathByFilename(e);
				return t && r ? {
					frameInfo: t,
					texturePath: r
				} : null
			}, e
		}(),
		Sprite9 = function() {
			function e(e, t, r, i, n, a) {
				void 0 === n && (n = {
					x: 0,
					y: 0
				}), this._size = {
					width: 0,
					height: 0
				}, this.__nativeObj = new BK.Node, this.onInit(), this._grid = i, this._size = {
					width: t,
					height: t
				}, this._leftTop = new BK.Sprite(i.left, i.top, r, 0, 1, 1, 1), this._leftTop.position = {
					x: 0,
					y: t - i.top
				}, this._leftTop.zOrder = 99999, this._leftTop.name = "_leftTop", this.__nativeObj.addChild(this._leftTop), this._centerTop = new BK.Sprite(e - i.left - i.right, i.top, r, 0, 1, 1, 1), this._centerTop.position = {
					x: i.left,
					y: t - i.top
				}, this._centerTop.zOrder = 99999, this._centerTop.name = "_centerTop", this.__nativeObj.addChild(this._centerTop), this._rightTop = new BK.Sprite(i.right, i.top, r, 0, 1, 1, 1), this._rightTop.position = {
					x: e - i.right,
					y: t - i.top
				}, this._rightTop.zOrder = 99999, this._rightTop.name = "_rightTop", this.__nativeObj.addChild(this._rightTop), this._leftCenter = new BK.Sprite(i.left, t - i.top - i.bottom, r, 0, 1, 1, 1), this._leftCenter.position = {
					x: 0,
					y: i.bottom
				}, this._leftCenter.name = "_leftCenter", this.__nativeObj.addChild(this._leftCenter), this._centerCenter = new BK.Sprite(e - i.left - i.right, t - i.top - i.bottom, r, 0, 1, 1, 1), this._centerCenter.position = {
					x: i.left,
					y: i.bottom
				}, this._centerCenter.name = "_centerCenter", this.__nativeObj.addChild(this._centerCenter), this._rightCenter = new BK.Sprite(i.right, t - i.bottom - i.top, r, 0, 1, 1, 1), this._rightCenter.position = {
					x: e - i.right,
					y: i.bottom
				}, this._rightCenter.name = "_rightCenter", this.__nativeObj.addChild(this._rightCenter), this._leftBottom = new BK.Sprite(i.left, i.bottom, r, 0, 1, 1, 1), this._leftBottom.position = {
					x: 0,
					y: 0
				}, this._leftBottom.name = "_leftBottom", this.__nativeObj.addChild(this._leftBottom), this._centerBottom = new BK.Sprite(e - i.left - i.right, i.bottom, r, 0, 1, 1, 1), this._centerBottom.position = {
					x: i.left,
					y: 0
				}, this._centerBottom.name = "_centerBottom", this.__nativeObj.addChild(this._centerBottom), this._rightBottom = new BK.Sprite(i.right, i.bottom, r, 0, 1, 1, 1), this._rightBottom.position = {
					x: e - i.right,
					y: 0
				}, this._rightBottom.name = "_rightBottom", this.__nativeObj.addChild(this._rightBottom), 1 == a ? (this._leftTop.adjustTexturePosition(n.x + (t - i.top), n.y + (e - i.left), i.left, i.top, a), this._centerTop.adjustTexturePosition(n.x + (t - i.top), n.y + i.right, e - i.left - i.right, i.top, a), this._rightTop.adjustTexturePosition(n.x + (t - i.top), n.y, i.right, i.top, a), this._leftCenter.adjustTexturePosition(n.x + i.bottom, n.y + (e - i.left), i.left, t - i.top - i.bottom, a), this._centerCenter.adjustTexturePosition(n.x + i.bottom, n.y + i.right, e - i.left - i.right, t - i.top - i.bottom, a), this._rightCenter.adjustTexturePosition(n.x + i.bottom, n.y, i.right, t - i.bottom - i.top, a), this._leftBottom.adjustTexturePosition(n.x, n.y + (e - i.left), i.left, i.bottom, a), this._centerBottom.adjustTexturePosition(n.x, n.y + i.right, e - i.left - i.right, i.bottom, a), this._rightBottom.adjustTexturePosition(n.x, n.y, i.right, i.bottom, a)) : (this._leftTop.adjustTexturePosition(0 + n.x, t - i.top + n.y, i.left, i.top), this._centerTop.adjustTexturePosition(i.left + n.x, t - i.top + n.y, e - i.left - i.right, i.top), this._rightTop.adjustTexturePosition(e - i.right + n.x, t - i.top + n.y, i.right, i.top), this._leftCenter.adjustTexturePosition(0 + n.x, i.bottom + n.y, i.left, t - i.top - i.bottom), this._centerCenter.adjustTexturePosition(i.left + n.x, i.bottom + n.y, e - i.left - i.right, t - i.top - i.bottom), this._rightCenter.adjustTexturePosition(e - i.right + n.x, i.bottom + n.y, i.right, t - i.bottom - i.top), this._leftBottom.adjustTexturePosition(0 + n.x, 0 + n.y, i.left, i.bottom), this._centerBottom.adjustTexturePosition(i.left + n.x, 0 + n.y, e - i.left - i.right, i.bottom), this._rightBottom.adjustTexturePosition(e - i.right + n.x, 0 + n.y, i.right, i.bottom))
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
						r = e.height - this._grid.top - this._grid.bottom;
					this._leftTop.position = {
						x: 0,
						y: e.height - this._grid.top
					}, this._leftCenter.size = {
						width: this._grid.left,
						height: r
					}, this._leftCenter.position = {
						x: 0,
						y: this._grid.bottom
					}, this._rightCenter.size = {
						width: this._grid.right,
						height: r
					}, this._rightCenter.position = {
						x: e.width - this._grid.right,
						y: this._grid.bottom
					}, this._centerCenter.size = {
						width: t,
						height: r
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
						height: r
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
					}, this.readyTextureInfo(e), this.onInit(this.size.width, this.size.height), this.displayFrame(0), this.paused = !0, BK.Director.ticker.add(function(e, t, r) {
						r.update(e, t)
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
							var r = t.texture,
								i = t.frameInfo;
							if (1 == t.frameInfo.trimmed) {
								var n = t.frameInfo.spriteSourceSize.x,
									a = t.frameInfo.spriteSourceSize.y,
									o = t.frameInfo.spriteSourceSize.w,
									s = t.frameInfo.spriteSourceSize.h,
									f = t.frameInfo.sourceSize,
									u = this.__nativeObj.contentSize;
								n = u.width * n / f.w, a = u.height * a / f.h, o = u.width * o / f.w, s = u.height * s / f.h, this.contentSprite.position = {
									x: n,
									y: a
								}, this.contentSprite.contentSize = {
									width: o,
									height: s
								}
							} else this.contentSprite.contentSize = this.__nativeObj.contentSize;
							this.currTexturePath && this.currTexturePath == t.texturePath || (BK.Script.log(1, -1, "this.currTexture != tex"), this.currTexturePath = t.texturePath, this.contentSprite.setTexture(r)), this.contentSprite.adjustTexturePosition(i.frame.x, i.frame.y, i.frame.w, i.frame.h, i.rotated)
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
		}, Canvas.prototype.adjustTexturePosition = function(e, t, r, i, n) {
			this.__nativeObj.adjustTexturePosition(e, t, r, i, n)
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
				var r = BK.CanvasSheetCache.getTexturePathByFilename(t),
					i = new BK.Texture(r);
				this.__nativeObj.setTexture(i);
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
					r = arguments[2],
					i = 1 == this._useH5Mode ? 2 - this._textBaseLine : this._textBaseLine;
				switch (i) {
					case 1:
						r -= .5 * e.height;
						break;
					case 2:
						r -= 1 * e.height
				}
				switch (BK.Script.log(0, 0, "filltext baseLineType " + i), this._textAlign) {
					case 1:
						t -= .5 * e.width;
						break;
					case 2:
						t -= 1 * e.width
				}
				return this.__nativeObj.fillText(arguments[0], t, r, Math.min(2048, e.width), Math.min(1024, e.height))
			}
			return 0
		}, Canvas.prototype.clip = function() {
			return this.__nativeObj ? this.__nativeObj.clip() : 0
		}, Canvas.prototype.isPointInPath = function() {
			if (this.__nativeObj) return this.__nativeObj.isPointInPath(arguments[0], arguments[1])
		}, Canvas.prototype.scale = function() {
			if (this.__nativeObj) return this.__nativeObj.scales(arguments[0], arguments[1])
		}, Canvas.prototype.rotate = function() {
			if (this.__nativeObj) return this.__nativeObj.rotate(arguments[0])
		}, Canvas.prototype.translate = function() {
			if (this.__nativeObj) return this.__nativeObj.translate(arguments[0], arguments[1])
		}, Canvas.prototype.transforms = function() {
			if (this.__nativeObj) return this.__nativeObj.transforms(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
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
			return this.__nativeObj ? this.__nativeObj.drawText(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]) : null
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
			var r = BK.SpriteSheetCache.getTexturePathByFilename(t),
				i = new BK.Texture(r);
			this.setTexture(i);
			var n = BK.SpriteSheetCache.getFrameInfoByFilename(t);
			return this.adjustTexturePosition(n.frame.x, n.frame.y, n.frame.w, n.frame.h, n.rotated), 0
		}, BK.Script.log(0, 0, "Load Sprite.js succeed."), BK.ScreenShot = function() {
			function e() {
				var e = gl.createShader(gl.VERTEX_SHADER);
				0 != e && (gl.shaderSource(e, "attribute vec2 pos; attribute vec2 inUVs; varying lowp vec2 outUVs; void main() { gl_Position = vec4(pos, 0, 1); outUVs = inUVs; }"), gl.compileShader(e), gl.getShaderInfoLog(e));
				var t = gl.createShader(gl.FRAGMENT_SHADER);
				0 != t && (gl.shaderSource(t, "varying lowp vec2 outUVs; uniform sampler2D uSampler; void main() { gl_FragColor = texture2D(uSampler, outUVs); }"), gl.compileShader(t), gl.getShaderInfoLog(e));
				var r = gl.createProgram();
				return gl.attachShader(r, e), gl.attachShader(r, t), gl.linkProgram(r), gl.deleteShader(e), gl.deleteShader(t), gl.getProgramInfoLog(r), r
			}

			function t(e, t) {
				var r = gl.createTexture();
				gl.activeTexture(gl.TEXTURE1), gl.bindTexture(gl.TEXTURE_2D, r), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, e, t, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
				var i = gl.createFramebuffer();
				return gl.bindFramebuffer(gl.FRAMEBUFFER, i), gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, r, 0), {
					tex: r,
					fbo: i
				}
			}

			function r(r) {
				var i = e();
				gl.useProgram(i);
				var n = gl.getAttribLocation(i, "pos"),
					a = gl.getAttribLocation(i, "inUVs"),
					o = gl.getUniformLocation(i, "uSampler"),
					s = gl.createTexture(),
					f = gl.glGetParameterInt(gl.TEXTURE_BINDING_2D, 1);
				gl.activeTexture(gl.TEXTURE0), gl.bindTexture(gl.TEXTURE_2D, s), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE), gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE), gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, r), gl.uniform1i(o, 0);
				var u = new Float32Array([-1, -1, 0, 1, 1, -1, 1, 1, 1, 1, 1, 0, -1, 1, 0, 0]),
					d = gl.createBuffer();
				gl.bindBuffer(gl.ARRAY_BUFFER, d), gl.enableVertexAttribArray(n), gl.vertexAttribPointer(n, 2, gl.FLOAT, !1, 16, 0), gl.vertexAttribPointer(a, 2, gl.FLOAT, !1, 16, 8), gl.bufferData(gl.ARRAY_BUFFER, u, gl.STATIC_DRAW);
				var h = new Uint16Array([0, 1, 2, 0, 2, 3]),
					c = gl.createBuffer();
				gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, c), gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, h, gl.STATIC_DRAW);
				var _ = new BK.Buffer(r.width * r.height * 4),
					l = gl.glGetParameterInt(gl.FRAMEBUFFER_BINDING, 1),
					g = t(r.width, r.height);
				return gl.bindFramebuffer(gl.FRAMEBUFFER, g.fbo), gl.clearColor(1, 1, 1, 1), gl.clear(gl.COLOR_BUFFER_BIT), gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0), gl.readPixels(0, 0, r.width, r.height, gl.RGBA, gl.UNSIGNED_BYTE, _), gl.bindFramebuffer(gl.FRAMEBUFFER, l), gl.bindTexture(gl.TEXTURE_2D, f), gl.deleteProgram(i), gl.deleteTexture(s), gl.deleteTexture(g.tex), gl.deleteFramebuffer(g.fbo), _
			}
			this.origin = {
				x: 0,
				y: 0
			}, this.size = {
				width: 0,
				height: 0
			}, GameStatusInfo && GameStatusInfo.version <= "7.5.8" && (this.doImage_rotate180 = r), this.isInScreen = function() {
				(void 0 == this.origin.x || this.origin.x < 0 || this.origin.x > BK.Director.screenPixelSize.width) && (this.origin.x = 0), (void 0 == this.origin.y || this.origin.y < 0 || this.origin.y > BK.Director.screenPixelSize.height) && (this.origin.y = 0), (void 0 == this.size.width || this.size.width <= 0 || this.size.width > BK.Director.screenPixelSize.width - this.origin.x) && (this.origin.x = 0, this.size.width = BK.Director.screenPixelSize.width), (void 0 == this.size.height || this.size.height <= 0 || this.size.height > BK.Director.screenPixelSize.height - this.origin.y) && (this.origin.y = 0, this.size.height = BK.Director.screenPixelSize.height)
			}, this.isInNode = function(e) {
				(void 0 == this.origin.x || this.origin.x < 0 || this.origin.x > e.contentSize.width) && (this.origin.x = 0), (void 0 == this.origin.y || this.origin.y < 0 || this.origin.y > e.contentSize.height) && (this.origin.y = 0), (void 0 == this.size.width || this.size.width <= 0) && (this.size.width = e.contentSize.width), (void 0 == this.size.height || this.size.height <= 0) && (this.size.height = e.contentSize.height)
			}, this.shotToFile = function(e, t) {
				this.isInScreen();
				var r = "GameSandBox://" + e + "." + t,
					i = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				return BK.Render.renderToTexture(BK.Director.root, i), i.writeToDiskWithXY(r, this.origin.x, this.origin.y, this.size.width, this.size.height), r
			}, this.shotToBuff = function() {
				this.isInScreen();
				var e = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				return BK.Render.renderToTexture(BK.Director.root, e), e.readPixels(this.origin.x, this.origin.y, this.size.width, this.size.height)
			}, this.shotToFileFromNode = function(e, t, r) {
				this.isInNode(e);
				var i = "GameSandBox://" + t + "." + r,
					n = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				return BK.Render.renderToTexture(e, n), n.writeToDiskWithXY(i, this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height), i
			}, this.shotToBuffFromNode = function(e) {
				this.isInNode(e);
				var t = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				return BK.Render.renderToTexture(e, t), t.readPixels(this.origin.x + e.position.x, this.origin.y + e.position.y, this.size.width, this.size.height)
			}, this.shotToFileFromGL = function(e, t, r) {
				this.isInScreen();
				var i = "GameSandBox://" + t,
					n = new BK.Buffer(this.size.height * this.size.width * 4);
				return e.glReadPixels(this.origin.x, this.origin.y, this.size.width, this.size.height, e.RGBA, e.UNSIGNED_BYTE, n), GameStatusInfo && GameStatusInfo.version <= "7.5.8" ? (n = this.doImage_rotate180({
					buffer: n,
					width: this.size.width,
					height: this.size.height
				}), BK.Image.saveImage(n, this.size.width, this.size.height, i, r)) : BK.Image.saveImage(n, this.size.width, this.size.height, i, r, 1), i + "." + r
			}, this.shotToBuffFromGL = function(e) {
				this.isInScreen();
				var t = new BK.Buffer(this.size.height * this.size.width * 4);
				return e.glReadPixels(this.origin.x, this.origin.y, this.size.width, this.size.height, e.RGBA, e.UNSIGNED_BYTE, t), t
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
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Text = t())
		}(BK, function() {
			return function() {
				function e(e, t) {
					this.style = {
						fontSize: 20,
						textColor: 4294901760,
						maxWidth: 200,
						maxHeight: 400,
						width: 100,
						height: 200,
						textAlign: 0,
						bold: 1,
						italic: 1,
						strokeColor: 4278190080,
						strokeSize: 5,
						shadowRadius: 5,
						shadowDx: 10,
						shadowDy: 10,
						shadowColor: 4294901760
					}, this.setStyle(e), this._content = "", t && (this._content = t), this.__nativeObj = new BK.TextNode(this.style, this._content), Object.getOwnPropertyNames(this.__nativeObj).forEach(function(e) {
						var t = e;
						"__nativeObj" != t && Object.defineProperty(this, t, {
							get: function() {
								return this.__nativeObj[t]
							},
							set: function(e) {
								this.__nativeObj[t] = e
							}
						})
					}, this)
				}
				return Object.defineProperty(e.prototype, "content", {
					get: function() {
						return this._content
					},
					set: function(e) {
						this._content = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "fontSize", {
					get: function() {
						return this.style.fontSize
					},
					set: function(e) {
						this.style.fontSize = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "size", {
					get: function() {
						return {
							width: this.style.width,
							height: this.style.height
						}
					},
					set: function(e) {
						this.style.width = e.width, this.style.height = e.height, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "fontColor", {
					get: function() {
						return this.style.textColor
					},
					set: function(e) {
						this.style.textColor = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "maxSize", {
					get: function() {
						return {
							width: this.style.maxWidth,
							height: this.style.maxHeight
						}
					},
					set: function(e) {
						this.style.maxWidth = e.width, this.style.maxHeight = e.height, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "bold", {
					get: function() {
						return this.style.bold
					},
					set: function(e) {
						this.style.bold = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "italic", {
					get: function() {
						return this.style.italic
					},
					set: function(e) {
						this.style.italic = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "horizontalAlign", {
					get: function() {
						return this.style.textAlign
					},
					set: function(e) {
						this.style.textAlign = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "strokeColor", {
					get: function() {
						return this.style.strokeColor
					},
					set: function(e) {
						this.style.strokeColor = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "strokeSize", {
					get: function() {
						return this.style.strokeSize
					},
					set: function(e) {
						this.style.strokeSize = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "shadowColor", {
					get: function() {
						return this.style.shadowColor
					},
					set: function(e) {
						this.style.shadowColor = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "shadowRadius", {
					get: function() {
						return this.style.shadowRadius
					},
					set: function(e) {
						this.style.shadowRadius = e, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), Object.defineProperty(e.prototype, "shadowOffset", {
					get: function() {
						return {
							x: this.style.shadowDx,
							y: this.style.shadowDy
						}
					},
					set: function(e) {
						this.style.shadowDx = e.x, this.style.shadowDy = e.y, this.__nativeObj.updateText(this.style, this._content)
					},
					enumerable: !0,
					configurable: !0
				}), e.prototype.measureTextSize = function() {
					if (2 == arguments.length) return BK.TextNode.measureTextSize(arguments[0], arguments[1])
				}, e.measureTextSize = function() {
					if (2 == arguments.length) return BK.TextNode.measureTextSize(arguments[0], arguments[1])
				}, e.prototype.getTextSize = function() {}, e.prototype.setStyle = function(e) {
					e && (this.style = {
						fontSize: e.fontSize,
						textColor: e.textColor,
						maxWidth: e.maxWidth,
						maxHeight: e.maxHeight,
						width: e.width,
						height: e.height,
						textAlign: e.textAlign,
						bold: e.bold,
						italic: e.italic,
						strokeColor: e.strokeColor,
						strokeSize: e.strokeSize,
						shadowRadius: e.shadowRadius,
						shadowDx: e.shadowDx,
						shadowDy: e.shadowDy,
						shadowColor: e.shadowColor
					})
				}, e.prototype.removeFromParent = function() {
					this.__nativeObj.removeFromParent()
				}, e.prototype.setUVFlip = function(e, t) {
					this.__nativeObj.setUVFlip(e, t)
				}, e
			}()
		}), function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.MQQ.Webview.openTransparent = t().openTransparent, e.MQQ.Webview.onMessageHandle = t().onMessageHandle)
		}(BK, function() {
			function e(e, t) {
				void 0 === t && (t = 1);
				var r = {
					url: e,
					gameOrientation: t,
					businessType: 2
				};
				GameStatusInfo.devPlatform && BK.Script.log(0, 0, "BK.MQQ.Webview.openTransparent rely QQ.Call Failed!"), BK.MQQ.SsoRequest.send(r, "cs.openWebViewWithoutUrl.local")
			}

			function t(e) {
				BK.MQQ.SsoRequest.addListener("sc.web_callback_game.local", null, function(t, r, i) {
					e && e(r, i)
				})
			}
			return {
				openTransparent: e,
				onMessageHandle: t
			}
		}), function(e, t) {
			"object" == typeof e && ("object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Audio = t())
		}(BK, function() {
			var e = BK.Audio,
				t = function() {
					function t(t, r, i) {
						this.__nativeObj = new e(t, r, i), this.type = t, this.path = r, this.loopCount = i
					}
					return t.playMusic = function(t, r, i) {
						e.playMusic(t, r, i)
					}, t.prototype.startMusic = function(t) {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 ? e.playMusic(this.type, this.path, this.loopCount) : null != t && void 0 != t ? this.__nativeObj.startMusic(t) : this.__nativeObj.startMusic()
					}, t.prototype.pauseMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || this.__nativeObj.pauseMusic()
					}, t.prototype.resumeMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || this.__nativeObj.resumeMusic()
					}, t.prototype.stopMusic = function() {
						"ios" === GameStatusInfo.platform && GameStatusInfo.QQVer.indexOf("7.5.8") > -1 || this.__nativeObj.stopMusic()
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
			BK.MQQ.Account.getHead(e, function(r, i) {
				if (i && i.buffer && i.width && i.height)
					if (BK.Image.saveImage) BK.Image.saveImage(i.buffer, i.width, i.height, headCacheDir_1 + r, "jpg"), t(r, headCacheDir_1 + r + ".jpg");
					else {
						var n = new BK.Texture(i.buffer, i.width, i.height),
							a = new BK.Sprite(i.width, i.height, n, 0, 0, 1, 1),
							o = new BK.RenderTexture(i.width, i.height);
						BK.Render.renderToTexture(a.__nativeObj ? a.__nativeObj : a, o), o.saveTo(headCacheDir_1 + r), t(e, headCacheDir_1 + r)
					}
				else t(e, "")
			})
		})
	}! function(e, t) {
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
				for (var r = 1732584193, i = -271733879, n = -1732584194, a = 271733878, o = 0; o < e.length; o += 16) {
					var s = r,
						f = i,
						u = n,
						d = a;
					r = this.md5_ff(r, i, n, a, e[o + 0], 7, -680876936), a = this.md5_ff(a, r, i, n, e[o + 1], 12, -389564586), n = this.md5_ff(n, a, r, i, e[o + 2], 17, 606105819), i = this.md5_ff(i, n, a, r, e[o + 3], 22, -1044525330), r = this.md5_ff(r, i, n, a, e[o + 4], 7, -176418897), a = this.md5_ff(a, r, i, n, e[o + 5], 12, 1200080426), n = this.md5_ff(n, a, r, i, e[o + 6], 17, -1473231341), i = this.md5_ff(i, n, a, r, e[o + 7], 22, -45705983), r = this.md5_ff(r, i, n, a, e[o + 8], 7, 1770035416), a = this.md5_ff(a, r, i, n, e[o + 9], 12, -1958414417), n = this.md5_ff(n, a, r, i, e[o + 10], 17, -42063), i = this.md5_ff(i, n, a, r, e[o + 11], 22, -1990404162), r = this.md5_ff(r, i, n, a, e[o + 12], 7, 1804603682), a = this.md5_ff(a, r, i, n, e[o + 13], 12, -40341101), n = this.md5_ff(n, a, r, i, e[o + 14], 17, -1502002290), i = this.md5_ff(i, n, a, r, e[o + 15], 22, 1236535329), r = this.md5_gg(r, i, n, a, e[o + 1], 5, -165796510), a = this.md5_gg(a, r, i, n, e[o + 6], 9, -1069501632), n = this.md5_gg(n, a, r, i, e[o + 11], 14, 643717713), i = this.md5_gg(i, n, a, r, e[o + 0], 20, -373897302), r = this.md5_gg(r, i, n, a, e[o + 5], 5, -701558691), a = this.md5_gg(a, r, i, n, e[o + 10], 9, 38016083), n = this.md5_gg(n, a, r, i, e[o + 15], 14, -660478335), i = this.md5_gg(i, n, a, r, e[o + 4], 20, -405537848), r = this.md5_gg(r, i, n, a, e[o + 9], 5, 568446438), a = this.md5_gg(a, r, i, n, e[o + 14], 9, -1019803690), n = this.md5_gg(n, a, r, i, e[o + 3], 14, -187363961), i = this.md5_gg(i, n, a, r, e[o + 8], 20, 1163531501), r = this.md5_gg(r, i, n, a, e[o + 13], 5, -1444681467), a = this.md5_gg(a, r, i, n, e[o + 2], 9, -51403784), n = this.md5_gg(n, a, r, i, e[o + 7], 14, 1735328473), i = this.md5_gg(i, n, a, r, e[o + 12], 20, -1926607734), r = this.md5_hh(r, i, n, a, e[o + 5], 4, -378558), a = this.md5_hh(a, r, i, n, e[o + 8], 11, -2022574463), n = this.md5_hh(n, a, r, i, e[o + 11], 16, 1839030562), i = this.md5_hh(i, n, a, r, e[o + 14], 23, -35309556), r = this.md5_hh(r, i, n, a, e[o + 1], 4, -1530992060), a = this.md5_hh(a, r, i, n, e[o + 4], 11, 1272893353), n = this.md5_hh(n, a, r, i, e[o + 7], 16, -155497632), i = this.md5_hh(i, n, a, r, e[o + 10], 23, -1094730640), r = this.md5_hh(r, i, n, a, e[o + 13], 4, 681279174), a = this.md5_hh(a, r, i, n, e[o + 0], 11, -358537222), n = this.md5_hh(n, a, r, i, e[o + 3], 16, -722521979), i = this.md5_hh(i, n, a, r, e[o + 6], 23, 76029189), r = this.md5_hh(r, i, n, a, e[o + 9], 4, -640364487), a = this.md5_hh(a, r, i, n, e[o + 12], 11, -421815835), n = this.md5_hh(n, a, r, i, e[o + 15], 16, 530742520), i = this.md5_hh(i, n, a, r, e[o + 2], 23, -995338651), r = this.md5_ii(r, i, n, a, e[o + 0], 6, -198630844), a = this.md5_ii(a, r, i, n, e[o + 7], 10, 1126891415), n = this.md5_ii(n, a, r, i, e[o + 14], 15, -1416354905), i = this.md5_ii(i, n, a, r, e[o + 5], 21, -57434055), r = this.md5_ii(r, i, n, a, e[o + 12], 6, 1700485571), a = this.md5_ii(a, r, i, n, e[o + 3], 10, -1894986606), n = this.md5_ii(n, a, r, i, e[o + 10], 15, -1051523), i = this.md5_ii(i, n, a, r, e[o + 1], 21, -2054922799), r = this.md5_ii(r, i, n, a, e[o + 8], 6, 1873313359), a = this.md5_ii(a, r, i, n, e[o + 15], 10, -30611744), n = this.md5_ii(n, a, r, i, e[o + 6], 15, -1560198380), i = this.md5_ii(i, n, a, r, e[o + 13], 21, 1309151649), r = this.md5_ii(r, i, n, a, e[o + 4], 6, -145523070), a = this.md5_ii(a, r, i, n, e[o + 11], 10, -1120210379), n = this.md5_ii(n, a, r, i, e[o + 2], 15, 718787259), i = this.md5_ii(i, n, a, r, e[o + 9], 21, -343485551), r = this.safe_add(r, s), i = this.safe_add(i, f), n = this.safe_add(n, u), a = this.safe_add(a, d)
				}
				return Array(r, i, n, a)
			}, e.prototype.md5_cmn = function(e, t, r, i, n, a) {
				return this.safe_add(this.rol(this.safe_add(this.safe_add(t, e), this.safe_add(i, a)), n), r)
			}, e.prototype.md5_ff = function(e, t, r, i, n, a, o) {
				return this.md5_cmn(t & r | ~t & i, e, t, n, a, o)
			}, e.prototype.md5_gg = function(e, t, r, i, n, a, o) {
				return this.md5_cmn(t & i | r & ~i, e, t, n, a, o)
			}, e.prototype.md5_hh = function(e, t, r, i, n, a, o) {
				return this.md5_cmn(t ^ r ^ i, e, t, n, a, o)
			}, e.prototype.md5_ii = function(e, t, r, i, n, a, o) {
				return this.md5_cmn(r ^ (t | ~i), e, t, n, a, o)
			}, e.prototype.core_hmac_md5 = function(e, t) {
				var r = this.str2bin(e);
				r.length > 16 && (r = this.core_md5(r, e.length * this.chrsz));
				for (var i = Array(16), n = Array(16), a = 0; a < 16; a++) i[a] = 909522486 ^ r[a], n[a] = 1549556828 ^ r[a];
				var o = this.core_md5(i.concat(this.str2bin(t)), 512 + t.length * this.chrsz);
				return this.core_md5(n.concat(o), 640)
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
				for (var r = Array(80), i = 1732584193, n = -271733879, a = -1732584194, o = 271733878, s = -1009589776, f = 0; f < e.length; f += 16) {
					for (var u = i, d = n, h = a, c = o, _ = s, l = 0; l < 80; l++) {
						r[l] = l < 16 ? e[f + l] : this.rol(r[l - 3] ^ r[l - 8] ^ r[l - 14] ^ r[l - 16], 1);
						var g = this.safe_add(this.safe_add(this.rol(i, 5), this.sha1_ft(l, n, a, o)), this.safe_add(this.safe_add(s, r[l]), this.sha1_kt(l)));
						s = o, o = a, a = this.rol(n, 30), n = i, i = g
					}
					i = this.safe_add(i, u), n = this.safe_add(n, d), a = this.safe_add(a, h), o = this.safe_add(o, c), s = this.safe_add(s, _)
				}
				return Array(i, n, a, o, s)
			}, e.prototype.sha1_ft = function(e, t, r, i) {
				return e < 20 ? t & r | ~t & i : e < 40 ? t ^ r ^ i : e < 60 ? t & r | t & i | r & i : t ^ r ^ i
			}, e.prototype.sha1_kt = function(e) {
				return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
			}, e.prototype.core_hmac_sha1 = function(e, t) {
				var r = this.str2bin(e);
				r.length > 16 && (r = this.core_sha1(r, e.length * this.chrsz));
				for (var i = Array(16), n = Array(16), a = 0; a < 16; a++) i[a] = 909522486 ^ r[a], n[a] = 1549556828 ^ r[a];
				var o = this.core_sha1(i.concat(this.str2bin(t)), 512 + t.length * this.chrsz);
				return this.core_sha1(n.concat(o), 672)
			}, e.prototype.safe_add = function(e, t) {
				var r = (65535 & e) + (65535 & t);
				return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
			}, e.prototype.rol = function(e, t) {
				return e << t | e >>> 32 - t
			}, e.prototype.str2bin = function(e) {
				for (var t = Array(), r = (1 << this.chrsz) - 1, i = 0; i < e.length * this.chrsz; i += this.chrsz) t[i >> 5] |= (e.charCodeAt(i / this.chrsz) & r) << 24 - i % 32;
				return t
			}, e.prototype.bin2str = function(e) {
				for (var t = "", r = (1 << this.chrsz) - 1, i = 0; i < 32 * e.length; i += this.chrsz) t += String.fromCharCode(e[i >> 5] >>> 24 - i % 32 & r);
				return t
			}, e.prototype.bin2hex = function(e) {
				for (var t = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", i = 0; i < 4 * e.length; i++) r += t.charAt(e[i >> 2] >> 8 * (3 - i % 4) + 4 & 15) + t.charAt(e[i >> 2] >> 8 * (3 - i % 4) & 15);
				return r
			}, e.prototype.bin2b64 = function(e) {
				for (var t = "", r = 0; r < 4 * e.length; r += 3)
					for (var i = (e[r >> 2] >> 8 * (3 - r % 4) & 255) << 16 | (e[r + 1 >> 2] >> 8 * (3 - (r + 1) % 4) & 255) << 8 | e[r + 2 >> 2] >> 8 * (3 - (r + 2) % 4) & 255, n = 0; n < 4; n++) 8 * r + 6 * n > 32 * e.length ? t += this.b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >> 6 * (3 - n) & 63);
				return t
			}, new e
		}()
	}(BK),
	function(e, t) {
		e.FileUtil.upload = function() {
			function e(e, t) {
				function r(e, r) {
					t(r, a + i)
				}
				var i, n, a, o, s, f = new Date,
					u = f.getFullYear() + (f.getMonth() + 1 < 10 ? "0" + (f.getMonth() + 1) : f.getMonth() + 1) + f.getDate(),
					d = parseInt(f.getTime() / 1e3) - 1,
					h = d + ";" + (d + 600),
					c = JSON.parse(GameStatusInfo.extInfo).certInfo,
					_ = c.credentials,
					l = _.tmpSecretId,
					g = _.tmpSecretKey;
				o = _.sessionToken, i = "/" + GameStatusInfo.gameId + "_" + BK.Crypt.bin2hex(BK.Crypt.core_md5(e)) + "_" + u + ".png", n = c.upLoadPrefUrl.replace(new RegExp("http://", "gm"), ""), a = c.downLoadPrefUrl;
				var m = BK.Crypt.hex_hmac_sha1(g, h),
					p = "put\n" + i + "\n\nhost=" + n + "&x-cos-storage-class=nearline\n",
					S = "sha1\n" + h + "\n" + BK.Crypt.hex_sha1(p) + "\n";
				s = "q-sign-algorithm=sha1&q-ak=" + l + "&q-sign-time=" + h + "&q-key-time=" + h + "&q-header-list=host;x-cos-storage-class&q-url-param-list=&q-signature=" + BK.Crypt.hex_hmac_sha1(m, S);
				var b = new BK.HttpUtil("https://" + n + i);
				b.setHttpMethod("put"), b.setHttpHeader("host", n), b.setHttpHeader("x-cos-storage-class", "nearline"), b.setHttpHeader("x-cos-security-token", o), b.setHttpHeader("authorization", s), b.setBodyCompatible(!1), b.setHttpRawBody(e), b.requestAsync(r)
			}
			return BK.FileUtil.uploadFromFile = function(t, r) {
				e(BK.FileUtil.readFile(t), r)
			}, BK.FileUtil.uploadFromBuff = function(t, r) {
				e(t, r)
			}, BK.FileUtil.uploadFromNode = function(t, r) {
				var i = new BK.RenderTexture(BK.Director.screenPixelSize.width, BK.Director.screenPixelSize.height);
				BK.Render.renderToTexture(t, i), i.writeToDiskWithXY("GameSandBox://temp.png", t.position.x, t.position.y, t.contentSize.width, t.contentSize.height), e(BK.FileUtil.readFile("GameSandBox://temp.png"), r)
			}, e
		}()
	}(BK), BK.QQ.shareToArkFromFile = function(e, t, r, i) {
		BK.FileUtil.uploadFromFile(i, function(i, n) {
			BK.QQ.shareToArk(e, t, n, !0, r)
		})
	}, BK.QQ.shareToArkFromBuff = function(e, t, r, i) {
		BK.FileUtil.uploadFromBuff(i, function(i, n) {
			200 == i && BK.QQ.shareToArk(e, t, n, !0, r)
		})
	}, BK.QQ.shareToArkFromNode = function(e, t, r, i) {
		BK.FileUtil.uploadFromNode(i, function(i, n) {
			200 == i && BK.QQ.shareToArk(e, t, n, !0, r)
		})
	}
}
if (isBrowser) {
	var __browserMsgHdl = {};
	BK.MQQ.SsoRequest.listenerInfos = [], BK.MQQ.SsoRequest.addListener = function(e, t, r) {
		var i = {
			cmd: e,
			target: t,
			callback: r
		};
		BK.MQQ.SsoRequest.listenerInfos.forEach(function(i) {
			i.cmd == e && i.target == t && (i.callback = r)
		}, this), BK.MQQ.SsoRequest.listenerInfos.push(i)
	}, BK.MQQ.SsoRequest.removeListener = function(e, t) {
		for (var r = BK.MQQ.SsoRequest.listenerInfos.length, i = -1, n = 0; n < r; n++) {
			var a = BK.MQQ.SsoRequest.listenerInfos[n];
			a.cmd == e && a.target == t && (i = n)
		} - 1 != i && BK.MQQ.SsoRequest.listenerInfos.splice(i, 1)
	}, __browserMsgHdl.listenerInfos = [], __browserMsgHdl.addListener = function(e, t, r) {
		var i = {
				cmd: e,
				target: t,
				callback: r
			},
			n = !1;
		__browserMsgHdl.listenerInfos.forEach(function(i) {
			i.cmd == e && i.target == t && (i.callback = r, n = !0)
		}, this), 0 == n && __browserMsgHdl.listenerInfos.push(i)
	}, __browserMsgHdl.removeListener = function(e, t) {
		for (var r = __browserMsgHdl.listenerInfos.length, i = -1, n = 0; n < r; n++) {
			var a = __browserMsgHdl.listenerInfos[n];
			a.cmd == e && a.target == t && (i = n)
		} - 1 != i && __browserMsgHdl.listenerInfos.splice(i, 1)
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
				this.CMSHOW_CS_CMD_SHARE_INFO = "cs.game_shell_share_callback.local", this.CMSHOW_SC_CMD_SHELL_PACK_UP = "sc.game_shell_pack_up.local", this.CMSHOW_SC_CMD_SHELL_SHARE = "sc.game_shell_share.local", this.CMSHOW_SC_CMD_SHELL_CLOSE = "sc.game_shell_close.local", this.CMD_CMSHOW_GAME_ENTER_BACKGROUND = "sc.game_enter_background.local", this.CMD_CMSHOW_GAME_ENTER_FORGROUND = "sc.game_enter_foreground.local", this.CMD_CMSHOW_GAME_MAXIMIZE = "sc.game_maximize.local", this.CMD_CMSHOW_GAME_MINIMIZE = "sc.game_minimize.local", this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR = "sc.init_global_var.local", this.cfg = e, this.addAllListener(), this.cfg.onLoad && this.cfg.onLoad(this)
			}
			return e.prototype.log = function(e) {
				BK.Script.log(0, 0, "Game:" + e)
			}, e.prototype.__isBrowser = function() {
				return isBrowser
			}, e.prototype.platform = function() {
				return this.__isBrowser() ? t.browser : t.native
			}, e.prototype.addAllListener = function() {
				this.platform() == t.native ? (BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, this._onEnterBackground.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this, this._onEnterForeground.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this, this._onMax.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMD_CMSHOW_GAME_MINIMIZE, this, this._onMin.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this, this._onShare.bind(this)), BK.MQQ.SsoRequest.addListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this, this._onClose.bind(this))) : (__browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this, this._onEnterBackground.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this, this._onEnterForeground.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_MINIMIZE, this, this._onMin.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this, this._onMax.bind(this)), __browserMsgHdl.addListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this, this._onShare.bind(this)), __browserMsgHdl.addListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this, this._onClose.bind(this)), __browserMsgHdl.addListener(this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR, this, this._onInitGlobalVar.bind(this)))
			}, e.prototype.removeAllListener = function() {
				this.platform() == t.native ? (BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this), BK.MQQ.SsoRequest.removeListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_PACK_UP, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this), BK.MQQ.SsoRequest.removeListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this)) : (__browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_ENTER_BACKGROUND, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_ENTER_FORGROUND, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_MAXIMIZE, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_PACK_UP, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_SHARE, this), __browserMsgHdl.removeListener(this.CMSHOW_SC_CMD_SHELL_CLOSE, this), __browserMsgHdl.removeListener(this.CMD_CMSHOW_GAME_INIT_GLOBAL_VAR, this))
			}, e.prototype._onEnterBackground = function() {
				this.cfg.onEnterBackground && this.cfg.onEnterBackground(this)
			}, e.prototype._onEnterForeground = function() {
				this.cfg.onEnterForeground && this.cfg.onEnterForeground(this)
			}, e.prototype._onMax = function() {
				this.cfg.onMaximize && this.cfg.onMaximize(this)
			}, e.prototype._onMin = function() {
				this.cfg.onMinimize && this.cfg.onMinimize(this)
			}, e.prototype._onShare = function() {
				if (this.cfg.onShare) {
					var e = this.cfg.onShare(this);
					this._confirmShare(e)
				} else this._confirmShare()
			}, e.prototype._onClose = function() {
				this.cfg.onClose && this.cfg.onClose(this)
			}, e.prototype._confirmShare = function(e) {
				var r = e || {};
				this.platform() == t.native ? BK.MQQ.SsoRequest.send(r, this.CMSHOW_CS_CMD_SHARE_INFO) : __browserMsg.send(JSON.stringify(r), this.CMSHOW_CS_CMD_SHARE_INFO)
			}, e.prototype._onInitGlobalVar = function(e, t, r) {
				this.cfg.onInitGlobalVar && this.cfg.onInitGlobalVar(r, this)
			}, e
		}()
});