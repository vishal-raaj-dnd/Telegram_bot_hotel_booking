import { Context, Scenes } from 'telegraf';
import { Tenant, Guest, BookingDraft } from '@appTypes/index';

export interface MyWizardSession extends Scenes.WizardSessionData {
  // Wizard-specific state managed by telegraf
}

// Session data structure saved in Redis
export interface MySession extends Scenes.WizardSession<MyWizardSession> {
  step?: string;
  booking?: BookingDraft;
  calendarYear?: number;
  calendarMonth?: number;
}

export interface BotContext extends Context {
  // Context properties
  session: MySession;
  scene: Scenes.SceneContextScene<BotContext, MyWizardSession>;
  wizard: Scenes.WizardContextWizard<BotContext>;

  // Custom properties injected by middlewares
  tenant?: Tenant;
  guest?: Guest;
}
