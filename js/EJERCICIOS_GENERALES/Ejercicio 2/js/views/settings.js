export function settingsView() {

    return `

        <section class="content">

            <div class="title-section">
                <h1>Settings</h1>
                <p>Manage your account preferences and configuration.</p>
            </div>

            <!-- SETTINGS GRID -->
            <div class="settings-grid">

                <!-- PROFILE -->
                <div class="settings-card">

                    <h3 class="settings-title">
                        <i class="fa-solid fa-user"></i>
                        Profile
                    </h3>

                    <div class="settings-field">
                        <label>Full Name</label>
                        <input type="text" value="Alejandro Obando" placeholder="Full Name">
                    </div>

                    <div class="settings-field">
                        <label>Email</label>
                        <input type="email" value="alejo@correo.com" placeholder="Email">
                    </div>

                    <div class="settings-field">
                        <label>Role</label>
                        <input type="text" value="Administrator" placeholder="Role" disabled>
                    </div>

                    <button class="settings-btn">Save Changes</button>

                </div>

                <!-- SECURITY -->
                <div class="settings-card">

                    <h3 class="settings-title">
                        <i class="fa-solid fa-lock"></i>
                        Security
                    </h3>

                    <div class="settings-field">
                        <label>Current Password</label>
                        <input type="password" placeholder="••••••••••">
                    </div>

                    <div class="settings-field">
                        <label>New Password</label>
                        <input type="password" placeholder="••••••••••">
                    </div>

                    <div class="settings-field">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="••••••••••">
                    </div>

                    <button class="settings-btn">Update Password</button>

                </div>

                <!-- PREFERENCES -->
                <div class="settings-card">

                    <h3 class="settings-title">
                        <i class="fa-solid fa-sliders"></i>
                        Preferences
                    </h3>

                    <div class="settings-toggle-row">
                        <div>
                            <p class="toggle-label">Email Notifications</p>
                            <p class="toggle-sub">Receive weekly reports by email</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-track"></span>
                        </label>
                    </div>

                    <div class="settings-toggle-row">
                        <div>
                            <p class="toggle-label">Two-Factor Auth</p>
                            <p class="toggle-sub">Add an extra layer of security</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox">
                            <span class="toggle-track"></span>
                        </label>
                    </div>

                    <div class="settings-toggle-row">
                        <div>
                            <p class="toggle-label">Activity Log</p>
                            <p class="toggle-sub">Track all account actions</p>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" checked>
                            <span class="toggle-track"></span>
                        </label>
                    </div>

                </div>

                <!-- DANGER ZONE -->
                <div class="settings-card danger-card">

                    <h3 class="settings-title danger-title">
                        <i class="fa-solid fa-triangle-exclamation"></i>
                        Danger Zone
                    </h3>

                    <p class="danger-text">
                        These actions are irreversible. Please proceed with caution.
                    </p>

                    <div class="danger-actions">
                        <button class="btn-outline-danger">Deactivate Account</button>
                        <button class="btn-danger">Delete Account</button>
                    </div>

                </div>

            </div>

        </section>

    `;

}