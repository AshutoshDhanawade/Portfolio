/**
 * FanCrew — Interactive Product Architecture Canvas
 * ---------------------------------------------------
 * Data-driven. Edit the ARCH object below to change nodes,
 * flows, connections and copy. The component stays read-only
 * for the two render modes:
 *   · canvas — desktop pan/zoom/hover system map
 *   · static — tablet/mobile vertical transformation
 *
 * React port: exposes initFanCrewArch(canvasEl) which renders
 * into the passed element and returns a cleanup function.
 */
export function initFanCrewArch(canvasHost) {
    'use strict';

    var ARCH = {
        width: 6100,
        height: 600,
        flows: {
            creator:   { title: 'CREATOR FLOW',        quote: '\u201CI need someone for my project.\u201D',         x: 76,  y: 60 },
            crew:      { title: 'CREW FLOW',           quote: '\u201CI\u2019m looking for the right project.\u201D', x: 76,  y: 360 },
            shared:    { title: 'SHARED PROJECT',      quote: '\u201CWhere both experiences converge.\u201D',       x: 3100, y: 150 },
            workspace: { title: 'PROJECT WORKSPACE',   quote: '\u201CWhere the actual work gets done.\u201D', x: 3400, y: 150 }
        },
        zone: { market: 'Marketplace' },
        nodes: [
            /* ---------- Creator flow (Y=160) ---------- */
            { id: 'c-onboard', label: 'Creator Onboarding', cat: 'creator', level: 2, x: 80, y: 160, desc: 'Entry point for Creators \u2014 account, identity and intent are captured up front.' },
            { id: 'c-profile', label: 'Creator Profile', cat: 'creator', level: 2, x: 330, y: 160, desc: 'The public Creator identity collaborators will see.' },
            { id: 'c-dashboard', label: 'Dashboard', cat: 'creator', level: 2, x: 580, y: 160, desc: 'Home base for managing projects, hiring and payments.' },
            { id: 'c-discover', label: 'Discover Crew', cat: 'creator', level: 2, x: 830, y: 160, desc: 'Browse and filter Crew members by craft, availability and rating.' },
            { id: 'c-crewprofile', label: 'Crew Profile', cat: 'creator', level: 2, x: 1080, y: 160, desc: 'Evaluate a Crew member before opening a conversation.' },
            { id: 'c-post', label: 'Post Project', cat: 'creator', level: 2, x: 1330, y: 160, desc: 'Creator defines the brief, requirements, budget and timeline.' },
            { id: 'c-review', label: 'Review Project', cat: 'creator', level: 2, x: 1580, y: 160, desc: 'Check the brief, scope and budget before publishing.' },
            { id: 'c-payment', label: 'Payment', cat: 'creator', level: 2, x: 1830, y: 160, desc: 'Funding is set up before the project goes live.' },
            { id: 'c-published', label: 'Project Published', cat: 'creator', level: 2, x: 2080, y: 160, desc: 'The brief goes live \u2014 Crew members can now view and apply.' },
            { id: 'c-apps', label: 'Applications', cat: 'creator', level: 2, x: 2330, y: 160, desc: 'Creator reviews Crew members, evaluates portfolios and shortlists candidates.' },
            { id: 'c-shortlist', label: 'Shortlist', cat: 'creator', level: 2, x: 2580, y: 160, desc: 'Compare the strongest candidates side by side.' },
            { id: 'c-hire', label: 'Hire', cat: 'creator', level: 2, x: 2830, y: 160, desc: 'The conversation becomes a commitment \u2014 and a shared project.' },

            /* ---------- Crew flow (Y=460) ---------- */
            { id: 'k-onboard', label: 'Crew Onboarding', cat: 'crew', level: 2, x: 80, y: 460, desc: 'Entry point for Crew \u2014 portfolio, skills and availability.' },
            { id: 'k-profile', label: 'Crew Profile', cat: 'crew', level: 2, x: 424, y: 460, desc: 'The portfolio Creators evaluate when shortlisting.' },
            { id: 'k-dashboard', label: 'Dashboard', cat: 'crew', level: 2, x: 768, y: 460, desc: 'Work in motion \u2014 applications, projects and earnings.' },
            { id: 'k-discover', label: 'Discover Projects', cat: 'crew', level: 2, x: 1111, y: 460, desc: 'Browse open briefs that match craft, timeline and budget.' },
            { id: 'k-details', label: 'Project Details', cat: 'crew', level: 2, x: 1455, y: 460, desc: 'Read the full brief and requirements before applying.' },
            { id: 'k-apply', label: 'Apply', cat: 'crew', level: 2, x: 1799, y: 460, desc: 'Submit a tailored proposal against the brief.' },
            { id: 'k-status', label: 'Application Status', cat: 'crew', level: 2, x: 2143, y: 460, desc: 'Follow the application \u2014 received, viewed or shortlisted.' },
            { id: 'k-shortlisted', label: 'Shortlisted', cat: 'crew', level: 2, x: 2486, y: 460, desc: 'The Creator singled out your work for review.' },
            { id: 'k-hired', label: 'Hired', cat: 'crew', level: 2, x: 2830, y: 460, desc: 'Accepting the work opens the shared project workspace.' },

            /* ---------- Shared project (Convergence) Y=310 ---------- */
            { id: 's-project', label: 'Shared Project', cat: 'shared', level: 1, x: 3130, y: 310, stacked: true, sub: 'where both experiences converge', desc: 'Where both journeys converge \u2014 a single source of truth for communication, files, deliverables and revisions.' },

            /* ---------- Project workspace (Y=310) ---------- */
            { id: 'w-workspace', label: 'Project Workspace', cat: 'workspace', level: 2, x: 3430, y: 310, desc: 'Shared environment where Creator and Crew manage one project together.' },
            { id: 'w-overview', label: 'Overview', cat: 'workspace', level: 2, x: 3680, y: 310, desc: 'Project summary, status and next actions at a glance.' },
            { id: 'w-req', label: 'Requirements', cat: 'workspace', level: 2, x: 3930, y: 310, desc: 'Brief, scope and acceptance criteria, always accessible.' },
            { id: 'w-timeline', label: 'Timeline', cat: 'workspace', level: 2, x: 4180, y: 310, desc: 'Milestones, deadlines and dependencies.' },
            { id: 'w-chat', label: 'Chat', cat: 'workspace', level: 2, x: 4430, y: 310, desc: 'Day-to-day conversation between Creator and Crew.' },
            { id: 'w-files', label: 'Files', cat: 'workspace', level: 2, x: 4680, y: 310, desc: 'References, drafts and assets in one place.' },
            { id: 'w-del', label: 'Deliverables', cat: 'workspace', level: 2, x: 4930, y: 310, desc: 'Work gets submitted against the brief.' },
            { id: 'w-review', label: 'Review', cat: 'workspace', level: 2, x: 5180, y: 310, desc: 'Creator evaluates the deliverable against requirements.' },
            { id: 'w-revise', label: 'Revision', cat: 'workspace', level: 2, x: 5430, y: 310, desc: 'Iterate until the deliverable is approved.' },
            { id: 'w-approve', label: 'Approval', cat: 'workspace', level: 2, x: 5680, y: 310, desc: 'The deliverable is accepted and the milestone closes.' },
            { id: 'w-complete', label: 'Completion', cat: 'workspace', level: 2, x: 5930, y: 310, desc: 'Funds are released and the project is completed.' }
        ],
        edges: [
            ['c-onboard', 'c-profile'], ['c-profile', 'c-dashboard'],
            ['c-dashboard', 'c-discover'], ['c-discover', 'c-crewprofile'],
            ['c-crewprofile', 'c-post'], ['c-post', 'c-review'],
            ['c-review', 'c-payment'], ['c-payment', 'c-published'],
            ['c-published', 'c-apps'], ['c-apps', 'c-shortlist'],
            ['c-shortlist', 'c-hire'], ['c-hire', 's-project'],

            ['k-onboard', 'k-profile'], ['k-profile', 'k-dashboard'],
            ['k-dashboard', 'k-discover'], ['k-discover', 'k-details'],
            ['k-details', 'k-apply'], ['k-apply', 'k-status'],
            ['k-status', 'k-shortlisted'], ['k-shortlisted', 'k-hired'],
            ['k-hired', 's-project'],

            ['s-project', 'w-workspace'],
            ['w-workspace', 'w-overview'], ['w-overview', 'w-req'], ['w-req', 'w-timeline'],
            ['w-timeline', 'w-chat'], ['w-chat', 'w-files'], ['w-files', 'w-del'],
            ['w-del', 'w-review'], ['w-review', 'w-revise'], ['w-revise', 'w-approve'],
            ['w-approve', 'w-complete']
        ],
        steps: {
            creator: ['c-onboard', 'c-profile', 'c-dashboard', 'c-discover', 'c-crewprofile',
                      'c-post', 'c-review', 'c-payment', 'c-published', 'c-apps', 'c-shortlist', 'c-hire'],
            crew: ['k-onboard', 'k-profile', 'k-dashboard', 'k-discover', 'k-details',
                   'k-apply', 'k-status', 'k-shortlisted', 'k-hired'],
            shared: ['s-project', 'w-workspace', 'w-overview', 'w-req', 'w-timeline', 'w-chat',
                     'w-files', 'w-del', 'w-review', 'w-revise', 'w-approve', 'w-complete']
        }
    };

    var MIN_SCALE = 0.4;
    var MAX_SCALE = 1.8;
    var INIT_FIT_X = 1360;

    var canvasEl = canvasHost;
    var vp, stage, tip, svg;
    var nodeEls = [], edgesEls = [], nodeMap = {};
    var edgeMap = {};      // nodeId -> [edgeIndex...]
    var tx = 0, ty = 0, scale = 1;
    var dragging = false, moved = false, dragStart = null;
    var pointers = {}, pinchDist = 0;
    var mq = window.matchMedia ? window.matchMedia('(min-width: 1025px)') : null;

    /* ---------- helpers ---------- */

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text !== undefined && text !== null) n.textContent = text;
        return n;
    }

    function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

    function dist(p1, p2) { return Math.hypot(p1.x - p2.x, p1.y - p2.y); }

    function nodeById(id) {
        for (var i = 0; i < ARCH.nodes.length; i++) {
            if (ARCH.nodes[i].id === id) return ARCH.nodes[i];
        }
        return null;
    }

    function edgeKind(a, b) {
        var ca = nodeById(a).cat, cb = nodeById(b).cat;
        if ((a === 'c-hire' && b === 's-project') || (a === 'k-hired' && b === 's-project')) return 'converge';
        if (ca === 'shared' || cb === 'shared' || ca === 'workspace' || cb === 'workspace') return 'shared';
        return ca;
    }

    /* ---------- canvas mode ---------- */

    function buildCanvas() {
        vp = el('div', 'fc-arch-viewport');
        vp.setAttribute('aria-label', 'Interactive product architecture canvas');

        stage = el('div', 'fc-arch-stage');
        stage.style.width = ARCH.width + 'px';
        stage.style.height = ARCH.height + 'px';

        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'fc-arch-edges');
        svg.setAttribute('width', ARCH.width);
        svg.setAttribute('height', ARCH.height);
        svg.setAttribute('viewBox', '0 0 ' + ARCH.width + ' ' + ARCH.height);
        svg.setAttribute('aria-hidden', 'true');
        stage.appendChild(svg);

        nodeEls = [];
        nodeMap = {};
        ARCH.nodes.forEach(function (n) {
            var node = el('div', 'fc-arch-node');
            node.className = 'fc-arch-node fc-arch-node--' + n.cat +
                (n.level === 1 ? ' fc-arch-node--lv1' : '') +
                (n.stacked ? ' fc-arch-node--stacked' : '');
            node.setAttribute('tabindex', '0');
            node.setAttribute('role', 'button');
            node.setAttribute('aria-label', n.label + (n.desc ? '. ' + n.desc : ''));
            node.dataset.id = n.id;
            node.dataset.x = n.x;
            node.dataset.y = n.y;

            if (n.stacked) {
                var labelLine = el('span', 'fc-arch-node-label');
                labelLine.appendChild(el('span', 'fc-arch-dot'));
                labelLine.appendChild(el('span', 'fc-arch-node-label-text', n.label));
                node.appendChild(labelLine);
                node.appendChild(el('span', 'fc-arch-node-sub', n.sub));
            } else {
                node.appendChild(el('span', 'fc-arch-dot'));
                node.appendChild(el('span', 'fc-arch-node-label-text', n.label));
            }

            stage.appendChild(node);
            nodeEls.push(node);
            nodeMap[n.id] = node;
        });

        var zoneTag = el('span', 'fc-arch-zonetag', ARCH.zone.market);
        zoneTag.style.left = '300px';
        zoneTag.style.top = '18px';
        stage.appendChild(zoneTag);

        Object.keys(ARCH.flows).forEach(function (key) {
            var f = ARCH.flows[key];
            var wrap = el('div', 'fc-arch-flow');
            wrap.setAttribute('data-flow', key);
            wrap.style.left = f.x + 'px';
            wrap.style.top = f.y + 'px';
            wrap.appendChild(el('span', 'fc-arch-flow-title', f.title));
            wrap.appendChild(el('span', 'fc-arch-flow-quote', f.quote));
            stage.appendChild(wrap);
        });

        vp.appendChild(stage);
        canvasEl.appendChild(vp);

        /* measure + position nodes, then draw edges */
        ARCH.nodes.forEach(function (n) {
            var nodeEl_ = nodeMap[n.id];
            nodeEl_.style.left = n.x + 'px';
            nodeEl_.style.top = n.y + 'px';
        });

        edgesEls = [];
        var edgeIndex = 0;
        ARCH.edges.forEach(function (pair) {
            var a = nodeMap[pair[0]];
            var b = nodeMap[pair[1]];
            if (!a || !b) return;
            var ax = a.offsetWidth / 2, ay = a.offsetHeight / 2;
            var bx = b.offsetWidth / 2, by = b.offsetHeight / 2;
            var axx = +a.dataset.x + ax, ayy = +a.dataset.y + ay;
            var bxx = +b.dataset.x + bx, byy = +b.dataset.y + by;
            var kind = edgeKind(pair[0], pair[1]);
            var line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', axx);
            line.setAttribute('y1', ayy);
            line.setAttribute('x2', bxx);
            line.setAttribute('y2', byy);
            line.setAttribute('class', 'fc-arch-edge fc-arch-edge--' + kind);
            line.dataset.a = pair[0];
            line.dataset.b = pair[1];
            svg.appendChild(line);
            edgesEls.push(line);
            (edgeMap[pair[0]] = edgeMap[pair[0]] || []).push(edgeIndex);
            (edgeMap[pair[1]] = edgeMap[pair[1]] || []).push(edgeIndex);
            edgeIndex++;
        });

        tip = el('div', 'fc-arch-tip');
        tip.setAttribute('role', 'tooltip');
        vp.appendChild(tip);

        var hint = el('span', 'fc-arch-hint', 'Drag to explore \u00B7 Scroll to zoom \u00B7 Hover nodes for context');
        vp.appendChild(hint);

        var zoom = el('div', 'fc-arch-zoom');
        zoom.appendChild(btn('-', 'out', 'Zoom out'));
        zoom.appendChild(btn('\u2302', 'reset', 'Reset view'));
        zoom.appendChild(btn('+', 'in', 'Zoom in'));
        vp.appendChild(zoom);
    }

    function btn(label, action, aria) {
        var b = el('button', null, label);
        b.type = 'button';
        b.dataset.zoom = action;
        b.setAttribute('aria-label', aria);
        return b;
    }

    function layout() {
        if (!stage) return;
        ARCH.nodes.forEach(function (n) {
            var nodeEl_ = nodeMap[n.id];
            nodeEl_.style.left = n.x + 'px';
            nodeEl_.style.top = n.y + 'px';
        });
        edgesEls.forEach(function (line) {
            var a = nodeMap[line.dataset.a];
            var b = nodeMap[line.dataset.b];
            if (!a || !b) return;
            line.setAttribute('x1', (+a.dataset.x + a.offsetWidth / 2));
            line.setAttribute('y1', (+a.dataset.y + a.offsetHeight / 2));
            line.setAttribute('x2', (+b.dataset.x + b.offsetWidth / 2));
            line.setAttribute('y2', (+b.dataset.y + b.offsetHeight / 2));
        });
    }

    function vpRect() {
        return vp.getBoundingClientRect();
    }

    function applyTransform() {
        stage.style.transform = 'translate(' + tx + 'px, ' + ty + 'px) scale(' + scale + ')';
    }

    function clampView() {
        var w = vp.clientWidth || containerWidth();
        var h = vp.clientHeight || 600;
        var cw = ARCH.width * scale;
        var ch = ARCH.height * scale;

        var loX = Math.min((w - cw) / 2, w - cw - 16);
        var hiX = Math.max((w - cw) / 2, 16);
        var loY = Math.min((h - ch) / 2, h - ch - 16);
        var hiY = Math.max((h - ch) / 2, 16);
        tx = clamp(tx, loX, hiX);
        ty = clamp(ty, loY, hiY);
    }

    function containerWidth() {
        return canvasEl ? canvasEl.clientWidth : 1000;
    }

    function fit() {
        var w = vp.clientWidth || containerWidth();
        scale = clamp(w / INIT_FIT_X, 0.5, 1);
        tx = 16;
        ty = 16;
        clampView();
        applyTransform();
    }

    function zoomAt(cx, cy, factor) {
        var next = clamp(scale * factor, MIN_SCALE, MAX_SCALE);
        var k = next / scale;
        tx = cx - (cx - tx) * k;
        ty = cy - (cy - ty) * k;
        scale = next;
        clampView();
        applyTransform();
    }

    function bindCanvasEvents() {
        vp.addEventListener('wheel', function (e) {
            e.preventDefault();
            var r = vpRect();
            var factor = e.deltaY < 0 ? 1.12 : 0.893;
            zoomAt(e.clientX - r.left, e.clientY - r.top, factor);
        }, { passive: false });

        vp.addEventListener('click', function (e) {
            var t = e.target.closest('[data-zoom]');
            if (!t) return;
            if (t.dataset.zoom === 'reset') { fit(); return; }
            var r = vpRect();
            zoomAt(r.width / 2, r.height / 2, t.dataset.zoom === 'in' ? 1.3 : 0.77);
        });

        vp.addEventListener('pointerdown', function (e) {
            vp.setPointerCapture(e.pointerId);
            pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
            var count = Object.keys(pointers).length;
            if (count === 1) {
                dragging = true;
                moved = false;
                dragStart = { x: e.clientX, y: e.clientY, tx: tx, ty: ty };
                vp.classList.add('is-dragging');
            } else if (count === 2) {
                dragging = false;
                vp.classList.remove('is-dragging');
                var keys = Object.keys(pointers);
                pinchDist = dist(pointers[keys[0]], pointers[keys[1]]);
            }
        });

        vp.addEventListener('pointermove', function (e) {
            if (!(e.pointerId in pointers)) return;
            var keys = Object.keys(pointers);
            if (keys.length === 2) {
                pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
                var d = dist(pointers[keys[0]], pointers[keys[1]]);
                if (pinchDist > 0) {
                    var r = vpRect();
                    var mx = (pointers[keys[0]].x + pointers[keys[1]].x) / 2;
                    var my = (pointers[keys[0]].y + pointers[keys[1]].y) / 2;
                    zoomAt(mx - r.left, my - r.top, d / pinchDist);
                }
                pinchDist = d;
                return;
            }
            pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
            if (dragging && dragStart) {
                var dx = e.clientX - dragStart.x;
                var dy = e.clientY - dragStart.y;
                if (!moved && (Math.abs(dx) + Math.abs(dy)) > 3) moved = true;
                if (moved) {
                    tx = dragStart.tx + dx / scale;
                    ty = dragStart.ty + dy / scale;
                    clampView();
                    applyTransform();
                }
            }
        });

        function endPointer(e) {
            delete pointers[e.pointerId];
            if (Object.keys(pointers).length < 2) pinchDist = 0;
            dragging = false;
            moved = false;
            dragStart = null;
            vp.classList.remove('is-dragging');
        }
        vp.addEventListener('pointerup', endPointer);
        vp.addEventListener('pointercancel', endPointer);

        /* hover / focus highlighting */
        vp.addEventListener('mouseover', function (e) {
            var n = e.target.closest('.fc-arch-node');
            if (n) activate(n.dataset.id);
        });
        vp.addEventListener('mouseleave', function () { clearActive(); });

        vp.addEventListener('focusin', function (e) {
            var n = e.target.closest('.fc-arch-node');
            if (n) activate(n.dataset.id);
        });
        vp.addEventListener('focusout', function () { clearActive(); });
    }

    function activate(id) {
        var active = edgeMap[id] || [];
        var activeSet = {};
        active.forEach(function (i) { activeSet[i] = true; });

        nodeEls.forEach(function (n) {
            if (n.dataset.id === id) return;
            var connected = active.some(function (i) {
                var edgeEl_ = edgesEls[i];
                return edgeEl_ && (edgeEl_.dataset.a === n.dataset.id || edgeEl_.dataset.b === n.dataset.id);
            });
            n.classList.toggle('is-dim', !connected);
        });

        edgesEls.forEach(function (e2, i) {
            e2.classList.toggle('is-active', !!activeSet[i]);
            e2.classList.toggle('is-dim', !activeSet[i]);
        });

        var node = nodeById(id);
        if (node && node.desc) showTip(node, nodeMap[id]);
        else hideTip();
    }

    function clearActive() {
        nodeEls.forEach(function (n) { n.classList.remove('is-dim'); });
        edgesEls.forEach(function (e2) {
            e2.classList.remove('is-active');
            e2.classList.remove('is-dim');
        });
        hideTip();
    }

    function showTip(node, nodeEl_) {
        tip.textContent = node.desc;
        tip.classList.add('is-open');
        var vr = vpRect();
        var nr = nodeEl_.getBoundingClientRect();
        var tw = tip.offsetWidth, th = tip.offsetHeight;
        var x = nr.left - vr.left + nr.width / 2 - tw / 2;
        var y = nr.top - vr.top - th - 12;
        x = clamp(x, 8, vr.width - tw - 8);
        y = Math.max(8, y);
        tip.style.left = x + 'px';
        tip.style.top = y + 'px';
    }

    function hideTip() {
        tip.classList.remove('is-open');
    }

    /* ---------- static mode (tablet / mobile) ---------- */

    function staticStep(node, isTotal) {
        var li = el('li', 'fc-arch-static-step' + (isTotal ? ' fc-arch-static-step--total' : ''));
        if (isTotal) {
            var name = el('span', 'fc-arch-step-name');
            name.appendChild(el('span', 'fc-arch-dot'));
            name.appendChild(el('span', 'fc-arch-step-name-text', node.label));
            li.appendChild(name);
            if (node.sub) li.appendChild(el('span', 'fc-arch-static-step-sub', node.sub));
        } else {
            li.appendChild(el('span', 'fc-arch-dot'));
            li.appendChild(el('span', 'fc-arch-step-name-text', node.label));
        }
        return li;
    }

    function staticSteps(flowId) {
        var ol = el('ol', 'fc-arch-static-steps');
        ol.setAttribute('data-flow', flowId);
        (flowId === 'shared' ? ARCH.steps.shared : ARCH.steps[flowId]).forEach(function (id, i) {
            ol.appendChild(staticStep(nodeById(id), flowId === 'shared' && i === 0));
        });
        return ol;
    }

    function flowHead(flowId) {
        var head = el('div', 'fc-arch-static-head');
        head.setAttribute('data-flow', flowId);
        head.appendChild(el('span', 'fc-arch-static-title', ARCH.flows[flowId].title));
        head.appendChild(el('span', 'fc-arch-static-quote', ARCH.flows[flowId].quote));
        return head;
    }

    function buildStatic() {
        var wrap = el('div', 'fc-arch-static');
        var grid = el('div', 'fc-arch-static-grid');

        ['creator', 'crew'].forEach(function (flowId) {
            var col = el('div', 'fc-arch-static-col');
            col.appendChild(flowHead(flowId));
            col.appendChild(staticSteps(flowId));
            grid.appendChild(col);
        });

        var meet = el('div', 'fc-arch-static-meet');
        meet.appendChild(flowHead('shared'));
        meet.appendChild(staticSteps('shared'));
        grid.appendChild(meet);

        wrap.appendChild(grid);

        var note = el('p', 'fc-arch-static-note');
        note.textContent = 'Creator and Crew enter from different sides \u2014 together they build one shared project.';
        wrap.appendChild(note);

        canvasEl.appendChild(wrap);
    }

    /* ---------- boot ---------- */

    function render() {
        if (!canvasEl) return;
        if (mq && mq.matches) {
            buildCanvas();
            bindCanvasEvents();
            layout();
            fit();
        } else {
            buildStatic();
        }
    }

    function clearCanvas() {
        if (!canvasEl) return;
        canvasEl.innerHTML = '';
        nodeEls = [];
        edgesEls = [];
        nodeMap = {};
        edgeMap = {};
        vp = null;
        stage = null;
        tip = null;
    }

    var resizeTimer = null;
    function onResize() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            if (stage && vp && mq && mq.matches) {
                layout();
                fit();
            }
        }, 150);
    }

    function onMqChange() {
        clearCanvas();
        render();
    }

    function boot() {
        if (!canvasEl) return;

        mq = window.matchMedia('(min-width: 1025px)');
        render();

        if (mq.addEventListener) mq.addEventListener('change', onMqChange);
        else if (mq.addListener) mq.addListener(onMqChange);

        window.addEventListener('resize', onResize);

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(function () {
                if (stage && vp && mq.matches) layout();
            });
        }
    }

    boot();

    return function cleanup() {
        window.removeEventListener('resize', onResize);
        if (mq) {
            if (mq.removeEventListener) mq.removeEventListener('change', onMqChange);
            else if (mq.removeListener) mq.removeListener(onMqChange);
        }
        clearCanvas();
    };
}