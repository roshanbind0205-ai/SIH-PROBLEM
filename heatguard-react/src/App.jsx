import React, { useEffect } from "react";
import IntroScreen from "./components/IntroScreen";
import Auth from "./components/Auth";
import MoreMenu from "./components/MoreMenu";
import Home from "./components/Home";
import Location from "./components/Location";
import HeatGuardAI from "./components/HeatGuardAI";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";
import Modal from "./components/Modal";
import { legacyScripts } from "./legacyScripts";

export default function App() {
  useEffect(() => {
    // The original HTML app uses global functions and DOM ids.
    // They are executed after React has mounted the same DOM structure.
    legacyScripts.forEach((code) => {
      try {
        window.eval(code);
      } catch (error) {
        console.error("HeatGuard legacy script error:", error);
      }
    });

    // Original code waits for DOMContentLoaded. React mounted after that event,
    // so dispatch it once after all original scripts have been registered.
    document.dispatchEvent(new Event("DOMContentLoaded"));
  }, []);

  return (
    <>
      <IntroScreen />
      <Auth />
      <div id="appScreen" className="screen">
        <MoreMenu />
        <main>
          <Home />
          <Location />
          <HeatGuardAI />
          <Profile />
        </main>
        <div id="editProfileModal" className="hg-edit-modal" aria-hidden="true">
          <div className="hg-edit-backdrop" onClick={() => window.closeEditProfile?.()}></div>
          <div className="hg-edit-dialog" role="dialog" aria-modal="true" aria-labelledby="editProfileTitle">
            <div className="hg-edit-head">
              <div>
                <h3 id="editProfileTitle">✏️ Edit Profile</h3>
                <p>Update your details and emergency contacts</p>
              </div>
              <button type="button" className="hg-edit-close" onClick={() => window.closeEditProfile?.()} aria-label="Close">×</button>
            </div>
            <div className="hg-edit-fields">
              <label><span>👤 Name</span><input id="editProfileName" type="text" autoComplete="name" placeholder="Enter your name" /></label>
              <label><span>👨‍👩‍👦 Parents / Guardian No.</span><input id="editParentPhone" type="tel" inputMode="numeric" maxLength="10" autoComplete="tel" placeholder="10-digit mobile number" /></label>
              <label><span>👥 Friend No.</span><input id="editFriendPhone" type="tel" inputMode="numeric" maxLength="10" autoComplete="tel" placeholder="10-digit mobile number" /></label>
            </div>
            <div className="hg-edit-actions">
              <button type="button" className="hg-edit-cancel" onClick={() => window.closeEditProfile?.()}>Cancel</button>
              <button type="button" className="hg-edit-save" onClick={() => window.saveEditProfile?.()}>💾 Save</button>
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
      <div id="modalOverlay" className="modal-overlay">
        <div className="modal-box">
          <button className="close-modal" onClick={() => window.closeModal?.()}>×</button>
          <div id="modalContent"></div>
        </div>
      </div>
    </>
  );
}
