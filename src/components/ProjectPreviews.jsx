import React from 'react';

export function ExperiaPreview() {
  return (
    <div className="preview-frame experia-preview">
      <div className="preview-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">experia-platform.app</div>
      </div>
      <div className="preview-body experia-body">
        <div className="mockup-hero-bar">
          <div className="mockup-title">EXPERIA</div>
          <div className="mockup-nav">
            <span>Explore</span>
            <span>Bookings</span>
            <span>Host</span>
          </div>
        </div>
        <div className="mockup-grid">
          <div className="mockup-card highlight">
            <div className="card-img-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="card-line long"></div>
            <div className="card-line short"></div>
          </div>
          <div className="mockup-card">
            <div className="card-img-placeholder">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <div className="card-line long"></div>
            <div className="card-line short"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AshaAssistPreview() {
  return (
    <div className="preview-frame asha-preview">
      <div className="preview-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">asha-assist / voice-stream</div>
      </div>
      <div className="preview-body asha-body">
        <div className="voice-status-pill">
          <span className="status-live-dot"></span>
          <span>Live Audio Session</span>
        </div>
        <div className="waveform-container">
          <span className="bar bar-1"></span>
          <span className="bar bar-2"></span>
          <span className="bar bar-3"></span>
          <span className="bar bar-4"></span>
          <span className="bar bar-5"></span>
          <span className="bar bar-6"></span>
          <span className="bar bar-7"></span>
          <span className="bar bar-8"></span>
          <span className="bar bar-5"></span>
          <span className="bar bar-3"></span>
        </div>
        <div className="voice-tech-bar">
          <span>Murf AI Synthesis</span> • <span>LiveKit Protocol</span>
        </div>
      </div>
    </div>
  );
}

export function PyroSentinelPreview() {
  return (
    <div className="preview-frame pyro-preview">
      <div className="preview-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">pyrosentinel-gis / map-layer</div>
      </div>
      <div className="preview-body pyro-body">
        <div className="map-grid-bg">
          <div className="map-line vertical v1"></div>
          <div className="map-line vertical v2"></div>
          <div className="map-line horizontal h1"></div>
          <div className="map-line horizontal h2"></div>
          
          <div className="map-pin pin-1">
            <span className="pin-pulse"></span>
            <span className="pin-core"></span>
          </div>
          <div className="map-pin pin-2">
            <span className="pin-core secondary"></span>
          </div>

          <div className="map-coords">
            17.3850° N, 78.4867° E
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustrialPreview() {
  return (
    <div className="preview-frame industrial-preview">
      <div className="preview-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">industrial-intel / telemetry</div>
      </div>
      <div className="preview-body industrial-body">
        <div className="metrics-row">
          <div className="metric-box">
            <span className="metric-lbl">Efficiency</span>
            <span className="metric-val">98.4%</span>
          </div>
          <div className="metric-box">
            <span className="metric-lbl">Status</span>
            <span className="metric-val active">Optimal</span>
          </div>
        </div>
        <div className="graph-mockup">
          <svg viewBox="0 0 200 40" className="chart-svg">
            <path 
              d="M0 30 Q 30 10, 60 25 T 120 15 T 180 28 L 200 20" 
              fill="none" 
              stroke="#527873" 
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export function BugTracePreview() {
  return (
    <div className="preview-frame bugtrace-preview">
      <div className="preview-header">
        <div className="window-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="window-title">bugtrace / diagnostic-logs</div>
      </div>
      <div className="preview-body bugtrace-body">
        <div className="table-row head">
          <span>ID</span>
          <span>Issue Title</span>
          <span>Severity</span>
        </div>
        <div className="table-row">
          <span className="tag-id">#104</span>
          <span className="issue-text">Null pointer in auth controller</span>
          <span className="badge-sev high">High</span>
        </div>
        <div className="table-row">
          <span className="tag-id">#103</span>
          <span className="issue-text">CSS layout overlap on mobile</span>
          <span className="badge-sev med">Medium</span>
        </div>
      </div>
    </div>
  );
}
