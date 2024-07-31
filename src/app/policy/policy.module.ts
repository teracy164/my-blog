import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolicyModuleRoutingModule } from './policy-routing.module';
import { PrivacyPolicyModule } from './privacy-policy.module';

@NgModule({
    imports: [CommonModule, PolicyModuleRoutingModule, PrivacyPolicyModule],
})
export class PolicyModule {}
