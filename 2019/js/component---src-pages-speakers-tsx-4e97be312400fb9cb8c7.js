(window.webpackJsonp = window.webpackJsonp || []).push([[8], {
  209: function(e, a, t) {
      "use strict";
      t.r(a),
      t.d(a, "default", function() {
          return f
      });
      var i = t(506)
        , n = t(0)
        , s = t.n(n)
        , o = t(95)
        , r = t(224)
        , d = t(221)
        , c = t(216)
        , b = t(266)
        , l = t(217)
        , p = t(218);
      function f() {
          var e = i.data
            , a = e.allSpeakersYaml
            , t = e.allTalksYaml
            , n = e.allFile
            , f = Object(o.b)().t
            , u = a.edges.map(function(e) {
              return e.node
          })
            , h = n.nodes.filter(function(e) {
              return e.childImageSharp
          }).map(function(e) {
              return e.childImageSharp.fluid
          })
            , g = t.edges.map(function(e) {
              return e.node
          });
          return s.a.createElement(r.a, null, s.a.createElement(d.a, {
              title: f("guestSpeakers"),
              description: f("speakers.description")
          }), s.a.createElement(l.a, null, s.a.createElement(p.a, {
              path: [f("speakers")]
          }), s.a.createElement(c.a, null, f("speakers")), s.a.createElement(b.a, {
              speakers: u,
              avatars: h,
              talks: g
          })))
      }
  },
  216: function(e, a, t) {
      "use strict";
      t.d(a, "a", function() {
          return o
      });
      var i = t(0)
        , n = t.n(i)
        , s = t(214).c.h1.withConfig({
          displayName: "Title__Box",
          componentId: "ic2qmd-0"
      })(["text-align:center;margin:40px 0 60px;font-size:40px;text-transform:uppercase;font-family:", ";"], function(e) {
          return e.theme.fonts.header
      });
      function o(e) {
          var a = e.children;
          return n.a.createElement(s, null, a)
      }
  },
  217: function(e, a, t) {
      "use strict";
      t.d(a, "a", function() {
          return o
      });
      var i = t(0)
        , n = t.n(i)
        , s = t(214).c.div.withConfig({
          displayName: "ResponsiveBox__Box",
          componentId: "s7imgo-0"
      })(["width:100%;max-width:", ";padding:2em 1em 5em;margin:0 auto;box-sizing:border-box;"], function(e) {
          return e.theme.innerWidth
      });
      function o(e) {
          var a = e.children;
          return n.a.createElement(s, null, a)
      }
  },
  218: function(e, a, t) {
      "use strict";
      t.d(a, "a", function() {
          return b
      });
      var i = t(0)
        , n = t.n(i)
        , s = t(214)
        , o = t(95)
        , r = t(215)
        , d = s.c.div.withConfig({
          displayName: "Breadcrumb__Box",
          componentId: "whtkqw-0"
      })(["display:flex;"])
        , c = s.c.span.withConfig({
          displayName: "Breadcrumb__Text",
          componentId: "whtkqw-1"
      })(["margin-right:0.5em;font-size:14px;font-weight:bold;text-transform:uppercase;font-family:", ";text-transform:uppercase;"], function(e) {
          return e.theme.fonts.header
      });
      function b(e) {
          var a = e.path
            , t = Object(o.b)().t;
          return n.a.createElement(d, null, n.a.createElement(r.a, {
              to: "/"
          }, n.a.createElement(c, null, t("top"))), a.filter(Boolean).map(function(e) {
              var a = "string" == typeof e ? {
                  label: e,
                  to: null
              } : e;
              return n.a.createElement(n.a.Fragment, {
                  key: a.label
              }, n.a.createElement(c, null, ">"), a.to ? n.a.createElement(r.a, {
                  to: a.to
              }, n.a.createElement(c, null, a.label)) : n.a.createElement(c, null, a.label))
          }))
      }
  },
  229: function(e, a, t) {
      "use strict";
      t(19),
      t(18),
      t(6),
      t(71),
      t(135),
      t(230);
      var i = t(21);
      a.__esModule = !0,
      a.default = void 0;
      var n, s = i(t(72)), o = i(t(73)), r = i(t(97)), d = i(t(134)), c = i(t(0)), b = i(t(17)), l = function(e) {
          var a = (0,
          d.default)({}, e)
            , t = a.resolutions
            , i = a.sizes
            , n = a.critical;
          return t && (a.fixed = t,
          delete a.resolutions),
          i && (a.fluid = i,
          delete a.sizes),
          n && (a.loading = "eager"),
          a.fluid && (a.fluid = y([].concat(a.fluid))),
          a.fixed && (a.fixed = y([].concat(a.fixed))),
          a
      }, p = function(e) {
          var a = e.fluid
            , t = e.fixed;
          return (a && a[0] || t && t[0]).src
      }, f = Object.create({}), u = function(e) {
          var a = l(e)
            , t = p(a);
          return f[t] || !1
      }, h = "undefined" != typeof HTMLImageElement && "loading"in HTMLImageElement.prototype, g = "undefined" != typeof window, w = g && window.IntersectionObserver, m = new WeakMap;
      function k(e) {
          return e.map(function(e) {
              var a = e.src
                , t = e.srcSet
                , i = e.srcSetWebp
                , n = e.media
                , s = e.sizes;
              return c.default.createElement(c.default.Fragment, {
                  key: a
              }, i && c.default.createElement("source", {
                  type: "image/webp",
                  media: n,
                  srcSet: i,
                  sizes: s
              }), c.default.createElement("source", {
                  media: n,
                  srcSet: t,
                  sizes: s
              }))
          })
      }
      function y(e) {
          var a = []
            , t = [];
          return e.forEach(function(e) {
              return (e.media ? a : t).push(e)
          }),
          a.concat(t)
      }
      function v(e) {
          return e.map(function(e) {
              var a = e.src
                , t = e.media
                , i = e.tracedSVG;
              return c.default.createElement("source", {
                  key: a,
                  media: t,
                  srcSet: i
              })
          })
      }
      function j(e) {
          return e.map(function(e) {
              var a = e.src
                , t = e.media
                , i = e.base64;
              return c.default.createElement("source", {
                  key: a,
                  media: t,
                  srcSet: i
              })
          })
      }
      function S(e, a) {
          var t = e.srcSet
            , i = e.srcSetWebp
            , n = e.media
            , s = e.sizes;
          return "<source " + (a ? "type='image/webp' " : "") + (n ? 'media="' + n + '" ' : "") + 'srcset="' + (a ? i : t) + '" ' + (s ? 'sizes="' + s + '" ' : "") + "/>"
      }
      var J = function(e, a) {
          var t = (void 0 === n && "undefined" != typeof window && window.IntersectionObserver && (n = new window.IntersectionObserver(function(e) {
              e.forEach(function(e) {
                  if (m.has(e.target)) {
                      var a = m.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) && (n.unobserve(e.target),
                      m.delete(e.target),
                      a())
                  }
              })
          }
          ,{
              rootMargin: "200px"
          })),
          n);
          return t && (t.observe(e),
          m.set(e, a)),
          function() {
              t.unobserve(e),
              m.delete(e)
          }
      }
        , I = function(e) {
          var a = e.src ? 'src="' + e.src + '" ' : 'src="" '
            , t = e.sizes ? 'sizes="' + e.sizes + '" ' : ""
            , i = e.srcSet ? 'srcset="' + e.srcSet + '" ' : ""
            , n = e.title ? 'title="' + e.title + '" ' : ""
            , s = e.alt ? 'alt="' + e.alt + '" ' : 'alt="" '
            , o = e.width ? 'width="' + e.width + '" ' : ""
            , r = e.height ? 'height="' + e.height + '" ' : ""
            , d = e.crossOrigin ? 'crossorigin="' + e.crossOrigin + '" ' : ""
            , c = e.loading ? 'loading="' + e.loading + '" ' : ""
            , b = e.draggable ? 'draggable="' + e.draggable + '" ' : "";
          return "<picture>" + e.imageVariants.map(function(e) {
              return (e.srcSetWebp ? S(e, !0) : "") + S(e)
          }).join("") + "<img " + c + o + r + t + i + a + s + n + d + b + 'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'
      }
        , x = function(e) {
          var a = e.src
            , t = e.imageVariants
            , i = e.generateSources
            , n = e.spreadProps
            , s = c.default.createElement(W, (0,
          d.default)({
              src: a
          }, n));
          return t.length > 1 ? c.default.createElement("picture", null, i(t), s) : s
      }
        , W = c.default.forwardRef(function(e, a) {
          var t = e.sizes
            , i = e.srcSet
            , n = e.src
            , s = e.style
            , o = e.onLoad
            , b = e.onError
            , l = e.loading
            , p = e.draggable
            , f = (0,
          r.default)(e, ["sizes", "srcSet", "src", "style", "onLoad", "onError", "loading", "draggable"]);
          return c.default.createElement("img", (0,
          d.default)({
              sizes: t,
              srcSet: i,
              src: n
          }, f, {
              onLoad: o,
              onError: b,
              ref: a,
              loading: l,
              draggable: p,
              style: (0,
              d.default)({
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center"
              }, s)
          }))
      });
      W.propTypes = {
          style: b.default.object,
          onError: b.default.func,
          onLoad: b.default.func
      };
      var L = function(e) {
          function a(a) {
              var t;
              (t = e.call(this, a) || this).seenBefore = g && u(a),
              t.addNoScript = !(a.critical && !a.fadeIn),
              t.useIOSupport = !h && w && !a.critical && !t.seenBefore;
              var i = a.critical || g && (h || !t.useIOSupport);
              return t.state = {
                  isVisible: i,
                  imgLoaded: !1,
                  imgCached: !1,
                  fadeIn: !t.seenBefore && a.fadeIn
              },
              t.imageRef = c.default.createRef(),
              t.handleImageLoaded = t.handleImageLoaded.bind((0,
              o.default)((0,
              o.default)(t))),
              t.handleRef = t.handleRef.bind((0,
              o.default)((0,
              o.default)(t))),
              t
          }
          (0,
          s.default)(a, e);
          var t = a.prototype;
          return t.componentDidMount = function() {
              if (this.state.isVisible && "function" == typeof this.props.onStartLoad && this.props.onStartLoad({
                  wasCached: u(this.props)
              }),
              this.props.critical) {
                  var e = this.imageRef.current;
                  e && e.complete && this.handleImageLoaded()
              }
          }
          ,
          t.componentWillUnmount = function() {
              this.cleanUpListeners && this.cleanUpListeners()
          }
          ,
          t.handleRef = function(e) {
              var a = this;
              this.useIOSupport && e && (this.cleanUpListeners = J(e, function() {
                  var e = u(a.props);
                  a.state.isVisible || "function" != typeof a.props.onStartLoad || a.props.onStartLoad({
                      wasCached: e
                  }),
                  a.setState({
                      isVisible: !0
                  }, function() {
                      return a.setState({
                          imgLoaded: e,
                          imgCached: !!a.imageRef.current.currentSrc
                      })
                  })
              }))
          }
          ,
          t.handleImageLoaded = function() {
              var e, a, t;
              e = this.props,
              a = l(e),
              t = p(a),
              f[t] = !0,
              this.setState({
                  imgLoaded: !0
              }),
              this.props.onLoad && this.props.onLoad()
          }
          ,
          t.render = function() {
              var e = l(this.props)
                , a = e.title
                , t = e.alt
                , i = e.className
                , n = e.style
                , s = void 0 === n ? {} : n
                , o = e.imgStyle
                , r = void 0 === o ? {} : o
                , b = e.placeholderStyle
                , p = void 0 === b ? {} : b
                , f = e.placeholderClassName
                , u = e.fluid
                , h = e.fixed
                , g = e.backgroundColor
                , w = e.durationFadeIn
                , m = e.Tag
                , y = e.itemProp
                , S = e.loading
                , J = e.draggable
                , L = !1 === this.state.fadeIn || this.state.imgLoaded
                , R = !0 === this.state.fadeIn && !this.state.imgCached
                , z = (0,
              d.default)({
                  opacity: L ? 1 : 0,
                  transition: R ? "opacity " + w + "ms" : "none"
              }, r)
                , D = "boolean" == typeof g ? "lightgray" : g
                , A = {
                  transitionDelay: w + "ms"
              }
                , N = (0,
              d.default)({
                  opacity: this.state.imgLoaded ? 0 : 1
              }, R && A, r, p)
                , T = {
                  title: a,
                  alt: this.state.isVisible ? "" : t,
                  style: N,
                  className: f
              };
              if (u) {
                  var C = u
                    , E = C[0];
                  return c.default.createElement(m, {
                      className: (i || "") + " gatsby-image-wrapper",
                      style: (0,
                      d.default)({
                          position: "relative",
                          overflow: "hidden"
                      }, s),
                      ref: this.handleRef,
                      key: "fluid-" + JSON.stringify(E.srcSet)
                  }, c.default.createElement(m, {
                      style: {
                          width: "100%",
                          paddingBottom: 100 / E.aspectRatio + "%"
                      }
                  }), D && c.default.createElement(m, {
                      title: a,
                      style: (0,
                      d.default)({
                          backgroundColor: D,
                          position: "absolute",
                          top: 0,
                          bottom: 0,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          right: 0,
                          left: 0
                      }, R && A)
                  }), E.base64 && c.default.createElement(x, {
                      src: E.base64,
                      spreadProps: T,
                      imageVariants: C,
                      generateSources: j
                  }), E.tracedSVG && c.default.createElement(x, {
                      src: E.tracedSVG,
                      spreadProps: T,
                      imageVariants: C,
                      generateSources: v
                  }), this.state.isVisible && c.default.createElement("picture", null, k(C), c.default.createElement(W, {
                      alt: t,
                      title: a,
                      sizes: E.sizes,
                      src: E.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: E.srcSet,
                      style: z,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: y,
                      loading: S,
                      draggable: J
                  })), this.addNoScript && c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                          __html: I((0,
                          d.default)({
                              alt: t,
                              title: a,
                              loading: S
                          }, E, {
                              imageVariants: C
                          }))
                      }
                  }))
              }
              if (h) {
                  var P = h
                    , B = P[0]
                    , H = (0,
                  d.default)({
                      position: "relative",
                      overflow: "hidden",
                      display: "inline-block",
                      width: B.width,
                      height: B.height
                  }, s);
                  return "inherit" === s.display && delete H.display,
                  c.default.createElement(m, {
                      className: (i || "") + " gatsby-image-wrapper",
                      style: H,
                      ref: this.handleRef,
                      key: "fixed-" + JSON.stringify(B.srcSet)
                  }, D && c.default.createElement(m, {
                      title: a,
                      style: (0,
                      d.default)({
                          backgroundColor: D,
                          width: B.width,
                          opacity: this.state.imgLoaded ? 0 : 1,
                          height: B.height
                      }, R && A)
                  }), B.base64 && c.default.createElement(x, {
                      src: B.base64,
                      spreadProps: T,
                      imageVariants: P,
                      generateSources: j
                  }), B.tracedSVG && c.default.createElement(x, {
                      src: B.tracedSVG,
                      spreadProps: T,
                      imageVariants: P,
                      generateSources: v
                  }), this.state.isVisible && c.default.createElement("picture", null, k(P), c.default.createElement(W, {
                      alt: t,
                      title: a,
                      width: B.width,
                      height: B.height,
                      sizes: B.sizes,
                      src: B.src,
                      crossOrigin: this.props.crossOrigin,
                      srcSet: B.srcSet,
                      style: z,
                      ref: this.imageRef,
                      onLoad: this.handleImageLoaded,
                      onError: this.props.onError,
                      itemProp: y,
                      loading: S,
                      draggable: J
                  })), this.addNoScript && c.default.createElement("noscript", {
                      dangerouslySetInnerHTML: {
                          __html: I((0,
                          d.default)({
                              alt: t,
                              title: a,
                              loading: S
                          }, B, {
                              imageVariants: P
                          }))
                      }
                  }))
              }
              return null
          }
          ,
          a
      }(c.default.Component);
      L.defaultProps = {
          fadeIn: !0,
          durationFadeIn: 500,
          alt: "",
          Tag: "div",
          loading: "lazy"
      };
      var R = b.default.shape({
          width: b.default.number.isRequired,
          height: b.default.number.isRequired,
          src: b.default.string.isRequired,
          srcSet: b.default.string.isRequired,
          base64: b.default.string,
          tracedSVG: b.default.string,
          srcWebp: b.default.string,
          srcSetWebp: b.default.string,
          media: b.default.string
      })
        , z = b.default.shape({
          aspectRatio: b.default.number.isRequired,
          src: b.default.string.isRequired,
          srcSet: b.default.string.isRequired,
          sizes: b.default.string.isRequired,
          base64: b.default.string,
          tracedSVG: b.default.string,
          srcWebp: b.default.string,
          srcSetWebp: b.default.string,
          media: b.default.string
      });
      L.propTypes = {
          resolutions: R,
          sizes: z,
          fixed: b.default.oneOfType([R, b.default.arrayOf(R)]),
          fluid: b.default.oneOfType([z, b.default.arrayOf(z)]),
          fadeIn: b.default.bool,
          durationFadeIn: b.default.number,
          title: b.default.string,
          alt: b.default.string,
          className: b.default.oneOfType([b.default.string, b.default.object]),
          critical: b.default.bool,
          crossOrigin: b.default.oneOfType([b.default.string, b.default.bool]),
          style: b.default.object,
          imgStyle: b.default.object,
          placeholderStyle: b.default.object,
          placeholderClassName: b.default.string,
          backgroundColor: b.default.oneOfType([b.default.string, b.default.bool]),
          onLoad: b.default.func,
          onError: b.default.func,
          onStartLoad: b.default.func,
          Tag: b.default.string,
          itemProp: b.default.string,
          loading: b.default.oneOf(["auto", "lazy", "eager"]),
          draggable: b.default.bool
      };
      var D = L;
      a.default = D
  },
  230: function(e, a, t) {
      "use strict";
      t(231)("fixed", function(e) {
          return function() {
              return e(this, "tt", "", "")
          }
      })
  },
  231: function(e, a, t) {
      var i = t(8)
        , n = t(9)
        , s = t(37)
        , o = /"/g
        , r = function(e, a, t, i) {
          var n = String(s(e))
            , r = "<" + a;
          return "" !== t && (r += " " + t + '="' + String(i).replace(o, "&quot;") + '"'),
          r + ">" + n + "</" + a + ">"
      };
      e.exports = function(e, a) {
          var t = {};
          t[e] = a(r),
          i(i.P + i.F * n(function() {
              var a = ""[e]('"');
              return a !== a.toLowerCase() || a.split('"').length > 3
          }), "String", t)
      }
  },
  266: function(e, a, t) {
      "use strict";
      t(16),
      t(20),
      t(23);
      var i = t(0)
        , n = t.n(i)
        , s = t(214)
        , o = t(215)
        , r = t(95)
        , d = t(229)
        , c = t.n(d)
        , b = Object(s.c)(o.a).withConfig({
          displayName: "Speaker__LinkContainer",
          componentId: "qwrs2t-0"
      })(["text-decoration:none;color:", ";"], function(e) {
          return e.theme.colors.text
      })
        , l = Object(s.c)(c.a).withConfig({
          displayName: "Speaker__Avatar",
          componentId: "qwrs2t-1"
      })(["width:100%;max-width:273px;"])
        , p = s.c.h2.withConfig({
          displayName: "Speaker__Title",
          componentId: "qwrs2t-2"
      })(["margin:0;padding:10px;border-bottom:1px solid ", ";text-align:center;font-family:", ";font-size:20px;overflow-wrap:break-word;"], function(e) {
          return e.theme.colors.border
      }, function(e) {
          return e.theme.fonts.text
      })
        , f = s.c.p.withConfig({
          displayName: "Speaker__Name",
          componentId: "qwrs2t-3"
      })(["margin-bottom:0;text-align:center;font-family:", ";font-size:16px;"], function(e) {
          return e.theme.fonts.text
      });
      function u(e) {
          var a = Object(r.b)().i18n
            , t = e.talk
            , i = e.speaker
            , s = e.avatar
            , o = t.uuid
            , d = t.title
            , c = t.titleJa
            , u = i.name
            , h = function(e, t) {
              return "en" === a.language ? e || t : t || e
          };
          return o && "TBA" !== d ? n.a.createElement(b, {
              to: "talk/" + o
          }, n.a.createElement(l, {
              fluid: s,
              loading: "lazy"
          }), n.a.createElement(p, null, h(d, c)), n.a.createElement(f, null, u)) : n.a.createElement("div", null, n.a.createElement(l, {
              fluid: s,
              loading: "lazy"
          }), n.a.createElement(p, {
              lang: "en"
          }, h(d, c)), n.a.createElement(f, null, u))
      }
      t.d(a, "a", function() {
          return g
      });
      var h = s.c.div.withConfig({
          displayName: "SpeakerList__Container",
          componentId: "sc-9znzfd-0"
      })(["display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:60px;grid-row-gap:60px;", "{grid-template-columns:repeat(2,1fr);grid-column-gap:20px;grid-row-gap:20px;}"], function(e) {
          return e.theme.breakpoints.mobile
      });
      function g(e) {
          var a = e.speakers
            , t = e.avatars
            , i = e.talks.reduce(function(e, a) {
              return a.speakerIDs.reduce(function(e, t) {
                  var i;
                  return Object.assign({}, e, ((i = {})[t] = a,
                  i))
              }, e)
          }, {})
            , s = t.reduce(function(e, a) {
              var t;
              return Object.assign({}, e, ((t = {})[a.originalName.split(".")[0]] = a,
              t))
          }, {});
          return n.a.createElement(h, null, a.filter(function(e) {
              return i[e.uuid]
          }).map(function(e) {
              return n.a.createElement(u, {
                  key: e.name,
                  speaker: e,
                  talk: i[e.uuid],
                  avatar: s[e.uuid]
              })
          }))
      }
  },
  506: function(e) {
      e.exports = {
          data: {
              allSpeakersYaml: {
                  edges: [{
                      node: {
                          uuid: "andrew-betts",
                          name: "Andrew Betts",
                          biography: "Andrew is a web developer and developer advocate for Fastly, working with developers across the world to help make the web faster, more secure, more reliable and easier to work with. He founded a web consultancy which was ultimately acquired by the Financial Times, led the team that created their pioneering HTML5 web app, and founded the FT’s Labs division. He has also been an elected member of the W3C Technical Architecture Group, a committee of nine people who guide the development of the World Wide Web.",
                          biographyJa: "Andrew は現在 Fastly に Web デベロッパー、及び Developer Advocate として世界中のエンジニアと共に Web をより早く、より安全に、より信頼できる場所にするために活動しています。彼が創業した Web コンサルト業は、Financial Times に買収され、そこで彼は HTML 5 Web app の先駆者となるものを開発して、同社にて技術ラボ部門を作り上げていました。彼は世界で 9 人いる W3C のテクニカルアーキテクトグループのメンバーの一人として推薦され、未来の World Wide Web の開発に携わっています。"
                      }
                  }, {
                      node: {
                          uuid: "andy-hall",
                          name: "Andy Hall",
                          biography: "Andy Hall is a game developer in Tokyo. He’s been making web stuff since the 90s, and used to work at Adobe Japan as a creative evangelist. He spends his time wherever code and art overlap.",
                          biographyJa: "自称クリエイティブ・コーダー。1994年頃からWeb開発を始め、その後は東京のインタラクティブエージェンシーやアドビジャパンに勤め、現在はフリーでゲーム作りに挑戦してます。"
                      }
                  }, {
                      node: {
                          uuid: "benitte-raphael",
                          name: "Raphaël Benitte",
                          biography: "Raphael Benitte is a graphic designer and data visualization expert. He created the Nivo.js dataviz library for React.",
                          biographyJa: "Raphael Benitte はグラフィックデザイナーであり、データビジュアリゼーションとエキスパートです。React 用のデータビジュアリゼーションライブラリである Nivo.js の作者。"
                      }
                  }, {
                      node: {
                          uuid: "benjamin-gruenbaum",
                          name: "Benjamin Gruenbaum",
                          biography: "Data Scientist & Developer @ Testim.io. Open source lover, Node.js core collaborator, core team at Bluebird, Sinon, MobX and other open source libraries.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "claudia-hernandez",
                          name: "Claudia Hernández",
                          biography: "Claudia Hernández is a mexican software engineer at npm. She has previously worked at Auth0, making the web safer, Dailymotion in Paris and on projects for companies such as Air France, EDF, Groupe SEB and Aéroport de Paris. Claudia has a computer science background and loves learning emerging web technologies. When she is not coding, chances are you’ll find her reading a book ! Claudia also loves traveling and discovering new cultures.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "dynamis",
                          name: "dynamis",
                          biography: "CTO、WebDINO Japan",
                          biographyJa: "CTO、WebDINO日本"
                      }
                  }, {
                      node: {
                          uuid: "dominic-tarr",
                          name: "Dominic Tarr",
                          biography: "",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "eiji-kitamura",
                          name: "Eiji Kitamura",
                          biography: "Eiji is a staff developer advocate at Google working on the open web, currently focusing to make identity and payment on the web as open, seamless and frictionless as possible. He is also enthusiastic about open web standard technologies.",
                          biographyJa: "Eiji は Google にて Staff Developer Advocate として Open Web な活動しています。現在は Web での Identity 及び決済をよりオープンに、よりシームレスで行えるように活動を行っています。彼は Open web standard な技術にも関心を持っています。"
                      }
                  }, {
                      node: {
                          uuid: "fuji-goro",
                          name: "FUJI Goro / @__gfx__",
                          biography: "A Software Engineer. Interested in TypeScript, GraphQL, and WebAssembly.",
                          biographyJa: "ソフトウェアエンジニア。 TypeScript や GraphQL、WebAssemblyに興味あり。"
                      }
                  }, {
                      node: {
                          uuid: "fred-schott",
                          name: "Fred K. Schott",
                          biography: "Fred Schott is a JavaScript developer in San Francisco, CA. He is currently working on Pika - a collection of tools and projects to move the JavaScript ecosystem forward. He likes cute dogs. Please share cute dog photos with him if you have any.",
                          biographyJa: "Fred Schott はカリフォルニア州サンフランシスコ在住の JavaScript エンジニアです。彼は現在 JavaScript のエコシステムを発展させていく Pika の開発をしています。彼はかわいい犬が好きなので、もし犬の写真を持っていたらぜひシェアしてください。"
                      }
                  }, {
                      node: {
                          uuid: "guillermo-rauch",
                          name: "Guillermo Rauch",
                          biography: "[feel free to abridge] Guillermo Rauch is the founder of ZEIT, co-creator of Now and Next.js, and former CTO and co-founder of LearnBoost and Cloudup, acquired by Wordpress.com in 2013. His background and expertise is in the realtime web. He's the creator of socket.io, one of the most popular JavaScript projects on GitHub, with implementations in many different programming languages and frameworks (currently running the realtime backend of high profile apps like Microsoft Office online). He created the first MongoDB ORM for Node.JS, MongooseJS. Before that he was a core developer of the MooTools JavaScript framework. He's the author of \"Smashing Node.JS\" published by Wiley in 2012, best-selling book about Node.JS on Amazon in multiple programming categories. He's spoken at dozens of conferences all around the world about JavaScript and the realtime web, such as O'Reilly OSCon, QCon and NDC. Originally from Argentina, he dropped out of highschool and moved to the US to pursue his passions in the San Francisco startup world. He's passionate about open source as an education medium. He's a former mentor of an Open Source Engineering class organized and pioneered by Stanford, with students from Harvard, MIT, Carnegie Mellon, UPenn, Columbia and others.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "ginpei-takanashi",
                          name: "高梨ギンペイ",
                          biography: "A guy who writes JavaScript and make JapaneseSushi in Vancouver, Canada.",
                          biographyJa: "カナダのバンクーバーでJavaScriptを書いたりJapaneseSushiを握ったりしています。"
                      }
                  }, {
                      node: {
                          uuid: "hidetaka-okamoto",
                          name: "Hidetaka Okamoto",
                          biography: "Alexa Champions\nask-sdk core contributor\nAWS Samurai 2017\nDigitalcube Co. Ltd. Developer",
                          biographyJa: "Alexa Champions\nask-sdk core contributor\nAWS Samurai 2017\nDigitalcube Co. Ltd. Developer"
                      }
                  }, {
                      node: {
                          uuid: "henry-zhu",
                          name: "Henry Zhu",
                          biography: "",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "irina-shestak",
                          name: "Irina Shestak",
                          biography: "Irina is a Berlin-via-Londong-via-Vancouver engineer writing JavaScript and Rust over at MongoDB. Irina has given talks at conferences around the world about her various adventures in the world of programming, including JSConfAU, NodeFest Tokyo, NordicJS and BrazilJS.\n\nOutside of writing code in the code editor™, she makes zines (such as Data Ownership in Rust, Traits Traits Traits, A Smol Zine on HTTP/2), pets her cats Chashu and Nori, and maintains (give or take) 40 house plants.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "jxck",
                          name: "Jxck",
                          biography: "Web Developer in Japan [blog](https://blog.jxck.io) [mozaic.fm](https://mozaic.fm)",
                          biographyJa: "Web Developer in Japan [blog](https://blog.jxck.io) [mozaic.fm](https://mozaic.fm)"
                      }
                  }, {
                      node: {
                          uuid: "jan-lehnardt",
                          name: "Jan Lehnardt",
                          biography: "Jan is a developer from Berlin, Germany and works on Greenkeeper, CouchDB, and offline-first web technologies at Neighbourhoodie. He’s also the co-curator of JSConf EU, which ran for the 10th time this year.",
                          biographyJa: "Jan はベルリン在住のエンジニアで、現在 Neighbourhoodie Software にて Greenkeeper, CouchDB, 及びオフラインファーストな Web テクノロジーの開発を行っています。彼は今年で 10 年目の開催を行った JSConf EU の管理者でもあります。"
                      }
                  }, {
                      node: {
                          uuid: "jorge-bucaran",
                          name: "Jorge Bucaran",
                          biography: "Jorge Bucaran\n\nFrontend architecture @ Mercari. Creator of Hyperapp.",
                          biographyJa: "フロントエンドアーキテクチャー＠メルカリ。Hyperappのクリエイター。"
                      }
                  }, {
                      node: {
                          uuid: "jonny-kalambay",
                          name: "Jonny Kalambay",
                          biography: "Jonny works as developer at Zenhub and an instructor at Lighthouse Labs. He also makes programming tutorials on Youtube and Medium. When away from the keyboard, Jonny can be found studying languages, volunteering at the aquarium, scuba diving or taking care of his pet turtle Roshi.",
                          biographyJa: "ジョニーKalambayは、Zenhubのためのソフトウェアを書き込み灯台研究所でコーディングを教え、そしてYouTubeでチュートリアルを作ります。彼はまた、彼は野生生物教育や保全のための機械学習を使用するように促されたところで、バンクーバー水族館、でボランティア。彼はコーディングいない場合は、ジョニーは言語を勉強し、または彼のペットのカメを供給し、スキューバダイビングを見つけることができます。"
                      }
                  }, {
                      node: {
                          uuid: "jarrod-overson",
                          name: "Jarrod Overson",
                          biography: "Jarrod is a Director of Engineering at Shape Security where he led the development of Shape's Enterprise Defense. Jarrod is a frequent speaker on modern web threats and cybercrime and has been quoted by Forbes, the Wall Street Journal, CNET among others. He’s the co-author of O’Reilly’s Developing Web Components, creator of Plato, a static analysis tool for web applications, and frequently writes and records topics about reverse engineering and automation.",
                          biographyJa: "Jarrod は Shape Secutiry にて Director of Engineering として Shape のセキュリティを担保しています。彼は モダンな Web 驚異やサーバー犯罪について数々の発表をしており、Forbes, the Wall Street Journal, CNET など多くのニュースサイトにて取り上げられています。彼はオライリーの Web Components 本の共著者であり、Web アプリの静的解析ツールである Plato の開発者でもあります。彼はよくリバース・エンジニアリングや自動化についての記事を書いています。"
                      }
                  }, {
                      node: {
                          uuid: "jennifer-wong",
                          name: "Jennifer Wong",
                          biography: "Jennifer Wong is a self-taught software engineer at Mode Analytics. She spends her days making the web a prettier and more user-friendly place. She has written for Net Magazine and had projects covered by Mashable, Engadget, Gizmodo, and more. Jenn is an avid conference and Mozilla Tech speaker. She also loves eating, coding, and sleeping.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "kitson-kelly",
                          name: "Kitson Kelly",
                          biography: "Kitson (Kit or Kit-san) has been in technology for almost 25 years.  He currently works for ThoughtWorks as a Technical Principal, but his passion is contributing to open source.  He started contributing to Deno soon after Ryan Dahl announced the project in 2018 and has continued to be one of the core contributors to the project since then.",
                          biographyJa: "Kitson (Kit or Kit-san) はエンジニアを初めてもうすぐ 25 年になります。現在は ThoughtWorks にて、技術長 (Technical Principal) として努めていますが、彼の情熱は OSS 活動に捧げられています。彼は Ryan Dahl が 2018 年に Deno を発表してすぐにコントリビュートをはじめ、今では Deno の Core Contributor の一人として活躍しています。"
                      }
                  }, {
                      node: {
                          uuid: "kohei-kido",
                          name: "木戸 康平",
                          biography: "Co-Founder of CambrianRobotics, Inc. whose building obniz, an IoT service for all developers.\n\nHe had studied robotics at Waseda University Department of Modern Mechanical Engineering, and active as a Comprehensive Engineer, working on both software and hardware.",
                          biographyJa: "IoTサービスobnizを制作しているCambrianRobotics IncのCo-Founder。\n\n早稲田大学 総合機械工学研究科にてロボットの研究を行い、ハードウェア／ソフトウェアの複合領域エンジニアとして活動。"
                      }
                  }, {
                      node: {
                          uuid: "lena-morita",
                          name: "Lena Morita",
                          biography: "Lena Morita is a software developer who is passionate about the open web. As a JavaScript Engineer at [Automattic](https://automattic.com/), she strives to build applications that are accessible, performant, and inclusive. In the past, she was a designer for nearly a decade in both print and UI/UX. She also serves as a Director for the Tokyo chapter of [Women Who Code](https://www.womenwhocode.com/), a global non-profit supporting women in technology careers.",
                          biographyJa: "[Automattic](https://automattic.com/) で [Simplenote](https://github.com/Automattic/simplenote-electron) や [Happy Tools](https://happy.tools/) などのウェブアプリ開発に携わるエンジニア。出版物や UI/UX のデザインに従事した後、ウェブに目覚めて現職へ。テック業界で働く女性のキャリア支援を行う国際 NPO 法人、[Women Who Code](https://www.womenwhocode.com/) 東京支部のディレクターも務める。"
                      }
                  }, {
                      node: {
                          uuid: "masashi-ganeko",
                          name: "がねこまさし",
                          biography: "I joined node.js community to build server-side program to make use of new features of Web Browser. I am studying tools for programing languages such as LLVM and WASM. \nI am one of staff of WebRTC Meetup Tokyo / WebRTC Beginners Tokyo.",
                          biographyJa: "ブラウザの最新機能活かすにために必要なサーバーを手軽に構築できる環境として、node.jsの世界に足を踏み入れました。最近ではLLVMやWASMのような言語寄り\nの仕組みにも興味があります。\nWebRTC Meetup Tokyo および WebRTC Beginners Tokyo のスタッフです。\nインフォコム株式会社所属"
                      }
                  }, {
                      node: {
                          uuid: "masato-ohba",
                          name: "ohbarye",
                          biography: "Masato Ohba (@ohbarye) is currently an engineering manager at Quipper and works for StudySapuri, which is one of the most popular education services in Japan. He mainly develops web applications with Ruby on Rails and single page applications written in React.\n\nBesides his work, he recently started organizing an event and a community named Engineering Manager Meetup.",
                          biographyJa: "Quipperで教育サービス「スタディサプリ」の開発・運用をしています。Ruby on RailsによるWeb application、mobile application向けAPI開発、Single Page Application開発が主な業務内容です。\n\nまた、Engineering Manager Meetupというイベントを主催しています。"
                      }
                  }, {
                      node: {
                          uuid: "maxi-ferreira",
                          name: "Maxi Ferreira",
                          biography: "Maxi is a software developer and data scientist living in Córdoba, Argentina. He likes writing code that is fast, clear, and clean, in that order. Maxi currently works at Help Scout, where he specializes in web performance and the development of third-party JavaScript applications.",
                          biographyJa: "Maxi はコルドバ(アルゼンチン)在住のソフトウェアデベロッパー、及びデータサイエンティストです。 彼は 1 に実行が速く、2 にわかりやすく、そして 3 に綺麗なコードを書くのが好きです。彼は現在は Help Scout にて、Web パフォーマンスに特化した開発やサードパーティの JavaScript アプリケーションの開発を行っています。"
                      }
                  }, {
                      node: {
                          uuid: "mariko-kosaka",
                          name: "Mariko Kosaka",
                          biography: "",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "martin-splitt",
                          name: "Martin Splitt",
                          biography: "Martin Splitt is a developer advocate at Google. He is a friendly internet fairy and pretty decent at humaning and pretty good at computering,\nso he decided to use his computering to improve his and other's humaning.\n\nHe loves the open web and open source and helps to make things better with, but not limited to, code.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "masato-nishihara",
                          name: "Masato Nishihara",
                          biography: "",
                          biographyJa: "株式会社ラクス所属。\n新卒でラクスに入社し、Mail Dealer・Chat Dealer・配配メールなどの開発に従事。\n技術経験としてはPHP・Node.jsなどを4年ほど経験し、サーバサイドからフロントエンドまで幅広く担当。"
                      }
                  }, {
                      node: {
                          uuid: "maria-clara",
                          name: "Maria Clara",
                          biography: "Software Developer and former ML undergraduate researcher, currently building amazing digital experiences at Work & Co. Brazilian, dog mom and triathlete.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "nadieh-bremer",
                          name: "Nadieh Bremer",
                          biography: 'Nadieh Bremer is a graduated Astronomer, turned data scientist, turned data visualization designer, based near Amsterdam. She\'s working as a freelancer under the name "Visual Cinnamon". As 2017\'s "Best Individual" in the Information is Beautiful Awards, she focuses on uniquely crafted (interactive) data visualizations that both engage and enlighten its audience. Working for companies such as Google News Lab & UNESCO to small start-ups. From printed magazines to interactive experiences online to more promotionally focused visuals for press releases, data-driven reports, and data art.',
                          biographyJa: 'Nadieh Bremer は天文学者として大学を卒業し、データ・サイエンティストへと身を転じ、今ではアムステルダムの近くに拠点をおき、データ・ビジュアル・デザイナーとして活躍しています。"Visual Cinnamon" という名前でフリーランス活動を行っており、2017 年に「Information is Beautiful」の最優秀賞を受賞しました。 彼女が創る独特かつインタラクティブなデータビジュアリゼーションは人々の心に火を灯します。彼女は Google News Lab や UNESCO から小さいスタートアップなど数々なクライアントと働き、\n雑誌のデザインからインタラクティブな Web 体験、プレスリリース、データドリブンなレポートからデータアートまで幅広く活動を行っています。'
                      }
                  }, {
                      node: {
                          uuid: "nobuhiko-sawai",
                          name: "澤井宣彦",
                          biography: "",
                          biographyJa: "株式会社FiNC Technologiesにて、Railsを用いたマイクロサービスアーキテクチャによるアプリのサーバサイドとReact.jsを用いた法人向けサービスのフロントエンド開発を担当する。"
                      }
                  }, {
                      node: {
                          uuid: "nazanin-delam",
                          name: "Nazanin Delam",
                          biography: "Nazanin Delam is a Senior Software Engineer at Netflix. Nazanin is passionate about UI development, she loves ❤️ JavaScript. At Netflix, she works on UI features on the WEB to enhance user experience across devices. Prior to Netflix, she worked in the Finance industry as a Software Architect for four years. 👩🏻‍💻\n\nNazanin is dedicated to advancing the role of women in engineering.👩👩🏻👩🏼👩🏽👩🏾 She volunteers with Hour of Code teaching high school girls how to  code and serves as a member of Women Who Code and Women Tech Makers to mentor engineers.\n\nWhen she’s not working, you’re most likely to find Nazanin building AI applications and robots with ❤️ JS, exploring the world, playing games, or curled up with a good book. 📚",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "okuno-kentaro",
                          name: "奥野 賢太郎",
                          biography: "Front-end developer and Node.js back-end developer, Web Audio Engineer",
                          biographyJa: "クレスウェア代表、Angular日本ユーザー会オーガナイザ。DDDを用いた大規模アプリケーション設計・開発を得意とし、TypeScriptを用いたクライアントサイド・サーバーサイド開発を手掛ける。"
                      }
                  }, {
                      node: {
                          uuid: "praveen-yedidi",
                          name: "Praveen Yedidi",
                          biography: "Praveen is a multi-disciplined engineer with almost a decade of experience spanning various client, server and cloud infrastructure technologies. He is a conference speaker and an active open source contributor. He contributed to projects like Kubernetes, gVisor, Grafana, Terraform, firecracker-containerd. He loves building cool things that help teams build cool things!",
                          biographyJa: "Praveen は多方面に渡って活動するエンジニアです。ここ 10 年間ほど、様々なクライアントサイド、サーバーサイド、及びクラウドインフラ回りを携わってきました。彼は様々なカンファレンスで発表を行い、OSS に積極的に貢献しています。貢献してきたプロジェクトは Kubernetes, gVisor, Grafana, Terraform, firecracker-containerd など。チームがクールな物作りを出来るような、クールなものを作り上げるのが大好きです。"
                      }
                  }, {
                      node: {
                          uuid: "rowdy-rabouw",
                          name: "Rowdy Rabouw",
                          biography: "Rowdy Rabouw is a web developer with over 20 years’ experience in HTML, CSS, JavaScript and PHP. He’s been working as a freelancer since 2004 and has been employed by the Dutch insurance company Nationale-Nederlanden since 1992. Currently, he is a Senior Developer working on Vue.js, Node.js and NativeScript projects and is a Progress Developer Expert for NativeScript.",
                          biographyJa: "Rowdy Rabouw は Web エンジニアとして 20 年以上 HTML, CSS, JavaScript, 及び PHP に携わっています。彼は 1992 年にオランダの保険会社である Nationale-Nederlanden に努め、2004 年からはフリーランスエンジニアとして活動しています。現在は Senior Developer として Vue.js, Node.js および NativeScript で開発しており、NativeScript の Progress Developer Expert でもあります。"
                      }
                  }, {
                      node: {
                          uuid: "shirley-wu",
                          name: "Shirley Wu",
                          biography: "Shirley Wu is an award-winning creative focused on data-driven art and visualizations.  She has worked with clients such as Google, The Guardian, SFMOMA, and NBC Universal to develop custom, highly interactive data visualizations.  She combines her love of art, math, and code into colorful, compelling narratives that push the boundaries of the web.  Her work can be found at sxywu.com.",
                          biographyJa: "Shirley Wu はデータ・ドリブン・アートとビジュアリゼーションに関して様々な受賞歴を持つクリエイターです。彼女は Google, The Guardian, SFMOMA, NBC Universal など、様々なクライアントと共に働き、カスタマイズされたインタラクティブなデータヴィジュアライゼーションを実装しています。彼女は彼女が持つアート、数学、コーディングに対する情熱をカラフルで 説得力のあるストーリーを創造し、Web の限界を広げています。彼女の作品は sxywu.com にて確認できます。"
                      }
                  }, {
                      node: {
                          uuid: "sho-miyamoto",
                          name: "Sho Miyamoto",
                          biography: "Working on {browser, server, edge}-side web development at newspaper company. Interested in performance, browser and standards.\n\nhttps://github.com/antidotech\nhttps://twittercom/antidotech",
                          biographyJa: "TODo"
                      }
                  }, {
                      node: {
                          uuid: "sakakibara",
                          name: "榊原昌彦",
                          biography: "",
                          biographyJa: "Ionic Japan User Group 代表、Ionic Framework コントリビューター、一般社団法人リレーションデザイン研究所代表など。著書「Ionicで作るモバイルアプリ制作入門」。"
                      }
                  }, {
                      node: {
                          uuid: "sacha-greif",
                          name: "Sacha Greif",
                          biography: "Sacha Greif is an independent designer and developer. He runs Sidebar, a daily design newsletter, and also created Vulcan.js, a full-stack JavaScript framework.",
                          biographyJa: "Sacha Greif は独立したデザイナー及びエンジニアです。彼は Sidebar と言うデザインのメールマガジンを運営しており、フルスタックな JavaScript フレームワークである、Vulcan.js の作者でもあります。"
                      }
                  }, {
                      node: {
                          uuid: "satoshi-ebihara",
                          name: "海老原 圭吾",
                          biography: "",
                          biographyJa: "Fringe81株式会社でフロントエンドエンジニアをしています。\n普段はUniposというElmで作られたプロダクトの開発をしています。"
                      }
                  }, {
                      node: {
                          uuid: "samuel-agnew",
                          name: "Samuel Agnew",
                          biography: "Sam Agnew is a developer evangelist at Twilio and loves showing developers around the world the joys of creative coding. He particularly enjoys being a member of the JavaScript and Python communities in New York City. The only thing he finds more satisfying than writing code is playing fast guitar solos and hacking old video games.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "sam-bellen",
                          name: "Sam Bellen",
                          biography: "I'm Google Developer Expert who works as a Developer Advocate Engineer at Auth0. At Auth0 we're trying to make authentication and identification as easy as possible, while still keeping it secure.\n\nAfter office hours I like to play around with the web-audio API, and other \"exotic\" browser API's. One of my side projects is a library to add audio effects to an audio input using JavaScript.\n\nWhen I'm not behind a computer, you can me find playing the guitar, having a beer at a concert, or trying to snap the next perfect picture.",
                          biographyJa: ""
                      }
                  }, {
                      node: {
                          uuid: "toru-kobayashi",
                          name: "Toru Kobayashi",
                          biography: "Web Application Developer in Tokyo.\nWorking at Frontend Expert Team in Cybozu and SmartHR as Frontend Advisor.\n\nI enjoy writing code on OSS.\nhttps://github.com/koba04",
                          biographyJa: "Web Application Developer in Tokyo.\nWorking at Frontend Expert Team in Cybozu and SmartHR as Frontend Advisor.\n\nI enjoy writing code on OSS.\nhttps://github.com/koba04"
                      }
                  }, {
                      node: {
                          uuid: "takuto-wada",
                          name: "Takuto Wada",
                          biography: "",
                          biographyJa: "学生時代にソフトウェア工学を学び、オブジェクト指向分析/設計に傾倒。執筆活動や講演、ハンズオンイベントなどを通じてテスト駆動開発を広めようと努力している。 『プログラマが知るべき97のこと』（オライリージャパン、2010）監修。『SQLアンチパターン』（オライリージャパン、2013）監訳。『テスト駆動開発』（オーム社、2017）翻訳。 power-assert-js 作者。"
                      }
                  }, {
                      node: {
                          uuid: "tetsuharu-ohzeki",
                          name: "Tetsuharu OHZEKI",
                          biography: "Open Source Software Engineer.",
                          biographyJa: "Open Source Software Engineer."
                      }
                  }, {
                      node: {
                          uuid: "takeshi-kato",
                          name: "加藤 健志",
                          biography: "",
                          biographyJa: "株式会社ミツエーリンクスでUI開発者として、主にフロントエンド開発を行っています。その他、フロントエンドブログの執筆や、新規サービスのリリースにも携わっています。サウナが好きです。"
                      }
                  }, {
                      node: {
                          uuid: "yoshiki-shibukawa",
                          name: "Yoshiki Shibukawa",
                          biography: "Yoshiki is a 2nd year front-end developer at Future corporation. He is also the author of Real World HTTP.",
                          biographyJa: "フューチャー歴2年でフロントエンド開発含めていろいろやっています。Real World HTTPの著者です。"
                      }
                  }, {
                      node: {
                          uuid: "yosuke-furukawa",
                          name: "古川 陽介",
                          biography: "",
                          biographyJa: "㈱リクルートテクノロジーズ所属。Node.js日本ユーザーグループ代表であり、大人気イベント「東京Node学園」の主催者。HTML5expertsにも選ばれている。"
                      }
                  }]
              },
              allTalksYaml: {
                  edges: [{
                      node: {
                          uuid: "andy-hall",
                          title: "Four Years of JS Procedural Generation",
                          titleJa: "4年分のプロシージャルなJS",
                          description: "Making things is hard. Why not make a *program* that makes things instead? That way you don't have to make the things, but things still get made. Easy!\n\nJoin me for a whirlwind tour of things made and lessons learned in four years of JS procedural content generation. With forays into voxel terrain, image synthesis, and dynamically created WebGL music, this talk will focus on high-level approaches that can be applied anywhere, even far afield from game development.",
                          descriptionJa: "物を作るのは大変。その代わりに、物を作ってくれるプログラムを作ってみない？そうすると物を作らなくても、物は作られる。あら簡単！\n\n本トークでは、約４年間プロシージャルコンテンツと遊んだ私が作った物や学んだレッスンを軽く紹介します。ボクセル世界、画像合成、そして動的なWebGL音楽などに触れながら、ゲーム開発に限らず幅広く使える概念やテクニックをお伝えします。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["andy-hall"]
                      }
                  }, {
                      node: {
                          uuid: "andrew-betts",
                          title: "Headers for Hackers",
                          titleJa: "Headers for Hackers",
                          description: "HTTP has been gradually adding lots of new and exotic headers, and more are on the way. Learn about current best practices with Vary, Link, Content-Security-Policy, Referrer-Policy, Client-Hints, Clear-Site-Data and Alt-Svc, upcoming features such as Feature-Policy and proposals like Variants, Early-Hints and Origin-Policy. HTTP gives you incredibly powerful control over many aspects of the way a browser will process the page, and is often a more effective or more secure option than trying to achieve the same effect with tags or script in the page.",
                          descriptionJa: "HTTP は今まで様々な新しく独特な header を追加してきており、今もなお追加され続けています。\n\n現存している Header の Vary, Link, Content-Security-Policy, Referrer-Policy, Client-Hints, Clear-Site-Data and Alt-Svc のベストプラクティスや、\nこれから来る Feature-Policy や Variants, Early-Hints and Origin-Policy などの Proposal について学びましょう。\nHTTP はブラウザがどのようにページをプロセスするかにおいてとてもパワフルな制御が行うことができる上、同じ効果をページ上のタグやスクリプトで得るよりも効果的かつ安全に行えます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["andrew-betts"]
                      }
                  }, {
                      node: {
                          uuid: "benjamin-gruenbaum",
                          title: "Anatomy of a Click",
                          titleJa: "Anatomy of a Click",
                          description: "What actually happens when you click your mouse in your browser window?\n\nIn this talk you'll take a deep dive into how your web browser works and what actually happens when a mouse is clicked. You will also take a deep dive into what browsers do, how events work internally and why.\n\nBenjamin will go through how web automation tools like Puppeteer and Selenium simulate user actions, when that goes wrong and why.\n\nIdeally at the end of the talk you will have a much deeper understanding of how browsers dispatch events and could utilize that knowledge to write better front-end code.",
                          descriptionJa: "ブラウザウィンドウ上でマウスをクリックしたとき、裏側では何がおこっているでしょう？\n\nこのトークでは、Web ブラウザがどのように動いているか、そしてマウスがクリックされたときに何が起こるのかについて、深く追求していきます。さらに、ブラウザが裏で何をしているか、内部でイベントはどう動いているのか、なぜそう動くのかについて話していきます。\n\nBenjamin は Puppeteer や Selenium のような Web 自動化ツールがどのようにユーザアクションを模倣するのか、どういうときに失敗するとか、なぜ失敗するのかについて話します。\n\nトークの終わる頃にはあなたブラウザがイベントをどのように発火しているかについてより深い知識を得ることができ、より良いフロントエンドのコードをかけるようになることを願っています。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["benjamin-gruenbaum"]
                      }
                  }, {
                      node: {
                          uuid: "claudia-hernandez",
                          title: "npm i -g @next-and-beyond: Building the future of package management",
                          titleJa: "npm i -g @next-and-beyond: Building the future of package management",
                          description: "It’s been 10 years since it all started. Ten years of continuously improving and revolutionizing package management for the modern web. One million published packages later, the npm registry is the largest repository of open source ever. The public registry and its accompanying CLI are here to stay.\n\nYou always wanted to contribute but didn’t know where to start? This is your talk! Let’s demystify the npm CLI, walk through it’s most hairiest bits and pieces, and chat about what’s coming up. With v7 and v8 on the works, the future looks promising: workspaces, first-class support for symbolic links, yarn.lock compatibility, performance and speed upgrades,  tink (a package unwinder for JS) and more are only but a few of the exciting new changes you can help us build!",
                          descriptionJa: "すべては１０年前にはじまった。１０年間、モダン Web の為の package management を改善し、変革を起こしてきた。publish された package は１００万を超え、今では npm registry は世界最大のオープンソースの為のリポジトリとなった。パブリックレジストリとその為の CLI は我々と共にある。  どこからコントリビュートすればいいかわからない？このトークはあなたにピッタリだ。npm CLI の謎を解き明かし、npm の今後について語ろう。npm v7 と v8 では workspaces, first-class support for symbolic links, yarn.lock 互換性、パフォーマンスと速度改善、tink (JS の package unwinder)などなど、様々な追加があり、これはまだ序の口だ。他にもエキサイティングな変更が待っている、それを自分たちの手で作っていこう！",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["claudia-hernandez"]
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-12:00",
                          title: "Open",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-13:00",
                          title: "Opening talk",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-B-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-C-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-B-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-C-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-B-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-C-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-B-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-C-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-18:15",
                          title: "Sponsor talk",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "dynamis",
                          title: "License violation of React Applications",
                          titleJa: "React アプリのライセンス違反について",
                          description: "Hi React app creators, are you sure your React applications don't violate license of React or dependent modules? Do you know if you are creating apps with CRA (Create React App), you will violate licenses of React by default? I'll talk about license notice problems and it's solutions.",
                          descriptionJa: "React アプリ作者の皆さん、React や依存モジュール群のライセンスに違反してない自信はありますか？CRA (Create React App) でアプリを作るとデフォルトで React のライセンス違反になってしまっているのはご存じですか？React のライセンス表記問題と解決策についてお話しします。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["dynamis"]
                      }
                  }, {
                      node: {
                          uuid: "day1-break-A-19:35",
                          title: "Party",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-10:00",
                          title: "Open",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "dominic-tarr",
                          title: "",
                          titleJa: "",
                          description: "",
                          descriptionJa: "",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["dominic-tarr"]
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-12:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-B-12:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-B-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-14:00",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-14:15",
                          title: "Panel discussion",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-14:15",
                          title: "Sponsor yahoo",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-14:45",
                          title: "Sponsor yahoo",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-B-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-15:15",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-15:30",
                          title: "Sponsor yahoo",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-16:00",
                          title: "Sponsor recruit",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-B-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-16:30",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-16:45",
                          title: "Sponsor recruit",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-17:15",
                          title: "Sponsor recruit",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-B-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-C-17:45",
                          title: "Break",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-18:00",
                          title: "Sponsor talk",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "day2-break-A-19:00",
                          title: "Closing",
                          titleJa: null,
                          description: null,
                          descriptionJa: null,
                          spokenLanguage: null,
                          slideLanguage: null,
                          speakerIDs: []
                      }
                  }, {
                      node: {
                          uuid: "eiji-kitamura",
                          title: "Building one touch sign-in experience using WebAuthn",
                          titleJa: "WebAuthnを使ったOne touch sign-inの実装",
                          description: "WebAuthn is a browser API that enables strong authentication using public key based cryptography. In this session we will walk through basics of WebAuthn and how it works. Then we'll cover how to build a user experience that enables users to re-authenticate to a website using a fingerprint (or a biometric sensor).",
                          descriptionJa: "WebAuthn は公開キーと暗号をベースとした強固な認証を行えるブラウザの API です。このセッションでは、WebAuthn の基本をカバーし、Web サイト上で二度目以降の認証を指紋認証（それか他の生体認証）で行えるような UX を提供する方法を紹介します。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["eiji-kitamura"]
                      }
                  }, {
                      node: {
                          uuid: "fuji-goro",
                          title: "How to Boost Your Code with WebAssembly",
                          titleJa: "How to Boost Your Code with WebAssembly",
                          description: "WebAssembly is an executable format written in binary. It's known to reduce the duration of parsing, and its execution time is much faster compared to JavaScript. However, it also has many limitations.\n\nRecently, I've been hearing from many people wanting to write, or has been writing part of their code in WebAssembly to improve with performance.\n\nIs such a magical feature actually possible? How hard it is to accomplish? How much change will it make? I will report what I have learned from my experience of actually writing WebAssembly.",
                          descriptionJa: "WebAssemblyはバイナリ表現の実行可能形式です。JavaScriptと異なり、パースの時間を短縮できることや実行が高速であることがメリットとされていますが、制約も大きく扱いの難しい技術です。\n\nそんな中、「コードの一部をWebAssemblyで書いて高速化」ということをした、あるいはしたい、という話をしばしば目にするようになってきました。\n\nそんな夢のようなことが本当にできるのか、できるとしたらどのくらいの難易度で、どのくらいの効果があるのか。実際にやってみた結果を報告します。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["fuji-goro"]
                      }
                  }, {
                      node: {
                          uuid: "fred-schott",
                          title: "Pika: Reimagining the Registry",
                          titleJa: "Pika: レジストリの再創造",
                          description: "What if you could do web development today without a bundler?\n\nThis talk explores the good, the bad and the ugly of modern JavaScript development. Learn how Node.js, npm, React, Browserify and Webpack all influenced JavaScript's tooling-heavy evolution over the last decade. Then, look towards the future at how projects like Pika (www.pika.dev) are reimagining web development for 2019 and beyond. Finally, learn how you can start to leverage these modern projects today for faster, smaller, and less complex JavaScript applications.",
                          descriptionJa: "もし、今 Web の開発を Bundler 無しで行えるとしたら？\n\nこのトークではモダンな JavaScript 開発の良いところ、悪いところ、そして汚いところについて話します。この 10 年間、Node.js, npm, React, Browserify, そして Webpack がそれぞれ現在の JavaScript のツールに依存した進化にどのように影響してきたのか。そして、Pika (www.pika.dev) によって未来の Web 開発がどのようになっていくのか。そして最後に、今のモダンなプロジェクトから離れより速く、より小さく、そしてより簡潔な JavaScript アプリを作っていくにはどうしたら良いのか。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["fred-schott"]
                      }
                  }, {
                      node: {
                          uuid: "guillermo-rauch",
                          title: "",
                          titleJa: "",
                          description: "",
                          descriptionJa: "",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["guillermo-rauch"]
                      }
                  }, {
                      node: {
                          uuid: "ginpei-takanashi",
                          title: "Starting TypeScript from JavaScript",
                          titleJa: "JavaScriptのままでTypeScriptを始める",
                          description: "When you use `--allowJs` and `--checkJs` option for typescript, you can run `tsc` while having `*.js` files. This talk will be about being able to work on projects with some type safety, for small projects or projects that cannot convert to typescript for what ever circumstances.",
                          descriptionJa: "TypeScript の --allowJs と --checkJs オプションを使うと *.js のまま tsc で型検証ができるので、コンパイルを開発手順に含めずに JS をそのまま扱う小さなプロジェクトや、あるいは導入できないあれやこれやの事情があっても型の恩恵に預かれる、という話をしたいです。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["ginpei-takanashi"]
                      }
                  }, {
                      node: {
                          uuid: "henry-zhu",
                          title: "Defining Open Source",
                          titleJa: "「オープンソース」の定義",
                          description: "Why is open source important? We all rely on it, whether we know it or not (programmer or not). And yet it's hard to grasp what it really represents: is it about the freedom of code, about giving freely in service of the greater community, or just whatever we want? I'd like to present some thoughts about the current status of this term, what maintainers actually do, and an idea of a future that still has open source.",
                          descriptionJa: "オープンソースはなぜ大事なのか？我々はみんな知らずともその恩恵を受けている。プログラマーであるかどうかは関係なしに。しかし、オープンソースが本来どういうものなのかを把握するのは難しい。\nコードの自由なのか？大きなコミュニティに無償で提供することなのか？それとも我々は好きにすればよいのか？オープンソースという言葉の現状について、そしてメンテナーは実際何をしているのか、そしてオープンソースの未来はどうなっていくのか、私が思うところについて発表します。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["henry-zhu"]
                      }
                  }, {
                      node: {
                          uuid: "hidetaka-okamoto",
                          title: "Build and scale multiple Voice application by using TypeScript",
                          titleJa: "Build and scale multiple Voice application by using TypeScript",
                          description: "We can build own voice application by using Node.js and TypeScript.\nAnd many people are starting development or publishing their own application.\nBut there are few contents to manage and maintain the several application source code.\n\nToday, I will talk about how to maintain several VUI application by a single repository.\n\n# Keywords\n- ask-sdk-model\n- Serverless Framework\n- SAM\n- AWS CDK\n- Lerna",
                          descriptionJa: "Alexaのような音声アプリケーションもNode.jsで開発することができます。\n個人で簡単に開発をはじめることができますが、まだ複数のアプリケーションを管理する方法についてはまだあまり国内で話題になっていません。\n\n今回は１つのコードベースを元に５つ以上のスキルを公開・アップデートするという取り組みを行うなかで気づいた点やTypeScriptを利用することで得られる恩恵などについて紹介します。\n\n# Keywords\n- ask-sdk-model\n- Serverless Framework\n- SAM\n- AWS CDK\n- Lerna",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["hidetaka-okamoto"]
                      }
                  }, {
                      node: {
                          uuid: "irina-shestak",
                          title: "JavaScript, Rust and Wasm Walk into a Ramen Shop ...",
                          titleJa: "JavaScript, Rust and Wasm Walk into a Ramen Shop ...",
                          description: "So you heard you can run WebAssembly in the browser, but what does this look like IRL? Seeking the much talked about performance benefits of running Wasm in the browser, Compass (GUI for MongoDB) took the great leap forward and rewrote part of the application -- a schema parser responsible for document analysis -- in Rust. As it turns out, the rumours are true, I repeat the rumours are true: offloading parts of your application to Rust makes it fast, and in some of our cases, heaps fast.\n\nIn this talk I will cover converting a part of an codebase from JavaScript to Rust, bringing it to Electron, adding Wasm to an existing React app, and deploying this whole lot to production. As Compass still talks to MongoDB via Node.js, I will also cover how we used Rust to improve performance without losing data integrity. This talk is about a success story, but also about a bunch of smol mishaps, fun woopses and lil' dead ends we encountered and how we managed to overcome along the way.",
                          descriptionJa: "WebAssembly がブラウザで動くのはご存知かとおもいます。しかし、実際にはどういったものなのでしょう？ 世に溢れてる Wasm によるブラウザのパフォーマンス改善を読み解き、Compass (MongoDB 用の GUI)は大きな一歩を踏み出し、アプリの一部 - ドキュメント検証のためのスキーマパーサ - を Rust に書き換えました。結果、噂は本当でした、大事なことなので二回言います、噂は本当でした！アプリの一部を Rust に置き換えることはパフォーマンス改善に大きく繋がります。ときには、heap も高速化します。\n\nこのトークでは、JavaScript で書かれたアプリの一部を Rust に書き換え、Electron に持っていき、既存の React アプリに Wasm を組み込み、それをプロダクションに持っていくことについて話します。Compass の MongoDB との接続部分は Node.js で動いているので、どの様にデータの整合性を保ったまま Rust を使いパフォーマンスを改善したのかについても話します。このトークはサクセスストーリーですが、その裏で起きた細かいハプニングや、うっかりや行き詰まり、そしてそこをどう乗り越えたまでを公開します。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["irina-shestak"]
                      }
                  }, {
                      node: {
                          uuid: "jorge-bucaran",
                          title: "Hypercharged",
                          titleJa: "Hypercharged",
                          description: "Write what, not how: A declarative approach to presentation, side effects, and subscriptions.",
                          descriptionJa: "宣言的アプローチで行うプレゼンテーション、サイドエフェクト、そしてサブスクリプション",
                          spokenLanguage: "en/ja",
                          slideLanguage: "",
                          speakerIDs: ["jorge-bucaran"]
                      }
                  }, {
                      node: {
                          uuid: "jennifer-wong",
                          title: "Time Is But an Illusion… in JavaScript",
                          titleJa: "時間はただの幻想である… JavaScriptにおいては",
                          description: "Time in JavaScript is weird. But why is time so terrible in JavaScript? Why do we need libraries like Moment.js? And what exactly are Greenwich Mean Time and Coordinated Universal Time.\n\nWith so much to worry about timing wise: formatting, time zones, internationalization, recurrence rules, leap years, daylight savings time, and more, everyone needs HELP!\n\nLet’s turn time into money by taking a look at the most popular time libraries and how we use them to solve JavaScript’s time problems. We’ll look at how JavaScript’s Date object started and what its prototype allows. We’ll wind our way through dates, times, and standards to find solutions to the weirdness.\n\nLet’s kill time together talking about JavaScript time! Because we know, time heals all.",
                          descriptionJa: "JavaScript における時間の扱いは少々特殊です。なぜ JavaScript の時間はこんなにも扱いにくいのだろう？ なぜ、Moment.js のようなライブラリが必要なんだろう？ Greenwich Mean Time と Coordinated Universal Times とは一体なんなんだろう？\n\nフォーマッティング、タイムゾーン、i18n 対応、繰り返し設定、うるう年、サマータイム、などなど、時間については全人類悩んでいます！\n\n時は金なりです。時間を扱うポピュラーなライブラリを使って、私達が JavaScript の時間問題をどう解決していっているかについて話します。JavaScript の Date object がどう始まったかについて、そしてその prototype で何が出来るかについて見ていきます。時のねじれを読み解き、日付や時間の対処法を見つけていきます。\n\nJavaScript の時間について話して時間を潰しましょう！なぜなら時間はすべてを解決してくれるから。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["jennifer-wong"]
                      }
                  }, {
                      node: {
                          uuid: "jxck",
                          title: "",
                          titleJa: "",
                          description: "",
                          descriptionJa: "",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["jxck"]
                      }
                  }, {
                      node: {
                          uuid: "jarrod-overson",
                          title: "Analysis of an exploited npm package",
                          titleJa: "悪用された npm パッケージの分析",
                          description: "How did 8 million developers download malicious code with no one noticing?\n\nIn late 2018, a popular node.js package changed ownership. This package became the delivery mechanism for malicious code that traversed through multiple environments to inject its final payload into a mobile application. This exploit existed in the wild for 48 days and was downloaded over 8 million times before it was found. How was it found? What was its purpose and how did it happen in the first place?\n\nThis exploit is one example of a well-planned, sophisticated attack that targeted the most valuable and privileged computers in a company, development and build machines. In this session we will dive into how the attack happened, the three payloads, how they worked, how they were obfuscated, and what their goal ultimately was.\n\nThis is not node/npm specific and any public repository of source code is vulnerable. This is a growing risk that many companies are absorbing without fully understanding and, without better management, will inevitably lead to incredible exploits in the future.",
                          descriptionJa: "悪意あるコードは 800 万人もの開発者の目をすり抜けてどうダウンロードされてしまったのか？\n\n2018 年の終わり頃、ある node.js のパッケージのオーナーシップが譲渡されました。そのパッケージは複数の環境下を横断し、最終的にモバイルアプリまでの経路を司る悪意のあるパッケージとなりました。この搾取は 48 日間続き、見つかるまでに 800 万件以上のダウンロードが行われました。どう発見されたのか？何が目的だったのか？そしてどうして起こってしまったのか？\n\nこれは良く計算、洗練された、会社の最も大事なシステムや開発、ビルドマシンが狙われた攻撃の一つの例です。このセッションではこの攻撃がどう行われたか、３つの Payload がどう動いていたか、それがどう難読化されていたか、そしてそれが何を目的としていたかについて発表します。\n\nこれは node/npm に限った話ではなく、パブリックなソースコードのリポジトリ全てで起こりうることです。これは多くの会社が全てを理解しないまま抱えている、今もなお育っているリスクであり、マネジメントしていかなければ、今後さらなる被害を与えかねません。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["jarrod-overson"]
                      }
                  }, {
                      node: {
                          uuid: "jonny-kalambay",
                          title: "Discovering Animals with AI and Javascript",
                          titleJa: "AIとJavaScript による生物認識",
                          description: "Learn how to identify objects and animals using machine learning and Javascript, with a practical example. Here's what we will go over:\n\n- Quick introduction to machine learning\n- How it can be done on the mobile browsers with Tensorflow JS\n- Walkthrough of building a dog-identification app\n- Advanced machine learning practices\n- Performance considerations\n\nA little bit of Javascript experience is preferred, but developers of all levels can learn from this talk!",
                          descriptionJa: "このプレゼンテーションでは、実用例でJavascriptとマシーンラーニングで生き物の種類を認識する方法を紹介します。\n\nプレゼンテーションの５つのポイント：\n- マシンラーニングの基本\n- Tensorflow JS と携帯のブラウザを使いその過程を作成する\n- 簡単な犬の種類を認識するアプリを開発する方法\n- マシンラーニングの高度な概念\n- パフォーマンス考慮事項.\n\n経験がある全レベルのJavascript開発者の方が対象です。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["jonny-kalambay"]
                      }
                  }, {
                      node: {
                          uuid: "kitson-kelly",
                          title: "Deno - A new way to JavaScript",
                          titleJa: "Deno - JavaScript の新たな道筋",
                          description: "Deno is a secure TypeScript/JavaScript runtime built with Rust and V8.  In this talk we will discuss the brief yet interesting history of Deno so far, the current state of the project, some of the design decisions and architecture, as well as provide a live demonstration.",
                          descriptionJa: "Deno は Rust と V8 でビルドされたセキュアな TypeScript/ JavaScript のランタイムです。この発表では、Deno の簡潔な、それでいて興味深い歴史と、Deno の現状、そして Deno のデザイン設計や構造について、ライブデモ込みで話していきます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["kitson-kelly"]
                      }
                  }, {
                      node: {
                          uuid: "kohei-kido",
                          title: "IoT development with modern web technologies",
                          titleJa: "最新のWeb技術でIoT開発をする",
                          description: 'JavaScript can be used various cases, like HTML dynamically from the client side, or handle computations on server side.\nWhat it can also do is to manipulate physical things in "real side" such as motors and sensors. With the power of JavaScript, we are able to express things beyond what is being displayed on the screen , and get current state of real life such as getting the number of people in a room.\n\nIn this session, you will learn about "real side" development in JavaScript. What tools can be used, and what can be done with it.',
                          descriptionJa: 'JavaScriptはクライアントサイドでHTMLを動的に動かしたり、サーバーサイドとして様々な処理をしたりすることができますが、リアルサイドとして現実世界のモーターやセンサなどの"もの"を制御することもできます。リアルサイドでもJavaScriptを使うことで、ディスプレイの枠にとらわれない表現方法が可能になったり、部屋に人がいるかなどの現実の状態を取得する事が可能になったりと、できることがまた一段と広がります。 本セッションではJavaScriptでのリアルサイドについて、どんな技術選択肢があるかから扱う方法、どういったものが作れるか等についてお話します。',
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["kohei-kido"]
                      }
                  }, {
                      node: {
                          uuid: "lena-morita",
                          title: "Awakened by Accessibility",
                          titleJa: "覚醒するアクセシビリティ",
                          description: "How did discovering the principles of accessibility make me realize that I was born to build things for the web?\n\nWhether you have no idea what accessibility is, or you do but never seem to have time for it, let’s first contemplate on what the web actually is, and we’ll likely come out with an irresistible urge to build an accessible web.",
                          descriptionJa: "どんなエンジニアになろうか決めかねていた自分が、ある日突然「私はウェブをやるために生まれてきた」と思うに至った、アクセシビリティの話です。\n\n「アクセシビリティって何？」という人から、「大事なのはわかっているけどいつも後回しにしてしまう」という人まで、明日からアクセシブルな実装をせずにはいられない、ウェブの本質に迫ります。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["lena-morita"]
                      }
                  }, {
                      node: {
                          uuid: "martin-splitt",
                          title: "Technical SEO for JavaScript developers",
                          titleJa: "JS開発者のためのSEOテクニック",
                          description: "I am sick and tired of SEOs, marketing folks and developers spreading fear, uncertainty and doubt about SEO and JavaScript.\n\nIn this talk I want to give web developers a sound understanding of how Googlebot and other crawlers see your content and what are common pitfalls to avoid.\n\nWe will look into\n\n- How crawlers find and index your content\n- What works and what doesn’t\n- Common misconceptions and mistakes and how to avoid them\n- Debugging tools and techniques to make sure people can find the things you put on the web",
                          descriptionJa: "もうつかれた。SEO にもマーケティングにも開発者が SEO と JavaScript について不安や疑惑を抱いていることについてもこりごりだ。\n\nこのトークでは Web 開発者に向けて、Googlebot や他の Crawler があなたのコンテンツをどう見ているか、そしてよくある落とし穴をどう避けるかについて、わかりやすく説明する。\n\n以下のことについて語っていく。\n\n- Crawler があなたのコンテンツをどう見て index するか。\n- 何が動いて何が動かないのか。\n- よくあるミスや勘違いとそれらの対処法。\n- あなたが Web 上に上げたものを他の人が見つかる様にするデバッグツールやテクニック。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["martin-splitt"]
                      }
                  }, {
                      node: {
                          uuid: "maria-clara",
                          title: "You might also like...",
                          titleJa: "You might also like...",
                          description: "Think about Netflix, Spotify or your favorite e-commerce, a lot of content we consume and products we buy come from recommendations made by machines. recommender systems, the mechanism behind those machines have become increasingly popular over the past years to help us cope with information overload.\n\nIn this talk, I present how to leverage graph theory to build your own recommender system with JavaScript.",
                          descriptionJa: "Netflix や Spotify、それかあなたの好きな E コマースサイトを想像してみてください。我々が購入するコンテンツやプロダクトの多くは機械が作成したおすすめから来ているものです。おすすめシステム、そしてその裏側で動いているメカニズムは近年多くの注目を浴びてきており、情報過多な現代を乗り越えるのに役立っています。\n\nこのトークでは、グラフ理論を用いて、JacaScript で自分だけのおすすめシステムを作成する方法について発表します。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["maria-clara"]
                      }
                  }, {
                      node: {
                          uuid: "maxi-ferreira",
                          title: "Cache Me If You Can",
                          titleJa: "Cache Me If You Can",
                          description: "Web caching is one of the most powerful techniques you can use to improve the performance of your websites. But like with many other optimization methods, it's not always clear where to start. When should you cache your resources? For how long? And how do you invalidate them? It can be an intimidating subject; but fear not, understanding its fundamentals is surprisingly simple.  In this talk, I will walk you through the basics of HTTP Caching: how it works, how to manage it, and how to implement simple but effective strategies that will make your sites faster, leaner, and more responsive.",
                          descriptionJa: "Web キャッシュは Web サイトのパフォーマンスを改善する最もパワフルなテクニックの一つです。しかし、他のパフォーマンス改善メソッドのように、どこから始めればいいのかがわかりにくいこともあります。どの段階でリソースのキャッシュを行えばいいのか？いつまで持っていればいいのか？どうやって無効にするのか？複雑さに威圧されてしまうかもしれません。でも安心してください、基本を理解すれば驚くほど単純です。このトークでは、HTTP キャッシュの基本について案内します。どういうものなのか、どう管理するのか、あなたのサイトをより高速、より軽く、よりレスポンシブにする単純かつ効果的な導入方法について発表します。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["maxi-ferreira"]
                      }
                  }, {
                      node: {
                          uuid: "masashi-ganeko",
                          title: "Build tiny node.js - WASM/WASI compiler using node.js",
                          titleJa: "Node.js でつくる Node.js - WASM/WASI ミニミニコンパイラー",
                          description: "his is a continuation of last year's session, \"Build Node.js mini-interpreter and mini-compiler\". To learn WASM, I've built a tiny WASM compiler using Node.js. \nI would like to talk about some difference between WASM and LLVM, and my small challenge for supporting WASI runtime.",
                          descriptionJa: "昨年のセッション「Node.jsでつくるNode.js ミニインタープリター/コンパイラー」の続編です。WASMを学ぶために、Node.jsでミニミニWASMコンパイラーを作ってみました。LLVMとの仕組みの違いや、ちょっとだけWASIを間見た話をお伝えします。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["masashi-ganeko"]
                      }
                  }, {
                      node: {
                          uuid: "masato-nishihara",
                          title: "",
                          titleJa: "正攻法はあるのか !? 泥臭く戦った Node.js バージョンアップ一部始終",
                          description: "",
                          descriptionJa: "BtoBtoC Web チャットシステム（SaaS）のチャットディーラー。（https://www.chatdealer.jp/） 先日、EOL を迎えることになった Node.js の 6 系をバージョンアップすることになりました。 社内での知見は無く、初めての試みとなりました。 今後の EOL サイクルを考え 8 系ではなく一気に 10 系にすることに決まりましたが、 新人の頃から独学で Node.js と付き合ってきた私はバージョンアップに関する正攻法がわからないまま手探りで進めていくことに… モジュールのバージョンアップで苦労したり、全機能テストを複数回実施するなど泥臭い作業の果てに、 何とかリリースまでたどり着き一安心かと思った矢先にトラブルが発生。 トラブル対応している中で Node.js についてコアの livuv を調べるなど、より詳しくなる機会がありました。 そんな Node.js バージョンアップでの奮闘内容をお話したいと思います。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["masato-nishihara"]
                      }
                  }, {
                      node: {
                          uuid: "masato-ohba",
                          title: "Migration from React Native to PWA",
                          titleJa: "Migration from React Native to PWA",
                          description: '## Target Audience\n\n- Developers who are thinking of developing multi platform applications in a cross platform development framework.\n- Developers who have been creating and maintaining Native Apps without the use of Native Language, and are thinking of migrating.\n- No experience of React Native Required.\n\n## Talk Overview\n\nIn the past few years, there has been cases of companies starting to write their applications in React Native, or companies like AirBnB switching from React Native to Native Language. There are also ongoing debates about "React Native vs PWA" and "React Native vs Swift/Kotlin". However, there aren\'t many examples of migrating React Native app to PWA.\n\nIn this talk, he will be presenting a case study of a project that has migrated from application made with React Native to PWA. Especially, the difference between "can be devleoped" and "can be maintained" and its hardship, as well as realization of good developer experience by building in web platform.\n\nThere are some project specific details in this use case, but the basic outline will be the following:\n\n- Background behind the decision of switching from React Native app to PWA\n- What was done to make the migration\n- What he has learned from developing and maintaining applications in the following pattern:\n  - React Native app that has support for both iOS and Android\n  - PWA/Hybrid app that has support for iOS/Android/Web',
                          descriptionJa: '## 対象とする聞き手\n- クロスプラットフォーム開発フレームワークによるアプリ開発やマルチプラットフォーム対応を考えている方\n- すでにネイティブ言語以外でのネイティブアプリ開発・運用をしており、マイグレーションを考えている方\n- React Nativeの利用経験は問いません\n\n## トークの内容\nここ数年でReact Nativeの導入・運用事例や、Airbnbの例に代表されるようにReact Nativeアプリをネイティブ言語で刷新する事例も耳聞するところとなりました。また、そうした時流での技術選定について「React Native VS PWA」「React Native VS Swift/Kotlin」のような二項対立で評価が行われることもあります。しかし、React NativeからPWAへと移行した事例について聞くことは多くありません。\n\nこのトークは、React Nativeで作られたアプリをPWAとして刷新したプロジェクトの事例を通じて得られた知見について話すケーススタディです。具体的には「""開発できる""は""運用できる""を意味しない」という辛みと、改めて気づく「Webというプラットフォームの開発体験の良さ」が軸になる予定です。\n\n同アプリが業務システムであることなど固有の事情もこの事例では含みますが、発表を通じて以下のことをお伝えします。\n\n- React Native appからPWAに移行するに至った経緯、技術選定\n- 移行において工夫したこと\n- 以下の2パターンのアプリケーションの開発・運用で学んだこと\n  - iOS/Android両プラットフォーム対応しているReact Native app\n  - iOS/Android/Webの3つのプラットフォームに対応するPWA/Hybrid app',
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["masato-ohba"]
                      }
                  }, {
                      node: {
                          uuid: "mariko-kosaka",
                          title: "",
                          titleJa: "",
                          description: "",
                          descriptionJa: "",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["mariko-kosaka"]
                      }
                  }, {
                      node: {
                          uuid: "nadieh-bremer",
                          title: "Visualizing Connections",
                          titleJa: "「繋がり」の可視化",
                          description: "Connections are a part of us, of the world. From the connections between people, between cultures, within language, and more. In these days when more data is collected daily than we could ever hope to explore, the variety in connections being gathered is opening up the possibility to visualize these (often complex) networks.\nDuring this talk, Nadieh will take you through the design process of several of her (interactive) data visualization works, from personal projects to client work. The common thread they all share, is that they all reveal connections, but all differently. From a family tree of 3000 people connected to the European Royal houses, to those existing between our Intangible Cultural Heritage created for UNESCO, to connections we have drawn in the night skies and more. Revealing that all types connections are unique and revealing the intricacies that lie within them requires a creative, iterative and custom approach.",
                          descriptionJa: "「繋がり」と言うのは我々の一部であり、世界の一部でもあります。人と人、文化間の繋がり、言語の繋がりなど様々です。我々が探求しきれないほどのデータが日常的に集まるこの現代において、発見されていく新たな繋がりは、ときには複雑なネットワークであっても可視化できる可能性を秘めています。\n\nこの発表では、Nadieh が作成した個人制作からクライアントとの作品まで、数々のインタラクティブなデータビジュアリゼーション作品におけるデザインプロセスについて話していきます。\nこれらの作品に共通していることは、これらが様々な「繋がり」を様々な方法で表していると言うこと。3000 人からなるヨーロッパ貴族の家系の繋がりや、UNESCO の様々な文化遺産の間にある繋がり、我々が夜空に描いた星々の繋がりなど。全ての繋がりは独特であり、その複雑さを解きほぐすにはクリエイティブな、反復的、かつ特殊なアプローチが必要なのです。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["nadieh-bremer"]
                      }
                  }, {
                      node: {
                          uuid: "nazanin-delam",
                          title: "Web Accessibility in a Nutshell",
                          titleJa: "Web Accessibilityのすゝめ",
                          description: "The internet is changing the way all of us are living, and Web applications should spark joy for everyone with any capabilities. How would you develop your website, if you knew all the people in Europe are not able to use it? Would you prioritize accessibility?\n\nIn this talk, I will go through best practices to create accessible UI components both in design and implementation and see how Netflix pioneers accessibility on its signup flow.",
                          descriptionJa: "人生は変化の連続であるように、インターネットもまた常に変化の連続である。Web アプリはどんな背景がある人でも「ときめき」を感じれるものでありたい。もし、ヨーロッパの人はこのサイトを使えないとわかっていたら、あなたならどのようにサイトを設計する？あなたはアクセシビリティを優先するだろうか？\n\nこのトークでは、UI のアクセシビリティ対応のベストプラクティスについて、デザイン観点と実装の観点から見ていきます。Netflix がアクセシビリティの先駆者としてどのようなサインアップのフローを設計しているかを伝えていきます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["nazanin-delam"]
                      }
                  }, {
                      node: {
                          uuid: "nobuhiko-sawai",
                          title: "Performance tuning in EC site with GraphQL",
                          titleJa: "GraphQLを用いたECサイトにおけるパフォーマンス改善",
                          description: "Overview: This talk will be about performance tuning based on actual case he experienced during renewal of E-Commerce site. The site is powered by GraphQL + React + SSR, and he will be talking about basic performance tuning as well as actual usecase of GraphQL.\n\nDuring renewal, we were using GraphQL + React + SSR, but as a result of prioritizing the release, the performance was not up to par, and speed insight showed 20s. As E-Commerce site requires decent amounf of items, and show special sales at time, the approach to improving the performance can be a bit different from static sites such as news websites. With this renewal, we were able to improve performance of a non-performant site to xxx (improvent is ongoing).\n\nWe will go in details for:\n\n- Separating the issue by applying appropriate performance measurement, using tools such as Speed insight and increasee performance of server by using APM tools usch as DataDog.\n- Improvement in Fronet-end side. (reducing bundle size, and utilizing lazy-loading)\n- Manage cache approprately (using HTML cache and separate user belonging contents to design GraphQL queries that can easily be cached.)",
                          descriptionJa: "概要: ECサイトリニューアルにおける事例を題材にサービスの性能改善の方法を実際の事例をもとにお話します。該当のサイトはGraphQL + React + SSRを導入しており、ベーシックな性能改善の話からGraphQLの活用例まで含めてお話する予定です。\n\nECサイトはリニューアル時にはGraphQL + React + SSRといった構成を採用していましたが、リリースを優先した結果、性能が十分ではなく、speed insightで20点台でした。ECサイトは商品数やキャンペーンによる価格変更などがあり、ニュースサイトのような静的コンテンツの多いサイトとは異なるパフォーマンス改善が求められます。こうした非常に低いパフォーマンスのサイトをn点（現在鋭意改善中）まで引き上げた事例を紹介します。\n\n具体的には以下のような内容を紹介する予定です。\n* 計測環境の導入による課題の抽出 (Speed insightの活用やDatadogなどのAPMツールを活用した計測環境の導入とそれによるサーバー側のパフォーマンス改善など）\n* フロントエンドサイドにおける改善 (bundle sizeの改善やlazy-loadの導入）\n* キャッシュ戦略 (HTML cacheやuser belongingなコンテンツを分離することによるcacheの効きやすいGraphQLのquery設計）",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["nobuhiko-sawai"]
                      }
                  }, {
                      node: {
                          uuid: "okuno-kentaro",
                          title: "Building the layered server application achieved by InversifyJS",
                          titleJa: "InversifyJSを用いたレイヤードアーキテクチャの構築",
                          description: "We have traditionally suffered from tightly coupled applications. The complexity of dependencies hinders testing and leads to confusion. Let's simplify it using the library InversifyJS for DIP (Dependency Inversion Principle).\n\nI will introduce the construction of a server application that combines InversifyJS, Knex.js, Express, and TypeScript.",
                          descriptionJa: '我々はかつてから、大きなアプリケーションを開発する際に、密結合に悩まされてきました。 依存関係の複雑さがテストを妨げ、生産性を低下させます。そこでDIP（依存性逆転の原則）を実現するためのライブラリ "InversifyJS"を導入することで、この問題を解決しましょう。\n\nInversifyJS, Knex.js, Express、そしてTypeScriptを組み合わせたサーバーアプリケーションの設計を紹介します。',
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["okuno-kentaro"]
                      }
                  }, {
                      node: {
                          uuid: "praveen-yedidi",
                          title: "Predictive Prefetching for improved performance",
                          titleJa: "予測的 Prefetching によるパフォーマンス改善",
                          description: "This talk outlines an idea for applying a data-driven approach to optimising loading performance on the web using Guess JS. By building a model of pages a user is likely to visit, given an arbitrary entry-page, a solution could calculate the likelihood a user will visit a given next page or set of pages and prefetch resources for them while the user is still viewing their current page. This has the possibility of improving page-load performance for subsequent page visits as there's a strong chance a page will already be in the user's cache.",
                          descriptionJa: "このトークでは Guess JS による Web におけるデータドリブンなパフォーマンス改善のアイデアについて話します。エントリーページからユーザがアクセスするであろうページのモデルを作成し、ユーザがまだ読んでいる間にそのページやページ郡の Prefetch を行いあらかじめ読み込んでおく。これによってユーザが次に読み込むページが高速になります、なぜならそれらのページはすでにキャッシュされているから。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["praveen-yedidi"]
                      }
                  }, {
                      node: {
                          uuid: "rowdy-rabouw",
                          title: "Browser APIs: the unknown Super Heroes",
                          titleJa: "Browser APIs: 知られざるヒーロー達",
                          description: "Still think browsers are only capable of parsing HTML, CSS and JavaScript? Think again!\nBrowsers have become much more powerful and contain numerous APIs that can enrich the user experience or are just plain fun.\n\nThis talk will introduce you to some of them (like Bluetooth, battery, speech, audio, location, ...) and show you how easy it is to unleash their power with JavaScript.",
                          descriptionJa: "未だにブラウザは HTML、CSS、JavaScript をパースするだけのものだと思っていませんか？考え直しましょう！\nブラウザはパワフルな成長を遂げ、UX の向上を測ったり、いろんな楽しいことができる数々の API が用意されています。\n\nこのトークでは、それらの API の一部、(Bluetooth, battery, speech, audio, location 等)を紹介し、その導入がいかに楽にできるのかについてお伝えします。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["rowdy-rabouw"]
                      }
                  }, {
                      node: {
                          uuid: "s-greif-r-benitte",
                          title: "The State of JavaScript",
                          titleJa: "The State of JavaScript",
                          description: "We run the yearly State of JavaScript survey (http://stateofjs.com). In this talk, we'll introduce the project, take a look back at past surveys and trends, and maybe even preview some of the results from the upcoming 2019 survey.",
                          descriptionJa: "我々は毎年 State of JavaScript (http://stateofjs.com) という JavaScript に関するアンケートを行っています。この発表では State of JavaScript についての紹介や、以前のアンケート結果やトレンドについて話していきます。さらに来たる今年のアンケートの結果のプレビューも行うかもしれません。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["benitte-raphael", "sacha-greif"]
                      }
                  }, {
                      node: {
                          uuid: "sho-miyamoto",
                          title: "Wrap-up: Runtime-friendly JavaScript",
                          titleJa: "Wrap-up: Runtime-friendly JavaScript",
                          description: "Let's wrap up what runtime-friendly performant JavaScript is like, introducing how runtime(such as v8, node.js etc.) handles scripts: Internal Representation, JIT, Eventloop etc. I will also mention tools(node options, chrome devtool) and the overhead of normal language feature(like object instantiation and Map/Set).\n\nPlot (draft)\n- Fundamentals\n   - Runtime\n   - IR & JIT\n- Node\n   - Async & non-blocking I/O\n   - Stream\n   - Eventloop\n       - libuv\n- V8\n   - Crankshaft, FullCodeGen, TurboFun, Ignition\n- Internal Representation\n   - Object IR\n       - elements & properties\n       - Hidden Class\n       - JSON.parse\n   - String IR\n       - flatstr\n   - Array IR\n   - Number IR\n- JIT\n   - Hot code\n   - Inline Cache\n- Tools\n   - trace: opt, deopt, ic\n   - chrome devtool\n   - (d8)\n- Principle of high performance\n   - Application\n       - Maintainability is first\n           - Various people will join your team\n       - Choose performant libraries\n           - Core functionarities are run many times\n       - Use util library instead of your own ones\n           - tested\n           - performant\n           - used\n   - Library\n       - Low-overhead is nicer\n           - (TBD)\n- Techniques\n   - Avoid runtime overhead\n       - Object instantiation\n       - Map, Set, Object\n       - Regexp\n   - Avoid blocking I/O\n       - Sync, Async\n       - Macro/micro tasks\n   - PIFE/IIFE\n- Performant libraries\n   - bluebird\n   - ajv\n   - pico(nearForm)\n   - fastify(nearForm)\n- Appendix\n   - node-gyp\n   - quickjs, hermes",
                          descriptionJa: "実行時に高速ランタイムフレンドリーな JavaScript とはどのようなものなのか？\nこのトークでは、v8, node.js などのランタイムが Internal Representation, JIT, Eventloop などを使用し、スクリプトをどの用に処理しているかについて話します。\nさらに、node options や chrome devtool などのツールを使う上でのテクニックや、\nobject のインスタンス化や Map, Set などの言語機能がどのような Overhead を抱えているかについて発表します。\n\nPlot (draft)\n\n- Fundamentals\n  - Runtime\n  - IR & JIT\n- Node\n  - Async & non-blocking I/O\n  - Stream\n  - Eventloop\n    - libuv\n- V8\n  - Crankshaft, FullCodeGen, TurboFun, Ignition\n- Internal Representation\n  - Object IR\n    - elements & properties\n    - Hidden Class\n    - JSON.parse\n  - String IR\n    - flatstr\n  - Array IR\n  - Number IR\n- JIT\n  - Hot code\n  - Inline Cache\n- Tools\n  - trace: opt, deopt, ic\n  - chrome devtool\n  - (d8)\n- Principle of high performance\n  - Application\n    - Maintainability is first\n      - Various people will join your team\n    - Choose performant libraries\n      - Core functionarities are run many times\n    - Use util library instead of your own ones\n      - tested\n      - performant\n      - used\n  - Library\n    - Low-overhead is nicer\n      - (TBD)\n- Techniques\n  - Avoid runtime overhead\n    - Object instantiation\n    - Map, Set, Object\n    - Regexp\n  - Avoid blocking I/O\n    - Sync, Async\n    - Macro/micro tasks\n  - PIFE/IIFE\n- Performant libraries\n  - bluebird\n  - ajv\n  - pico(nearForm)\n  - fastify(nearForm)\n- Appendix\n  - node-gyp\n  - quickjs, hermes",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["sho-miyamoto"]
                      }
                  }, {
                      node: {
                          uuid: "samuel-agnew",
                          title: "Playing Pokémon Together with Node.js",
                          titleJa: "Playing Pokémon Together with Node.js",
                          description: "Pocket Monsters filled many of our childhoods, and some of our adulthoods, with joy. In this live coding adventure, we will recapture the magic of playing Pokémon together with the help of a Twilio phone number built with server-side JavaScript interacting with Gameboy emulator scripts. By the end of this session, you will learn how to write video game emulator scripts and interact with them using Node.js and Express.",
                          descriptionJa: "ポケモンは多くの人の幼少期と、一部の人は成長してからも共にあり、喜びを与えてくれた。このライブコーディングセッションでは、その魔法のような喜びを Twilio の電話番号を組み込んだ Server Side JS で作成された Gameboy Emulator scripts で再現しよう。このセッションが終わった頃には、あなたはゲームの Emulator scripts を書き、それを Node.js と Express で動かせるようになるだろう。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["samuel-agnew"]
                      }
                  }, {
                      node: {
                          uuid: "shirley-wu",
                          title: "Build an interactive data visualization with Vue.js and D3.js",
                          titleJa: "Vue.js で D3.js を使ったインタラクティブなデータの可視化",
                          description: "As we generate more and more data in this world, many companies are now prioritizing visualizing these data to make sense of them.  D3.js is the most powerful tool for building custom data visualizations in the web, but also has quite a learning curve.  In this workshop, we will learn how to use D3.js to translate raw data into what we need to display them on a webpage, and use Vue.js to render them to the DOM and manage interactions between them.\n\nWith Vue.js and D3.js together, we can make highly custom, complex interactive visualizations in just a few hundred lines of code.",
                          descriptionJa: "この世に新たなデータを増やしていくたびに、多くの会社は集めたデータを自分達がわかるように可視化することに注力を上げています。D3.js は Web 上で好きなようにデータの可視化を行うための最高のツールですが、 習い始めがとても難しいです。このワークショップでは、D3.js の使い方を学び、生データを Web サイトで表示できる形に変換し、Vue.js を使って DOM に描画してユーザが動かせるところまで持っていきます。\n\nVue.js と D3.js を組み合わせれば、数百行のコードでインタラクティブでカスタマイズ可能なデータの可視化が実現できます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["shirley-wu"]
                      }
                  }, {
                      node: {
                          uuid: "shirley-wu",
                          title: "Build an interactive data visualization with Vue.js and D3.js",
                          titleJa: "Vue.js で D3.js を使ったインタラクティブなデータの可視化",
                          description: "As we generate more and more data in this world, many companies are now prioritizing visualizing these data to make sense of them.  D3.js is the most powerful tool for building custom data visualizations in the web, but also has quite a learning curve.  In this workshop, we will learn how to use D3.js to translate raw data into what we need to display them on a webpage, and use Vue.js to render them to the DOM and manage interactions between them.\n\nWith Vue.js and D3.js together, we can make highly custom, complex interactive visualizations in just a few hundred lines of code.",
                          descriptionJa: "この世に新たなデータを増やしていくたびに、多くの会社は集めたデータを自分達がわかるように可視化することに注力を上げています。D3.js は Web 上で好きなようにデータの可視化を行うための最高のツールですが、 習い始めがとても難しいです。このワークショップでは、D3.js の使い方を学び、生データを Web サイトで表示できる形に変換し、Vue.js を使って DOM に描画してユーザが動かせるところまで持っていきます。\n\nVue.js と D3.js を組み合わせれば、数百行のコードでインタラクティブでカスタマイズ可能なデータの可視化が実現できます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["shirley-wu"]
                      }
                  }, {
                      node: {
                          uuid: "shirley-wu",
                          title: "Build an interactive data visualization with Vue.js and D3.js",
                          titleJa: "Vue.js で D3.js を使ったインタラクティブなデータの可視化",
                          description: "As we generate more and more data in this world, many companies are now prioritizing visualizing these data to make sense of them.  D3.js is the most powerful tool for building custom data visualizations in the web, but also has quite a learning curve.  In this workshop, we will learn how to use D3.js to translate raw data into what we need to display them on a webpage, and use Vue.js to render them to the DOM and manage interactions between them.\n\nWith Vue.js and D3.js together, we can make highly custom, complex interactive visualizations in just a few hundred lines of code.",
                          descriptionJa: "この世に新たなデータを増やしていくたびに、多くの会社は集めたデータを自分達がわかるように可視化することに注力を上げています。D3.js は Web 上で好きなようにデータの可視化を行うための最高のツールですが、 習い始めがとても難しいです。このワークショップでは、D3.js の使い方を学び、生データを Web サイトで表示できる形に変換し、Vue.js を使って DOM に描画してユーザが動かせるところまで持っていきます。\n\nVue.js と D3.js を組み合わせれば、数百行のコードでインタラクティブでカスタマイズ可能なデータの可視化が実現できます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["shirley-wu"]
                      }
                  }, {
                      node: {
                          uuid: "sam-bellen",
                          title: "Passwords are so 1990",
                          titleJa: "パスワードは90年代の代物だ",
                          description: "As long as we’ve been using the internet, and way before that, we have been authenticating through some sort of username and password combination. It has become the standard. With the ever increasing number of web-apps, we’re seeing more and more data breaches as well. What if we could build our authentication processes in a way the user doesn’t need a password?\n\nIn this talk I will give a quick overview of the past, present and future of authentication. From basic authentication to passwordless biometric authentication using the web authentication API, and everything in between. The audience does not need any specific knowledge as this talk will not go into implementation details, but aims to give a view of what’s to come in terms of authentication.",
                          descriptionJa: "古代の時代から我々は認証プロセス何かしらのユーザー名とパスワードを組み合わせて行ってきた。それがあたりまえだった。現代の無限に増え続ける Web アプリの裏で、データブリーチの被害も増え続けている。もし認証にパスワードが必要なかったとしたらどうだろう？\n\nこのトークでは、認証プロセスのこれまでの歴史、現状、そしてこれからのことについて話します。認証の基本から Web Authentication API を使ったパスワードのいらない生体認証まで、そしてその間にある様々な認証についてを説明します。このトークを聴くのに特別な事前知識は必要ありません。このトークは実装の詳細について語るのではなく、あくまで認証の全貌について、これからどうなっていくのかを伝えていきます。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["sam-bellen"]
                      }
                  }, {
                      node: {
                          uuid: "sakakibara",
                          title: "Capacitor: linking JavaScript with Swift/Java, and the future of Web Frontend",
                          titleJa: "JavaScriptとSwift/JavaをつなげるCapacitorと、これからのWeb Frontned.",
                          description: "Capacitor has entered the table as a next generation cross-platform library using web technology.\nIt's unique feature is linking JavaScript with Swift/Java with ease. The world of JavaScript is no longer limited to just Web browsers.\n\nIn this session, he will present the overview of Capacitor, as well as devlopment of its plugins, and where the Web Frontend will be heading in the future.",
                          descriptionJa: "Web技術を使った次世代のクロスプラットフォームライブラリとしてCapacitorが登場しました。特徴は何といっても、JavaScriptとSwift/Javaの連携容易性です。JavaScriptの世界はWebブラウザに留まらない時代がやってきました。\n\n本セッションではCapacitorの概要とプラグイン開発、そしてWeb Frontendが今後どうなっていくかを考えます。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["sakakibara"]
                      }
                  }, {
                      node: {
                          uuid: "satoshi-ebihara",
                          title: "Developing with Elm in a large application",
                          titleJa: "大規模アプリケーション開発でのElm実践",
                          description: "I will be talking about Elm, an AltJS that has been the recent center of attention. Elm is a pure functional programming language. Usually, when we imagine a pure functional programming languages, they are often hard to work with, but Elm has some functions limited to have an easier learning curve. We have a profuct called Unipos, which is built with Elm with 6 front-end engineers. We have over 70k lines of Elm code in our production. This talk will be about my experience of using Elm in a large production, as well as some some trouble we had while making our product, Unipos.",
                          descriptionJa: "最近話題に上がるようになってきたAltJSのElmについてご紹介します。\nElmは純粋関数型プログラミング言語です。一般的な純粋関数型プログラミング言語は取っ付きにくく敷居が高いイメージがありますが、Elmはあえて言語機能を絞ることで簡単で安全なプログラムを書けるように設計されています。\nElmを使用しているUniposというプロダクトはフロントエンドエンジニア6人、Elmだけで7万LOCという規模で開発しています。\n実際にElmを大規模アプリケーション開発に使用して感じていることを、Uniposを題材にして失敗談も踏まえてお話します。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["satoshi-ebihara"]
                      }
                  }, {
                      node: {
                          uuid: "takuto-wada",
                          title: "JavaScript AST programming: Introduction and beyond",
                          titleJa: "JavaScript AST プログラミング: 入門とその1歩先へ",
                          description: "With the appearence of Babel and ESLint, the opportunity to play around with JavaScript's AST has been increasing. Still, most programmers seem to have never touched AST. In this session, he will begin with an introduction to AST, and explain some key points of programming in JavaScript AST, by creating a tool in a live coding format.",
                          descriptionJa: "Babel や ESLint の登場により JavaScript の AST に触れる機会は若干増えてきましたが、それでもほとんどのプログラマは触れたことがないのではないかと思います。このセッションでは、まず JavaScript AST の入門から始まり、ライブコーディング形式で実際にツールを作りながら、 JavaScript AST を扱うプログラミングの勘所をご覧いただきます。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["takuto-wada"]
                      }
                  }, {
                      node: {
                          uuid: "takeshi-kato",
                          title: "Understanding Streams API",
                          titleJa: "Streams APIをちゃんと理解する",
                          description: "Streams API is very hard to understand. Its usecases are still not much known to public. With the era of 5G coming around the corder, we may get an increase of video streaming with large files. Streams API will come in handy for those situations. In this talk, he will be talking about Streams API and its usecase, and how it works behind the scene.\n\n- This talk will be about Streams Web API. It will not include Stream in Node.js",
                          descriptionJa: "なかなか理解するのが難しいStreams API。その使いどころも未だ未知数です。5G時代を目前に控えた今、Web上でさらに大容量の動画などが配信され始めるかもしれません。そんなときに活躍するであろうStreams APIについて簡単なユースケースと共に仕組みを紹介します。\n\n※今回の内容はWeb APIとしてのStreamsです。Node.jsのStreamは含まれていません。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["takeshi-kato"]
                      }
                  }, {
                      node: {
                          uuid: "toru-kobayashi",
                          title: "Make it Declarative with React",
                          titleJa: "Make it Declarative with React",
                          description: "React is a JavaScript library for building user interfaces, which make UI programming declarative.\n\nWhat's the benefits of declarative programming over imperative programming?\nI'm going to explain why declarative programming is useful.\n\nDo you know that React isn't only for DOM?\nYou probably imagine react-native, which is to build Native Apps with React.\n\nWhat about other environments?\n\nReact has a way to create custom renderers so you can make anything declarative with React!!!\n\nIn this talk, I'm going to introduce the architecture of custom renderers and some ideas about existing custom renderers and build a new custom renderer on live coding!!!",
                          descriptionJa: "Reactは宣言的にUIを構築できるJavaScriptのライブラリです。\n\nこのトークではまず最初に、手続き的ではなく宣言的にUIを構築することのメリットについて改めて解説します。\n\nReactがDOM以外の環境に対しても使われていることを知っていますか？\nおそらく、ネイティブアプリを構築するためのReact Nativeについては知っている人も多いのではないでしょうか？\n\n他の環境についてはどうしょう？\n\nReactはそのためのカスタムレンダラの仕組みを持っています。\nそれを使うことで様々なものをReactを使って宣言的に記述出来るようになります！\n\nこのトークでは、カスタムレンダラのアーキテクチャや既存のカスタムレンダラについての紹介だけでなく、独自のカスタムレンダラをライブで作ってみたいと思います！\n\n※このトークは英語で行う予定ですが、日本語での補足も入れてながら行いたいと思います。",
                          spokenLanguage: "en",
                          slideLanguage: "",
                          speakerIDs: ["toru-kobayashi"]
                      }
                  }, {
                      node: {
                          uuid: "tetsuharu-ohzeki",
                          title: "Your benchmark may not guide a real application performance",
                          titleJa: "Your benchmark may not guide a real application performance",
                          description: "Are you working on improving a performance?\n\nBenchmark is one of the most important to shape a performance and evaluate an application. It’s always hot topic for a developer to measure a meaningful score by creating a benchmark and we tackle to try to make our application faster. A good benchmark is helpful to improve the performance for your application.\n\nHowever, it’s hard to create a helpful benchmark for your application because it requires an insight into a targeted software domain through profiling, observation, and development cycle. If you lack the insight, your application would never be faster.\n\nIn this session, we’ll talk about creating a helpful benchmark is hard and talk about lessons for an optimization with using a benchmark and tools from Web Engine knowledge.",
                          descriptionJa: "皆さんはソフトウェアパフォーマンスの改善に取り組んでいますか？\n\nベンチマークはアプリケーションのパフォーマンスを評価し形成するために最も重要なものの1つです。 ベンチマークの作成、意味のあるスコアの測定、それらを用いた実際のアプリケーションの高速化は開発者にとって常にホットな話題として存在しています。そして、優れたベンチマークはアプリケーションのパフォーマンスを向上させるのに何よりも役立ちます。\n\nしかしながら、アプリケーション開発において真に役立つベンチマークを作成することは非常に難しい取り組みのひとつでもあります。プロファイリング、監視、および開発サイクルを通じてターゲットソフトウェアドメインに対する洞察を必要とされるからです。もしこの洞察が不足している場合、アプリケーションは決して高速になることはありません。\n\nこのセッションでは、有用なベンチマークを作成するのは難しいということ、およびWeb Engineの知識に基づいたベンチマークとツールを利用した最適化についての知見について説明します。",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["tetsuharu-ohzeki"]
                      }
                  }, {
                      node: {
                          uuid: "yoshiki-shibukawa",
                          title: "Web Components era phase 2",
                          titleJa: "Web Components era phase 2",
                          description: 'WebComponents has been said to be the "upcoming feature", but it still has yet to be standarized. However, with Firefox supporting WebComponents, and Edge becoming Chromium base, we can say that we will get 100% native support in browsers. WebComponents can be integrated with existing products, and we can also reduce CPU cost of server side rendering. \n\nhttps://qiita.com/shibukawa/private/5a36147ec103d35c1b5e',
                          descriptionJa: "WebComponentsは長らく「将来の技術」と言われて来ましたが普及には至っていません。しかし、ブラウザのネイティブサポートが昨年末のFirefoxのサポートとEdgeのChromium化によってほぼ100%になることが見込まれ、既存の開発方法論との組み合わせの親和性が上がり、またサーバーサイドレンダリングというサーバーCPU負荷の高い処理の負荷軽減も期待できます。\n\nhttps://qiita.com/shibukawa/private/5a36147ec103d35c1b5e",
                          spokenLanguage: "ja",
                          slideLanguage: "",
                          speakerIDs: ["yoshiki-shibukawa"]
                      }
                  }]
              },
              allFile: {
                  nodes: [{
                      childImageSharp: null
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "benitte-raphael.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/2be9e/benitte-raphael.jpg",
                              srcSet: "/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/79993/benitte-raphael.jpg 66w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/2e0c2/benitte-raphael.jpg 131w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/2be9e/benitte-raphael.jpg 262w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/7d55c/benitte-raphael.jpg 393w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/b9fa4/benitte-raphael.jpg 400w",
                              srcWebp: "/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/fabb6/benitte-raphael.webp",
                              srcSetWebp: "/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/7fc16/benitte-raphael.webp 66w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/78dfd/benitte-raphael.webp 131w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/fabb6/benitte-raphael.webp 262w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/b3aeb/benitte-raphael.webp 393w,\n/2019/static/eb9757fc898379b0e4a23ed6ecd3cf07/ba80a/benitte-raphael.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "benjamin-gruenbaum.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/8072ee3add3f43576e6b1b5056d51400/2be9e/benjamin-gruenbaum.jpg",
                              srcSet: "/2019/static/8072ee3add3f43576e6b1b5056d51400/79993/benjamin-gruenbaum.jpg 66w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/2e0c2/benjamin-gruenbaum.jpg 131w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/2be9e/benjamin-gruenbaum.jpg 262w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/7d55c/benjamin-gruenbaum.jpg 393w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/b9fa4/benjamin-gruenbaum.jpg 400w",
                              srcWebp: "/2019/static/8072ee3add3f43576e6b1b5056d51400/fabb6/benjamin-gruenbaum.webp",
                              srcSetWebp: "/2019/static/8072ee3add3f43576e6b1b5056d51400/7fc16/benjamin-gruenbaum.webp 66w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/78dfd/benjamin-gruenbaum.webp 131w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/fabb6/benjamin-gruenbaum.webp 262w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/b3aeb/benjamin-gruenbaum.webp 393w,\n/2019/static/8072ee3add3f43576e6b1b5056d51400/ba80a/benjamin-gruenbaum.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "dominic-tarr.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/2be9e/dominic-tarr.jpg",
                              srcSet: "/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/79993/dominic-tarr.jpg 66w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/2e0c2/dominic-tarr.jpg 131w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/2be9e/dominic-tarr.jpg 262w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/10a58/dominic-tarr.jpg 371w",
                              srcWebp: "/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/fabb6/dominic-tarr.webp",
                              srcSetWebp: "/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/7fc16/dominic-tarr.webp 66w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/78dfd/dominic-tarr.webp 131w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/fabb6/dominic-tarr.webp 262w,\n/2019/static/f9fd3ee94a7ea3fd1d2a72562a3c1334/3ff44/dominic-tarr.webp 371w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "eiji-kitamura.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/46656025a0495e6d7b39b986f94a63c8/2be9e/eiji-kitamura.jpg",
                              srcSet: "/2019/static/46656025a0495e6d7b39b986f94a63c8/79993/eiji-kitamura.jpg 66w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/2e0c2/eiji-kitamura.jpg 131w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/2be9e/eiji-kitamura.jpg 262w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/7d55c/eiji-kitamura.jpg 393w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/72cad/eiji-kitamura.jpg 512w",
                              srcWebp: "/2019/static/46656025a0495e6d7b39b986f94a63c8/fabb6/eiji-kitamura.webp",
                              srcSetWebp: "/2019/static/46656025a0495e6d7b39b986f94a63c8/7fc16/eiji-kitamura.webp 66w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/78dfd/eiji-kitamura.webp 131w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/fabb6/eiji-kitamura.webp 262w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/b3aeb/eiji-kitamura.webp 393w,\n/2019/static/46656025a0495e6d7b39b986f94a63c8/b957b/eiji-kitamura.webp 512w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "fred-schott.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/2be9e/fred-schott.jpg",
                              srcSet: "/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/79993/fred-schott.jpg 66w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/2e0c2/fred-schott.jpg 131w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/2be9e/fred-schott.jpg 262w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/7d55c/fred-schott.jpg 393w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/383d9/fred-schott.jpg 399w",
                              srcWebp: "/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/fabb6/fred-schott.webp",
                              srcSetWebp: "/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/7fc16/fred-schott.webp 66w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/78dfd/fred-schott.webp 131w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/fabb6/fred-schott.webp 262w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/b3aeb/fred-schott.webp 393w,\n/2019/static/af4676a4cb10cb6175aacff4aeb65b7c/0b1e9/fred-schott.webp 399w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "guillermo-rauch.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/2be9e/guillermo-rauch.jpg",
                              srcSet: "/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/79993/guillermo-rauch.jpg 66w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/2e0c2/guillermo-rauch.jpg 131w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/2be9e/guillermo-rauch.jpg 262w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/10a58/guillermo-rauch.jpg 371w",
                              srcWebp: "/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/fabb6/guillermo-rauch.webp",
                              srcSetWebp: "/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/7fc16/guillermo-rauch.webp 66w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/78dfd/guillermo-rauch.webp 131w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/fabb6/guillermo-rauch.webp 262w,\n/2019/static/652d0b490cc8ba23f7fc5f8b2c8daf17/3ff44/guillermo-rauch.webp 371w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "henry-zhu.png",
                              aspectRatio: 1,
                              src: "/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/d2ba7/henry-zhu.png",
                              srcSet: "/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/a8fe6/henry-zhu.png 66w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/7d911/henry-zhu.png 131w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/d2ba7/henry-zhu.png 262w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/f3324/henry-zhu.png 276w",
                              srcWebp: "/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/fabb6/henry-zhu.webp",
                              srcSetWebp: "/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/7fc16/henry-zhu.webp 66w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/78dfd/henry-zhu.webp 131w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/fabb6/henry-zhu.webp 262w,\n/2019/static/775ed3cd709b0ea8a13c2a17a9153dd8/d6cd1/henry-zhu.webp 276w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "hidetaka-okamoto.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/602e0e61c4df7e95abf9179e9227b2ab/2be9e/hidetaka-okamoto.jpg",
                              srcSet: "/2019/static/602e0e61c4df7e95abf9179e9227b2ab/79993/hidetaka-okamoto.jpg 66w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/2e0c2/hidetaka-okamoto.jpg 131w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/2be9e/hidetaka-okamoto.jpg 262w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/7d55c/hidetaka-okamoto.jpg 393w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/b9fa4/hidetaka-okamoto.jpg 400w",
                              srcWebp: "/2019/static/602e0e61c4df7e95abf9179e9227b2ab/fabb6/hidetaka-okamoto.webp",
                              srcSetWebp: "/2019/static/602e0e61c4df7e95abf9179e9227b2ab/7fc16/hidetaka-okamoto.webp 66w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/78dfd/hidetaka-okamoto.webp 131w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/fabb6/hidetaka-okamoto.webp 262w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/b3aeb/hidetaka-okamoto.webp 393w,\n/2019/static/602e0e61c4df7e95abf9179e9227b2ab/ba80a/hidetaka-okamoto.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jxck.png",
                              aspectRatio: 1,
                              src: "/2019/static/c26178f8b9e656c239c677a451a56717/1e586/jxck.png",
                              srcSet: "/2019/static/c26178f8b9e656c239c677a451a56717/a8fe6/jxck.png 66w,\n/2019/static/c26178f8b9e656c239c677a451a56717/7d911/jxck.png 131w,\n/2019/static/c26178f8b9e656c239c677a451a56717/1e586/jxck.png 256w",
                              srcWebp: "/2019/static/c26178f8b9e656c239c677a451a56717/59c88/jxck.webp",
                              srcSetWebp: "/2019/static/c26178f8b9e656c239c677a451a56717/7fc16/jxck.webp 66w,\n/2019/static/c26178f8b9e656c239c677a451a56717/78dfd/jxck.webp 131w,\n/2019/static/c26178f8b9e656c239c677a451a56717/59c88/jxck.webp 256w",
                              sizes: "(max-width: 256px) 100vw, 256px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jennifer-wong.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/2be9e/jennifer-wong.jpg",
                              srcSet: "/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/79993/jennifer-wong.jpg 66w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/2e0c2/jennifer-wong.jpg 131w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/2be9e/jennifer-wong.jpg 262w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/7d55c/jennifer-wong.jpg 393w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/b9fa4/jennifer-wong.jpg 400w",
                              srcWebp: "/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/fabb6/jennifer-wong.webp",
                              srcSetWebp: "/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/7fc16/jennifer-wong.webp 66w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/78dfd/jennifer-wong.webp 131w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/fabb6/jennifer-wong.webp 262w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/b3aeb/jennifer-wong.webp 393w,\n/2019/static/ddecbb1d184e5093bbb8de6ed2e9cd50/ba80a/jennifer-wong.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jorge-bucaran.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/88de2bd75495dadeaa1e16ddf46414fa/2be9e/jorge-bucaran.jpg",
                              srcSet: "/2019/static/88de2bd75495dadeaa1e16ddf46414fa/79993/jorge-bucaran.jpg 66w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/2e0c2/jorge-bucaran.jpg 131w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/2be9e/jorge-bucaran.jpg 262w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/7d55c/jorge-bucaran.jpg 393w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/b9fa4/jorge-bucaran.jpg 400w",
                              srcWebp: "/2019/static/88de2bd75495dadeaa1e16ddf46414fa/fabb6/jorge-bucaran.webp",
                              srcSetWebp: "/2019/static/88de2bd75495dadeaa1e16ddf46414fa/7fc16/jorge-bucaran.webp 66w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/78dfd/jorge-bucaran.webp 131w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/fabb6/jorge-bucaran.webp 262w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/b3aeb/jorge-bucaran.webp 393w,\n/2019/static/88de2bd75495dadeaa1e16ddf46414fa/ba80a/jorge-bucaran.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "kohei-kido.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/d10c6f52718e4799003475e7e5062e80/2be9e/kohei-kido.jpg",
                              srcSet: "/2019/static/d10c6f52718e4799003475e7e5062e80/79993/kohei-kido.jpg 66w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/2e0c2/kohei-kido.jpg 131w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/2be9e/kohei-kido.jpg 262w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/7d55c/kohei-kido.jpg 393w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/b9fa4/kohei-kido.jpg 400w",
                              srcWebp: "/2019/static/d10c6f52718e4799003475e7e5062e80/fabb6/kohei-kido.webp",
                              srcSetWebp: "/2019/static/d10c6f52718e4799003475e7e5062e80/7fc16/kohei-kido.webp 66w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/78dfd/kohei-kido.webp 131w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/fabb6/kohei-kido.webp 262w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/b3aeb/kohei-kido.webp 393w,\n/2019/static/d10c6f52718e4799003475e7e5062e80/ba80a/kohei-kido.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "kitson-kelly.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitson-kelly.jpg",
                              srcSet: "/2019/static/c2d1b679fb209be8b877a7c9303da730/79993/kitson-kelly.jpg 66w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2e0c2/kitson-kelly.jpg 131w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitson-kelly.jpg 262w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/7d55c/kitson-kelly.jpg 393w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/ec650/kitson-kelly.jpg 460w",
                              srcWebp: "/2019/static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitson-kelly.webp",
                              srcSetWebp: "/2019/static/c2d1b679fb209be8b877a7c9303da730/7fc16/kitson-kelly.webp 66w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/78dfd/kitson-kelly.webp 131w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitson-kelly.webp 262w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/b3aeb/kitson-kelly.webp 393w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2ea4d/kitson-kelly.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "lena-morita.png",
                              aspectRatio: 1,
                              src: "/2019/static/e6645cd0be4ebac5f2932021e38412ec/d2ba7/lena-morita.png",
                              srcSet: "/2019/static/e6645cd0be4ebac5f2932021e38412ec/a8fe6/lena-morita.png 66w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/7d911/lena-morita.png 131w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/d2ba7/lena-morita.png 262w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/1e9e2/lena-morita.png 300w",
                              srcWebp: "/2019/static/e6645cd0be4ebac5f2932021e38412ec/fabb6/lena-morita.webp",
                              srcSetWebp: "/2019/static/e6645cd0be4ebac5f2932021e38412ec/7fc16/lena-morita.webp 66w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/78dfd/lena-morita.webp 131w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/fabb6/lena-morita.webp 262w,\n/2019/static/e6645cd0be4ebac5f2932021e38412ec/6f910/lena-morita.webp 300w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "kitsonk.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitsonk.jpg",
                              srcSet: "/2019/static/c2d1b679fb209be8b877a7c9303da730/79993/kitsonk.jpg 66w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2e0c2/kitsonk.jpg 131w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2be9e/kitsonk.jpg 262w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/7d55c/kitsonk.jpg 393w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/ec650/kitsonk.jpg 460w",
                              srcWebp: "/2019/static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitsonk.webp",
                              srcSetWebp: "/2019/static/c2d1b679fb209be8b877a7c9303da730/7fc16/kitsonk.webp 66w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/78dfd/kitsonk.webp 131w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/fabb6/kitsonk.webp 262w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/b3aeb/kitsonk.webp 393w,\n/2019/static/c2d1b679fb209be8b877a7c9303da730/2ea4d/kitsonk.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "mariko-kosaka.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/a88e2e12a05e840acaa10d32819626e0/2be9e/mariko-kosaka.jpg",
                              srcSet: "/2019/static/a88e2e12a05e840acaa10d32819626e0/79993/mariko-kosaka.jpg 66w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/2e0c2/mariko-kosaka.jpg 131w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/2be9e/mariko-kosaka.jpg 262w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/7d55c/mariko-kosaka.jpg 393w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/b9fa4/mariko-kosaka.jpg 400w",
                              srcWebp: "/2019/static/a88e2e12a05e840acaa10d32819626e0/fabb6/mariko-kosaka.webp",
                              srcSetWebp: "/2019/static/a88e2e12a05e840acaa10d32819626e0/7fc16/mariko-kosaka.webp 66w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/78dfd/mariko-kosaka.webp 131w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/fabb6/mariko-kosaka.webp 262w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/b3aeb/mariko-kosaka.webp 393w,\n/2019/static/a88e2e12a05e840acaa10d32819626e0/ba80a/mariko-kosaka.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "martin-splitt.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/be8040410481461802a2fa0df8a55b71/2be9e/martin-splitt.jpg",
                              srcSet: "/2019/static/be8040410481461802a2fa0df8a55b71/79993/martin-splitt.jpg 66w,\n/2019/static/be8040410481461802a2fa0df8a55b71/2e0c2/martin-splitt.jpg 131w,\n/2019/static/be8040410481461802a2fa0df8a55b71/2be9e/martin-splitt.jpg 262w,\n/2019/static/be8040410481461802a2fa0df8a55b71/7d55c/martin-splitt.jpg 393w,\n/2019/static/be8040410481461802a2fa0df8a55b71/b9fa4/martin-splitt.jpg 400w",
                              srcWebp: "/2019/static/be8040410481461802a2fa0df8a55b71/fabb6/martin-splitt.webp",
                              srcSetWebp: "/2019/static/be8040410481461802a2fa0df8a55b71/7fc16/martin-splitt.webp 66w,\n/2019/static/be8040410481461802a2fa0df8a55b71/78dfd/martin-splitt.webp 131w,\n/2019/static/be8040410481461802a2fa0df8a55b71/fabb6/martin-splitt.webp 262w,\n/2019/static/be8040410481461802a2fa0df8a55b71/b3aeb/martin-splitt.webp 393w,\n/2019/static/be8040410481461802a2fa0df8a55b71/ba80a/martin-splitt.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "masashi-ganeko.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/faf9ee6d62fce1be27f7b7f164247120/c296b/masashi-ganeko.jpg",
                              srcSet: "/2019/static/faf9ee6d62fce1be27f7b7f164247120/79993/masashi-ganeko.jpg 66w,\n/2019/static/faf9ee6d62fce1be27f7b7f164247120/2e0c2/masashi-ganeko.jpg 131w,\n/2019/static/faf9ee6d62fce1be27f7b7f164247120/c296b/masashi-ganeko.jpg 256w",
                              srcWebp: "/2019/static/faf9ee6d62fce1be27f7b7f164247120/59c88/masashi-ganeko.webp",
                              srcSetWebp: "/2019/static/faf9ee6d62fce1be27f7b7f164247120/7fc16/masashi-ganeko.webp 66w,\n/2019/static/faf9ee6d62fce1be27f7b7f164247120/78dfd/masashi-ganeko.webp 131w,\n/2019/static/faf9ee6d62fce1be27f7b7f164247120/59c88/masashi-ganeko.webp 256w",
                              sizes: "(max-width: 256px) 100vw, 256px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "masato-nishihara.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/f1fe52673557f6f17682e190e03d3d37/441dc/masato-nishihara.jpg",
                              srcSet: "/2019/static/f1fe52673557f6f17682e190e03d3d37/79993/masato-nishihara.jpg 66w,\n/2019/static/f1fe52673557f6f17682e190e03d3d37/2e0c2/masato-nishihara.jpg 131w,\n/2019/static/f1fe52673557f6f17682e190e03d3d37/441dc/masato-nishihara.jpg 133w",
                              srcWebp: "/2019/static/f1fe52673557f6f17682e190e03d3d37/eb042/masato-nishihara.webp",
                              srcSetWebp: "/2019/static/f1fe52673557f6f17682e190e03d3d37/7fc16/masato-nishihara.webp 66w,\n/2019/static/f1fe52673557f6f17682e190e03d3d37/78dfd/masato-nishihara.webp 131w,\n/2019/static/f1fe52673557f6f17682e190e03d3d37/eb042/masato-nishihara.webp 133w",
                              sizes: "(max-width: 133px) 100vw, 133px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "masato-ohba.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/e74074425d87caa40916814997aedfac/2be9e/masato-ohba.jpg",
                              srcSet: "/2019/static/e74074425d87caa40916814997aedfac/79993/masato-ohba.jpg 66w,\n/2019/static/e74074425d87caa40916814997aedfac/2e0c2/masato-ohba.jpg 131w,\n/2019/static/e74074425d87caa40916814997aedfac/2be9e/masato-ohba.jpg 262w,\n/2019/static/e74074425d87caa40916814997aedfac/7d55c/masato-ohba.jpg 393w,\n/2019/static/e74074425d87caa40916814997aedfac/ec650/masato-ohba.jpg 460w",
                              srcWebp: "/2019/static/e74074425d87caa40916814997aedfac/fabb6/masato-ohba.webp",
                              srcSetWebp: "/2019/static/e74074425d87caa40916814997aedfac/7fc16/masato-ohba.webp 66w,\n/2019/static/e74074425d87caa40916814997aedfac/78dfd/masato-ohba.webp 131w,\n/2019/static/e74074425d87caa40916814997aedfac/fabb6/masato-ohba.webp 262w,\n/2019/static/e74074425d87caa40916814997aedfac/b3aeb/masato-ohba.webp 393w,\n/2019/static/e74074425d87caa40916814997aedfac/2ea4d/masato-ohba.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "nazanin-delam.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/a78efdc029147e34669afe249d2c74ee/2be9e/nazanin-delam.jpg",
                              srcSet: "/2019/static/a78efdc029147e34669afe249d2c74ee/79993/nazanin-delam.jpg 66w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/2e0c2/nazanin-delam.jpg 131w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/2be9e/nazanin-delam.jpg 262w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/7d55c/nazanin-delam.jpg 393w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/ec650/nazanin-delam.jpg 460w",
                              srcWebp: "/2019/static/a78efdc029147e34669afe249d2c74ee/fabb6/nazanin-delam.webp",
                              srcSetWebp: "/2019/static/a78efdc029147e34669afe249d2c74ee/7fc16/nazanin-delam.webp 66w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/78dfd/nazanin-delam.webp 131w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/fabb6/nazanin-delam.webp 262w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/b3aeb/nazanin-delam.webp 393w,\n/2019/static/a78efdc029147e34669afe249d2c74ee/2ea4d/nazanin-delam.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "nadieh-bremer.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/921cdfef828989848c881fc7cb988c5c/2be9e/nadieh-bremer.jpg",
                              srcSet: "/2019/static/921cdfef828989848c881fc7cb988c5c/79993/nadieh-bremer.jpg 66w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/2e0c2/nadieh-bremer.jpg 131w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/2be9e/nadieh-bremer.jpg 262w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/10a58/nadieh-bremer.jpg 371w",
                              srcWebp: "/2019/static/921cdfef828989848c881fc7cb988c5c/fabb6/nadieh-bremer.webp",
                              srcSetWebp: "/2019/static/921cdfef828989848c881fc7cb988c5c/7fc16/nadieh-bremer.webp 66w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/78dfd/nadieh-bremer.webp 131w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/fabb6/nadieh-bremer.webp 262w,\n/2019/static/921cdfef828989848c881fc7cb988c5c/3ff44/nadieh-bremer.webp 371w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "okuno-kentaro.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/be9f5547d44799f89dbb316385300897/2be9e/okuno-kentaro.jpg",
                              srcSet: "/2019/static/be9f5547d44799f89dbb316385300897/79993/okuno-kentaro.jpg 66w,\n/2019/static/be9f5547d44799f89dbb316385300897/2e0c2/okuno-kentaro.jpg 131w,\n/2019/static/be9f5547d44799f89dbb316385300897/2be9e/okuno-kentaro.jpg 262w,\n/2019/static/be9f5547d44799f89dbb316385300897/6c12c/okuno-kentaro.jpg 362w",
                              srcWebp: "/2019/static/be9f5547d44799f89dbb316385300897/fabb6/okuno-kentaro.webp",
                              srcSetWebp: "/2019/static/be9f5547d44799f89dbb316385300897/7fc16/okuno-kentaro.webp 66w,\n/2019/static/be9f5547d44799f89dbb316385300897/78dfd/okuno-kentaro.webp 131w,\n/2019/static/be9f5547d44799f89dbb316385300897/fabb6/okuno-kentaro.webp 262w,\n/2019/static/be9f5547d44799f89dbb316385300897/92734/okuno-kentaro.webp 362w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "nobuhiko-sawai.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/9067c/nobuhiko-sawai.jpg",
                              srcSet: "/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/79993/nobuhiko-sawai.jpg 66w,\n/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/2e0c2/nobuhiko-sawai.jpg 131w,\n/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/9067c/nobuhiko-sawai.jpg 200w",
                              srcWebp: "/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/d27e9/nobuhiko-sawai.webp",
                              srcSetWebp: "/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/7fc16/nobuhiko-sawai.webp 66w,\n/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/78dfd/nobuhiko-sawai.webp 131w,\n/2019/static/9b9f3b02ed298d2cf0bb16db141f8259/d27e9/nobuhiko-sawai.webp 200w",
                              sizes: "(max-width: 200px) 100vw, 200px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "praveen-yedidi.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/5671512b7052498c178fffd6fc529c36/2be9e/praveen-yedidi.jpg",
                              srcSet: "/2019/static/5671512b7052498c178fffd6fc529c36/79993/praveen-yedidi.jpg 66w,\n/2019/static/5671512b7052498c178fffd6fc529c36/2e0c2/praveen-yedidi.jpg 131w,\n/2019/static/5671512b7052498c178fffd6fc529c36/2be9e/praveen-yedidi.jpg 262w,\n/2019/static/5671512b7052498c178fffd6fc529c36/7d55c/praveen-yedidi.jpg 393w,\n/2019/static/5671512b7052498c178fffd6fc529c36/ec650/praveen-yedidi.jpg 460w",
                              srcWebp: "/2019/static/5671512b7052498c178fffd6fc529c36/fabb6/praveen-yedidi.webp",
                              srcSetWebp: "/2019/static/5671512b7052498c178fffd6fc529c36/7fc16/praveen-yedidi.webp 66w,\n/2019/static/5671512b7052498c178fffd6fc529c36/78dfd/praveen-yedidi.webp 131w,\n/2019/static/5671512b7052498c178fffd6fc529c36/fabb6/praveen-yedidi.webp 262w,\n/2019/static/5671512b7052498c178fffd6fc529c36/b3aeb/praveen-yedidi.webp 393w,\n/2019/static/5671512b7052498c178fffd6fc529c36/2ea4d/praveen-yedidi.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "sakakibara.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/28a136a95d4efd1a2100d3f8a1724af5/2be9e/sakakibara.jpg",
                              srcSet: "/2019/static/28a136a95d4efd1a2100d3f8a1724af5/79993/sakakibara.jpg 66w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/2e0c2/sakakibara.jpg 131w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/2be9e/sakakibara.jpg 262w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/7d55c/sakakibara.jpg 393w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/b9fa4/sakakibara.jpg 400w",
                              srcWebp: "/2019/static/28a136a95d4efd1a2100d3f8a1724af5/fabb6/sakakibara.webp",
                              srcSetWebp: "/2019/static/28a136a95d4efd1a2100d3f8a1724af5/7fc16/sakakibara.webp 66w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/78dfd/sakakibara.webp 131w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/fabb6/sakakibara.webp 262w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/b3aeb/sakakibara.webp 393w,\n/2019/static/28a136a95d4efd1a2100d3f8a1724af5/ba80a/sakakibara.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "shirley-wu.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/088f972033e46e61ba403bf34e2ad321/2be9e/shirley-wu.jpg",
                              srcSet: "/2019/static/088f972033e46e61ba403bf34e2ad321/79993/shirley-wu.jpg 66w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/2e0c2/shirley-wu.jpg 131w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/2be9e/shirley-wu.jpg 262w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/7d55c/shirley-wu.jpg 393w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/b9fa4/shirley-wu.jpg 400w",
                              srcWebp: "/2019/static/088f972033e46e61ba403bf34e2ad321/fabb6/shirley-wu.webp",
                              srcSetWebp: "/2019/static/088f972033e46e61ba403bf34e2ad321/7fc16/shirley-wu.webp 66w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/78dfd/shirley-wu.webp 131w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/fabb6/shirley-wu.webp 262w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/b3aeb/shirley-wu.webp 393w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/ba80a/shirley-wu.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "sho-miyamoto.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/2be9e/sho-miyamoto.jpg",
                              srcSet: "/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/79993/sho-miyamoto.jpg 66w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/2e0c2/sho-miyamoto.jpg 131w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/2be9e/sho-miyamoto.jpg 262w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/7d55c/sho-miyamoto.jpg 393w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/ec650/sho-miyamoto.jpg 460w",
                              srcWebp: "/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/fabb6/sho-miyamoto.webp",
                              srcSetWebp: "/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/7fc16/sho-miyamoto.webp 66w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/78dfd/sho-miyamoto.webp 131w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/fabb6/sho-miyamoto.webp 262w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/b3aeb/sho-miyamoto.webp 393w,\n/2019/static/1d21de2f33eb5593d11d6fb65e5373a5/2ea4d/sho-miyamoto.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "takeshi-kato.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/2be9e/takeshi-kato.jpg",
                              srcSet: "/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/79993/takeshi-kato.jpg 66w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/2e0c2/takeshi-kato.jpg 131w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/2be9e/takeshi-kato.jpg 262w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/7d55c/takeshi-kato.jpg 393w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/56565/takeshi-kato.jpg 500w",
                              srcWebp: "/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/fabb6/takeshi-kato.webp",
                              srcSetWebp: "/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/7fc16/takeshi-kato.webp 66w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/78dfd/takeshi-kato.webp 131w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/fabb6/takeshi-kato.webp 262w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/b3aeb/takeshi-kato.webp 393w,\n/2019/static/7f0f2d61b3aa5eeb75817b98ca070252/d3d47/takeshi-kato.webp 500w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "sxywu.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/088f972033e46e61ba403bf34e2ad321/2be9e/sxywu.jpg",
                              srcSet: "/2019/static/088f972033e46e61ba403bf34e2ad321/79993/sxywu.jpg 66w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/2e0c2/sxywu.jpg 131w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/2be9e/sxywu.jpg 262w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/7d55c/sxywu.jpg 393w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/b9fa4/sxywu.jpg 400w",
                              srcWebp: "/2019/static/088f972033e46e61ba403bf34e2ad321/fabb6/sxywu.webp",
                              srcSetWebp: "/2019/static/088f972033e46e61ba403bf34e2ad321/7fc16/sxywu.webp 66w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/78dfd/sxywu.webp 131w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/fabb6/sxywu.webp 262w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/b3aeb/sxywu.webp 393w,\n/2019/static/088f972033e46e61ba403bf34e2ad321/ba80a/sxywu.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "toru-kobayashi.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/242ca0d330d1ad6927379a658c2467d2/2be9e/toru-kobayashi.jpg",
                              srcSet: "/2019/static/242ca0d330d1ad6927379a658c2467d2/79993/toru-kobayashi.jpg 66w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/2e0c2/toru-kobayashi.jpg 131w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/2be9e/toru-kobayashi.jpg 262w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/7d55c/toru-kobayashi.jpg 393w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/ec650/toru-kobayashi.jpg 460w",
                              srcWebp: "/2019/static/242ca0d330d1ad6927379a658c2467d2/fabb6/toru-kobayashi.webp",
                              srcSetWebp: "/2019/static/242ca0d330d1ad6927379a658c2467d2/7fc16/toru-kobayashi.webp 66w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/78dfd/toru-kobayashi.webp 131w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/fabb6/toru-kobayashi.webp 262w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/b3aeb/toru-kobayashi.webp 393w,\n/2019/static/242ca0d330d1ad6927379a658c2467d2/2ea4d/toru-kobayashi.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "tetsuharu-ohzeki.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/20dce207e16174fad556decb19cdd5ea/2be9e/tetsuharu-ohzeki.jpg",
                              srcSet: "/2019/static/20dce207e16174fad556decb19cdd5ea/79993/tetsuharu-ohzeki.jpg 66w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/2e0c2/tetsuharu-ohzeki.jpg 131w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/2be9e/tetsuharu-ohzeki.jpg 262w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/7d55c/tetsuharu-ohzeki.jpg 393w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/3fdfd/tetsuharu-ohzeki.jpg 445w",
                              srcWebp: "/2019/static/20dce207e16174fad556decb19cdd5ea/fabb6/tetsuharu-ohzeki.webp",
                              srcSetWebp: "/2019/static/20dce207e16174fad556decb19cdd5ea/7fc16/tetsuharu-ohzeki.webp 66w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/78dfd/tetsuharu-ohzeki.webp 131w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/fabb6/tetsuharu-ohzeki.webp 262w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/b3aeb/tetsuharu-ohzeki.webp 393w,\n/2019/static/20dce207e16174fad556decb19cdd5ea/b6fcb/tetsuharu-ohzeki.webp 445w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "yoshiki-shibukawa.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/aed425c7fd62c9736ed09773b10a3bbb/2be9e/yoshiki-shibukawa.jpg",
                              srcSet: "/2019/static/aed425c7fd62c9736ed09773b10a3bbb/79993/yoshiki-shibukawa.jpg 66w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/2e0c2/yoshiki-shibukawa.jpg 131w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/2be9e/yoshiki-shibukawa.jpg 262w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/7d55c/yoshiki-shibukawa.jpg 393w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/b9fa4/yoshiki-shibukawa.jpg 400w",
                              srcWebp: "/2019/static/aed425c7fd62c9736ed09773b10a3bbb/fabb6/yoshiki-shibukawa.webp",
                              srcSetWebp: "/2019/static/aed425c7fd62c9736ed09773b10a3bbb/7fc16/yoshiki-shibukawa.webp 66w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/78dfd/yoshiki-shibukawa.webp 131w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/fabb6/yoshiki-shibukawa.webp 262w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/b3aeb/yoshiki-shibukawa.webp 393w,\n/2019/static/aed425c7fd62c9736ed09773b10a3bbb/ba80a/yoshiki-shibukawa.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "ginpei-takanashi.png",
                              aspectRatio: 1,
                              src: "/2019/static/fec746a714af12e96ff312a7ece93147/d2ba7/ginpei-takanashi.png",
                              srcSet: "/2019/static/fec746a714af12e96ff312a7ece93147/a8fe6/ginpei-takanashi.png 66w,\n/2019/static/fec746a714af12e96ff312a7ece93147/7d911/ginpei-takanashi.png 131w,\n/2019/static/fec746a714af12e96ff312a7ece93147/d2ba7/ginpei-takanashi.png 262w,\n/2019/static/fec746a714af12e96ff312a7ece93147/92e63/ginpei-takanashi.png 393w,\n/2019/static/fec746a714af12e96ff312a7ece93147/9b23f/ginpei-takanashi.png 524w,\n/2019/static/fec746a714af12e96ff312a7ece93147/2cb92/ginpei-takanashi.png 1200w",
                              srcWebp: "/2019/static/fec746a714af12e96ff312a7ece93147/fabb6/ginpei-takanashi.webp",
                              srcSetWebp: "/2019/static/fec746a714af12e96ff312a7ece93147/7fc16/ginpei-takanashi.webp 66w,\n/2019/static/fec746a714af12e96ff312a7ece93147/78dfd/ginpei-takanashi.webp 131w,\n/2019/static/fec746a714af12e96ff312a7ece93147/fabb6/ginpei-takanashi.webp 262w,\n/2019/static/fec746a714af12e96ff312a7ece93147/b3aeb/ginpei-takanashi.webp 393w,\n/2019/static/fec746a714af12e96ff312a7ece93147/82dd0/ginpei-takanashi.webp 524w,\n/2019/static/fec746a714af12e96ff312a7ece93147/b17d1/ginpei-takanashi.webp 1200w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "maxi-ferreira.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/53716f8585a3f1ee90090eeb770772d2/2be9e/maxi-ferreira.jpg",
                              srcSet: "/2019/static/53716f8585a3f1ee90090eeb770772d2/79993/maxi-ferreira.jpg 66w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/2e0c2/maxi-ferreira.jpg 131w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/2be9e/maxi-ferreira.jpg 262w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/7d55c/maxi-ferreira.jpg 393w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/92a13/maxi-ferreira.jpg 524w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/328f4/maxi-ferreira.jpg 533w",
                              srcWebp: "/2019/static/53716f8585a3f1ee90090eeb770772d2/fabb6/maxi-ferreira.webp",
                              srcSetWebp: "/2019/static/53716f8585a3f1ee90090eeb770772d2/7fc16/maxi-ferreira.webp 66w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/78dfd/maxi-ferreira.webp 131w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/fabb6/maxi-ferreira.webp 262w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/b3aeb/maxi-ferreira.webp 393w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/82dd0/maxi-ferreira.webp 524w,\n/2019/static/53716f8585a3f1ee90090eeb770772d2/4ce43/maxi-ferreira.webp 533w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "samuel-agnew.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/c4d9afd2a427bf6c89250adea30d2657/2be9e/samuel-agnew.jpg",
                              srcSet: "/2019/static/c4d9afd2a427bf6c89250adea30d2657/79993/samuel-agnew.jpg 66w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/2e0c2/samuel-agnew.jpg 131w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/2be9e/samuel-agnew.jpg 262w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/7d55c/samuel-agnew.jpg 393w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/92a13/samuel-agnew.jpg 524w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/c1b89/samuel-agnew.jpg 1000w",
                              srcWebp: "/2019/static/c4d9afd2a427bf6c89250adea30d2657/fabb6/samuel-agnew.webp",
                              srcSetWebp: "/2019/static/c4d9afd2a427bf6c89250adea30d2657/7fc16/samuel-agnew.webp 66w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/78dfd/samuel-agnew.webp 131w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/fabb6/samuel-agnew.webp 262w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/b3aeb/samuel-agnew.webp 393w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/82dd0/samuel-agnew.webp 524w,\n/2019/static/c4d9afd2a427bf6c89250adea30d2657/d1836/samuel-agnew.webp 1000w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "yosuke-furukawa.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/2ccf09daf6f3f2207e59367c60388c5d/2be9e/yosuke-furukawa.jpg",
                              srcSet: "/2019/static/2ccf09daf6f3f2207e59367c60388c5d/79993/yosuke-furukawa.jpg 66w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/2e0c2/yosuke-furukawa.jpg 131w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/2be9e/yosuke-furukawa.jpg 262w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/7d55c/yosuke-furukawa.jpg 393w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/72cad/yosuke-furukawa.jpg 512w",
                              srcWebp: "/2019/static/2ccf09daf6f3f2207e59367c60388c5d/fabb6/yosuke-furukawa.webp",
                              srcSetWebp: "/2019/static/2ccf09daf6f3f2207e59367c60388c5d/7fc16/yosuke-furukawa.webp 66w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/78dfd/yosuke-furukawa.webp 131w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/fabb6/yosuke-furukawa.webp 262w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/b3aeb/yosuke-furukawa.webp 393w,\n/2019/static/2ccf09daf6f3f2207e59367c60388c5d/b957b/yosuke-furukawa.webp 512w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jarrod-overson.png",
                              aspectRatio: 1,
                              src: "/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/d2ba7/jarrod-overson.png",
                              srcSet: "/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/a8fe6/jarrod-overson.png 66w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/7d911/jarrod-overson.png 131w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/d2ba7/jarrod-overson.png 262w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/92e63/jarrod-overson.png 393w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/cf5aa/jarrod-overson.png 400w",
                              srcWebp: "/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/fabb6/jarrod-overson.webp",
                              srcSetWebp: "/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/7fc16/jarrod-overson.webp 66w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/78dfd/jarrod-overson.webp 131w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/fabb6/jarrod-overson.webp 262w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/b3aeb/jarrod-overson.webp 393w,\n/2019/static/0d48c1499f2f0a7aadb615b01ee6cbf4/ba80a/jarrod-overson.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jan-lehnardt.png",
                              aspectRatio: 1,
                              src: "/2019/static/6f81758e8e064693c9703846d98973d9/d2ba7/jan-lehnardt.png",
                              srcSet: "/2019/static/6f81758e8e064693c9703846d98973d9/a8fe6/jan-lehnardt.png 66w,\n/2019/static/6f81758e8e064693c9703846d98973d9/7d911/jan-lehnardt.png 131w,\n/2019/static/6f81758e8e064693c9703846d98973d9/d2ba7/jan-lehnardt.png 262w,\n/2019/static/6f81758e8e064693c9703846d98973d9/92e63/jan-lehnardt.png 393w,\n/2019/static/6f81758e8e064693c9703846d98973d9/cf5aa/jan-lehnardt.png 400w",
                              srcWebp: "/2019/static/6f81758e8e064693c9703846d98973d9/fabb6/jan-lehnardt.webp",
                              srcSetWebp: "/2019/static/6f81758e8e064693c9703846d98973d9/7fc16/jan-lehnardt.webp 66w,\n/2019/static/6f81758e8e064693c9703846d98973d9/78dfd/jan-lehnardt.webp 131w,\n/2019/static/6f81758e8e064693c9703846d98973d9/fabb6/jan-lehnardt.webp 262w,\n/2019/static/6f81758e8e064693c9703846d98973d9/b3aeb/jan-lehnardt.webp 393w,\n/2019/static/6f81758e8e064693c9703846d98973d9/ba80a/jan-lehnardt.webp 400w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "andy-hall.png",
                              aspectRatio: 1,
                              src: "/2019/static/809063852b5b4fae27415c7b5203a149/d2ba7/andy-hall.png",
                              srcSet: "/2019/static/809063852b5b4fae27415c7b5203a149/a8fe6/andy-hall.png 66w,\n/2019/static/809063852b5b4fae27415c7b5203a149/7d911/andy-hall.png 131w,\n/2019/static/809063852b5b4fae27415c7b5203a149/d2ba7/andy-hall.png 262w,\n/2019/static/809063852b5b4fae27415c7b5203a149/92e63/andy-hall.png 393w,\n/2019/static/809063852b5b4fae27415c7b5203a149/40243/andy-hall.png 500w",
                              srcWebp: "/2019/static/809063852b5b4fae27415c7b5203a149/fabb6/andy-hall.webp",
                              srcSetWebp: "/2019/static/809063852b5b4fae27415c7b5203a149/7fc16/andy-hall.webp 66w,\n/2019/static/809063852b5b4fae27415c7b5203a149/78dfd/andy-hall.webp 131w,\n/2019/static/809063852b5b4fae27415c7b5203a149/fabb6/andy-hall.webp 262w,\n/2019/static/809063852b5b4fae27415c7b5203a149/b3aeb/andy-hall.webp 393w,\n/2019/static/809063852b5b4fae27415c7b5203a149/d3d47/andy-hall.webp 500w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "claudia-hernandez.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/ddd8a84701760dca2e84ae8141d68008/2be9e/claudia-hernandez.jpg",
                              srcSet: "/2019/static/ddd8a84701760dca2e84ae8141d68008/79993/claudia-hernandez.jpg 66w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/2e0c2/claudia-hernandez.jpg 131w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/2be9e/claudia-hernandez.jpg 262w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/7d55c/claudia-hernandez.jpg 393w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/92a13/claudia-hernandez.jpg 524w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/6dfef/claudia-hernandez.jpg 982w",
                              srcWebp: "/2019/static/ddd8a84701760dca2e84ae8141d68008/fabb6/claudia-hernandez.webp",
                              srcSetWebp: "/2019/static/ddd8a84701760dca2e84ae8141d68008/7fc16/claudia-hernandez.webp 66w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/78dfd/claudia-hernandez.webp 131w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/fabb6/claudia-hernandez.webp 262w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/b3aeb/claudia-hernandez.webp 393w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/82dd0/claudia-hernandez.webp 524w,\n/2019/static/ddd8a84701760dca2e84ae8141d68008/4e9ca/claudia-hernandez.webp 982w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "fuji-goro.png",
                              aspectRatio: 1,
                              src: "/2019/static/4f40187320f52f6f5264b2836b5173b3/d2ba7/fuji-goro.png",
                              srcSet: "/2019/static/4f40187320f52f6f5264b2836b5173b3/a8fe6/fuji-goro.png 66w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/7d911/fuji-goro.png 131w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/d2ba7/fuji-goro.png 262w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/92e63/fuji-goro.png 393w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/4b166/fuji-goro.png 460w",
                              srcWebp: "/2019/static/4f40187320f52f6f5264b2836b5173b3/fabb6/fuji-goro.webp",
                              srcSetWebp: "/2019/static/4f40187320f52f6f5264b2836b5173b3/7fc16/fuji-goro.webp 66w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/78dfd/fuji-goro.webp 131w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/fabb6/fuji-goro.webp 262w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/b3aeb/fuji-goro.webp 393w,\n/2019/static/4f40187320f52f6f5264b2836b5173b3/2ea4d/fuji-goro.webp 460w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "irina-shestak.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/9112eca13ea175de4b1f190759b26a1a/2be9e/irina-shestak.jpg",
                              srcSet: "/2019/static/9112eca13ea175de4b1f190759b26a1a/79993/irina-shestak.jpg 66w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/2e0c2/irina-shestak.jpg 131w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/2be9e/irina-shestak.jpg 262w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/7d55c/irina-shestak.jpg 393w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/92a13/irina-shestak.jpg 524w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/f3a11/irina-shestak.jpg 1248w",
                              srcWebp: "/2019/static/9112eca13ea175de4b1f190759b26a1a/fabb6/irina-shestak.webp",
                              srcSetWebp: "/2019/static/9112eca13ea175de4b1f190759b26a1a/7fc16/irina-shestak.webp 66w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/78dfd/irina-shestak.webp 131w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/fabb6/irina-shestak.webp 262w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/b3aeb/irina-shestak.webp 393w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/82dd0/irina-shestak.webp 524w,\n/2019/static/9112eca13ea175de4b1f190759b26a1a/0c3c3/irina-shestak.webp 1248w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "sacha-greif.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/4739c96d93cfb1553e97e75d0aa683ae/2be9e/sacha-greif.jpg",
                              srcSet: "/2019/static/4739c96d93cfb1553e97e75d0aa683ae/79993/sacha-greif.jpg 66w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/2e0c2/sacha-greif.jpg 131w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/2be9e/sacha-greif.jpg 262w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/7d55c/sacha-greif.jpg 393w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/92a13/sacha-greif.jpg 524w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/6dc09/sacha-greif.jpg 1664w",
                              srcWebp: "/2019/static/4739c96d93cfb1553e97e75d0aa683ae/fabb6/sacha-greif.webp",
                              srcSetWebp: "/2019/static/4739c96d93cfb1553e97e75d0aa683ae/7fc16/sacha-greif.webp 66w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/78dfd/sacha-greif.webp 131w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/fabb6/sacha-greif.webp 262w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/b3aeb/sacha-greif.webp 393w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/82dd0/sacha-greif.webp 524w,\n/2019/static/4739c96d93cfb1553e97e75d0aa683ae/b8129/sacha-greif.webp 1664w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "takuto-wada.png",
                              aspectRatio: 1,
                              src: "/2019/static/2ecf55efae1f997413654cfbdb717d9e/d2ba7/takuto-wada.png",
                              srcSet: "/2019/static/2ecf55efae1f997413654cfbdb717d9e/a8fe6/takuto-wada.png 66w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/7d911/takuto-wada.png 131w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/d2ba7/takuto-wada.png 262w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/92e63/takuto-wada.png 393w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/9b23f/takuto-wada.png 524w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/737c9/takuto-wada.png 581w",
                              srcWebp: "/2019/static/2ecf55efae1f997413654cfbdb717d9e/fabb6/takuto-wada.webp",
                              srcSetWebp: "/2019/static/2ecf55efae1f997413654cfbdb717d9e/7fc16/takuto-wada.webp 66w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/78dfd/takuto-wada.webp 131w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/fabb6/takuto-wada.webp 262w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/b3aeb/takuto-wada.webp 393w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/82dd0/takuto-wada.webp 524w,\n/2019/static/2ecf55efae1f997413654cfbdb717d9e/5d238/takuto-wada.webp 581w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "maria-clara.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/4df73c7f986db6a818d1f8c847200aed/2be9e/maria-clara.jpg",
                              srcSet: "/2019/static/4df73c7f986db6a818d1f8c847200aed/79993/maria-clara.jpg 66w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/2e0c2/maria-clara.jpg 131w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/2be9e/maria-clara.jpg 262w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/7d55c/maria-clara.jpg 393w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/92a13/maria-clara.jpg 524w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/e2ec4/maria-clara.jpg 1906w",
                              srcWebp: "/2019/static/4df73c7f986db6a818d1f8c847200aed/fabb6/maria-clara.webp",
                              srcSetWebp: "/2019/static/4df73c7f986db6a818d1f8c847200aed/7fc16/maria-clara.webp 66w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/78dfd/maria-clara.webp 131w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/fabb6/maria-clara.webp 262w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/b3aeb/maria-clara.webp 393w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/82dd0/maria-clara.webp 524w,\n/2019/static/4df73c7f986db6a818d1f8c847200aed/ba564/maria-clara.webp 1906w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "jonny-kalambay.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/07b3103716876c95cfb793afa4e0de7e/2be9e/jonny-kalambay.jpg",
                              srcSet: "/2019/static/07b3103716876c95cfb793afa4e0de7e/79993/jonny-kalambay.jpg 66w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/2e0c2/jonny-kalambay.jpg 131w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/2be9e/jonny-kalambay.jpg 262w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/7d55c/jonny-kalambay.jpg 393w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/92a13/jonny-kalambay.jpg 524w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/5ba61/jonny-kalambay.jpg 2000w",
                              srcWebp: "/2019/static/07b3103716876c95cfb793afa4e0de7e/fabb6/jonny-kalambay.webp",
                              srcSetWebp: "/2019/static/07b3103716876c95cfb793afa4e0de7e/7fc16/jonny-kalambay.webp 66w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/78dfd/jonny-kalambay.webp 131w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/fabb6/jonny-kalambay.webp 262w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/b3aeb/jonny-kalambay.webp 393w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/82dd0/jonny-kalambay.webp 524w,\n/2019/static/07b3103716876c95cfb793afa4e0de7e/a4bee/jonny-kalambay.webp 2000w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "andrew-betts.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/2be9e/andrew-betts.jpg",
                              srcSet: "/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/79993/andrew-betts.jpg 66w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/2e0c2/andrew-betts.jpg 131w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/2be9e/andrew-betts.jpg 262w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/7d55c/andrew-betts.jpg 393w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/92a13/andrew-betts.jpg 524w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/ed30e/andrew-betts.jpg 1890w",
                              srcWebp: "/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/fabb6/andrew-betts.webp",
                              srcSetWebp: "/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/7fc16/andrew-betts.webp 66w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/78dfd/andrew-betts.webp 131w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/fabb6/andrew-betts.webp 262w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/b3aeb/andrew-betts.webp 393w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/82dd0/andrew-betts.webp 524w,\n/2019/static/6f500fa402f4d5a6efe24fb8497e9aa8/19351/andrew-betts.webp 1890w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "sam-bellen.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/e0cab28fc074f7a99e422b674368d9ef/2be9e/sam-bellen.jpg",
                              srcSet: "/2019/static/e0cab28fc074f7a99e422b674368d9ef/79993/sam-bellen.jpg 66w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/2e0c2/sam-bellen.jpg 131w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/2be9e/sam-bellen.jpg 262w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/7d55c/sam-bellen.jpg 393w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/92a13/sam-bellen.jpg 524w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/5ba61/sam-bellen.jpg 2000w",
                              srcWebp: "/2019/static/e0cab28fc074f7a99e422b674368d9ef/fabb6/sam-bellen.webp",
                              srcSetWebp: "/2019/static/e0cab28fc074f7a99e422b674368d9ef/7fc16/sam-bellen.webp 66w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/78dfd/sam-bellen.webp 131w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/fabb6/sam-bellen.webp 262w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/b3aeb/sam-bellen.webp 393w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/82dd0/sam-bellen.webp 524w,\n/2019/static/e0cab28fc074f7a99e422b674368d9ef/a4bee/sam-bellen.webp 2000w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "rowdy-rabouw.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/a72be6d8f097cc9530a863386c9fd6b1/2be9e/rowdy-rabouw.jpg",
                              srcSet: "/2019/static/a72be6d8f097cc9530a863386c9fd6b1/79993/rowdy-rabouw.jpg 66w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/2e0c2/rowdy-rabouw.jpg 131w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/2be9e/rowdy-rabouw.jpg 262w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/7d55c/rowdy-rabouw.jpg 393w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/92a13/rowdy-rabouw.jpg 524w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/d9fef/rowdy-rabouw.jpg 1100w",
                              srcWebp: "/2019/static/a72be6d8f097cc9530a863386c9fd6b1/fabb6/rowdy-rabouw.webp",
                              srcSetWebp: "/2019/static/a72be6d8f097cc9530a863386c9fd6b1/7fc16/rowdy-rabouw.webp 66w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/78dfd/rowdy-rabouw.webp 131w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/fabb6/rowdy-rabouw.webp 262w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/b3aeb/rowdy-rabouw.webp 393w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/82dd0/rowdy-rabouw.webp 524w,\n/2019/static/a72be6d8f097cc9530a863386c9fd6b1/b8aa2/rowdy-rabouw.webp 1100w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "dynamis.png",
                              aspectRatio: 1,
                              src: "/2019/static/f3506a3f8ab61c9eab37f2272da326ab/d2ba7/dynamis.png",
                              srcSet: "/2019/static/f3506a3f8ab61c9eab37f2272da326ab/a8fe6/dynamis.png 66w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/7d911/dynamis.png 131w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/d2ba7/dynamis.png 262w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/92e63/dynamis.png 393w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/9b23f/dynamis.png 524w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/7175a/dynamis.png 1000w",
                              srcWebp: "/2019/static/f3506a3f8ab61c9eab37f2272da326ab/fabb6/dynamis.webp",
                              srcSetWebp: "/2019/static/f3506a3f8ab61c9eab37f2272da326ab/7fc16/dynamis.webp 66w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/78dfd/dynamis.webp 131w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/fabb6/dynamis.webp 262w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/b3aeb/dynamis.webp 393w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/82dd0/dynamis.webp 524w,\n/2019/static/f3506a3f8ab61c9eab37f2272da326ab/d1836/dynamis.webp 1000w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }, {
                      childImageSharp: {
                          fluid: {
                              originalName: "satoshi-ebihara.jpg",
                              aspectRatio: 1,
                              src: "/2019/static/60f9a4cd2d393c794eacc8355fc48059/2be9e/satoshi-ebihara.jpg",
                              srcSet: "/2019/static/60f9a4cd2d393c794eacc8355fc48059/79993/satoshi-ebihara.jpg 66w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/2e0c2/satoshi-ebihara.jpg 131w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/2be9e/satoshi-ebihara.jpg 262w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/7d55c/satoshi-ebihara.jpg 393w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/92a13/satoshi-ebihara.jpg 524w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/94383/satoshi-ebihara.jpg 3000w",
                              srcWebp: "/2019/static/60f9a4cd2d393c794eacc8355fc48059/fabb6/satoshi-ebihara.webp",
                              srcSetWebp: "/2019/static/60f9a4cd2d393c794eacc8355fc48059/7fc16/satoshi-ebihara.webp 66w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/78dfd/satoshi-ebihara.webp 131w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/fabb6/satoshi-ebihara.webp 262w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/b3aeb/satoshi-ebihara.webp 393w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/82dd0/satoshi-ebihara.webp 524w,\n/2019/static/60f9a4cd2d393c794eacc8355fc48059/14d8c/satoshi-ebihara.webp 3000w",
                              sizes: "(max-width: 262px) 100vw, 262px"
                          }
                      }
                  }]
              }
          }
      }
  }
}]);
//# sourceMappingURL=component---src-pages-speakers-tsx-4e97be312400fb9cb8c7.js.map
